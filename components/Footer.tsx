export default function Footer() {
  return (
    <footer className="bg-section-black text-white py-8">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          Family Camp © 2026 — All Rights Reserved
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Website by{' '}
          <a
            href="https://mbgdigitalinc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 hover:text-warm-tan transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            mbgdigitalinc.com
          </a>
        </p>
      </div>
    </footer>
  )
}

