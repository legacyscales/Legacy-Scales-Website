import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowRight, Target, Code2, LineChart, Megaphone, Activity } from 'lucide-react';

export function AboutServices() {
  const services = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "AI Ad Campaign Scaling",
      description: "We leverage advanced machine learning algorithms to find your most profitable customers. Our AI-driven campaigns optimize in real-time, ensuring every dollar spent maximizes your return on ad spend (ROAS)."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "High-Converting Website Development",
      description: "Your website is your digital storefront. We manufacture sleek, lightning-fast, psychologically optimized websites designed with one singular goal: turning traffic into revenue."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Funnel Optimization",
      description: "We analyze every touchpoint of your customer journey. By removing friction and optimizing conversion paths, we dramatically increase your average order value and lifetime customer value."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Brand Positioning Strategy",
      description: "We don't just run ads; we build legacies. We position your brand as the premium, undisputed leader in your market, allowing you to command higher prices and fierce loyalty."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Analytics & Data Tracking",
      description: "No more guessing. We implement elite-level tracking systems so you know exactly where your revenue is coming from, allowing for aggressive, data-backed scaling decisions."
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-32 pb-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Who We Are</h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Built on performance, data, and scalable systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                We are long-term growth partners, not just marketers.
              </h2>
              <div className="space-y-6 text-lg text-black/70 font-light leading-relaxed">
                <p>
                  Legacy Scales was founded on a simple premise: most agencies focus on vanity metrics, while we focus purely on revenue and scale.
                </p>
                <p>
                  Our expertise lies at the intersection of AI ad campaigns and deep consumer psychology. We understand that driving traffic is only half the battle; converting that traffic requires a meticulously engineered digital system.
                </p>
                <p>
                  We don't guess. We use data. We don't hope. We execute. When you partner with us, you are plugging into a proven, scalable infrastructure designed to expand your legacy.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black/5">
                <img 
                  src="https://picsum.photos/seed/agency/800/1000?grayscale" 
                  alt="Team Strategy Session" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding bg-black/5 border-t border-black/5">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">What We Offer</h2>
            <p className="text-black/60 text-lg">A comprehensive ecosystem for aggressive brand scaling.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 0.1}
                className="bg-white p-10 rounded-2xl border border-black/5 hover:border-black/20 transition-colors shadow-sm hover:shadow-xl group"
              >
                <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center text-black mb-8 group-hover:bg-black group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-black/60 leading-relaxed text-sm">
                  {service.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-4xl font-bold tracking-tight mb-8">Ready to dominate your market?</h2>
            <Link to="/book" className="btn-primary group">
              Book Your Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
