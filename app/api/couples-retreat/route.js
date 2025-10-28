import { NextResponse } from 'next/server';
import { sendMail, formatKeyValueTable, plainTextSummary } from '../../../lib/email';

export async function POST(request){
  try {
    const body = await request.json();
    const { wifeName, husbandName, email } = body;
    if(!wifeName || !husbandName || !email){
      return NextResponse.json({ message:'wifeName, husbandName and email are required.' }, { status:400 });
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      return NextResponse.json({ message:'Invalid email format.' }, { status:400 });
    }

    const record = {
      wifeName,
      husbandName,
      email,
      phone: body.phone || '',
      occupations: body.occupations || '',
      ageGroup: body.ageGroup || '',
      preferredDateTime: body.preferredDateTime || '',
      relationshipDuration: body.relationshipDuration || '',
      relationshipStage: body.relationshipStage || '',
      seeking: body.seeking || [],
      submittedAt: new Date().toISOString()
    };

    const adminSubject = `Couples Retreat Interest: ${record.wifeName} & ${record.husbandName}`;
    const userSubject = 'We received your Couples’ Retreat expression of interest';
    const tableHtml = formatKeyValueTable(record);
    const plainSummary = plainTextSummary(record);

    await Promise.all([
      sendMail({
        to: process.env.COUPLES_NOTIFY_TO || process.env.EMAIL_USER,
        subject: adminSubject,
        text: `New Couples Retreat Expression of Interest\n\n${plainSummary}`,
        html: `<h2 style='font-family:Arial'>Couples Retreat Expression of Interest</h2>${tableHtml}`
      }),
      sendMail({
        to: record.email,
        subject: userSubject,
        text: `Dear ${record.wifeName} & ${record.husbandName},\n\nThank you for sharing where you are in your relationship. We have received your details and will be in touch.\n\n${plainSummary}\n\nWarmly,\nHouse of Andalus`,
        html: `<p style='font-family:Arial'>Dear ${record.wifeName} & ${record.husbandName},</p><p style='font-family:Arial'>Thank you for sharing where you are and what you seek. We have received the details below.</p>${tableHtml}<p style='font-family:Arial'>We will be in touch soon.<br/>House of Andalus</p>`
      })
    ]);

    return NextResponse.json({ ok:true, received: { wifeName: record.wifeName, husbandName: record.husbandName, submittedAt: record.submittedAt } });
  } catch (e) {
    console.error('Couples retreat POST error:', e); // eslint-disable-line no-console
    return NextResponse.json({ message:'Server error.' }, { status:500 });
  }
}

export function GET(){
  return NextResponse.json({ message:'POST couples retreat expression of interest to this endpoint.' });
}
