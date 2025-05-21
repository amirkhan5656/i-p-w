import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { ShimmerButtonDemo } from "./ShimmerButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    <div className="container mx-auto max-w-6xl">
      {/* <Breadcrumb /> */}

      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to learn more about my services? I&apos;d
          love to hear from you. Fill out the form below or use the contact
          information provided.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="p-6 h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
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
                <div className="flex items-start gap-4">
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
                </div>
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
                    Thank you for reaching out. I&apos;ll get back to you as soon as
                    possible.
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
                  <ShimmerButtonDemo>
                    <Button
                      type="submit"
                      className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 w-full md:w-auto"
                      disabled={isSubmitting}
                    >
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
                    </Button>
                  </ShimmerButtonDemo>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question:
                "What information should I provide for a project inquiry?",
              answer:
                "To help me understand your project better, please include details about your business, project goals, timeline, budget, and any specific requirements or preferences you have.",
            },
            {
              question: "How quickly will you respond to my inquiry?",
              answer:
                "I typically respond to all inquiries within 24 hours during business days. If your matter is urgent, please indicate this in your message.",
            },
            {
              question: "Do you work with clients internationally?",
              answer:
                "Yes, I work with clients worldwide. We can communicate via email, video calls, and project management tools to ensure clear communication regardless of location.",
            },
            {
              question: "What is your availability for new projects?",
              answer:
                "My availability varies depending on current workload. When you reach out, I'll let you know my earliest start date for your project and work with you to establish a timeline that meets your needs.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="mb-20">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg h-[400px] flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">
            Map placeholder - In a real website, an interactive map would be
            displayed here
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Whether you have a specific project in mind or just want to explore
          possibilities, I&apos;m here to help turn your ideas into reality.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900"
          >
            Schedule a Call
          </Button>
          <Button size="lg" variant="outline">
            View My Portfolio
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
