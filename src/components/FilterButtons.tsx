'use client';

import { useState } from 'react';
import { categories } from '@/config/categories';

interface FilterButtonsProps {
  onFilterChange: (category: string) => void;
  defaultActive?: string;
}

export default function FilterButtons({ 
  onFilterChange,
  defaultActive = 'All Types',
}: FilterButtonsProps) {
  const [activeFilter, setActiveFilter] = useState(defaultActive);

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
