
File 10: src/pages/Home.jsx
Main page → "Add file" → "Create new file"
Filename: src/pages/Home.jsx
Copy-paste:
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

const Home = () => {
  const pillars = [
    { title: "Professional Association", desc: "Unite consultants, promote mutual respect, and build a supportive ecosystem." },
    { title: "Self-Regulatory Organization", desc: "Foster peer-driven discipline and protect professional credibility." },
    { title: "Knowledge & Practice Guild", desc: "Transform consultants into knowledge professionals with shared expertise." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest font-medium text-blue-500 mb-4">
              Global Education Consultants Association
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
              Building Trust in<br />
              <span className="geca-gradient-text">Overseas Education</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              GECA unites study abroad consultants across India to create a professional, ethical, 
              and knowledge-driven community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/membership" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium">
                Become a Member →
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest font-medium text-blue-500 mb-4">Our Foundation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{fontFamily: 'Outfit, sans-serif'}}>
              The Three Pillars of GECA
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="pillar-card p-8 geca-card-hover">
                <h3 className="text-xl font-semibold text-slate-900 mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 geca-gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
            Ready to Transform Your Practice?
          </h2>
          <p className="text-slate-200 max-w-2xl mx-auto mb-8">
            Join GECA today and become part of India's most trusted network of overseas education consultants.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium bg-white text-slate-900 hover:bg-slate-100">
            Apply for Membership →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
