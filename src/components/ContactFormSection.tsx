'use client'

import { useState } from 'react'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    option: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  return (
    <div className="tt-section padding-top-40 padding-bottom-xlg-120">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row tt-xl-row-reverse">
          <div className="tt-col-xl-5">
            <div className="tt-contact-info margin-bottom-80">
              <div className="tt-big-arrow tt-ba-angle-bottom-left tt-anim-fadeinup">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                </svg>
              </div>

              <div className="tt-contact-info-inner">
                <div className="margin-bottom-50 tt-anim-fadeinup">
                  <h6>Let&apos;s Talk</h6>
                  <p>You&apos;re just one click away from taking your brand or product from great to incredible. Fill out the form to share more details about your project.</p>
                </div>
                
                <div className="tt-contact-details margin-bottom-50 tt-anim-fadeinup">
                  <h6>Details</h6>
                  <ul>
                    <li>
                      <span className="tt-cd-icon"><i className="fas fa-map-marker-alt"></i></span>
                      <a href="https://www.google.com/maps/place/121+King+St,+Melbourne+VIC+3000,+Austraalia/@-37.8172467,144.9532001,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad65d4dd5a05d97:0x3e64f855a564844d!8m2!3d-37.817251!4d144.955775!16s%2Fg%2F11g0g8c54h?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" className="tt-link" target="_blank" rel="noopener">121 King Street, Melbourne, Australia</a>
                    </li>
                    <li>
                      <span className="tt-cd-icon"><i className="fas fa-phone"></i></span>
                      <a href="tel:+123456789000" className="tt-link">+(123) 456 789 000</a>
                    </li>
                    <li>
                      <span className="tt-cd-icon"><i className="fas fa-envelope"></i></span>
                      <a href="mailto:company@email.com" className="tt-link">company@email.com</a>
                    </li>
                  </ul>
                </div>

                <div className="tt-social-buttons margin-bottom-50 tt-anim-fadeinup">
                  <h6>Social</h6>
                  <ul>
                    <li><a href="https://www.facebook.com/themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://dribbble.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-dribbble"></i></a></li>
                    <li><a href="https://www.behance.net/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-behance"></i></a></li>
                    <li><a href="https://www.youtube.com/" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="tt-col-xl-7">
            <form id="tt-contact-form" className="tt-form tt-form-creative tt-form-lg" onSubmit={handleSubmit}>
              <div id="tt-contact-form-messages" role="alert">
                <div className="tt-cfm-inner"></div>
                <div className="tt-cfm-close hide-cursor"><i className="fa-solid fa-xmark"></i></div>
              </div>

              <div className="tt-contact-form-inner">
                <div className="tt-form-group tt-anim-fadeinup">
                  <label>What&apos;s your name? <span className="required">*</span></label>
                  <input 
                    className="tt-form-control" 
                    id="sender-name" 
                    type="text" 
                    name="name" 
                    placeholder="John Smith" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="tt-form-group tt-anim-fadeinup">
                  <label>What&apos;s your email? <span className="required">*</span></label>
                  <input 
                    className="tt-form-control" 
                    id="sender-email" 
                    type="email" 
                    name="email" 
                    placeholder="john@smith.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="tt-form-group tt-anim-fadeinup">
                  <label>What would you like to talk about? <span className="required">*</span></label>
                  <select 
                    className="tt-form-control" 
                    id="sender-option" 
                    name="option" 
                    value={formData.option}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Please choose an option</option>
                    <option value="Say Hello">Say hello</option>
                    <option value="New Project">New project</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="tt-form-group tt-anim-fadeinup">
                  <label>Your message <span className="required">*</span></label>
                  <textarea 
                    className="tt-form-control" 
                    id="sender-message" 
                    rows={5} 
                    name="message" 
                    placeholder="Hello, can you help me with ..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="tt-anim-fadeinup">
                  <button type="submit" className="tt-btn tt-btn-primary tt-magnetic-item">
                    <span data-hover="Send Message">Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
