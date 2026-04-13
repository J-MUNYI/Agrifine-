import { Link } from 'react-router-dom';
import useScrollReveal from '../utils/useScrollReveal';
import useCounter from '../utils/useCounter';

import coffeeArabicaImg from '../assets/products/coffee-arabica.jpg';
import coffeeRobustaImg from '../assets/products/coffee-robusta.jpg';
import teaKerichoImg from '../assets/products/tea-kericho.jpg';
import avocadoHassImg from '../assets/products/avocado-hass.jpg';
import macadamiaImg from '../assets/products/macadamia.jpg';

/* ─── Animated stat item ─── */
const StatItem = ({ target, suffix, label }) => {
  const { count, ref } = useCounter(target, 1800);
  return (
    <div ref={ref} className="text-center px-6 py-4 stat-card">
      <div className="text-4xl font-extrabold text-white">
        {count}{suffix}
      </div>
      <div className="text-green-200 text-sm font-medium mt-1">{label}</div>
    </div>
  );
};

const features = [
  {
    icon: '🌍',
    title: 'Climate-Smart',
    desc: 'Sustainable sourcing practices that protect our environment',
    delay: '',
  },
  {
    icon: '🤝',
    title: 'Direct Partnerships',
    desc: 'Working directly with smallholder farmers and cooperatives',
    delay: 'reveal-delay-1',
  },
  {
    icon: '✅',
    title: 'Traceable Quality',
    desc: 'Consistently high-quality products with full traceability',
    delay: 'reveal-delay-2',
  },
  {
    icon: '💚',
    title: 'Ethical Trade',
    desc: 'Commitment to fair trade and customer satisfaction',
    delay: 'reveal-delay-3',
  },
];

const products = [
  {
    name: 'Arabica Coffee',
    type: 'Kenya AA',
    image: coffeeArabicaImg,
  },
  {
    name: 'Robusta Coffee',
    type: 'Bold Profile',
    image: coffeeRobustaImg,
  },
  {
    name: 'Tea',
    type: 'Black & Green',
    image: teaKerichoImg,
  },
  {
    name: 'Avocados',
    type: 'Hass Variety',
    image: avocadoHassImg,
  },
  {
    name: 'Macadamia',
    type: 'Raw & Roasted',
    image: macadamiaImg,
  },
];

const Home = () => {
  const featuresRef = useScrollReveal();
  const productsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 img-zoom-wrap">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&h=900&fit=crop&q=85"
            alt="Sustainable agriculture in Kenya"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/15 text-green-200 border border-green-200/30 mb-6 animate-fade-in">
              🌿 Kenyan Agricultural Exports
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-up"
              style={{ animationDuration: '0.9s' }}
            >
              Connecting<br />
              <span className="text-green-400">Kenyan Farmers</span><br />
              to the World
            </h1>
            <p
              className="text-xl text-green-100 mb-4 animate-fade-up font-medium"
              style={{ animationDelay: '0.15s', animationDuration: '0.9s' }}
            >
              Premium Coffee & Horticultural Exports, Sustainably Sourced.
            </p>
            <p
              className="text-base text-green-200/80 mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.28s', animationDuration: '0.9s' }}
            >
              Agrifine Consulting Ltd specializes in Arabica and Robusta coffee, Hass avocados,
              and macadamia nuts. We partner with smallholder farmers to promote climate-smart,
              sustainable production practices.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.4s', animationDuration: '0.9s' }}
            >
              <Link to="/products" className="btn-primary text-center text-base px-8 py-3">
                Explore Products
              </Link>
              <Link to="/contact" className="btn-outline-white text-center text-base px-8 py-3">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-green-200/70 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-xs tracking-widest uppercase font-semibold">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-primary dark:bg-green-800 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-green-500/40">
            <StatItem target={500} suffix="+" label="Farmers Partnered" />
            <StatItem target={4} suffix="+" label="Export Markets" />
            <StatItem target={10} suffix="+" label="Years Experience" />
            <StatItem target={4} suffix="" label="Premium Products" />
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="py-24 bg-white dark:bg-gray-900" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-badge reveal">Our Difference</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white reveal reveal-delay-1">
              Why Choose Agrifine Consulting?
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto reveal reveal-delay-2">
              We bridge the gap between Kenyan smallholder farmers and global premium markets
              with excellence and integrity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className={`reveal ${f.delay} group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-green-200 dark:hover:border-green-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Preview ── */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-badge reveal">What We Export</span>
            <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white reveal reveal-delay-1">
              Our Premium Products
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product, i) => (
              <div
                key={product.name}
                className={`reveal reveal-scale reveal-delay-${i + 1} group bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="h-52 img-zoom-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-accent dark:text-accent-light text-sm font-medium mt-1">{product.type}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal" ref={null}>
            <Link to="/products" className="btn-primary px-10 py-3 text-base">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-28 overflow-hidden" ref={ctaRef}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1400&h=600&fit=crop&q=80"
            alt="Kenyan tea farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/75" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 reveal">
            Ready to Source Premium Kenyan Products?
          </h2>
          <p className="text-green-200 text-lg mb-10 reveal reveal-delay-1">
            Join global buyers who trust Agrifine for quality, traceability, and ethical sourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-delay-2">
            <Link to="/contact" className="btn-primary px-10 py-3 text-base">
              Get in Touch
            </Link>
            <Link to="/about" className="btn-outline-white px-10 py-3 text-base">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
