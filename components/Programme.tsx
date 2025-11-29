const schedule = [
  {
    day: 'Day 1',
    activities: [
      { time: 'Morning', description: 'Arrival and camp setup' },
      { time: 'Afternoon', description: 'Opening ceremony and welcome session' },
      { time: 'Afternoon', description: 'Team selection and introductions' },
      { time: 'Evening', description: 'Orientation and camp rules briefing' },
    ],
  },
  {
    day: 'Day 2',
    activities: [
      { time: 'Early Morning', description: 'Early rise and morning routine' },
      { time: 'Morning', description: 'Livestock care and agricultural activities' },
      { time: 'Midday', description: 'Hike and outdoor exploration' },
      { time: 'Afternoon', description: 'Leadership and values sessions' },
      { time: 'Evening', description: 'Team games and competitions' },
      { time: 'Night', description: 'Karaoke and community bonding' },
    ],
  },
  {
    day: 'Day 3',
    activities: [
      { time: 'Morning', description: 'Reflection session and group discussions' },
      { time: 'Midday', description: 'Closing ceremony and acknowledgments' },
      { time: 'Afternoon', description: 'Camp cleanup and departure' },
    ],
  },
]

export default function Programme() {
  return (
    <section id="programme" className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
            Programme Schedule
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A structured three-day experience designed to build character, foster community, and develop leadership skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {schedule.map((day, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-forest-green"
            >
              <h3 className="text-2xl font-serif font-bold text-forest-green mb-6">
                {day.day}
              </h3>
              <div className="space-y-4">
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="border-l-2 border-warm-tan pl-4">
                    <p className="text-sm font-semibold text-clay-brown uppercase tracking-wide">
                      {activity.time}
                    </p>
                    <p className="text-gray-700 mt-1">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

