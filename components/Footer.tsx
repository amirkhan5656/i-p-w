import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = 2025

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 md:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Company Info */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-semibold">Company Name</h3>
            <p className="text-sm text-muted-foreground">Providing professional services and solutions since 2020.</p>
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Message and Button */}
        <div className="mt-8 border-t border-border pt-6">
          <div className="max-w-md mx-auto text-center mb-6">
            <h3 className="text-lg font-semibold mb-2">Looking for something unique?</h3>
            <p className="text-muted-foreground mb-2">We&apos;d love to hear from you!</p>
            <p className="text-sm text-muted-foreground">
              Tell us about your project, and let&apos;s see if we&apos;re the perfect fit to bring your exceptional vision to
              life.
            </p>
          </div>
          <div className="flex justify-center">
            <Button className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Mail us at contact@company.com
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
