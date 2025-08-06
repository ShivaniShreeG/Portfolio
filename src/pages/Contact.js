import React from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white p-8 flex items-center justify-center"
    >
      <div className="max-w-xl w-full backdrop-blur-md bg-black/30 p-8 rounded-2xl shadow-2xl border border-teal">
        <h2 className="animate-slow-bounce text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aqua to-teal mb-8 text-center drop-shadow-[0_0_8px_#14b8a6] flex items-center justify-center gap-4">
  <FaEnvelope className="text-5xl icon-glow" />
  Contact Me
</h2>


        <form
          className="space-y-5"
          action="https://formsubmit.co/g.shivanishree@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />

          {/* Name Field */}
          <div className="flex items-center gap-3 border border-teal p-3 rounded-lg bg-black">
            <FaUser className="text-teal text-xl icon-glow" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent outline-none text-teal placeholder-teal"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center gap-3 border border-teal p-3 rounded-lg bg-black">
            <FaEnvelope className="text-teal text-xl icon-glow" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent outline-none text-teal placeholder-teal"
            />
          </div>

          {/* Message Field */}
          <div className="flex items-start gap-3 border border-teal p-3 rounded-lg bg-black">
            <FaCommentDots className="text-teal text-xl mt-1 icon-glow" />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-transparent outline-none text-teal placeholder-teal h-32 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-teal to-aqua hover:brightness-110 transition-all text-black font-semibold py-3 px-6 rounded-lg w-full shadow-lg button-glow"
          >
            Send Message
          </button>
        </form>

        {/* Direct Email Option */}
        <p className="mt-6 text-center text-teal">
          Or email me directly at{" "}
          <a
            href="mailto:g.shivanishree@gmail.com"
            className="underline hover:text-aqua"
          >
            g.shivanishree@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/ShivaniShreeG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl icon-glow"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shivani-shree-g/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl icon-glow"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
