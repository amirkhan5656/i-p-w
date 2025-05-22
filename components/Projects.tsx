import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
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
      description:
        "An online ordering system for a local restaurant with menu management and order tracking.",
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
      description:
        "A dashboard for tracking personal finances, expenses, and savings goals with data visualization.",
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
      description:
        "A mobile-responsive web app for tracking workouts, progress, and fitness goals.",
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
  ];

  return (
    <main
      id="portfolio"
      className="flex min-h-screen flex-col py-12 px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        {/* <Breadcrumb /> */}

        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            My Portfolio
          </h1>
          <p className="text-lg max-w-2xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            A showcase of my projects demonstrating my skills in web
            development, design, and problem-solving.
          </p>
        </section>

        {/* All Projects */}
        <section className="mb-20">
          {/* <h2 className="text-3xl font-bold mb-8">All Projects</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2">
                    <span className="inline-block bg-gray-100 text-xs px-2 py-1 rounded-full border border-black dark:border-white bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                    {project.description}
                  </p>
                  {/* start from here */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white px-2 py-1 rounded"
                        >
                          <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                            {tech}
                          </span>
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
              </Card>
            ))}
          </div>
        </section>


        {/* CTA Section */}
        <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            I&apos;m always looking for new and exciting projects to work on.
            Let&apos;s discuss how I can help bring your ideas to life.
          </p>
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900"
          >
            Get a Website Revamp or Build a New Site
          </Button>
        </section>
      </div>
    </main>
  );
}
