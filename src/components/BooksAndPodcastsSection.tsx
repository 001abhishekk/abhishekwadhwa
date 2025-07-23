import React from 'react';
import { ExternalLink, Play, ShoppingCart, BookOpen, Users, Clock, Award, CheckCircle } from 'lucide-react';

export const BooksAndPodcastsSection = () => {
  const books = [
    {
      id: 1,
      title: "Unscripted Hearts",
      genre: "Contemporary Romance",
      hookLine: "A journey of unexpected love and second chances.",
      description: "Abhishek and Zara navigate trust, freedom, and emotional vulnerability in a love story that's anything but scripted.",
      cover: "https://m.media-amazon.com/images/I/417JNRMweoL._SY445_SX342_.jpg?auto=compress&cs=tinysrgb&w=300",
      platform: "Available on Amazon",
      buyLink: "https://a.co/d/36kllrX",
      readMoreLink: "https://www.goodreads.com/book/show/221374922-unscripted-hearts"
    },
    {
      id: 2,
      title: "The Almost Real Thing",
      genre: "Romance & Drama",
      hookLine: "A fake relationship. A very real awakening.",
      description: "Aarav and Meera blur the lines between pretense and passion in Mumbai's bustling chaos. A love story that questions what's truly real.",
      cover: "https://m.media-amazon.com/images/I/71HTFzheNaL._SY466_.jpg?auto=compress&cs=tinysrgb&w=300",
      platform: "Available on Amazon",
      buyLink: "https://a.co/d/b5WGH5s",
      readMoreLink: "https://www.goodreads.com/book/show/221197814-the-almost-real-thing"
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: "Emerging Tech Debates",
      tag: "Technology / AI / Ethics",
      description: "Weekly 20-minute show debating AI, quantum, CRISPR & more. No hype—just facts.",
      thumbnail: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/43331264/43331264-1745062376226-9a0858e9152a3.jpg?auto=compress&cs=tinysrgb&w=400",
      platforms: [
        { name: "Spotify", icon: "🎧", link: "https://open.spotify.com/show/1iDfNxMLs6vBQthe7SmcUR" },
        { name: "Apple", icon: "🍎", link: "https://podcasts.apple.com/podcast/id1804601526" },
        { name: "Overcast", icon: "☁️", link: "https://overcast.fm/itunes1804601526" }
      ]
    },
    {
      id: 2,
      title: "Deep Dive Reads",
      tag: "Books / Self-Growth",
      description: "Exploring books that unlock growth and change — with AI & author commentary.",
      thumbnail: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42763232/42763232-1737792595725-1ddfe86f830d5.jpg?auto=compress&cs=tinysrgb&w=400",
      platforms: [
        { name: "Spotify", icon: "🎧", link: "https://open.spotify.com/show/25aO0fxQNHSKFpWviUvQ4w" },
        { name: "Apple", icon: "🍎", link: "https://podcasts.apple.com/us/podcast/deep-dive-reads/id1787360350" },
        { name: "Castbox", icon: "📦", link: "https://castbox.fm/channel/Deep-Dive-Reads%3A-Self-Help-Book-Reviews-%26-Literary-Insights-for-Growths-id6413183?country=in" }
      ]
    }
  ];

  const courseFeatures = [
    "19+ comprehensive lessons",
    "AI tools and templates",
    "Lifetime access",
    "Certificate of completion",
    "Community support",
    "Real-world projects"
  ];

  return (
    <section id="books" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Books, Podcasts & Course</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my published works, tune into my podcasts for insights, and master content writing with my comprehensive course.
          </p>
        </div>

        {/* Featured Books Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Books</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Heartfelt contemporary novels exploring love, identity & self-growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {books.map((book) => (
              <div key={book.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-48 h-64 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 mb-6"
                    />
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{book.title}</h4>
                    
                    <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-3">
                      {book.genre}
                    </span>
                    
                    <p className="text-gray-700 italic mb-4 text-lg">{book.hookLine}</p>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{book.description}</p>
                    
                    <p className="text-sm text-gray-500 italic mb-6">{book.platform}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <a href={book.readMoreLink} className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-center"> <BookOpen className="w-4 h-4 mr-2" /> Read More </a>
                      <a href={book.buyLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center text-center"> <ShoppingCart className="w-4 h-4 mr-2" /> Buy Now </a>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Podcasts Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Podcasts</h3>
            <p className="text-lg text-gray-600">
              Listen to insights, debates, and reflections from modern minds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {podcasts.map((podcast) => (
              <div key={podcast.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
                <div className="relative">
                  <img src={podcast.thumbnail} alt={podcast.title} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"/>

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{podcast.title}</h4>
                  
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {podcast.tag}
                  </span>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{podcast.description}</p>
                  
                  <a href={podcast.platforms[0].link} target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center mb-4">
                    <Play className="w-4 h-4 mr-2" />
                    Listen Now
                    </a>

                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {podcast.platforms.map((platform, index) => (
                      <button
                        key={index}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center text-sm"
                      >
                        <span className="mr-1">{platform.icon}</span>
                        {platform.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Udemy Course Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Udemy Course</h3>
            <p className="text-lg text-gray-600">
              Master content writing with my comprehensive course designed for beginners and professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Course Preview */}
            <div className="relative">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://img-c.udemycdn.com/course/480x270/6429001_c3ea.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="Content Writing Blueprint Course"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <button className="bg-white text-gray-900 p-4 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg">
                    <Play className="w-8 h-8" />
                  </button>
                </div>
              </div>
              
              {/* Course Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">2</p>
                  <p className="text-sm text-gray-600">Students</p>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">1.5 Hours</p>
                  <p className="text-sm text-gray-600">Content</p>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">27</p>
                  <p className="text-sm text-gray-600">Downloadable Resources</p>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                Complete SEO, Keywords & Content Marketing Guide
              </h4>
              <p className="text-xl text-orange-600 font-medium mb-6 italic">
                "From zero to hire-worthy in 30 days."
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Learn the fundamentals of content writing, SEO optimization, and client acquisition. 
                This comprehensive course covers everything from writing compelling headlines to 
                building a sustainable freelance business.
              </p>

              {/* Course Features */}
              <div className="mb-8">
                <h5 className="text-xl font-bold text-gray-900 mb-4">What You'll Get:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {courseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a href="https://www.udemy.com/course/complete-seo-keywords-content-marketing-guide/">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                Enroll Now on Udemy
              </button>
              </a>
              
              <p className="text-sm text-gray-600 mt-4">
                30-day money-back guarantee • Lifetime access • Mobile & TV access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};