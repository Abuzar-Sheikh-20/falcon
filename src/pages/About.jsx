import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col gap-6 md:w-2/4 justify-center text-gray-600">
          <p>
            FALCON is a premier interior design studio dedicated to creating exceptional spaces that inspire and elevate everyday living. With a focus on timeless aesthetics, innovative design solutions, and meticulous craftsmanship, we transform visions into beautifully realized interiors that reflect the unique personality and lifestyle of our clients.
          </p>

          <p>
            Our expertise spans residential and commercial projects, from intimate living spaces to sophisticated corporate environments. We believe that great interior design is more than aesthetics—it's about creating functional, harmonious spaces that enhance well-being and productivity. Every project is approached with creativity, attention to detail, and a deep understanding of our clients' aspirations.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to deliver world-class interior design services that combine artistic excellence with practical innovation. We aim to create spaces that tell stories, foster connection, and stand as testaments to quality and thoughtful design. At FALCON, we don't just design interiors—we craft experiences that our clients will cherish for years to come.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5 hover:bg-gray-50 transition">
          <b className="text-gray-900">Design Excellence</b>
          <p className="text-gray-600">
            Our commitment to design excellence ensures every project reflects meticulous attention to detail, innovative concepts, and premium finishes that stand the test of time.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5 hover:bg-gray-50 transition">
          <b className="text-gray-900">Client-Centric Approach</b>
          <p className="text-gray-600">
            We listen, understand, and collaborate with clients to create personalized spaces that truly reflect their lifestyle, preferences, and aspirations.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5 hover:bg-gray-50 transition">
          <b className="text-gray-900">Professional Expertise</b>
          <p className="text-gray-600">
            Our team of experienced designers brings creative vision, technical expertise, and industry knowledge to deliver transformative interior solutions.
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default About;
