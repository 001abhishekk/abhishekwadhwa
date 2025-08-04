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
                { name: "Spotify", logo: "/public/images/spotify-app-logo.svg", url: "https://open.spotify.com/show/1iDfNxMLs6vBQthe7SmcUR", color: "bg-green-500 hover:bg-green-600" },
                { name: "Apple Podcasts", logo: "/public/images/applepodcast-app-logo.svg", url: "https://podcasts.apple.com/podcast/id1804601526", color: "bg-gray-800 hover:bg-gray-900" },
                { name: "Overcast", logo: "/public/images/overcast-app-logo.svg", url: "https://overcast.fm/itunes1804601526", color: "bg-orange-500 hover:bg-orange-600" },
                { name: "Pocket Casts", logo: "/public/images/pocketcasts-app-logo.svg", url: "https://pca.st/itunes/1804601526", color: "bg-red-600 hover:bg-red-700" },
                { name: "Podcast Addict", logo: "/public/images/podcastaddict-app-logo.png", url: "https://podcastaddict.com/feed/https%3A%2F%2Fanchor.fm%2Fs%2F102ded980%2Fpodcast%2Frss", color: "bg-orange-700 hover:bg-orange-800" },
                { name: "Castro", logo: "/public/images/castro-app-logo.svg", url: "https://castro.fm/podcast/31734303-f71f-4dce-abdf-8ac6cf9e1178", color: "bg-blue-500 hover:bg-blue-600" },
                { name: "Player FM", logo: "/public/images/playerfm-app-logo.svg", url: "https://player.fm/subscribe?id=https://anchor.fm/s/102ded980/podcast/rss", color: "bg-indigo-500 hover:bg-indigo-600" },
                { name: "Podchaser", logo: "/public/images/podchaser-app-logo.svg", url: "https://www.podchaser.com/podcasts/emerging-tech-debates-6051217?", color: "bg-pink-500 hover:bg-pink-600" },
                { name: "Podcast Guru", logo: "/public/images/podcastguru-app-logo.png", url: "https://app.podcastguru.io/podcast/1804601526", color: "bg-yellow-500 hover:bg-yellow-600" },
                { name: "RSS Feed", logo: "/public/images/rss-app-logo.png", url: "https://anchor.fm/s/102ded980/podcast/rss", color: "bg-orange-600 hover:bg-orange-700" },
                { name: "Subscribe on Android", logo: "/public/images/android-app-logo.svg", url: "https://subscribeonandroid.com/anchor.fm/s/102ded980/podcast/rss", color: "bg-green-600 hover:bg-green-700" }
            ]
        },
        {
            id: 2,
            title: "Deep Dive Reads",
            tag: "Books / Self-Growth",
            description: "Exploring books that unlock growth and change — with AI & author commentary.",
            thumbnail: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42763232/42763232-1737792595725-1ddfe86f830d5.jpg",
            platforms: [
                { name: "Spotify", logo: "/public/images/spotify-app-logo.svg", url: "https://open.spotify.com/show/25aO0fxQNHSKFpWviUvQ4w?utm_medium=share&utm_source=linktree", color: "bg-green-500 hover:bg-green-600" },
                { name: "Apple Podcasts", logo: "/public/images/applepodcast-app-logo.svg", url: "https://podcasts.apple.com/us/podcast/deep-dive-reads/id1787360350?at=1000lHKX&ct=linktree_http&itscg=30200&itsct=lt_p", color: "bg-gray-800 hover:bg-gray-900" },
                { name: "Castbox", logo: "/public/images/castbox-app-logo.svg", url: "https://castbox.fm/channel/Deep-Dive-Reads%3A-Self-Help-Book-Reviews-%26-Literary-Insights-for-Growths-id6413183?country=in", color: "bg-orange-500 hover:bg-orange-600" },
                { name: "Pocket Casts", logo: "/public/images/pocketcasts-app-logo.svg", url: "https://pca.st/2pb1noe5", color: "bg-red-600 hover:bg-red-700" },
                { name: "Overcast", logo: "/public/images/overcast-app-logo.svg", url: "https://overcast.fm/itunes1787360350", color: "bg-orange-500 hover:bg-orange-600" },
                { name: "Amazon Music", logo: "/public/images/amazonmusic-app-logo.svg", url: "https://music.amazon.com/podcasts/e5467350-fe54-470d-b02a-bab0e379ad36/deep-dive-reads", color: "bg-purple-700 hover:bg-purple-800" },
                { name: "JioSaavn", logo: "/public/images/jiosaavn-app-logo.svg", url: "https://www.jiosaavn.com/shows/deep-dive-reads/1/LmzRNwiUE14_", color: "bg-green-700 hover:bg-green-800" },
                { name: "RSS Feed", logo: "/public/images/rss-app-logo.png", url: "https://feeds.acast.com/public/shows/676bfbea8e646d14de4dfe5c", color: "bg-orange-600 hover:bg-orange-700" },
                { name: "Subscribe on Android", logo: "/public/images/android-app-logo.svg", url: "https://www.subscribeonandroid.com/feeds.acast.com/public/shows/676bfbea8e646d14de4dfe5c", color: "bg-green-600 hover:bg-green-700" }
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Books, Podcasts & Course</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore my published works, tune into my podcasts for insights, and master content writing with my comprehensive course.
                    </p>
                </div>

                {/* Books */}
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

                {/* Podcasts */}
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
                                    <img src={podcast.thumbnail} alt={podcast.title} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
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
                                    <button
                                        onClick={() => openPodcastModal(podcast.title, podcast.platforms)}
                                        className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center mb-4"
                                    >
                                        <Play className="w-4 h-4 mr-2" />
                                        Listen Now
                                    </button>
                                    <p className="text-center text-gray-500 text-sm">
                                        Available on all major podcast platforms
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Course */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Udemy Course</h3>
                        <p className="text-lg text-gray-600">
                            Master content writing with my comprehensive course designed for beginners and professionals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="https://img-c.udemycdn.com/course/480x270/6429001_c3ea.jpg"
                                    alt="Content Writing Blueprint Course"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <button className="bg-white text-gray-900 p-4 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg">
                                        <Play className="w-8 h-8" />
                                    </button>
                                </div>
                            </div>
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
            <PodcastModal
                isOpen={selectedPodcast !== null}
                onClose={() => setSelectedPodcast(null)}
                podcastTitle={selectedPodcast || ''}
                platforms={selectedPlatforms}
            />
        </section>
    );
};
