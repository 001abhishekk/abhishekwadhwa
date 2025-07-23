import React from 'react';
import { ExternalLink, ShoppingCart, BookOpen } from 'lucide-react';

export const FeaturedBooksSection = () => {
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Books</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Heartfelt contemporary novels exploring love, identity & self-growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-48 h-64 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 mb-6"
                  />
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{book.title}</h3>
                  
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-3">
                    {book.genre}
                  </span>
                  
                  <p className="text-gray-700 italic mb-4 text-lg">{book.hookLine}</p>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{book.description}</p>
                  
                  <p className="text-sm text-gray-500 italic mb-6">{book.platform}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <a href={book.readMoreLink} className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-center"> <BookOpen className="w-4 h-4 mr-2" /> Read More </a>
                    <a
                      href={book.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};