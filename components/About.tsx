const pillars = [
  {
    title: 'Discipline',
    description: 'Building self-control and accountability through structured activities and expectations.',
  },
  {
    title: 'Respect',
    description: 'Honoring authority, peers, and the camp community through mindful actions and words.',
  },
  {
    title: 'Brotherhood',
    description: 'Forging lifelong bonds through shared experiences, teamwork, and mutual support.',
  },
  {
    title: 'Purpose',
    description: 'Discovering personal meaning and direction through reflection and guided activities.',
  },
  {
    title: 'Leadership',
    description: 'Developing the skills and character to lead with integrity and serve others.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-earth-beige">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
            About Family Camp
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Family Camp is a traditional, disciplined, multi-generational camp experience designed to prepare boys and men for real life. 
            Through structured activities, mentorship, and community living, participants develop essential life skills, values, and a 
            strong sense of purpose. Our camp brings together generations to learn, grow, and build lasting bonds of brotherhood.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-serif font-bold text-forest-green mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

