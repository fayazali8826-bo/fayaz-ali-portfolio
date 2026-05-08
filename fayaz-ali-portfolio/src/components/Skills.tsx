import { useEffect, useRef, useState } from 'react'
import { Code, Database, Cpu, Cloud, Terminal, Palette } from 'lucide-react'

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Framer Motion'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Backend Development',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL', 'Express', 'FastAPI'],
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'AI & Automation',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['AI Agents', 'Workflow Automation', 'n8n', 'Make.com', 'Webhooks', 'AI Integration'],
      color: 'from-fuchsia-500 to-pink-500',
    },
    {
      title: 'Database & Storage',
      icon: <Database className="w-6 h-6" />,
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Prisma', 'Data Modeling', 'SQL'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Vercel', 'AWS', 'Docker', 'Git', 'CI/CD', 'Linux'],
      color: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Design & UI',
      icon: <Palette className="w-6 h-6" />,
      skills: ['Responsive Design', 'UI/UX', 'Figma', 'Animations', 'Accessibility', 'Prototyping'],
      color: 'from-rose-500 to-red-500',
    },
  ]

  const tools = ['Claude AI', 'Cursor', 'GitHub', 'VS Code', 'Postman', 'Notion', 'Slack', 'Linear']

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">Skills & Tech</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Technologies I use to build modern, scalable, and beautiful digital products
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-transparent transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-[1px] mb-6`}>
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-lg font-medium text-slate-400 mb-6">Tools & Platforms I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
