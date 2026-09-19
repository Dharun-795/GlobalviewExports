import React, { useState } from 'react';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    buyerName: '',
    buyerCompany: '',
    buyerEmail: '',
    buyerPhone: '',
    inquiryProduct: '5 Kg Coco Peat Blocks',
    inquiryGrade: 'Low EC (< 0.5 mS/cm) - Washed',
    inquiryQuantity: '1 x 40ft HC Container (Trial Order)',
    inquiryPackaging: 'Palletized & Stretch Wrapped (24-25 MT)',
    inquiryPort: '',
    buyerMessage: ''
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' }); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: 'Sending export inquiry directly to enquiry@globalviewexports.com...' });

    const payload = {
      _subject: `Export Inquiry: ${formData.inquiryProduct} - ${formData.buyerCompany}`,
      _template: 'table',
      _replyto: formData.buyerEmail,
      _cc: 'enquiry@globalviewexports.in',
      'Buyer Name': formData.buyerName,
      'Company Name': formData.buyerCompany,
      'Email Address': formData.buyerEmail,
      'Phone / WhatsApp': formData.buyerPhone,
      'Product of Interest': formData.inquiryProduct,
      'EC Grade': formData.inquiryGrade,
      'Estimated Volume': formData.inquiryQuantity,
      'Packaging Required': formData.inquiryPackaging,
      'Destination Sea Port': formData.inquiryPort,
      'Additional Specifications': formData.buyerMessage || 'Standard Export Quality'
    };

    try {
      // 1. Try sending directly through domain's own native PHP mailer (send-mail.php)
      let response = await fetch('/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(() => null);

      // 2. If running locally or static host where send-mail.php isn't active, fallback to gateway
      if (!response || !response.ok) {
        response = await fetch('https://formsubmit.co/ajax/enquiry@globalviewexports.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });
      }

      let isSuccess = false;
      let respData = null;

      if (response && response.ok) {
        try {
          respData = await response.json();
          if (respData && (respData.success === true || respData.success === 'true')) {
            isSuccess = true;
          } else if (respData && respData.message && respData.message.toLowerCase().includes('activation')) {
            setStatus({
              state: 'activation_needed',
              message: "FormSubmit has sent a one-time activation email to enquiry@globalviewexports.com. Please open that email and click 'Activate Form' to start receiving inquiries in your inbox."
            });
            return;
          }
        } catch {
          isSuccess = true;
        }
      }

      if (isSuccess || (response && response.ok && !respData)) {
        setStatus({
          state: 'success',
          message: `Thank you, ${formData.buyerName}! Your export inquiry has been sent to enquiry@globalviewexports.com. Our commercial desk will respond to ${formData.buyerEmail} with FOB/CIF pricing shortly.`
        });
        setFormData({
          buyerName: '',
          buyerCompany: '',
          buyerEmail: '',
          buyerPhone: '',
          inquiryProduct: '5 Kg Coco Peat Blocks',
          inquiryGrade: 'Low EC (< 0.5 mS/cm) - Washed',
          inquiryQuantity: '1 x 40ft HC Container (Trial Order)',
          inquiryPackaging: 'Palletized & Stretch Wrapped (24-25 MT)',
          inquiryPort: '',
          buyerMessage: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      // Direct mailto fallback
      const mailtoSubject = encodeURIComponent(`Export Inquiry: ${formData.inquiryProduct} - ${formData.buyerCompany}`);
      const mailtoBody = encodeURIComponent(`Name: ${formData.buyerName}
Company: ${formData.buyerCompany}
Email: ${formData.buyerEmail}
Phone: ${formData.buyerPhone}
Product: ${formData.inquiryProduct}
Grade: ${formData.inquiryGrade}
Volume: ${formData.inquiryQuantity}
Packaging: ${formData.inquiryPackaging}
Destination Port: ${formData.inquiryPort}
Message: ${formData.buyerMessage}`);

      window.location.href = `mailto:enquiry@globalviewexports.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus({
        state: 'success',
        message: `Your default email client has been opened to send your inquiry directly to enquiry@globalviewexports.com.`
      });
    }
  };

  return (
    <section className="section-padding quote-section" id="quote">
      <div className="container">
        <div className="quote-box">
          <div className="quote-form-side">
            <div className="quote-header">
              <h3>Request an Export Quotation</h3>
              <p>Submit your container requirements. Inquiries are sent directly to <strong>enquiry@globalviewexports.com</strong>.</p>
            </div>

            {status.state === 'success' && (
              <div className="status-success-card">
                <div className="status-icon-wrap">
                  <i className="fas fa-check"></i>
                </div>
                <div className="status-content-wrap">
                  <h4 className="status-title">Inquiry Dispatched Successfully</h4>
                  <p className="status-desc">{status.message}</p>
                  <button
                    type="button"
                    onClick={() => setStatus({ state: 'idle', message: '' })}
                    className="btn-status-reset"
                  >
                    <i className="fas fa-redo-alt"></i> Send Another Inquiry
                  </button>
                </div>
              </div>
            )}

            {status.state === 'activation_needed' && (
              <div className="status-success-card status-activation">
                <div className="status-icon-wrap activation-icon">
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <div className="status-content-wrap">
                  <h4 className="status-title">Action Required: Activate Email Gateway</h4>
                  <p className="status-desc">{status.message}</p>
                  <button
                    type="button"
                    onClick={() => setStatus({ state: 'idle', message: '' })}
                    className="btn-status-reset"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="buyerName">Your Name *</label>
                  <input
                    type="text"
                    id="buyerName"
                    name="buyerName"
                    autoComplete="name"
                    className="form-control"
                    placeholder="e.g. John Doe"
                    required
                    value={formData.buyerName}
                    onChange={handleChange}
                    disabled={status.state === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="buyerCompany">Company Name *</label>
                  <input
                    type="text"
                    id="buyerCompany"
                    name="buyerCompany"
                    autoComplete="organization"
                    className="form-control"
                    placeholder="e.g. Green Agri Ltd"
                    required
                    value={formData.buyerCompany}
                    onChange={handleChange}
                    disabled={status.state === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="buyerEmail">Email Address *</label>
                  <input
                    type="email"
                    id="buyerEmail"
                    name="buyerEmail"
                    autoComplete="email"
                    className="form-control"
                    placeholder="e.g. buyer@company.com"
                    required
                    value={formData.buyerEmail}
                    onChange={handleChange}
                    disabled={status.state === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="buyerPhone">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    id="buyerPhone"
                    name="buyerPhone"
                    autoComplete="tel"
                    className="form-control"
                    placeholder="e.g. +1 555 123 4567"
                    required
                    value={formData.buyerPhone}
                    onChange={handleChange}
                    disabled={status.state === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryProduct">Product of Interest *</label>
                  <select
                    id="inquiryProduct"
                    name="inquiryProduct"
                    className="form-control"
                    required
                    value={formData.inquiryProduct}
                    onChange={handleChange}
                    disabled={status.state === 'submitting'}
                  >
                    <option value="5 Kg Coco Peat Blocks">5 Kg Coco Peat Blocks</option>
                    <option value="Hydroponic Grow Bags (1 Meter)">Hydroponic Grow Bags (1 Meter)</option>
                    <option value="650 Gram Coco Bricks / Briquettes">650 Gram Coco Bricks / Briquettes</option>
                    <option value="Coco Peat Discs / Coins">Coco Peat Discs / Coins</option>
                    <option value="Coconut Husk Chips 5kg Blocks">Coconut Husk Chips 5kg Blocks</option>
                    <option value="Coir Fiber Bales / Cut Fiber">Coir Fiber Bales / Cut Fiber</option>
                    <option value="Coir Yarn / Geotextiles">Coir Yarn / Geotextiles</option>
                    <option value="Cocopeat Compost (Azolla & Neem)">Cocopeat Compost (Azolla & Neem)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryGrade">EC Grade *</label>
                  <select
                    id="inquiryGrade"
                    name="inquiryGrade"
                    className="form-control"
                    value={formData.inquiryGrade}
                    onChange={handleChange}
                    disabled={status.state === 'submitting'}
                  >
                    <option value="Low EC (< 0.5 mS/cm) - Washed">Low EC (&lt; 0.5 mS/cm) - Washed</option>
                    <option value="High EC (> 0.8 mS/cm) - Animal Bedding">High EC (&gt; 0.8 mS/cm) - Animal Bedding</option>
                    <option value="Custom Blend / Husk Chip Mix">Custom Blend / Husk Chip Mix</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryQuantity">Estimated Volume *</label>
                  <select
                    id="inquiryQuantity"
                    name="inquiryQuantity"
                    className="form-control"
                    value={formData.inquiryQuantity}
                    onChange={handleChange}
                    disabled={status.state === 'submitting'}
                  >
                    <option value="1 x 40ft HC Container (Trial Order)">1 x 40ft HC Container (Trial Order)</option>
                    <option value="2 to 5 x 40ft HC Containers">2 to 5 x 40ft HC Containers</option>
                    <option value="10+ Containers (Annual Contract)">10+ Containers (Annual Contract)</option>
                    <option value="LCL / Sample Pallet">LCL / Sample Pallet</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryPackaging">Packaging *</label>
                  <select
                    id="inquiryPackaging"
                    name="inquiryPackaging"
                    className="form-control"
                    value={formData.inquiryPackaging}
                    onChange={handleChange}
                    disabled={status.state === 'submitting'}
                  >
                    <option value="Palletized & Stretch Wrapped (24-25 MT)">Palletized & Stretch Wrapped (24-25 MT)</option>
                    <option value="Bare Block Floor Loading (26 MT Max)">Bare Block Floor Loading (26 MT Max)</option>
                    <option value="Custom Retail Carton Packaging">Custom Retail Carton Packaging</option>
                  </select>
                </div>

                <div className="form-group full">
                  <label htmlFor="inquiryPort">Destination Sea Port / Country *</label>
                  <input
                    type="text"
                    id="inquiryPort"
                    name="inquiryPort"
                    className="form-control"
                    placeholder="e.g. Port of Rotterdam, Netherlands / Houston, USA"
                    required
                    value={formData.inquiryPort}
                    onChange={handleChange}
                    disabled={status.state === 'submitting'}
                  />
                </div>

                <div className="form-group full">
                  <label htmlFor="buyerMessage">Additional Specifications</label>
                  <textarea
                    id="buyerMessage"
                    name="buyerMessage"
                    className="form-control"
                    placeholder="Mention any custom block dimensions, labeling needs, or special instructions..."
                    value={formData.buyerMessage}
                    onChange={handleChange}
                    disabled={status.state === 'submitting'}
                    rows={3}
                  ></textarea>
                </div>

                <div className="form-group full form-submit-group">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-quote-submit" 
                    disabled={status.state === 'submitting'}
                  >
                    {status.state === 'submitting' ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i> Submit Export Inquiry
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="quote-info-side">
            <div>
              <h4>Why Partner With Us?</h4>
              <div className="info-points">
                <div className="info-point">
                  <div className="info-point-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="info-point-content">
                    <h5>Guaranteed EC &amp; pH Parameters</h5>
                    <p>Batch-wise laboratory test certificates provided with every container shipment.</p>
                  </div>
                </div>
                <div className="info-point">
                  <div className="info-point-icon">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <div className="info-point-content">
                    <h5>Export Documentation</h5>
                    <p>Phytosanitary inspection, Fumigation certificates, and Bill of Lading compliance.</p>
                  </div>
                </div>
                <div className="info-point">
                  <div className="info-point-icon">
                    <i className="fas fa-ship"></i>
                  </div>
                  <div className="info-point-content">
                    <h5>Direct Port Logistics</h5>
                    <p>Fast road freight connections to Tuticorin, Cochin, and Chennai seaports.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="commercial-desk">
              <h5>Direct Commercial Desk</h5>
              <h3>P. R. Govindarajan</h3>
              <p>
                <i className="fas fa-phone-alt"></i> 
                <a href="tel:+919842783222">+91 98427 83222</a>, <a href="tel:+919942533825">+91 99425 33825</a>
              </p>
              <p><i className="fas fa-envelope"></i> <a href="mailto:info@globalviewexports.com">info@globalviewexports.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
