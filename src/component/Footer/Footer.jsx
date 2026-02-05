import React from "react";
import { FaFacebook, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <FaFilm className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">
                Society Movies
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for discovering and exploring the world
              of cinema.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://wa.me/201006488707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/favorite"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Comedy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Drama
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Thriller
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none bg-gray-800 text-white"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &​copy; {new Date().getFullYear()} Society Movies. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
