const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Agrifine Consulting</h1>
          <p className="text-xl text-green-100">
            Professional Excellence, Environmental Responsibility, Market Innovation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Agrifine Consulting Ltd is a Kenyan agricultural export enterprise specializing in
              Arabica and Robusta coffee, Hass avocados, and macadamia nuts. We partner with
              smallholder farmers and cooperatives to promote climate-smart, sustainable, and
              traceable production practices that meet international quality standards.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Through professional excellence, environmental responsibility, and market innovation,
              Agrifine delivers products that reflect authenticity, quality, and integrity.
            </p>

            {/* Mission */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To deliver premium-quality coffee and horticultural products to global markets while
                empowering farmers through fair trade, climate-smart, and sustainable sourcing
                practices that enhance resilience and value addition across value chains.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-brown-50 dark:bg-brown-900/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To create a resilient and inclusive agricultural export sector that empowers farmers,
                promotes climate-smart practices, and delivers world-class products to global markets.
              </p>
            </div>

            {/* Core Values */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Professionalism</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Highest standards in all operations, ensuring efficiency, transparency, and excellence.
                  </p>
                </div>
                <div className="border-l-4 border-brown-600 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Integrity</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Ethical and responsible business practices, fostering trust with farmers, partners, and customers.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Customer-Centricity</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Delivering premium-quality, sustainably produced products that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

