import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
// import { Breadcrumb } from "@/components/breadcrumb"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Modern E-commerce Website",
      description:
        "A fully responsive e-commerce website with product catalog, shopping cart, and checkout functionality.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web Development",
      technologies: ["Next.js", "Tailwind CSS", "Stripe API"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Restaurant Ordering System",
      description: "An online ordering system for a local restaurant with menu management and order tracking.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Personal Finance Dashboard",
      description: "A dashboard for tracking personal finances, expenses, and savings goals with data visualization.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web Application",
      technologies: ["React", "Chart.js", "Firebase"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      description: "A mobile-responsive web app for tracking workouts, progress, and fitness goals.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web Application",
      technologies: ["React", "Tailwind CSS", "Local Storage API"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Photography Portfolio",
      description:
        "A minimalist portfolio website for a professional photographer with image galleries and contact form.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Blog Platform",
      description:
        "A custom blog platform with content management system, user authentication, and commenting features.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web Development",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
  ]

  return (
    <main id="portfolio" className="flex min-h-screen flex-col py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* <Breadcrumb /> */}

        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">My Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my projects demonstrating my skills in web development, design, and problem-solving.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-12">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={project.image || "/placeholder.svg?height=800&width=600"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button size="sm" asChild>
                          <Link href={project.demoUrl}>
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.codeUrl}>
                            <Github className="mr-2 h-4 w-4" /> View Code
                          </Link>
                        </Button>
                        <Button size="sm" variant="link" asChild>
                          <Link href={`/portfolio/${project.id}`}>
                            Project Details <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* All Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="mb-2">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <Button size="sm" variant="link" className="p-0" asChild>
                    <Link href={`/portfolio/${project.id}`}>
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Project Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">My Project Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">How I Approach Each Project</h3>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Discovery & Requirements</h4>
                    <p className="text-gray-600">
                      I begin by understanding your goals, target audience, and specific requirements to ensure the
                      project aligns with your vision.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Planning & Architecture</h4>
                    <p className="text-gray-600">
                      I create a detailed plan including site structure, technology stack, and timeline to guide the
                      development process.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Design & Prototyping</h4>
                    <p className="text-gray-600">
                      I design wireframes and interactive prototypes to visualize the user interface and experience
                      before development begins.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Development & Testing</h4>
                    <p className="text-gray-600">
                      I build the solution using modern technologies and best practices, with regular testing to ensure
                      quality and functionality.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold">Launch & Support</h4>
                    <p className="text-gray-600">
                      I deploy the project and provide ongoing support to ensure everything runs smoothly after launch.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Documentation & Deliverables</h3>
              <p className="text-gray-600 mb-6">
                For each project, I provide comprehensive documentation and deliverables to ensure you have everything
                you need:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p>
                    <strong>Source Code:</strong> Well-organized, commented code with version control history.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p>
                    <strong>User Documentation:</strong> Clear instructions for using and maintaining the project.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p>
                    <strong>Design Assets:</strong> All design files, including mockups, prototypes, and graphics.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p>
                    <strong>Technical Documentation:</strong> Architecture diagrams, API documentation, and setup
                    instructions.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p>
                    <strong>Training:</strong> Personalized training sessions to ensure you can effectively use and
                    manage your project.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            I&apos;m always looking for new and exciting projects to work on. Let&apos;s discuss how I can help bring your ideas
            to life.
          </p>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900">
            Start a Project
          </Button>
        </section>
      </div>
    </main>
  )
}
