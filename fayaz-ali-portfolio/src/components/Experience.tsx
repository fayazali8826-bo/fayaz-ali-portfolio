import { useEffect, useRef, useState } from 'react'
import { Calendar, MapPin, Building2, Briefcase } from 'lucide-react'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      role: 'Founder & Full Stack AI Engineer',
      company: 'ZIZ AI',
      location: 'North Macedonia',
      period: '2025 – Present',
      description: 'Building AI-powered workflow automation systems, SaaS concepts, dashboards, and operational tools for startups and digital businesses.',
      highlights: [
        'Developed frontend and backend systems using Next.js, React, Node.js, Python, and PostgreSQL',
        'Built webhook-driven automation connecting multiple APIs, databases, AI services, and workflow platforms',
        'Implemented AI-integrated workflows, CRM integrations, and scalable operational pipelines',
        'Used modern AI-assisted coding workflows with Claude, Cursor, and AI development tooling',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'GMD Pakistan',
      location: 'Remote',
      period: '2024 – Present',
      description: 'Working on software engineering and automation-related projects for enterprise clients.',
      highlights: [
        'Assisted in workflow optimization and technical implementation tasks',
        'Contributed to development and integration processes',
        'Collaborated with cross-functional teams on complex projects',
      ],
    },
    {
      role: 'Founder & Lead',
      company: 'Google Developer Student Club (GDSC)',
      location: 'North Macedonia',
      period: '2023 – 2024',
      description: 'Leading student technology initiatives and developer communities.',
      highlights: [
        'Organized workshops and events related to AI, cloud technologies, and software development',
        'Built a growing technical community around innovation and technology',
        'Facilitated knowledge sharing and networking among developers',
      ],
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">My Journey</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Work <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-fuchsia-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transition: `all 0.6s ease ${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 z-10">
                  <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50" />
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'}`}>
                  <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-slate-400">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
