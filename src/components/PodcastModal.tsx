import React from 'react';
import Image from 'next/image';
import { X, ExternalLink } from 'lucide-react';

interface PodcastModalProps {
    isOpen: boolean;
    onClose: () => void;
    podcastTitle: string;
    platforms: { name: string; logo: string; url: string; color: string }[];
}

export const PodcastModal: React.FC<PodcastModalProps> = ({ isOpen, onClose, podcastTitle, platforms }) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={handleBackdropClick}>
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Listen to Podcast</h3>
                        <p className="text-gray-600 mt-1">{podcastTitle}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                        <X className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                {/* Platform Grid */}
                <div className="p-6">
                    <p className="text-gray-600 mb-6 text-center">
                        Choose your preferred podcast platform:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {platforms.map((platform, index) => (
                            <a
                                key={index}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${platform.color} text-white p-4 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-between group`}
                            >
                                <div className="flex items-center">
                                    <Image src={platform.logo} alt={platform.name} width={28} height={28} className="mr-3 rounded-md" />
                                    <span className="font-medium">{platform.name}</span>
                                </div>
                                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-gray-50 rounded-b-2xl">
                    <p className="text-sm text-gray-600 text-center">
                        Can't find your platform? Use the RSS feed or Subscribe on Android option.
                    </p>
                </div>
            </div>
        </div>
    );
};
