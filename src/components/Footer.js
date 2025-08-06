import React from "react";

function Footer() {
  return (
    <footer className="relative z-10 bg-black bg-opacity-70 text-center py-6 mt-12">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Shivani Shree G. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
