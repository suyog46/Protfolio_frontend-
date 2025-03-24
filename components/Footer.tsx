import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center space-y-6">
        
        {/* Footer Links */}
        <div className="mb-4">
          <a href="/" className="mx-3 text-gray-400 hover:text-white transition">Home</a>
          <a href="#aboutme" className="mx-3 text-gray-400 hover:text-white transition">About Me</a>
          <a href="#project" className="mx-3 text-gray-400 hover:text-white transition">Work</a>
          {/* <a href="#contact" className="mx-3 text-gray-400 hover:text-white transition">Contact</a> */}
        </div>

        {/* Social Media and Contact Information */}
        <div className="flex flex-col items-center space-y-3">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/profile.php?id=100091055060431" className="text-gray-400 hover:text-white transition hover:scale-105">
              <img src="img/fb.png" alt="Facebook" className="h-6 w-6 object-cover" />
            </a>
            <a href="https://github.com/suyog46" className="text-gray-400 hover:text-white transition  hover:scale-105">
              <img src="img//github.png" alt="GitHub" className="h-6 w-6 object-cover" />
            </a>
            <a href="https://www.instagram.com/s_u.y_o_g/" className="text-gray-400 hover:text-white transition hover:scale-105">
              <img src="img/insta.png" alt="Instagram" className="h-6 w-6 object-cover" />
            </a>
            <a href="https://www.linkedin.com/in/suyoglamsal/" className="text-gray-400 hover:text-white transition hover:scale-105">
              <img src="img/ln.png" alt="LinkedIn" className="h-6 w-6 object-cover" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="text-gray-400">
            <p>Phone: <a href="tel:+9779866396831" className="hover:text-white">+977 9866396831</a></p>
            <p>Email: <a href="mailto:lmssuyog@gmail.com" className="hover:text-white">lmssuyog@gmail.com</a></p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Suyog Lamsal. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
