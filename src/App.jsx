import './App.css'
import { useState, useEffect } from 'react'
import psuLogo from './assets/psu.png'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .tech-tag, .contact-btn')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  const projects = [
    {
      title: 'Interactive Portfolio',
      description: 'A dynamic React-based portfolio with interactive animations and a clean UI.',
      tech: ['React', 'CSS', 'JavaScript'],
      link: 'https://ryan9987.github.io'
    },
    {
      title: 'Fractional Currency Website',
      description: 'A full-stack platform for a nonprofit that provides secure member access, resources, and newsletter archives.',
      tech: ['Express', 'MongoDB', 'Node.js', "CSS", "JavaScript", "HTML"],
      link: 'https://fractional-currency-fe.onrender.com/'
    },
    {
      title: 'Penn State Marketplace (In Progress)',
      description: 'A full-stack marketplace for Penn State students that features secure PSU email verification, categorized listings, and local exchange tools.',
      tech: ['React', 'TypeScript', 'Supabase', "Node.js", "Express"],
      // link:
    }
  ]

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${!isHovering ? 'idle' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
      
      <div className="content-wrapper">
        <header className="app-header">
          <div className="header-text">
            <h1>Ryan O'Connor</h1>
            <div className="penn-state-info">
              <img src={psuLogo} alt="Penn State Logo" className="penn-state-logo" />
              <p>3rd Year Computer Science Student at Penn State</p>
            </div>
          </div>
          <nav className="social-links">
            <a href="https://www.linkedin.com/in/ryan-ocon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/ryan9987" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:oconnorr709@gmail.com">Email</a>
          </nav>
        </header>

        <main className="app-main">
          <section id="about" className="about-section">
            <h2>About Me</h2>
            <p>I’m a computer science student at Penn State with a strong foundation in software engineering and a growing interest in web development. I enjoy tackling complex problems, exploring new technologies, and turning ideas into practical solutions.</p>
          </section>

          <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="contact-section">
            <h2>Get In Touch</h2>
            <p>I'm always excited to connect with new people. Whether you have a project idea, a question, or just want to say hi, feel free to reach out!</p>
            <a href="mailto:ryan@example.com" className="contact-btn">Say Hello</a>
          </section>
        </main>

        <footer className="app-footer">
          <p>&copy; 2025 Ryan O'Connor. Built with React.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
