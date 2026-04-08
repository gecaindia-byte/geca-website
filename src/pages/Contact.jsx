
File 13: src/pages/Contact.jsx
Main page → "Add file" → "Create new file"
Filename: src/pages/Contact.jsx
Copy-paste:
import { useState } from "react";
import { Layout } from "../components/Layout";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meepnwlp", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      alert("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest font-medium text-blue-500 mb-4">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
              Contact GECA
            </h1>
            <p className="text-lg text-slate-600">
              Interested in joining GECA? Fill out the form below and our team will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-8" style={{fontFamily: 'Outfit, sans-serif'}}>
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">📍 Office Address</h3>
                  <p className="text-slate-600 text-sm">
                    #302, Surya Castle<br />
                    Opposite Mini Shilparamam<br />
                    Uppal, Hyderabad<br />
                    Telangana 500039
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">📧 Email</h3>
                  <p className="text-slate-600 text-sm">info@geca.org</p>
                  <p className="text-slate-600 text-sm">gecaindia@gmail.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">🌐 Website</h3>
                  <p className="text-slate-600 text-sm">www.geca.org</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">📞 Phone</h3>
                  <p className="text-slate-600 text-sm">Surender Varma (President): +91-9246580966</p>
                  <p className="text-slate-600 text-sm">Dr. Swamy Narayana (Gen. Secretary): +91-9849520577</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 border border-slate-200">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                      Thank You!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Your inquiry has been submitted. We'll get back to you within 2-3 business days.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-blue-500 text-white px-6 py-3 rounded-full"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
                      Send us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                          <input name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                          <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                          <input name="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Organization</label>
                          <input name="organization" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                          <input name="city" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Inquiry Type</label>
                          <select name="inquiry_type" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="membership">Membership Inquiry</option>
                            <option value="general">General Question</option>
                            <option value="partnership">Partnership</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                        <textarea name="message" required rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Inquiry →"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
