import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Connecting Kenyan Farmers to the World
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Premium Coffee & Horticultural Exports, Sustainably Sourced.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Agrifine Consulting Ltd specializes in Arabica and Robusta coffee, Hass avocados,
                and macadamia nuts. We partner with smallholder farmers to promote climate-smart,
                sustainable production practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary text-center">
                  Explore Products
                </Link>
                <Link to="/contact" className="btn-outline text-center">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-96 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80"
                alt="Sustainable agriculture in Kenya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Agrifine Consulting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-green-50 dark:bg-green-900/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-semibold text-lg mb-2 dark:text-white">Climate-Smart</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Sustainable sourcing practices that protect our environment
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-brown-50 dark:bg-brown-900/20">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-lg mb-2 dark:text-white">Direct Partnerships</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Working directly with smallholder farmers and cooperatives
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50 dark:bg-green-900/20">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-semibold text-lg mb-2 dark:text-white">Traceable Quality</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Consistently high-quality products with full traceability
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-brown-50 dark:bg-brown-900/20">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="font-semibold text-lg mb-2 dark:text-white">Ethical Trade</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Commitment to fair trade and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Premium Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Coffee',
                type: 'Arabica & Robusta',
                image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop&q=80'
              },
              {
                name: 'Tea',
                type: 'Black & Green',
                image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop&q=80'
              },
              {
                name: 'Avocados',
                type: 'Hass Variety',
                image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=400&fit=crop&q=80'
              },
              {
                name: 'Macadamia',
                type: 'Raw & Roasted',
                image: 'https://images.unsplash.com/photo-1606312619070-d48b4e001c59?w=600&h=400&fit=crop&q=80'
              },
            ].map((product) => (
              <div key={product.name} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{product.type}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

