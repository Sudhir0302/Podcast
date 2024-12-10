import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="bg-gray-800 py-12">
        <h1 className="text-4xl font-bold text-center text-white">About Us</h1>
        <p className="text-center mt-4 text-gray-400">
          Discover the story behind our podcast journey.
        </p>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
          <img
            className="p-4 rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="/img/mp3.webp"
            alt="product image"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We are passionate storytellers and audio enthusiasts dedicated to
              bringing you engaging, thought-provoking, and entertaining
              content. Our podcast covers a wide range of topics, from personal
              growth and technology to culture and storytelling.
            </p>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to inspire and connect people through the power of
              stories. We aim to create a platform where voices are heard, ideas
              are shared, and listeners are inspired.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Our Vision and Values
          </h2>
          <p className="text-gray-400 text-center leading-relaxed max-w-2xl mx-auto mb-6">
            We believe in authenticity, creativity, and inclusivity. Our vision
            is to be a trusted source of quality podcast content that uplifts
            and engages our listeners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-gray-700 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white mb-2">Creativity</h3>
              <p className="text-gray-400">
                Crafting unique and engaging stories that captivate our
                audience.
              </p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white mb-2">Community</h3>
              <p className="text-gray-400">
                Building a community of like-minded individuals who share our
                passion.
              </p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
              <p className="text-gray-400">
                Making a difference through stories that matter.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to Join the Journey?
        </h2>
        <p className="text-gray-400 mb-6">
          Subscribe to our podcast and never miss an episode.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-lg">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
