import { NextResponse } from 'next/server';

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
    const summary = {
      wifeName,
      husbandName,
      email,
      relationshipDuration: body.relationshipDuration || null,
      relationshipStage: body.relationshipStage || null,
      seeking: body.seeking || [],
      preferredDateTime: body.preferredDateTime || '',
      occupations: body.occupations || '',
      ageGroup: body.ageGroup || '',
      phone: body.phone || '',
      submittedAt: new Date().toISOString()
    };
    console.log('Couples retreat interest:', summary); // eslint-disable-line no-console
    return NextResponse.json({ ok:true, received: summary });
  } catch (e) {
    console.error('Couples retreat POST error:', e); // eslint-disable-line no-console
    return NextResponse.json({ message:'Server error.' }, { status:500 });
  }
}

export function GET(){
  return NextResponse.json({ message:'POST couples retreat expression of interest to this endpoint.' });
}
