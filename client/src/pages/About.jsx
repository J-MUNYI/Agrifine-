import useScrollReveal from '../utils/useScrollReveal';

const values = [
  {
    title: 'Professionalism',
    desc: 'Highest standards in all operations, ensuring efficiency, transparency, and excellence.',
    icon: '⚡',
    delay: '',
  },
  {
    title: 'Integrity',
    desc: 'Ethical and responsible business practices, fostering trust with farmers, partners, and customers.',
    icon: '🛡️',
    delay: 'reveal-delay-1',
  },
  {
    title: 'Customer-Centricity',
    desc: 'Delivering premium-quality, sustainably produced products that exceed expectations.',
    icon: '🎯',
    delay: 'reveal-delay-2',
  },
];

const About = () => {
  const heroRef = useScrollReveal();
  const missionRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const teamRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">

      {/* ── Hero Banner ── */}
      <section className="relative h-80 sm:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1400&h=600&fit=crop&q=85"
            alt="Kenyan farmland landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full" ref={heroRef}>
          <span className="section-badge reveal text-green-200 bg-white/10 border border-green-200/30">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white reveal reveal-delay-1">
            About Agrifine Consulting Limited
          </h1>
          <p className="text-green-100 text-lg mt-2 reveal reveal-delay-2">
            Professional Excellence · Environmental Responsibility · Market Innovation
          </p>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20" ref={missionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge reveal">Who We Are</span>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 reveal reveal-delay-1">
                A Trusted Name in Kenyan Agricultural Exports
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed reveal reveal-delay-2">
                Agrifine Consulting Ltd is a Kenyan agricultural export enterprise specializing in
                Arabica and Robusta coffee, Hass avocados, and macadamia nuts. We partner with
                smallholder farmers and cooperatives to promote climate-smart, sustainable, and
                traceable production practices that meet international quality standards.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed reveal reveal-delay-3">
                Through professional excellence, environmental responsibility, and market innovation,
                Agrifine delivers products that reflect authenticity, quality, and integrity.
              </p>
            </div>

            {/* Mission & Vision cards */}
            <div className="space-y-6">
              <div className="reveal reveal-right bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-lg">🧭</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  To deliver premium-quality coffee and horticultural products to global markets while
                  empowering farmers through fair trade, climate-smart, and sustainable sourcing
                  practices that enhance resilience and value addition across value chains.
                </p>
              </div>

              <div className="reveal reveal-right reveal-delay-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/40 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-lg">🌟</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  To create a resilient and inclusive agricultural export sector that empowers farmers,
                  promotes climate-smart practices, and delivers world-class products to global markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge reveal">What Drives Us</span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white reveal reveal-delay-1">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className={`reveal ${v.delay} group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1 border-t-4 border-green-500`}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{v.icon}</div>
                <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">{v.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Strip ── */}
      <section className="py-4">
        <div className="grid grid-cols-3 gap-1 h-48 sm:h-64" ref={teamRef}>
          {[
            'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop&q=80',
            'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80',
            'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&q=80',
          ].map((src, i) => (
            <div key={i} className={`reveal reveal-scale reveal-delay-${i + 1} img-zoom-wrap overflow-hidden`}>
              <img src={src} alt="Farm" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
