import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">

        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Professional headshot"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Me</h1>
              <p className="text-lg text-gray-600 mb-6">
                I&apos;m a passionate digital creator focused on building beautiful, functional websites and applications
                that solve real problems for businesses and individuals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                While I&apos;m new to freelancing, I bring fresh perspectives, up-to-date technical knowledge, and a
                commitment to delivering exceptional results for every client.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download Resume
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">My Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  HTML5, CSS3, JavaScript (ES6+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  React.js, Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Responsive Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Tailwind CSS, SASS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  API Integration
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Figma, Adobe XD
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Wireframing & Prototyping
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Visual Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Brand Identity
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  SEO Fundamentals
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Content Management Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Version Control (Git)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Project Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Technical Problem Solving
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Education & Training */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Education & Training</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-gray-200 pl-6 py-2">
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600">University Name, 2018-2022</p>
              <p className="mt-2">
                Focused on web development, user interface design, and software engineering principles.
              </p>
            </div>
            <div className="border-l-4 border-gray-200 pl-6 py-2">
              <h3 className="text-xl font-semibold">Advanced Web Development Certification</h3>
              <p className="text-gray-600">Online Learning Platform, 2023</p>
              <p className="mt-2">Comprehensive training in modern web development technologies and best practices.</p>
            </div>
            <div className="border-l-4 border-gray-200 pl-6 py-2">
              <h3 className="text-xl font-semibold">UI/UX Design Fundamentals</h3>
              <p className="text-gray-600">Design Institute, 2023</p>
              <p className="mt-2">
                Learned principles of user-centered design, wireframing, prototyping, and usability testing.
              </p>
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">My Work Philosophy</h3>
              <p className="text-lg text-gray-600 mb-4">
                I believe in creating digital solutions that are not just visually appealing but also functional,
                user-friendly, and aligned with business goals. My approach combines technical expertise with creative
                problem-solving to deliver results that exceed expectations.
              </p>
              <p className="text-lg text-gray-600">
                Every project begins with understanding your unique needs and objectives. I work collaboratively,
                keeping you informed at every stage and incorporating your feedback to ensure the final product reflects
                your vision.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">What Sets Me Apart</h3>
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
                    <strong>Attention to Detail:</strong> I pay close attention to every aspect of your project,
                    ensuring nothing is overlooked.
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
                    <strong>Clear Communication:</strong> I maintain open, transparent communication throughout our
                    collaboration.
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
                    <strong>Dedication to Quality:</strong> I&apos;m committed to delivering high-quality work that meets or
                    exceeds your expectations.
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
                    <strong>Continuous Learning:</strong> I stay updated with the latest technologies and trends to
                    provide innovative solutions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            I&apos;m excited to learn about your project and discuss how I can help bring your vision to life.
          </p>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </section>
      </div>
    </main>
  )
}
