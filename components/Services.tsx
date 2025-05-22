"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Plus, Minus } from "lucide-react";
// import { Breadcrumb } from "@/components/breadcrumb"
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { FileText, CreditCard, Globe } from "lucide-react";

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
    <main
      id="hire-me"
      className="flex min-h-screen flex-col py-12 px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        {/* <Breadcrumb /> */}

        {/* Pricing Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Your Idea, Our Execution
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-12">
            From concept to code, select a plan or customize everything—your
            call.
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

          {/* <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Need something more specific? Contact me for a personalized quote.
            </p>
            <Button variant="link" size="lg" asChild>
              <Link href="/contact">Request a Custom Quote</Link>
            </Button>
          </div> */}
        </section>

        {/* process-steps */}
        <section className="py-12 bg-card rounded-lg">
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
                <h3 className="text-xl font-semibold mb-2">Get Your Website</h3>
                <p className="text-muted-foreground">
                  Receive your revamped or brand new website ready to launch
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 bg-gray-900 dark:bg-gray-800 text-white p-12 rounded-lg text-center">
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
        </section>
      </div>
    </main>
  );
}
