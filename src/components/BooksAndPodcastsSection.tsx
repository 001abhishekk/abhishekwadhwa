import React from 'react';
import { ExternalLink, Play, ShoppingCart, BookOpen, Users, Clock, Award, CheckCircle } from 'lucide-react';
import { PodcastModal } from './PodcastModal';

export const BooksAndPodcastsSection = () => {
    const [selectedPodcast, setSelectedPodcast] = React.useState<string | null>(null);
    const [selectedPlatforms, setSelectedPlatforms] = React.useState<any[]>([]);

    const books = [
        {
            id: 1,
            title: "Unscripted Hearts",
            genre: "Contemporary Romance",
            hookLine: "A journey of unexpected love and second chances.",
            description: "Abhishek and Zara navigate trust, freedom, and emotional vulnerability in a love story that's anything but scripted.",
            cover: "https://m.media-amazon.com/images/I/417JNRMweoL._SY445_SX342_.jpg",
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
            cover: "https://m.media-amazon.com/images/I/71HTFzheNaL._SY466_.jpg",
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
            thumbnail: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/43331264/43331264-1745062376226-9a0858e9152a3.jpg",
            platforms: [
                { name: "Spotify", logo: "spotify-app-logo.svg", url: "https://open.spotify.com/show/1iDfNxMLs6vBQthe7SmcUR", color: "bg-green-500 hover:bg-green-600" },
                { name: "Apple Podcasts", logo: "applepodcast-app-logo.svg", url: "https://podcasts.apple.com/podcast/id1804601526", color: "bg-gray-800 hover:bg-gray-900" },
                { name: "Overcast", logo: "overcast-app-logo.svg", url: "https://overcast.fm/itunes1804601526", color: "bg-orange-500 hover:bg-orange-600" },
                { name: "Pocket Casts", logo: "pocketcasts-app-logo.svg", url: "https://pca.st/itunes/1804601526", color: "bg-red-600 hover:bg-red-700" },
                { name: "Podcast Addict", logo: "podcastaddict-app-logo.png", url: "https://podcastaddict.com/feed/https%3A%2F%2Fanchor.fm%2Fs%2F102ded980%2Fpodcast%2Frss", color: "bg-orange-700 hover:bg-orange-800" },
                { name: "Castro", logo: "castro-app-logo.svg", url: "https://castro.fm/podcast/31734303-f71f-4dce-abdf-8ac6cf9e1178", color: "bg-blue-500 hover:bg-blue-600" },
                { name: "Player FM", logo: "playerfm-app-logo.svg", url: "https://player.fm/subscribe?id=https://anchor.fm/s/102ded980/podcast/rss", color: "bg-indigo-500 hover:bg-indigo-600" },
                { name: "Podchaser", logo: "podchaser-app-logo.svg", url: "https://www.podchaser.com/podcasts/emerging-tech-debates-6051217?", color: "bg-pink-500 hover:bg-pink-600" },
                { name: "Podcast Guru", logo: "podcastguru-app-logo.png", url: "https://app.podcastguru.io/podcast/1804601526", color: "bg-yellow-500 hover:bg-yellow-600" },
                { name: "RSS Feed", logo: "rss-app-logo.png", url: "https://anchor.fm/s/102ded980/podcast/rss", color: "bg-orange-600 hover:bg-orange-700" },
                { name: "Subscribe on Android", logo: "android-app-logo.svg", url: "https://subscribeonandroid.com/anchor.fm/s/102ded980/podcast/rss", color: "bg-green-600 hover:bg-green-700" }
            ]
        },
        {
            id: 2,
            title: "Deep Dive Reads",
            tag: "Books / Self-Growth",
            description: "Exploring books that unlock growth and change — with AI & author commentary.",
            thumbnail: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42763232/42763232-1737792595725-1ddfe86f830d5.jpg",
            platforms: [
                { name: "Spotify", logo: "spotify-app-logo.svg", url: "https://open.spotify.com/show/25aO0fxQNHSKFpWviUvQ4w?utm_medium=share&utm_source=linktree", color: "bg-green-500 hover:bg-green-600" },
                { name: "Apple Podcasts", logo: "applepodcast-app-logo.svg", url: "https://podcasts.apple.com/us/podcast/deep-dive-reads/id1787360350?at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_p", color: "bg-gray-800 hover:bg-gray-900" },
                { name: "Castbox", logo: "castbox-app-logo.svg", url: "https://castbox.fm/channel/Deep-Dive-Reads%3A-Self-Help-Book-Reviews-%26-Literary-Insights-for-Growths-id6413183?country=in", color: "bg-orange-500 hover:bg-orange-600" },
                { name: "Pocket Casts", logo: "pocketcasts-app-logo.svg", url: "https://pca.st/2pb1noe5", color: "bg-red-600 hover:bg-red-700" },
                { name: "Overcast", logo: "overcast-app-logo.svg", url: "https://overcast.fm/itunes1787360350", color: "bg-orange-500 hover:bg-orange-600" },
                { name: "Amazon Music", logo: "amazonmusic-app-logo.svg", url: "https://music.amazon.com/podcasts/e5467350-fe54-470d-b02a-bab0e379ad36/deep-dive-reads", color: "bg-purple-700 hover:bg-purple-800" },
                { name: "JioSaavn", logo: "jiosaavn-app-logo.svg", url: "https://www.jiosaavn.com/shows/deep-dive-reads/1/LmzRNwiUE14_", color: "bg-green-700 hover:bg-green-800" },
                { name: "RSS Feed", logo: "rss-app-logo.png", url: "https://feeds.acast.com/public/shows/676bfbea8e646d14de4dfe5c", color: "bg-orange-600 hover:bg-orange-700" },
                { name: "Subscribe on Android", logo: "android-app-logo.svg", url: "https://www.subscribeonandroid.com/feeds.acast.com/public/shows/676bfbea8e646d14de4dfe5c", color: "bg-green-600 hover:bg-green-700" }
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

    const openPodcastModal = (title: string, platforms: any[]) => {
        setSelectedPodcast(title);
        setSelectedPlatforms(platforms);
    };

    return (
        <section id="books" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            {/* ... (rest of your component remains unchanged) */}
            <PodcastModal
                isOpen={selectedPodcast !== null}
                onClose={() => setSelectedPodcast(null)}
                podcastTitle={selectedPodcast || ''}
                platforms={selectedPlatforms}
            />
        </section>
    );
};
