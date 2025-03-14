"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            ModernApp
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#posts"
              className="font-medium hover:text-primary transition-colors"
            >
              Posts
            </Link>
            <Link
              href="#weather"
              className="font-medium hover:text-primary transition-colors"
            >
              Weather
            </Link>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#posts"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Posts
                </Link>
                <Link
                  href="#weather"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Weather
                </Link>
                <Button onClick={() => setIsOpen(false)}>Get Started</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
