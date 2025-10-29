import { NextResponse } from 'next/server';
import { sendMail, formatKeyValueTable, plainTextSummary } from '../../../lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    if(!body.name || !body.email){
      return NextResponse.json({ message: 'Name and Email required.' }, { status: 400 });
    }
    // Fix email regex (removed stray caret) & validate
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)){
      return NextResponse.json({ message: 'Invalid email.' }, { status: 400 });
    }

    // Normalise retreat type / interests
    const retreatType = body.retreatType || (Array.isArray(body.interests) && body.interests[0]) || '';
    const retreatTypeLabel = body.retreatTypeLabel || (Array.isArray(body.interestsReadable) && body.interestsReadable[0]) || '';

    // Services / requirements normalisation.
    // Possible incoming keys: services (array of values), servicesReadable (array of labels),
    // servicesRequestedArray, servicesRequestedString, requirements (string), requirementsArray.
    let servicesArray = [];
    if (Array.isArray(body.services) && body.services.length) servicesArray = body.services;
    else if (Array.isArray(body.servicesRequestedArray) && body.servicesRequestedArray.length) servicesArray = body.servicesRequestedArray;
    else if (Array.isArray(body.servicesReadable) && body.servicesReadable.length) servicesArray = body.servicesReadable; // already labels

    // If only a comma string provided
    if (!servicesArray.length && typeof body.servicesRequestedString === 'string' && body.servicesRequestedString.trim()) {
      servicesArray = body.servicesRequestedString.split(/\s*,\s*/).filter(Boolean);
    }
    if (!servicesArray.length && typeof body.requirements === 'string' && body.requirements.trim()) {
      servicesArray = body.requirements.split(/\s*,\s*/).filter(Boolean);
    }

    // Derive a readable string
    const servicesReadable = Array.isArray(body.servicesReadable) && body.servicesReadable.length
      ? body.servicesReadable
      : servicesArray;

    // Speakers related fields (retain only form key names)
    const provideSpeakers = body.provideSpeakers || '';
    const speakersTopics = body.speakersTopics || body.speakerTopics || '';

    // Build clean record ONLY with original form field names (no duplicates)
    const record = {
      fullName: body.fullName || body.name || '',
      email: body.email,
      phone: body.phone || '',
      retreatType: retreatType,
      retreatTypeLabel: retreatTypeLabel,
      groupSize: body.groupSize || body.participants || '',
      themeIntentions: body.themeIntentions || body.theme || '',
      servicesReadable, // array supplied by form / computed
      provideSpeakers,
      speakersTopics,
      notes: body.notes || body.additionalNotes || '',
      submittedAt: new Date().toISOString()
    };
    // Subject uses the full name
    const adminSubject = `Retreat Interest: ${record.fullName}`;
    const userSubject = 'We received your retreat interest – House of Andalus';
    const tableHtml = formatKeyValueTable(record);
    const plainSummary = plainTextSummary(record);

    await Promise.all([
      sendMail({
        to: process.env.RETREAT_NOTIFY_TO || process.env.EMAIL_USER,
        subject: adminSubject,
        text: `New Retreat / Custom Interest Submission\n\n${plainSummary}`,
        html: `<h2 style='font-family:Arial'>Retreat / Custom Interest Submission</h2>${tableHtml}`
      }),
      sendMail({
        to: record.email,
        subject: userSubject,
        text: `Dear ${record.fullName},\n\nThank you for sharing your retreat vision and interests. We have received your details and will respond soon.\n\n${plainSummary}\n\nHouse of Andalus`,
        html: `<p style='font-family:Arial'>Dear ${record.fullName},</p><p style='font-family:Arial'>Thank you for your interest in organising a retreat. We have received the details below.</p>${tableHtml}<p style='font-family:Arial'>We will be in touch soon.<br/>House of Andalus</p>`
      })
    ]);

    return NextResponse.json({ ok:true, received: { name: record.name, submittedAt: record.submittedAt } });
  } catch (e) {
    console.error('retreat-interest error', e); // eslint-disable-line no-console
    return NextResponse.json({ message:'Server error.' }, { status: 500 });
  }
}

export function GET(){
  return NextResponse.json({ message: 'POST a retreat interest submission to this endpoint.' });
}
