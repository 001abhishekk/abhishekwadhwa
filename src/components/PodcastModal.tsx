import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface PodcastModalProps {
  isOpen: boolean;
  onClose: () => void;
  podcastTitle: string;
}

export const PodcastModal: React.FC<PodcastModalProps> = ({ isOpen, onClose, podcastTitle }) => {
  const podcastPlatforms = [
    {
      name: 'Spotify',
      icon: '🎧',
      url: 'https://open.spotify.com/show/1iDfNxMLs6vBQthe7SmcUR?si=v0KturXLR6y-OHiCnosnjQ&utm_medium=share&utm_source=linktree',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Apple Podcasts',
      icon: '🍎',
      url: 'https://podcasts.apple.com/podcast/id1804601526?app=podcast&at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_p&ls=1&mt=2',
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'Podcast Casts',
      icon: '📱',
      url: 'https://pca.st/itunes/1804601526',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      name: 'Overcast',
      icon: '☁️',
      url: 'https://overcast.fm/itunes1804601526',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Podcast Addict',
      icon: '🎙️',
      url: 'https://podcastaddict.com/feed/https%3A%2F%2Fanchor.fm%2Fs%2F102ded980%2Fpodcast%2Frss',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      name: 'Castro',
      icon: '📻',
      url: 'https://castro.fm/itunes/1804601526',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'Player FM',
      icon: '▶️',
      url: 'https://player.fm/subscribe?id=https://anchor.fm/s/102ded980/podcast/rss',
      color: 'bg-indigo-500 hover:bg-indigo-600'
    },
    {
      name: 'Podcast Republic',
      icon: '🏛️',
      url: 'https://www.podcastrepublic.net/podcast/1804601526',
      color: 'bg-teal-500 hover:bg-teal-600'
    },
    {
      name: 'Radio Public',
      icon: '📡',
      url: 'http://radiopublic.com/https%3A%2F%2Fanchor.fm%2Fs%2F102ded980%2Fpodcast%2Frss',
      color: 'bg-pink-500 hover:bg-pink-600'
    },
    {
      name: 'Podcast Guru',
      icon: '🧘',
      url: 'https://app.podcastguru.io/podcast/1804601526',
      color: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      name: 'Bullhorn',
      icon: '📢',
      url: 'https://www.bullhorn.fm/podchaser/itunes/1804601526',
      color: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'RSS Feed',
      icon: '📡',
      url: 'https://anchor.fm/s/102ded980/podcast/rss',
      color: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Listen to Podcast</h3>
            <p className="text-gray-600 mt-1">{podcastTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Platform Grid */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            Choose your preferred podcast platform to listen:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {podcastPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} text-white p-4 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-between group`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{platform.icon}</span>
                  <span className="font-medium">{platform.name}</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            ))}
          </div>

          {/* Additional Options */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">More Options</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://subscribeonandroid.com/anchor.fm/s/102ded980/podcast/rss"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-between"
              >
                <span>📱 Subscribe on Android</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://web.podfriend.com/podcast/1804601526"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-between"
              >
                <span>👥 Podfriend</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 rounded-b-2xl">
          <p className="text-sm text-gray-600 text-center">
            Can't find your preferred platform? Try the RSS feed for universal compatibility.
          </p>
        </div>
      </div>
    </div>
  );
};
