import Link from "next/link";
import { Building } from "lucide-react";

const Footer = ()=> {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8 mx-auto md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bahaal Buddy</span>
            </h3>
            <p className="text-sm text-gray-500">
              Find your perfect space to rent, from rooms and apartments to
              commercial properties.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properties?type=room"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=apartment"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Apartments
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=house"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Houses
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=commercial"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Commercial Spaces
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase">Subscribe</h3>
            <p className="text-sm text-gray-500">
              Stay updated with new properties and rental tips
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rent Spaces. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;