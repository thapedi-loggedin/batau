'use client'

import { useState } from 'react'
import Link from 'next/link'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  buttonText: string
  buttonHref: string
}

function AccordionItem({ title, children, buttonText, buttonHref }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="border border-soft-stone rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-light-bg transition-colors"
      >
        <h3 className="text-xl font-serif font-bold text-forest-green">{title}</h3>
        <svg
          className={`w-5 h-5 text-forest-green transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <div className="text-gray-700 leading-relaxed">{children}</div>
          <a
            href={buttonHref}
            onClick={(e) => handleSmoothScroll(e, buttonHref)}
            className="inline-block bg-forest-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-olive transition-colors"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function FutureCampsPage() {
  const [whyExpandingOpen, setWhyExpandingOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-light-bg">
      <nav aria-label="Page navigation" className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-forest-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-olive transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-green"
        >
          <span aria-hidden="true">←</span>
          Back to Home
        </Link>
      </nav>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-forest-green mb-6">
            The Family Camp Movement Is Growing
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are developing new camps to serve more people, more families, and more communities — each one grounded in discipline, tradition, and purpose.
          </p>
        </div>
      </section>

      {/* Future Camps Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-4">
              Future Camps
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore the upcoming camps we're developing. Each one is designed with purpose, community, and growth in mind.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <AccordionItem
              title="Basadi & Bananyana Camp (Women & Girls)"
              buttonText="Become a Facilitator"
              buttonHref="#reachout"
            >
              A dedicated space for women and girls to build confidence, strength, and emotional resilience. This camp blends mentorship, wellness practices, guided reflections, self-defense basics, and community circles that honour sisterhood and identity.
            </AccordionItem>

            <AccordionItem
              title="Skills & Mastery Camp (Teens & Young Adults)"
              buttonText="Offer Your Skills"
              buttonHref="#reachout"
            >
              A hands-on camp focused on practical, real-life skills. Young people will learn craftsmanship, digital basics, photography, car maintenance, financial literacy, teamwork, and leadership through guided workshops and challenges.
            </AccordionItem>

            <AccordionItem
              title="Family Camp (Parents, Kids & Extended Family)"
              buttonText="Help Build This Camp"
              buttonHref="#reachout"
            >
              A joyful, light-hearted camp built for families who want to reconnect and grow together. Activities include shared challenges, cookout competitions, storytelling circles, team games, and intergenerational bonding exercises.
            </AccordionItem>

            <AccordionItem
              title="Recovery & Drug-Free Lifestyle Camp"
              buttonText="Support This Vision"
              buttonHref="#reachout"
            >
              A positive, supportive environment for individuals rebuilding structure and clarity in their lives. This camp focuses on identity, emotional reset, routine, accountability, guided reflection, fitness, and community support without judgement.
            </AccordionItem>

            <AccordionItem
              title="Youth Adventure Camp (Kids & Teens)"
              buttonText="Volunteer or Assist"
              buttonHref="#reachout"
            >
              A high-energy outdoor experience designed for fun, challenge, and teamwork. Includes obstacle courses, water games, sports challenges, creative sessions, hikes, fire-circle nights, and team competitions.
            </AccordionItem>

            <AccordionItem
              title="Leadership & Warrior Camp (Invite-Only)"
              buttonText="Become a Leader"
              buttonHref="#reachout"
            >
              A focused development camp for building the next generation of facilitators and role models. This camp prioritizes discipline, integrity, service, communication, tactical leadership drills, physical conditioning, and character work.
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Why We're Expanding Section */}
      <section className="py-16 md:py-24 bg-earth-beige">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border border-soft-stone rounded-lg overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setWhyExpandingOpen(!whyExpandingOpen)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-light-bg transition-colors"
              >
                <h3 className="text-xl font-serif font-bold text-forest-green">Why We're Expanding</h3>
                <svg
                  className={`w-5 h-5 text-forest-green transition-transform duration-300 ${whyExpandingOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  whyExpandingOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Family Camp has shown the power of community, structure, and shared purpose. As more families, women, teens, and young adults ask for spaces like this, we're expanding deliberately — guided by elders, experience, and the needs of our people. These new camps are coming in phases, with strong leadership and careful planning.
                  </p>
                  <a
                    href="#reachout"
                    onClick={(e) => handleSmoothScroll(e, '#reachout')}
                    className="inline-block bg-forest-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-olive transition-colors"
                  >
                    Join the Movement
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Out Section */}
      <section id="reachout" className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-forest-green mb-6">
            Reach Out
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            We are inviting mentors, facilitators, volunteers, and activity leaders from every background to help shape the next chapter of the Family Camp Movement. If any of these camps interest you — or if you have skills to offer — please reach out to the organizers.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-forest-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dark-olive transition-colors shadow-lg"
          >
            Contact Organisers
          </Link>
        </div>
      </section>
    </div>
  )
}

