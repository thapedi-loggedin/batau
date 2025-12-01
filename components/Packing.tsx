const categories = [
  {
    title: 'Sleeping',
    items: [
      'Sleeping bag or blankets',
      'Pillow',
      'Sleeping mat or air mattress',
    ],
  },
  {
    title: 'Clothing',
    items: [
      'Comfortable outdoor clothing',
      'Warm layers (jacket, fleece)',
      'Extra socks and underwear',
      'Hat and sun protection',
      'Sturdy closed-toe shoes',
      'Closed toe shoes',
      'Flip-flops',
      'Rain jacket (if needed)',
    ],
  },
  {
    title: 'Toiletries',
    items: [
      'Toothbrush and toothpaste',
      'Soap and shampoo',
      'Towel',
      'Bath towel',
      'Sunscreen',
      'Insect repellent',
      'Personal hygiene items',
    ],
  },
  {
    title: 'Gear',
    items: [
      'Water bottle',
      'Flashlight or headlamp',
      'Notebook and pen',
      'Reading material',
      'Sunglasses',
      'Personal medication (if required)',
    ],
  },
]

export default function Packing() {
  return (
    <section id="packing" className="py-16 md:py-24 bg-earth-beige">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
            What to Bring
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Please pack the following items to ensure a comfortable and prepared camp experience.
          </p>
          <p className="text-lg font-medium text-clay-brown italic">
            If you don't have something, don't worry. Reach out to us and we'll help you prepare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-serif font-bold text-forest-green mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 flex items-start">
                    <span className="text-forest-green mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

