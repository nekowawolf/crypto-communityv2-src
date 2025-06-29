import Image from 'next/image';
import { CommunityItem } from '../types/community.d';

export default function CommunityCard({ item }: { item: CommunityItem }) {
  const imgSrc = item.img_url?.trim() || '/img/placeholder.png';

  return (
    <div className="bg-gray-900 rounded-lg p-4 flex items-center space-x-4 w-full max-w-2xl mx-auto mb-4">
      <Image
        alt="Community Logo"
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg"
        src={imgSrc}
        width={80}
        height={80}
      />
      <div className="flex-1">
        <h1 className="text-white text-xl font-bold sm:mb-2 mb-0">
          {item.name || 'Unknown Name'}
        </h1>
        <p className="text-gray-300 text-sm sm:-mt-2 sm:mb-2 mt-0 mb-0">
          {item.platforms || 'No Platforms'}
        </p>
        <span className="bg-blue-600 text-white text-xs px-3 py-0 rounded-full">
          {item.category || 'No Category'}
        </span>
      </div>
      <a
        href={item.link_url || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-lg text-sm sm:text-base sm:py-1 sm:px-4"
      >
        JOIN
      </a>
    </div>
  );
}
