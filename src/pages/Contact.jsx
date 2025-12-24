import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"GET IN"} text2={"TOUCH"} />
      </div>

      <div className="my-10 flex flex-col justify-center mb-28 md:flex-row gap-10">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />

        <div className="flex flex-col gap-6 items-start justify-center">
          <p className="font-light text-xl text-gray-900">Studio Location</p>
          <div className="text-gray-600 leading-relaxed">
            <p className="font-light">Maharashtra, India</p>
            <p className="text-sm mt-2">Crafting timeless interiors in the heart of the city</p>
          </div>

          <p className="font-light text-xl text-gray-900 mt-4">Let's Talk</p>
          <div className="text-gray-600">
            <p><a href="tel:+919888919994" className="hover:text-gray-900 transition">+91 98889 19994</a></p>
            <p><a href="https://wa.me/+919888919994" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">WhatsApp</a></p>
            <p><a href="mailto:hello@interiors.com" className="hover:text-gray-900 transition">salman@interiors.com</a></p>
          </div>

          <p className="font-light text-xl text-gray-900 mt-4">Schedule a Consultation</p>
          <p className="text-gray-600 text-sm">Ready to transform your space? Connect with us for a personalized design consultation.</p>
          <button className="px-8 py-3 border border-gray-900 text-sm font-light hover:bg-gray-900 hover:text-white transition-all duration-500">Request Consultation</button>
        </div>

      </div>

      <NewsLetter />
    </div>
  );
};

export default Contact;
