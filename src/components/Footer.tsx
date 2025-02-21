"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function AnimatedWaveFooter() {
  return (
    <footer className="relative bg-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 h-[500px] w-[3600px] animate-wave">
          <svg
            className="h-full w-full"
            viewBox="0 0 3600 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 250C400 150 800 50 1200 100C1600 150 2000 350 2400 300C2800 250 3200 150 3600 250V500H0V250Z"
              fill="currentColor"
              className="text-green-500"
            />
            <path
              d="M0 250C400 200 800 100 1200 150C1600 200 2000 350 2400 300C2800 250 3200 200 3600 250V500H0V250Z"
              fill="currentColor"
              className="text-green-400"
            />
          </svg>
        </div>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-green-500">
                Home
              </a>
              <a href="#" className="block transition-colors hover:text-green-500">
                About Us
              </a>
              <a href="#" className="block transition-colors hover:text-green-500">
                Services
              </a>
              <a href="#" className="block transition-colors hover:text-green-500">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Your Company. All rights reserved.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-wave {
          animation: wave 15s linear infinite;
        }
      `}</style>
    </footer>
  )
}