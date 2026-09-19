import React from 'react';

export default function Contact() {
  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Information</h2>
          <p className="section-subtitle">
            Contact our commercial office in Namakkal, Tamil Nadu, India for export orders, samples, and factory visits.
          </p>
        </div>

        <div className="contact-cards">
          <div className="contact-card">
            <h4>Registered Address</h4>
            <p>
              <strong>Global view Exports</strong><br />
              72D/11A, Kudi St, Sanarpalayamnadar, Manakkadu, Koottapalli Colony, Tiruchengode, Tamil Nadu 637214
            </p>
            <div style={{ marginTop: '0.85rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a 
                href="https://www.google.com/maps/dir//Global+view+Exports,+72D%2F11A,+Kudi+St,+Sanarpalayamnadar,+Manakkadu,+Koottapalli+Colony,+Tiruchengode,+Tamil+Nadu+637214/@11.3716834,77.8833822,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba961b6242a8a65:0xa0c0072289df4be1!2m2!1d77.8833822!2d11.3716834" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  fontSize: '0.85rem', 
                  fontWeight: '600',
                  color: '#195228',
                  background: '#e9f5ed',
                  padding: '0.45rem 0.8rem',
                  borderRadius: '4px',
                  border: '1px solid #c4e5ce'
                }}
              >
                <i className="fas fa-directions" style={{ color: '#195228' }}></i> Get Directions
              </a>
              <a 
                href="https://www.google.com/maps/place/Global+view+Exports/@11.3716834,77.8833822,17z/data=!4m14!1m7!3m6!1s0x3ba961b6242a8a65:0xa0c0072289df4be1!2sGlobal+view+Exports!8m2!3d11.3716834!4d77.8833822!16s%2Fg%2F11zyv0s8gs!3m5!1s0x3ba961b6242a8a65:0xa0c0072289df4be1!8m2!3d11.3716834!4d77.8833822!16s%2Fg%2F11zyv0s8gs" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  fontSize: '0.85rem', 
                  fontWeight: '600',
                  color: '#374151',
                  background: '#f3f4f6',
                  padding: '0.45rem 0.8rem',
                  borderRadius: '4px',
                  border: '1px solid #e5e7eb'
                }}
              >
                <i className="fas fa-map-marked-alt"></i> View on Google Maps
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h4>Direct Contact</h4>
            <p>
              <strong>P. R. Govindarajan</strong><br />
              <a href="tel:+919842783222">+91 98427 83222</a><br />
              <a href="tel:+919942533825">+91 99425 33825</a>
            </p>
            <p style={{ marginTop: '0.4rem', fontSize: '0.84rem' }}>Available on WhatsApp & Phone Calls</p>
          </div>

          <div className="contact-card">
            <h4>Email Correspondence</h4>
            <p>
              <a href="mailto:info@globalviewexports.com">info@globalviewexports.com</a>
            </p>
            <p style={{ marginTop: '0.4rem', fontSize: '0.84rem' }}>24-hour response on international trade inquiries</p>
          </div>
        </div>

        <div className="map-box">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.979848529571!2d77.8808073!3d11.3716834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba961b6242a8a65%3A0xa0c0072289df4be1!2sGlobal%20view%20Exports!5e0!3m2!1sen!2sin!4v1726754000000!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Global view Exports - Pinned Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
