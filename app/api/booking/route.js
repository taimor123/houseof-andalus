import { NextResponse } from 'next/server';
import { sendMail, formatKeyValueTable, plainTextSummary } from '../../../lib/email';

// Required minimal fields
const required = ['name','email','country'];

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required
    for (const key of required) {
      if (!body[key] || String(body[key]).trim() === '') {
        return NextResponse.json({ message: `Missing required field: ${key}` }, { status: 400 });
      }
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    // Normalised record
    const record = {
      name: body.name,
      contact: body.contact || '',
      email: body.email,
      country: body.country,
      selfCatering: body.selfCatering || '',
      adults: body.adults || '',
      childrenAges: body.childrenAges || '',
      startDate: body.startDate || '',
      endDate: body.endDate || '',
      daysCount: body.daysCount || '',
      flexibleDates: body.flexibleDates || '',
      purpose: body.purpose || '',
      specialRequirements: body.specialRequirements || '',
      accommodation: body.accommodation || [],
      drivingOwnCar: body.drivingOwnCar || '',
      needTaxi: body.needTaxi || '',
      airportTransfers: body.airportTransfers || '',
      anythingElse: body.anythingElse || '',
      submittedAt: new Date().toISOString(),
    };

    // Build emails
    const adminSubject = `Booking Enquiry: ${record.name} (${record.country})`;
    const userSubject = 'We received your booking enquiry – House of Andalus';
    const tableHtml = formatKeyValueTable(record);
    const plainSummary = plainTextSummary(record);

    await Promise.all([
      sendMail({
        to: process.env.BOOKING_NOTIFY_TO || process.env.EMAIL_USER,
        subject: adminSubject,
        text: `New Booking Enquiry\n\n${plainSummary}`,
        html: `<h2 style='font-family:Arial'>New Booking Enquiry</h2>${tableHtml}`
      }),
      sendMail({
        to: record.email,
        subject: userSubject,
        text: `Dear ${record.name},\n\nThank you for your enquiry. We have received the following details:\n\n${plainSummary}\n\nWe will be in touch soon.\n\nHouse of Andalus`,
        html: `<p style='font-family:Arial'>Dear ${record.name},</p><p style='font-family:Arial'>Thank you for your booking enquiry. We have received the details below and will respond shortly.</p>${tableHtml}<p style='font-family:Arial'>Warm regards,<br/>House of Andalus</p>`
      })
    ]);

    return NextResponse.json({ ok: true, received: { name: record.name, email: record.email, submittedAt: record.submittedAt } });
  } catch (err) {
    console.error('Booking POST error:', err); // eslint-disable-line no-console
    return NextResponse.json({ message: 'Server error processing booking.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'POST a booking enquiry to this endpoint.' });
}
