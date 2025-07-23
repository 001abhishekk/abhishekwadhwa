import React from 'react';

export const MyStorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <img
                src="/src/photos/me-3.jpg?auto=compress&cs=tinysrgb&w=400"
                alt="Abhishek Wadhwa"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-blue-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Story Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                The Story Behind the Strategy
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From a small town in Haryana to global content platforms
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Born and raised in Kurukshetra, I grew up in a financially humble household. My parents, 
                Sapna and Tilak Raj, taught me the value of hard work early on. From helping at my father's 
                kirana shop to studying late nights, I learned that resilience often starts with responsibility.
              </p>
              
              <p>
                I left college once — not because I lacked ambition, but because I wanted to find my own path. 
                I soon enrolled again through correspondence and self-taught myself everything about content 
                marketing, SEO, and digital strategy. I've since completed 11+ marketing certifications and 
                carved a niche for myself — even outranking industry leaders like Neil Patel on Google and Quora.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-8">
                <p className="text-blue-800 font-medium italic text-xl">
                  "I believe content should feel like a conversation, not a pitch."
                </p>
              </div>

              <p>
                Writing isn't just a profession to me — it's purpose. Whether it's a blog, a book, or a podcast, 
                I believe every word should either inspire or inform. And when I'm not writing, I dream about 
                building a supercomputer or helping children in need — because dreams matter, whether big or small.
              </p>

              <p>
                Every step of my journey has been about learning, unlearning, and sharing. That's what I bring 
                into every project, client, or platform I touch.
              </p>
            </div>

            {/* Mini Bio Snippets */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-100 rounded-full mr-3"></span>
                <span><strong>Hometown:</strong> Kurukshetra, Haryana</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-100 rounded-full mr-3"></span>
                <span><strong>Self-Taught in:</strong> SEO, Copywriting, AI Tools</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-100 rounded-full mr-3"></span>
                <span><strong>Dreams of:</strong> Building a supercomputer</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-100 rounded-full mr-3"></span>
                <span><strong>Wishlist:</strong> A cozy home and two rabbits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};