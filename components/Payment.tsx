export default function Payment() {
  return (
    <section id="payment" className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
              Payment Information
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-forest-green text-white px-8 py-4 rounded-md mb-6">
                <p className="text-3xl font-bold">R750</p>
                <p className="text-lg">per person</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-forest-green mb-3">
                  What the Fee Covers
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-forest-green mr-2">✓</span>
                    <span>All meals during the camp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-green mr-2">✓</span>
                    <span>Transportation to and from the camp site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-green mr-2">✓</span>
                    <span>All camp activities and materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-green mr-2">✓</span>
                    <span>Accommodation and facilities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-warm-tan/20 border-l-4 border-clay-brown p-6 rounded-lg">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Payment Instructions
              </p>
              <p className="text-gray-700">
                Please reach out to event organisers for payment instructions. 
                Contact details are available in the Contact section below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

