"use client";
import React, { useState } from 'react';

const interestOptions = [
  { value: 'couples', label: 'Couples’ Retreat' },
  { value: 'women_spiritual', label: 'Women-Only Spiritual Retreat' },
  { value: 'men_spiritual', label: 'Men-Only Spiritual Retreat' },
  { value: 'writers', label: 'Writer’s Retreat' },
  { value: 'islamic_education', label: 'Islamic Education Programmes' },
  { value: 'host_your_own', label: 'Host Your Own Retreat' },
  { value: 'historic_visits', label: 'Historic Visits' },
];

const OrganizeRetreatForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interests: [],
    theme: '',
    participants: '',
    requirements: '',
    foodPreferences: '',
    notes: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const toggleInterest = (value) => {
    setFormData(prev => {
      const exists = prev.interests.includes(value);
      return { ...prev, interests: exists ? prev.interests.filter(v => v !== value) : [...prev.interests, value] };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name || !formData.email) return { ok:false, msg:'Name and Email are required.' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return { ok:false, msg:'Enter a valid email.' };
    return { ok:true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (!v.ok) { setStatus({ type:'error', message:v.msg }); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/retreat-interest', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(formData) });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ type:'error', message: data.message || 'Submission failed.' });
      } else {
        setStatus({ type:'success', message: 'Your interest has been recorded. We will be in touch.' });
        setFormData({ name:'', phone:'', email:'', interests:[], theme:'', participants:'', requirements:'', foodPreferences:'', notes:'' });
      }
    } catch(err) {
      setStatus({ type:'error', message:'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="organize-retreat-form space" id="organize-retreat-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="title-area text-center mb-40">
              <span className="sub-title style1">Interest / Custom Retreat Form – House of Andalus</span>
              <h2 className="sec-title">Organise Your Own Retreat</h2>
              <p className="sec-text">Tell us the heart of your gathering and we’ll help you shape it with care, presence and purpose.</p>
            </div>
            <form onSubmit={handleSubmit} className="retreat-interest-form" noValidate>
              <div className="form-section card-plate">
                <h5 className="section-heading">Contact</h5>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-control" placeholder="Your full name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="+44 7000 000000" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" placeholder="you@example.com" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Number of Participants (Approx)</label>
                    <input type="number" min="1" name="participants" value={formData.participants} onChange={handleChange} className="form-control" placeholder="e.g. 14" />
                  </div>
                </div>
              </div>

              <div className="form-section card-plate">
                <h5 className="section-heading">Retreats or Activities of Interest</h5>
                <div className="row g-2">
                  {interestOptions.map(opt => (
                    <div className="col-md-6" key={opt.value}>
                      <label className={`checkbox-line ${formData.interests.includes(opt.value) ? 'active': ''}`}>
                        <input type="checkbox" value={opt.value} checked={formData.interests.includes(opt.value)} onChange={()=>toggleInterest(opt.value)} /> {opt.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-section card-plate">
                <h5 className="section-heading">Retreat Vision</h5>
                <div className="row g-4">
                  <div className="col-12">
                    <label className="form-label">Retreat Theme</label>
                    <textarea name="theme" value={formData.theme} onChange={handleChange} className="form-control" rows={3} placeholder="What is the focus or inspiration?" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">What Do You Require From Us?</label>
                    <textarea name="requirements" value={formData.requirements} onChange={handleChange} className="form-control" rows={3} placeholder="Accommodation, spaces, activities, support needed" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Food Preferences</label>
                    <textarea name="foodPreferences" value={formData.foodPreferences} onChange={handleChange} className="form-control" rows={3} placeholder="Dietary or culinary needs" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Additional Notes or Requests</label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} className="form-control" rows={3} placeholder="Anything else you'd like us to know" />
                  </div>
                </div>
              </div>

              <div className="text-center mt-30">
                <button type="submit" className="th-btn style1" disabled={submitting}>{submitting? 'Sending...' : 'Submit Interest'}</button>
                {status.message && <p className={`form-status mt-15 ${status.type === 'error' ? 'text-danger':'text-success'}`}>{status.message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .retreat-interest-form .form-label { font-weight:600; font-size:14px; letter-spacing:.02em; }
        .retreat-interest-form .form-control { background:#fff; border:1px solid #d9e6e0; border-radius:8px; min-height:46px; }
        .retreat-interest-form textarea.form-control { min-height:110px; resize:vertical; }
        .checkbox-line { display:block; padding:10px 14px; border:1px solid #d9e6e0; border-radius:10px; font-size:13px; background:#fff; cursor:pointer; position:relative; }
        .checkbox-line input { margin-right:8px; }
        .checkbox-line.active { border-color:#4a6b5a; background:#f2f8f5; }
        .form-section { margin-bottom:34px; }
        // .card-plate { background:linear-gradient(145deg,#ffffff,#f5f9f7); border:1px solid #dbe7e1; border-radius:18px; padding:28px 28px 14px; box-shadow:0 8px 22px -8px rgba(26,54,39,0.12); }
        .section-heading { font-size:16px; letter-spacing:.05em; text-transform:uppercase; font-weight:600; margin-bottom:18px; color:#2a4638; }
        .form-status { font-size:14px; }
        @media (max-width: 767px){ .card-plate { padding:22px 20px 10px; } .checkbox-line { font-size:12px; } }
      `}</style>
    </section>
  );
};

export default OrganizeRetreatForm;
