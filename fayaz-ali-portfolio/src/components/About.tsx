import { useEffect, useRef, useState } from 'react'
import { Code2, Lightbulb, Users, Rocket } from 'lucide-react'

const About = () => {
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

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Full Stack Development',
      description: 'Building end-to-end solutions with Next.js, React, Node.js, and Python',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'AI Automation',
      description: 'Creating intelligent workflows and AI-powered business solutions',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Leadership',
      description: 'Founder & Lead at GDSC, organizing tech communities and workshops',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Rapid Prototyping',
      description: 'Fast MVP development using modern AI-assisted workflows',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">About Me</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Turning Ideas Into <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Reality</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm Fayaz Ali, a <span className="text-cyan-400 font-semibold">GTM Engineer</span> and{' '}
              <span className="text-violet-400 font-semibold">AI Automation Engineer</span> based in Skopje, North Macedonia.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              As the founder of <span className="text-white font-medium">ZIZ AI</span>, I specialize in building
              AI-powered automation systems, SaaS platforms, and scalable digital products that transform
              how businesses operate.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              With a strong foundation in both frontend and backend development, I leverage cutting-edge
              technologies like Next.js, React, Node.js, Python, and PostgreSQL to deliver solutions that
              combine performance with beautiful user experiences.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              I lead the <span className="text-white font-medium">Google Developer Student Club (GDSC)</span> as
              Founder & Lead, fostering innovation and technology education in our community.
            </p>
          </div>

          {/* Highlights grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
