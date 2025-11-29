export default function Donate() {
  return (
    <section id="donate" className="py-16 md:py-24 bg-earth-beige">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
            Support a Camper
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Every young man deserves the opportunity to experience growth, leadership, and brotherhood. 
            Many boys and men who would benefit from BATAU Camp face financial barriers that prevent them from attending.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Your sponsorship can change a life. By supporting a camper, you're investing in their future—helping them 
            develop discipline, respect, purpose, and the leadership skills they need to succeed in life. You're giving 
            them the chance to be part of a community that builds character and forges lasting bonds.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-semibold">
            Together, we can ensure that no one is left behind. Your generosity makes transformation possible.
          </p>

          <a
            href="#contact"
            className="inline-block bg-forest-green text-white px-10 py-5 rounded-md font-semibold text-lg hover:bg-dark-olive transition-colors shadow-lg mb-8"
          >
            Support a Camper
          </a>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              How to Support
            </p>
            <p className="text-gray-700">
              Please reach out to event organisers using the contact information below to arrange sponsorship. 
              We'll connect you with a camper in need and provide payment instructions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

