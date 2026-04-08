
File 12: src/pages/Membership.jsx
Main page → "Add file" → "Create new file"
Filename: src/pages/Membership.jsx
Copy-paste:
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

const Membership = () => {
  const eligibility = [
    "Indian-registered business entity (Proprietorship, Partnership, LLP, or Company)",
    "Operates from a formal commercial office space",
    "Minimum 2 years of operational history in international education consultancy",
    "Legally registered with the Government of India",
    "Must be referred by an existing GECA member",
  ];

  const benefits = [
    { title: "Advocacy & Support", items: ["Representation against unfair practices", "Crisis support", "Advisory guidance", "Collective voice"] },
    { title: "Networking", items: ["Collective bargaining power", "University partnerships", "Annual conclaves", "Knowledge-sharing"] },
    { title: "Recognition", items: ["GECA Ethical Member badge", "Enhanced credibility", "Learning resources", "Professional development"] },
  ];

  const ethics = [
    { title: "Honesty & Integrity", desc: "Uphold professional conduct and provide accurate, truthful guidance to students." },
    { title: "No Illegal Practices", desc: "No cashbacks, commission-sharing, or promises of guaranteed visa approvals." },
    { title: "Documentation Integrity", desc: "Zero tolerance for fake documentation. Comply with all immigration laws." },
    { title: "Financial Transparency", desc: "Clear disclosure of all service charges. No hidden fees." },
    { title: "Confidentiality", desc: "Protect student data and maintain confidentiality of association information." },
    { title: "Inter-Member Conduct", desc: "Treat fellow members with respect. No defamation or hostile conduct." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest font-medium text-blue-500 mb-4">Membership</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
              Join the GECA Community
            </h1>
            <p className="text-lg text-slate-600">
              Become part of India's most trusted network of overseas education consultants.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" style={{fontFamily: 'Outfit, sans-serif'}}>
            Eligibility Requirements
          </h2>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 max-w-3xl mx-auto">
            <ul className="space-y-4">
              {eligibility.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> No restriction on number of employees. Consultancies of all sizes are welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="geca-gradient-bg rounded-3xl p-10 text-white text-center">
              <p className="text-sm uppercase tracking-widest mb-4">Annual Contribution</p>
              <div className="text-5xl font-bold mb-2" style={{fontFamily: 'Outfit, sans-serif'}}>₹5,000</div>
              <p className="text-white/80 text-sm mb-6">per financial year (April to March)</p>
              <div className="bg-white/10 rounded-xl p-4 text-left text-sm">
                <p>✓ Non-refundable and non-adjustable</p>
                <p>✓ Uniform fee for all member sizes</p>
                <p>✓ Valid until 31st March</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" style={{fontFamily: 'Outfit, sans-serif'}}>
            Member Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                  {benefit.title}
                </h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="text-blue-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Ethics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" style={{fontFamily: 'Outfit, sans-serif'}}>
            Code of Ethics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ethics.map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 geca-gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
            Ready to Elevate Your Practice?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-medium">
            Start Your Application →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;
