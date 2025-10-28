import nodemailer from 'nodemailer';

// Single transporter instance (lazy init)
let _transporter;

function getTransporter() {
  if (_transporter) return _transporter;
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.warn('Email credentials missing: set EMAIL_USER and EMAIL_PASS env vars.');
  }
  _transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });
  return _transporter;
}

export async function sendMail(options) {
  const transporter = getTransporter();
  return transporter.sendMail({
    from: options.from || `"House of Andalus" <${process.env.EMAIL_USER}>`,
    ...options,
  });
}

export function formatKeyValueTable(obj) {
  return `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">${Object.entries(obj)
    .filter(([,v]) => v !== undefined && v !== null && v !== '')
    .map(([k,v]) => `<tr><td style='padding:4px 8px;border:1px solid #ddd;font-weight:600;text-transform:capitalize'>${k}</td><td style='padding:4px 8px;border:1px solid #ddd;'>${Array.isArray(v)? v.join(', ') : String(v)}</td></tr>`).join('')}</table>`;
}

export function plainTextSummary(obj) {
  return Object.entries(obj)
    .filter(([,v]) => v !== undefined && v !== null && v !== '')
    .map(([k,v]) => `${k}: ${Array.isArray(v)? v.join(', ') : v}`)
    .join('\n');
}
