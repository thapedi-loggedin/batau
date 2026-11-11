export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-warm-tan/50 z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/WhatsApp%20Image%202026-11-29%20at%2023.21.35_777c97ef.jpg')",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-block p-6 rounded-lg">
            <img 
              src="/family-camp-logo.svg" 
              alt="Family Camp Logo" 
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
          Preparing boys and men for real life: leadership, values, and purpose.
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-md">
          A traditional, disciplined camp experience that builds character through discipline, respect, and brotherhood.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://form.jotform.com/253108490365558"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-forest-green text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-dark-olive transition-colors shadow-lg"
          >
            Register for 2026
          </a>
          <a
            href="#donate"
            className="inline-block bg-white text-forest-green px-8 py-4 rounded-md font-semibold text-lg border-2 border-forest-green hover:bg-forest-green hover:text-white transition-colors shadow-lg"
          >
            Support a Camper
          </a>
        </div>
      </div>
    </section>
  )
}

