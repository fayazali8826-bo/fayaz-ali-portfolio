import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: 'AI Outreach Infrastructure',
      category: 'Automation',
      description: 'Built scalable automation workflows integrating AI personalization, lead enrichment, CRM synchronization, and outbound sequencing.',
      tech: ['n8n', 'Make.com', 'APIs', 'Webhooks', 'AI Prompt Engineering'],
      gradient: 'from-cyan-500 to-blue-600',
      status: 'Live',
    },
    {
      title: 'AI Automation Systems',
      category: 'SaaS',
      description: 'Designed automation systems connecting inbound lead capture, outbound follow-up workflows, AI processing, and business operations.',
      tech: ['Next.js', 'Python', 'PostgreSQL', 'AI Integration', 'Webhooks'],
      gradient: 'from-violet-500 to-purple-600',
      status: 'Live',
    },
    {
      title: 'ZIZ AI Platform',
      category: 'Web Application',
      description: 'AI-powered automation platform concept focused on simplifying workflow automation, integrations, AI agents, and operational automation.',
      tech: ['React', 'Node.js', 'AI APIs', 'Workflow Builder', 'CRM'],
      gradient: 'from-fuchsia-500 to-pink-600',
      status: 'Live',
    },
    {
      title: 'Workflow Orchestration',
      category: 'Automation',
      description: 'Multi-platform integrations and lead routing logic for efficient business process automation and streamlined operations.',
      tech: ['Python', 'APIs', 'Automation', 'Integration', 'Analytics'],
      gradient: 'from-emerald-500 to-teal-600',
      status: 'Live',
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in AI automation, full-stack development, and scalable solutions
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="absolute inset-[1px] rounded-3xl bg-slate-900/90" />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white mb-3`}>
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Live'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all">
                    <Github className="w-4 h-4" />
                    <a href="https://github.com/fayazali8826-bo/ZIZ-AI">Code</a>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                    <ExternalLink className="w-4 h-4" />
                    <a href="https://www.zizai.live/">Live Demo</a>
                  </button>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
             <a href="https://github.com/fayazali8826-bo">View All Projects</a>  
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
