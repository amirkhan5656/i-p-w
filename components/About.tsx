import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { SkillsList } from "./skills-list";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main id="about" className="flex min-h-screen flex-col py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                About Me
              </h1>
              <p className="text-lg mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                I&apos;m a{" "}
                <span className="underline decoration-primary decoration-2 underline-offset-2">
                  passionate digital creator
                </span>{" "}
                focused on building
                <span className="underline decoration-primary decoration-2 underline-offset-2">
                  {" "}
                  beautiful, functional websites
                </span>{" "}
                and applications that solve{" "}
                <span className="underline decoration-primary decoration-2 underline-offset-2">
                  real problems
                </span>{" "}
                for businesses and individuals.
              </p>
              <p className="text-lg mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                While I&apos;m new to freelancing, I bring{" "}
                <span className="underline decoration-primary decoration-2 underline-offset-2">
                  fresh perspectives
                </span>
                ,
                <span className="underline decoration-primary decoration-2 underline-offset-2">
                  {" "}
                  up-to-date technical knowledge
                </span>
                , and a{" "}
                <span className="underline decoration-primary decoration-2 underline-offset-2">
                  commitment to delivering exceptional results
                </span>{" "}
                for every client.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              My Skills & Learning Journey
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Frontend */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold pb-2 border-b border-gray-200 dark:border-gray-700 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                  Frontend Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <SkillsList
                  skills={[
                    {
                      name: "React",
                      icon: "react",
                      description: "Component-based UI development",
                    },
                    {
                      name: "Next.js",
                      icon: "nextjs",
                      description: "React framework for production",
                    },
                    {
                      name: "TypeScript",
                      icon: "typescript",
                      description: "Type-safe JavaScript",
                    },
                    {
                      name: "Tailwind CSS",
                      icon: "tailwind",
                      description: "Utility-first CSS framework",
                    },
                  ]}
                />
              </CardContent>
            </Card>

            {/* Card 2: Backend + Deployment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold pb-2 border-b border-gray-200 dark:border-gray-700 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                  Backend & Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SkillsList
                  skills={[
                    {
                      name: "Node.js",
                      icon: "nodejs",
                      description: "JavaScript runtime",
                    },
                    {
                      name: "Supabase",
                      icon: "supabase",
                      description: "Open source Firebase alternative",
                    },
                    {
                      name: "NeonDB",
                      icon: "neondb",
                      description: "Advanced relational database",
                    },
                  ]}
                />
              </CardContent>

              <CardHeader>
                <CardTitle className="text-xl font-semibold pb-2 border-b border-gray-200 dark:border-gray-700 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                  Development & Deployment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SkillsList
                  skills={[
                    {
                      name: "Vercel",
                      icon: "vercel",
                      description: "Deployment platform",
                    },
                  ]}
                />
              </CardContent>
            </Card>

            {/* Card 3: Good Practices */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold pb-2 border-b border-gray-200 dark:border-gray-700 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                  Good Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SkillsList
                  skills={[
                    {
                      name: "Figma",
                      icon: "figma",
                      description: "Design and prototyping tool",
                    },
                    {
                      name: "Responsive Design",
                      icon: "responsive",
                      description: "Multi-device compatibility",
                    },
                    {
                      name: "Accessibility",
                      icon: "accessibility",
                      description: "WCAG compliance",
                    },
                    {
                      name: "SEO",
                      icon: "seo",
                      description: "Search engine optimization",
                    },
                    {
                      name: "UI/UX",
                      icon: "uiux",
                      description: "User-centered design",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education & Training */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Educational Journey
          </h2>

          <div className="space-y-12">
            {/* Timeline structure for education */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary/80 to-primary/20"></div>

              {/* Education entry */}
              <div className="relative pl-6 sm:pl-8 pb-2">
                {/* Timeline node */}
                <div className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-primary"></div>

                <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <GraduationCap className="h-5 w-5 flex-shrink-0" />
                    <h3 className="text-xl font-semibold">
                      Bachelor of Science in Computer Science
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-3 md:space-y-0">
                      <div className="flex flex-col md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2 text-muted-foreground">
                        <div className="flex items-center gap-1.5 mb-2 md:mb-0">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span>University Name</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span>2018–2022</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <h4 className="font-medium mb-2 flex items-center gap-1.5">
                        <Award className="h-4 w-4 flex-shrink-0 text-primary" />
                        <span>Focus Areas</span>
                      </h4>
                      <p className="text-muted-foreground">
                        Web development, user interface design, and software
                        engineering principles.
                      </p>
                    </div>

                    {/* Additional achievements or courses can be added here */}
                    <div className="pt-2 border-t border-border/50 mt-4">
                      <h4 className="font-medium mb-2">Notable Coursework</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Advanced Algorithms</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Database Systems</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Human-Computer Interaction</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Software Engineering</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* You can add more education entries following the same pattern */}
              <div className="relative pl-6 sm:pl-8 pb-2">
                <div className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-primary/70"></div>

                <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <GraduationCap className="h-5 w-5 flex-shrink-0" />
                    <h3 className="text-xl font-semibold">
                      High School Diploma
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-3 md:space-y-0">
                      <div className="flex flex-col md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2 text-muted-foreground">
                        <div className="flex items-center gap-1.5 mb-2 md:mb-0">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span>High School Name</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span>2014–2018</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-muted-foreground">
                        Graduated with honors, participated in computer science
                        club and robotics team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            I&apos;m excited to learn about your project and discuss how I can
            help bring your vision to life.
          </p>
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900"
          >
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </section>
      </div>
    </main>
  );
}
