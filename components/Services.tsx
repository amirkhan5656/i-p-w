"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Plus, Minus } from "lucide-react";
// import { Breadcrumb } from "@/components/breadcrumb"
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export default function ServicesPage() {
  // State for custom plan calculator
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

  return (
    <main className="flex min-h-screen flex-col py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* <Breadcrumb /> */}

        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Services & Solutions
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I offer a range of digital services designed to help your
                business establish a strong online presence, engage with your
                audience, and achieve your goals.
              </p>
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-xl"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-200 dark:to-gray-100 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Get a Free Consultation
                </span>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Services illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-center">My Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Choose our standard package or build your own custom solution with
            our interactive pricing calculator.
          </p>

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
                <h4 className="font-medium mb-3">What's included:</h4>
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
                  pathname: "/contact",
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

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Need something more specific? Contact me for a personalized quote.
            </p>
            <Button variant="link" size="lg" asChild>
              <Link href="/contact">Request a Custom Quote</Link>
            </Button>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My Working Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "I learn about your business, goals, and requirements to understand your needs.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Together we develop a strategic plan and timeline for your project.",
              },
              {
                step: "03",
                title: "Creation",
                description:
                  "I design and develop your solution with regular updates and feedback.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Your project goes live with my support to ensure everything runs smoothly.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-100 dark:text-gray-800 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                    <svg
                      width="40"
                      height="12"
                      viewBox="0 0 40 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z"
                        fill="#D1D5DB"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does it take to complete a website?",
                answer:
                  "The timeline varies depending on the complexity of the project. A basic website typically takes 2-4 weeks, while more complex projects with custom functionality may take 6-12 weeks. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you provide website maintenance services?",
                answer:
                  "Yes, I offer website maintenance packages to keep your site secure, updated, and running smoothly. This includes regular updates, security monitoring, backups, and technical support.",
              },
              {
                question: "What is your payment structure?",
                answer:
                  "I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, I can arrange milestone-based payments. All payment terms are clearly outlined in our contract.",
              },
              {
                question: "Do you work with clients remotely?",
                answer:
                  "Yes, I work with clients worldwide. We can communicate via email, phone, video calls, and project management tools to ensure clear communication throughout the project.",
              },
              {
                question: "Will I be able to update my website myself?",
                answer:
                  "Yes, I can build your website with a user-friendly content management system (CMS) that allows you to easily update content, add pages, and make basic changes without technical knowledge.",
              },
              {
                question: "What information do you need to get started?",
                answer:
                  "To get started, I'll need information about your business, your goals for the project, your target audience, any design preferences, and examples of websites you like. I'll provide a detailed questionnaire to guide this process.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 dark:bg-gray-800 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how I can help bring your vision to life and create a
            digital solution that meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Schedule a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-gray-800"
            >
              View My Portfolio
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
