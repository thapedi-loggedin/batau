const rules = [
  {
    title: 'Respect for Authority',
    description: 'All campers must show unwavering respect to camp leaders, mentors, and staff. Disrespectful behavior will not be tolerated.',
  },
  {
    title: 'Zero-Tolerance Misconduct',
    description: 'Violence, bullying, substance use, or any form of harmful behavior results in immediate dismissal from camp.',
  },
  {
    title: 'Phone Policy',
    description: 'Mobile phones and electronic devices are restricted. Devices will be collected upon arrival and returned at departure. Emergency contact information will be provided to families.',
  },
  {
    title: 'Punctuality',
    description: 'All activities begin on time. Late arrivals disrupt the camp experience and show disrespect to the community. Be ready and present at all scheduled times.',
  },
  {
    title: 'Mandatory Participation',
    description: 'All campers are expected to participate fully in all scheduled activities unless excused for medical reasons by camp staff.',
  },
  {
    title: 'Safety Rules',
    description: 'Follow all safety guidelines without exception. Report any concerns immediately to camp leaders. Your safety and the safety of others is paramount.',
  },
  {
    title: 'Cleanliness',
    description: 'Maintain personal hygiene and keep living spaces clean. Everyone shares responsibility for the camp environment.',
  },
  {
    title: 'Brotherhood Principles',
    description: 'Support your fellow campers. Build each other up. No one is left behind. We succeed together as a community.',
  },
]

export default function Rules() {
  return (
    <section id="rules" className="py-16 md:py-24 bg-section-black text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Rules & Guiding Principles
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            BATAU Camp maintains strict standards to ensure a safe, respectful, and transformative experience for all participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-gray-900 border-l-4 border-forest-green p-6 rounded-lg"
            >
              <h3 className="text-xl font-serif font-bold text-white mb-3">
                {rule.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-white">
            By attending BATAU Camp, you agree to abide by these rules and principles. 
            Failure to comply may result in dismissal from camp.
          </p>
        </div>
      </div>
    </section>
  )
}

