import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    if(!body.name || !body.email){
      return NextResponse.json({ message: 'Name and Email required.' }, { status: 400 });
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)){
      return NextResponse.json({ message: 'Invalid email.' }, { status: 400 });
    }
    const summary = {
      name: body.name,
      email: body.email,
      interests: body.interests || [],
      participants: body.participants || null,
      theme: body.theme || '',
      submittedAt: new Date().toISOString()
    };
    console.log('Retreat interest submission:', summary); // eslint-disable-line no-console
    return NextResponse.json({ ok:true, received: summary });
  } catch (e) {
    console.error('retreat-interest error', e); // eslint-disable-line no-console
    return NextResponse.json({ message:'Server error.' }, { status: 500 });
  }
}

export function GET(){
  return NextResponse.json({ message: 'POST a retreat interest submission to this endpoint.' });
}
