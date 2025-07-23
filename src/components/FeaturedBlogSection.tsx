import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const FeaturedBlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How is Mohali (Punjab) as a city to live and settle in?",
      excerpt: "Let’s get one thing clear — Mohali is not Chandigarh. It’s not trying to be. Mohali is part of the “Tricity,” which includes Chandigarh and Panchkula.",
      image: "https://miro.medium.com/v2/resize:fit:0/1*wncz3IHtYtA0wNI_rplyag.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Jun 4, 2023",
      readTime: "5 min read",
      url: "https://01abhishek.medium.com/leaving-kurukshetra-for-mohali-a-content-writers-story-3e69230be8c5"
    },
    {
      id: 2,
      title: "Confessions from the Content Cave: Secrets No Writer Will Admit (But I Will)",
      excerpt: "Let’s be real — when people hear “content writer,” they either picture someone scribbling...",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*p-OMxgf63O1BzI3hus3R6A.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Aug 6, 2023",
      readTime: "14 min read",
      url: "https://medium.com/@01abhishek/dirty-little-secrets-about-content-writers-cc572cbc811f"
    },
    {
      id: 3,
      title: "How ChatGPT is Transforming the Landscape of Content Writing?: A Content Writer’s Perspective",
      excerpt: "Whenever I tell my IT friends and relatives I write content, they ask just one question! Has ChatGPT finished your job?",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*U4DrTaf0B3-bVvYmwhnluw.png?auto=compress&cs=tinysrgb&w=400",
      date: "Jun 10, 2023",
      readTime: "3 min read",
      url: "https://01abhishek.medium.com/why-chatgpt-wont-replace-my-content-writing-job-a-content-writer-s-perspective-6ed85e0f6c6a"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Blog Posts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover insights on digital marketing, personal growth, technology, and more through my latest articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"> Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" /> </a>

              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a  href="https://01abhishek.medium.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"> Load More Articles </a>

        </div>
      </div>
    </section>
  );
};