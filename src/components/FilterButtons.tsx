'use client';

import { useState } from 'react';

const categories = [
  { name: 'Airdrop', label: 'Airdrop' },
  { name: 'Trading', label: 'Trading' },
  { name: 'All Types', label: 'All Types' },
  { name: 'NFT', label: 'NFT' },
  { name: 'Developer', label: 'Developer' },
  { name: 'Social', label: 'Social' },
  { name: 'Web3 Jobs', label: 'Web3 Jobs' },
  { name: 'Meme Coin', label: 'Meme Coin' },
];

export default function FilterButtons({ 
  onFilterChange 
}: { 
  onFilterChange: (category: string) => void 
}) {
  const [activeFilter, setActiveFilter] = useState('All Types');

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    onFilterChange(category);
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`px-4 py-2 rounded-lg md:hover:bg-gray-600 text-white text-sm ${
            activeFilter === category.name ? 'bg-blue-600' : 'bg-gray-700'
          }`}
          onClick={() => handleFilterClick(category.name)}
          data-category={category.name}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}