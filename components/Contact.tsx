export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get in touch with us for registration, payment, sponsorship, or any questions about Family Camp 2025.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Founder and Organizer */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-serif font-bold text-forest-green mb-6">
                Contact
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  Founder and Organizer:
                </p>
                <p className="text-lg font-semibold text-forest-green">
                  Fulton Ramaphakela
                </p>
                <a
                  href="https://wa.me/27833096914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg text-gray-700 hover:text-forest-green transition-colors"
                >
                  +27 83 309 6914
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-serif font-bold text-forest-green mb-6">
                Email
              </h3>
              <a
                href="mailto:Fulton@moloko.co.za"
                className="block text-lg text-gray-700 hover:text-forest-green transition-colors"
              >
                Fulton@moloko.co.za
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-forest-green mb-4">
              Location
            </h3>
            <a
              href="https://maps.app.goo.gl/NBy1qfWHvXHoynaG9"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-gray-700 hover:text-forest-green transition-colors"
            >
              Vusumuzi Camp Site
            </a>
            <p className="text-lg text-gray-700">
              Magaliesburg, South Africa
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

