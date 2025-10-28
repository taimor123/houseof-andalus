import { NextResponse } from 'next/server';
import { sendMail, formatKeyValueTable, plainTextSummary } from '../../../lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    if(!body.name || !body.email){
      return NextResponse.json({ message: 'Name and Email required.' }, { status: 400 });
    }
    if(!/^[^\s@]+@[^^\s@]+\.[^\s@]+$/.test(body.email)){
      return NextResponse.json({ message: 'Invalid email.' }, { status: 400 });
    }
    const record = {
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      interests: body.interests || [],
      participants: body.participants || '',
      theme: body.theme || '',
      requirements: body.requirements || '',
      foodPreferences: body.foodPreferences || '',
      notes: body.notes || '',
      submittedAt: new Date().toISOString()
    };
    const adminSubject = `Retreat Interest: ${record.name}`;
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
        text: `Dear ${record.name},\n\nThank you for sharing your retreat vision and interests. We have received your details and will respond soon.\n\n${plainSummary}\n\nHouse of Andalus`,
        html: `<p style='font-family:Arial'>Dear ${record.name},</p><p style='font-family:Arial'>Thank you for your interest in organising a retreat. We have received the details below.</p>${tableHtml}<p style='font-family:Arial'>We will be in touch soon.<br/>House of Andalus</p>`
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
