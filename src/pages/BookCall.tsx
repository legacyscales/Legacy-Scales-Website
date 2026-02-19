import { AnimatedSection } from '../components/AnimatedSection';
import { Calendar, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import React, { useState } from 'react';

export function BookCall() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    revenueRange: '',
    goals: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen bg-black/5">
      {/* Header */}
      <section className="pt-32 pb-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Secure Your Call</h1>
            <p className="text-xl text-white/60 font-light">
              This is an exclusive opportunity to map out your scaling strategy. We only partner with brands ready for aggressive growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Left Column: Value Prop */}
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What happens on this call?</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Audit Your Current Systems</h3>
                    <p className="text-black/60 text-sm leading-relaxed">We'll dissect your current ad campaigns and website to identify exactly where you are losing money and leaving revenue on the table.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Custom Scaling Blueprint</h3>
                    <p className="text-black/60 text-sm leading-relaxed">We'll map out a step-by-step strategy utilizing AI advertising and conversion rate optimization to scale your brand predictably.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                    <ShieldCheck className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Determine Partnership Fit</h3>
                    <p className="text-black/60 text-sm leading-relaxed">We don't take on every client. This call ensures we are the right long-term growth partners to expand your legacy.</p>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-lg font-bold mb-2 relative z-10">Strictly Confidential</h4>
                <p className="text-white/60 text-sm relative z-10">All strategies and data discussed on this call are kept 100% confidential. Your business secrets are safe with us.</p>
              </div>
            </AnimatedSection>

            {/* Right Column: Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-black/5 relative">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Application Received</h3>
                    <p className="text-black/60 mb-8">Our team will review your details and reach out shortly to confirm your strategy session.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-sm font-semibold hover:underline underline-offset-4"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8 pb-8 border-b border-black/5">
                      <Calendar className="w-6 h-6 text-black/40" />
                      <h3 className="text-2xl font-bold tracking-tight">Apply for Strategy Session</h3>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-semibold text-black/80">Full Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-black/5 border border-transparent focus:border-black/20 focus:bg-white focus:ring-0 transition-colors outline-none"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-black/80">Work Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-black/5 border border-transparent focus:border-black/20 focus:bg-white focus:ring-0 transition-colors outline-none"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="businessName" className="text-sm font-semibold text-black/80">Business Name / Website URL</label>
                        <input 
                          type="text" 
                          id="businessName" 
                          name="businessName" 
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-black/5 border border-transparent focus:border-black/20 focus:bg-white focus:ring-0 transition-colors outline-none"
                          placeholder="https://yourbrand.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="revenueRange" className="text-sm font-semibold text-black/80">Current Monthly Revenue</label>
                        <select 
                          id="revenueRange" 
                          name="revenueRange" 
                          required
                          value={formData.revenueRange}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-black/5 border border-transparent focus:border-black/20 focus:bg-white focus:ring-0 transition-colors outline-none appearance-none"
                        >
                          <option value="" disabled>Select your range</option>
                          <option value="0-10k">$0 - $10,000 / mo</option>
                          <option value="10k-50k">$10,000 - $50,000 / mo</option>
                          <option value="50k-100k">$50,000 - $100,000 / mo</option>
                          <option value="100k+">$100,000+ / mo</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="goals" className="text-sm font-semibold text-black/80">What is your primary goal for the next 6 months?</label>
                        <textarea 
                          id="goals" 
                          name="goals" 
                          required
                          rows={4}
                          value={formData.goals}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-black/5 border border-transparent focus:border-black/20 focus:bg-white focus:ring-0 transition-colors outline-none resize-none"
                          placeholder="Briefly describe your scaling objectives..."
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full py-4 text-base mt-4">
                        Secure Your Call
                      </button>
                      <p className="text-center text-xs text-black/40 mt-4">
                        By submitting this form, you agree to our privacy policy.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
