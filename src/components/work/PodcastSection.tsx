import React from 'react';
import { Play, Headphones, ExternalLink } from 'lucide-react';

export const PodcastSection = () => {
  const podcasts = [
    {
      id: 1,
      title: "Emerging Tech Debates",
      tag: "Technology / AI / Ethics",
      description: "Weekly 20-minute show debating AI, quantum, CRISPR & more. No hype—just facts.",
      thumbnail: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/43331264/43331264-1745062376226-9a0858e9152a3.jpg?auto=compress&cs=tinysrgb&w=300",
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
      thumbnail: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42763232/42763232-1737792595725-1ddfe86f830d5.jpg?auto=compress&cs=tinysrgb&w=300",
      platforms: [
        { name: "Spotify", icon: "🎧", link: "https://open.spotify.com/show/25aO0fxQNHSKFpWviUvQ4w" },
        { name: "Apple", icon: "🍎", link: "https://podcasts.apple.com/us/podcast/deep-dive-reads/id1787360350" },
        { name: "Castbox", icon: "📦", link: "https://castbox.fm/channel/Deep-Dive-Reads%3A-Self-Help-Book-Reviews-%26-Literary-Insights-for-Growths-id6413183?country=in" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Podcasts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Listen to insights, debates, and reflections from modern minds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
              <div className="relative">
                <img
                src={podcast.thumbnail}
                alt={podcast.title}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{podcast.title}</h3>
                
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
    </section>
  );
};