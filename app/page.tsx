"use client";

import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Clock,
  Send,
  Plus,
  Minus,
  CheckCircle,
  FileText,
  CreditCard,
  Globe,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  ExternalLink,
} from "lucide-react";
import { PROJECTS } from "@/data/resume";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { SkillsList } from "@/components/skills-list";
import { useState, useEffect } from "react";
import { ShimmerButtonDemo } from "@/components/ShimmerButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [pages, setPages] = useState(1);
  const [revisions, setRevisions] = useState(2);
  const [deliveryDays, setDeliveryDays] = useState(7);
  const [features, setFeatures] = useState({
    contentUpload: true,
    responsiveDesign: true,
    sourceCode: true,
    seo: false,
    analytics: false,
    contactForm: false,
    cms: false,
  });
  const [totalPrice, setTotalPrice] = useState(100);

  // Calculate price based on selections
  useEffect(() => {
    // Base price calculation
    let price = 100; // Starting price

    // Pages (each additional page costs $75)
    price += (pages - 1) * 75;

    // Revisions (each additional revision costs $50)
    price += (revisions - 1) * 50;

    // Faster delivery (standard is 7 days)
    if (deliveryDays < 7) {
      price += (7 - deliveryDays) * 30; // $30 per day faster
    }

    // Additional features
    if (features.seo) price += 75;
    if (features.analytics) price += 50;
    if (features.contactForm) price += 60;
    if (features.cms) price += 150;

    setTotalPrice(price);
  }, [pages, revisions, deliveryDays, features]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your server or a form service
      // await new Promise((resolve) => setTimeout(resolve, 1500))
      // Create a new FormData object from the state
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("subject", formData.subject);
      form.append("message", formData.message);

      // Pass the FormData object to the server action
      console.log("Form submitted:", formData);
      //   const response = await submitContactForm(form);

      //   if (response.error) {
      //     setSubmitError(response.error);
      //   } else {
      //     setSubmitSuccess(true);
      //     setFormData({ name: "", email: "", subject: "", message: "" });
      //   }
    } catch (error) {
      setSubmitError(
        "There was an error submitting your message. Please try again." + error
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="flex flex-col min-h-screen px-2 md:px-8">
      <HeroSection />
      <div className="sm:mx-auto max-w-6xl">
        {/* About Me Section */}
        <section id="about" className="mx-2">
          {/* Hero Section */}
          <div className="container mx-auto mb-20">
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
          {/* Skills Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              My Skills & Learning Journey
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
          </div>
          {/* Education & Training */}
          <div className="py-12 mb-10">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
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
                          Graduated with honors, participated in computer
                          science club and robotics team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center mb-20">
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
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="mx-2">
          {/* Hero Section */}
          <div className="container mx-auto mb-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Get in Touch
              </h1>
              <p className="text-lg mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Have a project in mind or want to learn more about my services?
                I&apos;d love to hear from you. Fill out the form below or use
                the contact information provided.
              </p>
            </div>
          </div>
          {/* Contact Section */}
          <div className="container mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <Card className="p-6 h-full">
                  <h2 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-gray-900 dark:text-gray-100 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          hello@yourname.com
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          For general inquiries and project discussions
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-gray-900 dark:text-gray-100 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Monday to Friday, 9am to 5pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-gray-900 dark:text-gray-100 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      San Francisco, CA
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div> */}
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-gray-900 dark:text-gray-100 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Response Time</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Within 24 hours
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          I strive to respond to all inquiries promptly
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                  {submitSuccess ? (
                    <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 p-4 rounded-md mb-6">
                      <h3 className="font-medium text-green-800 dark:text-green-200 mb-1">
                        Message Sent Successfully!
                      </h3>
                      <p>
                        Thank you for reaching out. I&apos;ll get back to you as
                        soon as possible.
                      </p>
                      <Button
                        className="mt-4"
                        variant="outline"
                        onClick={() => setSubmitSuccess(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, timeline, and budget..."
                          rows={6}
                          required
                        />
                      </div>
                      {submitError && (
                        <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 p-4 rounded-md">
                          {submitError}
                        </div>
                      )}
                      <ShimmerButtonDemo type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white dark:text-gray-900"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </>
                        )}
                      </ShimmerButtonDemo>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="mx-2">
          {/* Service Hero Section */}
          <div className="container mx-auto mb-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Your Idea, Our Execution
              </h1>
              <p className="text-lg mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                From concept to code, select a plan or customize everything—your
                call.
              </p>
            </div>
          </div>
          {/* Order Section */}
          <div className="container mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Basic Plan */}
              <Card className="p-6 h-full transition-all duration-300 group-hover:shadow-xl group-hover:translate-y-[-5px] cursor-pointer">
                <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$100</span>
                </div>
                <div className="mb-4 pb-4 border-b dark:border-gray-700">
                  <p className="text-gray-900 dark:text-white font-medium">
                    Website Development
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Basic website with 1 page
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Delivery Time:
                    </span>
                    <span className="font-medium">3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Revisions:
                    </span>
                    <span className="font-medium">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Pages:
                    </span>
                    <span className="font-medium">1</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">What&apos;s included:</h4>
                  <ul className="space-y-2">
                    {[
                      "Design Customization",
                      "Content Upload",
                      "Responsive Design",
                      "Source Code",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">Select Basic Plan</Button>
              </Card>

              {/* Custom Plan with Calculator */}
              <Card className="p-6 h-full">
                <h3 className="text-2xl font-bold mb-2">Custom Plan</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${totalPrice}</span>
                </div>
                <div className="mb-4 pb-4 border-b dark:border-gray-700">
                  <p className="text-gray-900 dark:text-white font-medium">
                    Website Development
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Build your own custom package
                  </p>
                </div>

                <div className="space-y-5 mb-6">
                  {/* Number of Pages */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="pages">Number of Pages:</Label>
                      <span className="font-medium">{pages}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setPages(Math.max(1, pages - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Slider
                        id="pages"
                        value={[pages]}
                        min={1}
                        max={10}
                        step={1}
                        onValueChange={(value) => setPages(value[0])}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setPages(Math.min(10, pages + 1))}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      +$75 per additional page
                    </p>
                  </div>

                  {/* Number of Revisions */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="revisions">Number of Revisions:</Label>
                      <span className="font-medium">{revisions}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setRevisions(Math.max(1, revisions - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Slider
                        id="revisions"
                        value={[revisions]}
                        min={1}
                        max={5}
                        step={1}
                        onValueChange={(value) => setRevisions(value[0])}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setRevisions(Math.min(5, revisions + 1))}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      +$50 per additional revision
                    </p>
                  </div>

                  {/* Delivery Time */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="delivery">Delivery Time:</Label>
                      <span className="font-medium">{deliveryDays} days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          setDeliveryDays(Math.max(3, deliveryDays - 1))
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Slider
                        id="delivery"
                        value={[deliveryDays]}
                        min={3}
                        max={14}
                        step={1}
                        onValueChange={(value) => setDeliveryDays(value[0])}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          setDeliveryDays(Math.min(14, deliveryDays + 1))
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Faster delivery costs +$30 per day
                    </p>
                  </div>

                  {/* Additional Features */}
                  <div>
                    <Label className="mb-2 block">Additional Features:</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="seo"
                          checked={features.seo}
                          onCheckedChange={(checked) =>
                            setFeatures({ ...features, seo: checked === true })
                          }
                        />
                        <Label htmlFor="seo" className="text-sm cursor-pointer">
                          SEO Optimization (+$75)
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="analytics"
                          checked={features.analytics}
                          onCheckedChange={(checked) =>
                            setFeatures({
                              ...features,
                              analytics: checked === true,
                            })
                          }
                        />
                        <Label
                          htmlFor="analytics"
                          className="text-sm cursor-pointer"
                        >
                          Analytics Integration (+$50)
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="contactForm"
                          checked={features.contactForm}
                          onCheckedChange={(checked) =>
                            setFeatures({
                              ...features,
                              contactForm: checked === true,
                            })
                          }
                        />
                        <Label
                          htmlFor="contactForm"
                          className="text-sm cursor-pointer"
                        >
                          Contact Form (+$60)
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="cms"
                          checked={features.cms}
                          onCheckedChange={(checked) =>
                            setFeatures({ ...features, cms: checked === true })
                          }
                        />
                        <Label htmlFor="cms" className="text-sm cursor-pointer">
                          Content Management System (+$150)
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Included Features */}
                  <div>
                    <h4 className="font-medium mb-2">Always included:</h4>
                    <ul className="space-y-1">
                      {[
                        "Design Customization",
                        "Content Upload",
                        "Responsive Design",
                        "Source Code",
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={{
                    pathname: "#contact",
                    query: {
                      plan: "custom",
                      price: totalPrice,
                      pages,
                      revisions,
                      deliveryDays,
                      features: JSON.stringify(features),
                    },
                  }}
                >
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900">
                    Order Custom Plan
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
          {/* process-steps */}
          <div className="py-12 bg-card rounded-lg">
            <div className="container mx-auto px-6 md:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                How It Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Submit Your Order
                  </h3>
                  <p className="text-muted-foreground">
                    Submit revamp or create a new website order with your
                    requirements
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                      <CreditCard className="w-7 h-7" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Make Secure Payment
                  </h3>
                  <p className="text-muted-foreground">
                    Complete your order with our secure payment process
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                      <Globe className="w-7 h-7" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Get Your Website
                  </h3>
                  <p className="text-muted-foreground">
                    Receive your revamped or brand new website ready to launch
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="mt-12 bg-gray-900 dark:bg-gray-800 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to transform your online presence? Select below to begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-300">
                  Already have a site?
                </span>
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  Revamp My Website
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-300">
                  Starting from zero?
                </span>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-gray-800 bg-transparent"
                >
                  Build My New Website
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <section id="portfolio" className="my-10">
          <div className="container mx-auto max-w-6xl">
            {/* <Breadcrumb /> */}

            {/* Hero Section */}
            <section className="mb-16 text-center mx-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                My Portfolio
              </h1>
              <p className="text-lg max-w-2xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                A showcase of my projects demonstrating my skills in web
                development, design, and problem-solving.
              </p>
            </section>

            {/* All Projects */}
            <section className="mb-20 mx-2">
              {/* <h2 className="text-3xl font-bold mb-8">All Projects</h2> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project) => (
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
                        {/* <Button size="sm" variant="link" asChild>
                      <Link href={`/portfolio/${project.id}`}>
                        Project Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button> */}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                I&apos;m always looking for new and exciting projects to work
                on. Let&apos;s discuss how I can help bring your ideas to life.
              </p>
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900"
              >
                Get Revamp or Build a New Site
              </Button>
            </section>
          </div>
        </section>
      </div>

      {/*
      <PortfolioPage/> */}
    </main>
  );
}
