import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";

const About = () => (
  <motion.div
    key="about"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className="about-text max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto p-4 sm:p-6"
  >
    <h2 className="about-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-3 sm:mb-4">
      Hi! A little about myself,
    </h2>
    <p className="about-description text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed break-words">
      Based in the heart of architectural wonders, Having an extensive knowledge
      and education in architecture I dedicate my passion to crafting stories
      through the attention to spatial detail and understanding of the character
      narrative. From concept to completion, I'd like to say I drive the visual
      identity of design and space creation. With a combination of
      problem-solving balance, technical expertise and artistic vision I achieve
      to bring to the table a unique and captivating visual design stratum. 
    </p>
    <div className="contact-info ml-4 sm:ml-6 md:ml-8 font-semibold mt-4 sm:mt-6">
      <a
        href="https://instagram.com/mrugakshi18"
        className="contact-item flex items-center text-sm sm:text-base md:text-lg lg:text-xl hover:text-orange-500 transition-colors mb-2"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram className="mr-1 sm:mr-2" /> mrugakshi18
      </a>
      <a
        href="mailto:mrugakshi18@gmail.com"
        className="contact-item flex items-center text-sm sm:text-base md:text-lg lg:text-xl hover:text-orange-500 transition-colors mb-2"
      >
        <FiMail className="mr-1 sm:mr-2" /> mrugakshi18@gmail.com
      </a>
      <a
        href="tel:9820408075"
        className="contact-item flex items-center text-sm sm:text-base md:text-lg lg:text-xl hover:text-orange-500 transition-colors"
      >
        <FiPhone className="mr-1 sm:mr-2" /> 9820408075
      </a>
    </div>
  </motion.div>
);

export default About;