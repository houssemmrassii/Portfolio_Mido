import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to FormSubmit (no setup required, emails go to your email)
      const formElement = document.createElement('form');
      formElement.method = 'POST';
      formElement.action = 'https://formsubmit.co/abdelhamidghaouiii@gmail.com';
      formElement.style.display = 'none';

      // Add form fields
      const nameInput = document.createElement('input');
      nameInput.name = 'name';
      nameInput.value = formData.name;
      formElement.appendChild(nameInput);

      const emailInput = document.createElement('input');
      emailInput.name = 'email';
      emailInput.value = formData.email;
      formElement.appendChild(emailInput);

      const subjectInput = document.createElement('input');
      subjectInput.name = 'subject';
      subjectInput.value = formData.subject;
      formElement.appendChild(subjectInput);

      const messageInput = document.createElement('textarea');
      messageInput.name = 'message';
      messageInput.value = formData.message;
      formElement.appendChild(messageInput);

      // Add redirect
      const redirectInput = document.createElement('input');
      redirectInput.name = '_next';
      redirectInput.value = window.location.href;
      formElement.appendChild(redirectInput);

      document.body.appendChild(formElement);
      formElement.submit();
      document.body.removeChild(formElement);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-dark">
      <div className="container px-4 sm:px-6">
        <div className="mb-12 sm:mb-14 md:mb-16">
          <div className="section-divider mb-6 sm:mb-8"></div>
          <h2 className="section-title" style={{fontWeight: 300}}>LET'S CREATE</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-10 sm:space-y-12 md:space-y-14">
            <div>
              <p className="text-gold text-xs tracking-widest font-light mb-2 sm:mb-3" style={{fontWeight: 300}}>EMAIL</p>
              <a href="mailto:abdelhamidghaouiii@gmail.com" className="text-white hover:text-gold transition-colors text-sm sm:text-base md:text-lg font-light" style={{fontWeight: 300}}>
                abdelhamidghaouiii@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gold text-xs tracking-widest font-light mb-2 sm:mb-3" style={{fontWeight: 300}}>PHONE</p>
              <a href="tel:+21623583140" className="text-white hover:text-gold transition-colors text-sm sm:text-base md:text-lg font-light" style={{fontWeight: 300}}>
                +216 23 583 140
              </a>
            </div>


            <div>
              <p className="text-gold text-xs tracking-widest font-light mb-2 sm:mb-3" style={{fontWeight: 300}}>BASED IN</p>
              <p className="text-white font-light text-sm sm:text-base md:text-lg" style={{fontWeight: 300}}>
                Tunis , Tunisia
              </p>
              <p className="text-gray-400 text-xs sm:text-sm font-light mt-1 sm:mt-2" style={{fontWeight: 300}}>
AVAILABLE WORLDWIDE              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-7">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light"
                style={{fontWeight: 300}}
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light"
                style={{fontWeight: 300}}
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Project Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light"
                style={{fontWeight: 300}}
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors resize-none font-light"
                style={{fontWeight: 300}}
                required
              ></textarea>
            </div>

            <div className="pt-6 sm:pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 sm:px-8 py-2 sm:py-3 border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300 text-xs sm:text-sm tracking-widest font-light disabled:opacity-50 disabled:cursor-not-allowed"
                style={{fontWeight: 300}}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-gold text-xs sm:text-sm mt-3 font-light" style={{fontWeight: 300}}>✓ Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-xs sm:text-sm mt-3 font-light" style={{fontWeight: 300}}>✗ Error sending message. Please try again.</p>
              )}
            </div>
          </form>
        </div>

        {/* Selected Works Text */}
        <div className="mt-20 sm:mt-24 md:mt-32 flex justify-center">
          <p className="text-gray-400 text-xs sm:text-sm tracking-widest font-light text-center" style={{fontWeight: 300}}>
            SELECTED WORKS SHOWCASED — FULL PROJECTS AVAILABLE UPON REQUEST
          </p>
        </div>
      </div>
    </section>
  );
}
