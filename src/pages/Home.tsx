import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowRight, BarChart3, Globe, Zap, CheckCircle2 } from 'lucide-react';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Expand Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black/60">Legacy.</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <p className="text-lg md:text-2xl text-black/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              We scale brands using AI-powered advertising and high-converting digital systems. 
              Data-driven precision meets elite design.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="btn-primary w-full sm:w-auto group">
              Book Your Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-secondary w-full sm:w-auto">
              Learn More
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The Transformation</h2>
            <p className="text-black/60 text-lg">Stop relying on hope marketing. We build predictable, scalable revenue engines.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1} className="p-10 border border-black/10 rounded-2xl bg-black/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">A</span>
                Where You Are
              </h3>
              <ul className="space-y-4">
                {[
                  'Inconsistent lead flow and unpredictable revenue',
                  'Wasting budget on outdated ad strategies',
                  'A website that looks good but doesn\'t convert',
                  'Guessing what works instead of using data'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="p-10 border border-black rounded-2xl bg-black text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">B</span>
                Where We Take You
              </h3>
              <ul className="space-y-4 relative z-10">
                {[
                  'Predictable, scalable customer acquisition systems',
                  'AI-optimized campaigns maximizing every dollar',
                  'High-converting digital real estate built for sales',
                  'Data-driven decisions scaling your legacy'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-black/5">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">AI-Driven Ads & Website Manufacturing</h2>
              <p className="text-lg text-black/60 mb-8 leading-relaxed">
                We don't just run ads; we engineer growth systems. By combining cutting-edge AI advertising algorithms with psychologically optimized website architecture, we create an ecosystem designed purely for conversion.
              </p>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-black/5">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">AI Campaign Scaling</h4>
                    <p className="text-black/60 text-sm">Machine learning algorithms that find your ideal customer at the lowest possible cost.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-black/5">
                    <Globe className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">High-Converting Digital Real Estate</h4>
                    <p className="text-black/60 text-sm">Websites engineered using consumer psychology to turn traffic into revenue.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-black/5">
                    <BarChart3 className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Data-Driven Optimization</h4>
                    <p className="text-black/60 text-sm">Continuous testing and refinement to ensure your ROI only moves in one direction: up.</p>
                  </div>
                </li>
              </ul>
              <Link to="/about" className="text-black font-semibold hover:underline underline-offset-4 flex items-center gap-2">
                Explore Our Methods <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-black relative shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/legacy/800/800?grayscale" 
                  alt="Abstract Data Visualization" 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <div className="text-white/60 text-xs uppercase tracking-widest mb-1">Revenue Growth</div>
                        <div className="text-white text-3xl font-bold">+342%</div>
                      </div>
                      <BarChart3 className="text-white w-8 h-8 opacity-50" />
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Ready to Scale?</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
              Stop leaving money on the table. Partner with the elite agency that guarantees performance.
            </p>
            <Link to="/book" className="btn-secondary group">
              Secure Your Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
