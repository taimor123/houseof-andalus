import { NextResponse } from 'next/server';

// Basic server-side validation schema keys we expect
const required = ['name','email','country'];

export async function POST(request) {
  try {
    const body = await request.json();
    for (const key of required) {
      if (!body[key] || String(body[key]).trim() === '') {
        return NextResponse.json({ message: `Missing required field: ${key}` }, { status: 400 });
      }
    }
    // Naive email check
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    // Derive a simple summary
    const summary = {
      name: body.name,
      email: body.email,
      country: body.country,
      adults: body.adults || null,
      dates: body.startDate && body.endDate ? `${body.startDate} → ${body.endDate}` : undefined,
      days: body.daysCount || undefined,
      accommodation: body.accommodation || [],
      timestamp: new Date().toISOString(),
    };

    // Here you could integrate: send email (Nodemailer), persist to DB, etc.
    console.log('New booking enquiry:', summary); // eslint-disable-line no-console

    return NextResponse.json({ ok: true, received: summary });
  } catch (err) {
    console.error('Booking POST error:', err); // eslint-disable-line no-console
    return NextResponse.json({ message: 'Server error processing booking.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'POST a booking enquiry to this endpoint.' });
}
