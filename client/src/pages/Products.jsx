const Products = () => {
  const products = [
    {
      name: 'Coffee',
      types: 'Arabica & Robusta',
      description: 'Premium beans from Kenya\'s finest regions, grown under climate-smart practices.',
      markets: ['Europe', 'Middle East', 'North America', 'Asia'],
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop&q=80',
      color: 'green'
    },
    {
      name: 'Tea',
      types: 'Black and Green',
      description: 'High-quality Kenyan black and green tea, carefully handpicked and processed to preserve its natural aroma, flavor, and antioxidants.',
      markets: ['Europe', 'Middle East', 'Asia', 'North America'],
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop&q=80',
      color: 'brown'
    },
    {
      name: 'Hass Avocados',
      types: 'Premium Quality',
      description: 'High-quality, GAP-compliant avocados with superior freshness and traceability.',
      markets: ['Europe (Netherlands, Spain, UK)', 'Middle East', 'Asia'],
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&h=600&fit=crop&q=80',
      color: 'green'
    },
    {
      name: 'Macadamia Nuts',
      types: 'Raw and Roasted',
      description: 'Premium raw and roasted nuts sourced sustainably from trusted farmers.',
      markets: ['Asia (China, Japan, South Korea)', 'Europe', 'North America'],
      image: 'https://images.unsplash.com/photo-1606312619070-d48b4e001c59?w=800&h=600&fit=crop&q=80',
      color: 'brown'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Products & Markets</h1>
          <p className="text-xl text-green-100">
            Premium-quality exports sourced sustainably from Kenyan farmers
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow ${
                  product.color === 'green' ? 'border-l-4 border-green-600' : 'border-l-4 border-brown-600'
                }`}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`p-8 ${product.color === 'green' ? 'bg-green-50 dark:bg-green-900/20' : 'bg-brown-50 dark:bg-brown-900/20'}`}>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h2>
                    <p className="text-accent dark:text-accent-light font-medium mb-3">{product.types}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Export Markets:</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.markets.map((market, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm ${
                              product.color === 'green'
                                ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100'
                                : 'bg-brown-100 dark:bg-brown-800 text-brown-800 dark:text-brown-100'
                            }`}
                          >
                            {market}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

