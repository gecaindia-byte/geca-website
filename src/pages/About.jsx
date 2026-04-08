
File 11: src/pages/About.jsx
Main page → "Add file" → "Create new file"
Filename: src/pages/About.jsx
Copy-paste:
import { Layout } from "../components/Layout";

const About = () => {
  const pillars = [
    {
      title: "Professional Association",
      features: ["Unite consultants under one body", "Promote mutual respect", "Build supportive ecosystem", "Crisis support and guidance", "Collective bargaining power"],
    },
    {
      title: "Self-Regulatory Organization",
      features: ["Foster peer-driven discipline", "Ensure market stability", "Protect professional credibility", "Uphold student ethics", "Documentation integrity"],
    },
    {
      title: "Knowledge & Practice Guild",
      features: ["Transform into knowledge professionals", "Democratize industry updates", "Share best practices", "Visa trends updates", "Ethical framework education"],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest font-medium text-blue-500 mb-4">About GECA</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
              Redefining Professional Excellence
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              The Global Education Consultants Association (GECA) was founded to address the 
              fragmented ecosystem of overseas education consultancy in India.
            </p>
            <p className="text-slate-600">
              We offer a principled alternative—a community built on fraternity, ethical self-regulation, 
              and shared knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>Our Mission</h2>
              <p className="text-slate-600">
                To redefine the professional identity of overseas education consultants in India by 
                creating a collective, ethical, and knowledge-driven ecosystem.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">👁</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>Our Vision</h2>
              <p className="text-slate-600">
                To transform individual agencies into a recognized, trusted, and mature professional 
                community, setting the gold standard for overseas education consultancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest font-medium text-blue-500 mb-4">Our Framework</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{fontFamily: 'Outfit, sans-serif'}}>
              The Three Pillars in Detail
            </h2>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
                  {pillar.title}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {pillar.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <span className="text-blue-500">✓</span>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
