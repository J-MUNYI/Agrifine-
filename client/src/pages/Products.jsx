import useScrollReveal from '../utils/useScrollReveal';

import coffeeArabicaImg from '../assets/products/coffee-arabica.jpg';
import coffeeRobustaImg from '../assets/products/coffee-robusta.jpg';
import teaKerichoImg from '../assets/products/tea-kericho.jpg';
import avocadoHassImg from '../assets/products/avocado-hass.jpg';
import macadamiaImg from '../assets/products/macadamia.jpg';

const products = [
  {
    name: 'Arabica Coffee',
    types: 'Kenya AA · Specialty Grade',
    description: "Premium beans from Kenya's finest regions, grown under climate-smart practices.",
    markets: ['Europe', 'Middle East', 'North America', 'Asia'],
    image: coffeeArabicaImg,
    accent: 'green',
    icon: '☕️',
  },
  {
    name: 'Robusta Coffee',
    types: 'High Body · Strong Profile',
    description: "Carefully processed Kenyan robusta for bold blends and consistent quality at scale.",
    markets: ['Europe', 'Middle East', 'North America', 'Asia'],
    image: coffeeRobustaImg,
    accent: 'brown',
    icon: '🫘',
  },
  {
    name: 'Tea',
    types: 'Black and Green',
    description: 'High-quality Kenyan black and green tea, carefully handpicked and processed to preserve its natural aroma, flavor, and antioxidants.',
    markets: ['Europe', 'Middle East', 'Asia', 'North America'],
    image: teaKerichoImg,
    accent: 'brown',
    icon: '🫖',
  },
  {
    name: 'Hass Avocados',
    types: 'Premium Quality',
    description: 'High-quality, GAP-compliant avocados with superior freshness and traceability.',
    markets: ['Europe (Netherlands, Spain, UK)', 'Middle East', 'Asia'],
    image: avocadoHassImg,
    accent: 'green',
    icon: '🥑',
  },
  {
    name: 'Macadamia Nuts',
    types: 'Raw and Roasted',
    description: 'Premium raw and roasted nuts sourced sustainably from trusted farmers.',
    markets: ['Asia (China, Japan, South Korea)', 'Europe', 'North America'],
    image: macadamiaImg,
    accent: 'brown',
    icon: '🥜',
  },
];

const Products = () => {
  const heroRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

      {/* ── Hero Banner ── */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&h=600&fit=crop&q=85"
            alt="Premium agricultural exports"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full" ref={heroRef}>
          <span className="section-badge reveal text-green-200 bg-white/10 border border-green-200/30">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white reveal reveal-delay-1">
            Our Products & Markets
          </h1>
          <p className="text-green-100 text-lg mt-2 reveal reveal-delay-2">
            Premium-quality exports sourced sustainably from Kenyan farmers
          </p>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="py-20" ref={gridRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`reveal reveal-scale reveal-delay-${index + 1} group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Image */}
                <div className="h-64 img-zoom-wrap relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="text-3xl">{product.icon}</span>
                    <div>
                      <p className="text-white font-bold text-xl leading-tight">{product.name}</p>
                      <p className="text-white/70 text-sm">{product.types}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-7 ${product.accent === 'green'
                    ? 'border-l-4 border-green-500'
                    : 'border-l-4 border-amber-600'
                  }`}>
                  <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                      Export Markets
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.markets.map((market, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${product.accent === 'green'
                              ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200'
                              : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'
                            }`}
                        >
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Promise Banner ── */}
      <section className="py-20 bg-green-700 dark:bg-green-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">🌿</div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Every Product. Every Batch. Traceable.
          </h2>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Our traceability systems ensure that every shipment can be traced back to its farm of origin,
            giving our buyers full confidence in quality and sustainability claims.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
