'use client';

import { useState } from 'react';
import useCryptoCommunity from '@/hooks/useCryptoCommunity';
import CommunityCard from '@/components/CommunityCard';
import FilterButtons from '@/components/FilterButtons';
import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';

export default function Home() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data,
    loading,
    error,
    totalItems,
    filterByCategory,
    handleSearch,
    searchTerm,
  } = useCryptoCommunity();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (category: string) => {
    setCurrentPage(1);
    filterByCategory(category);
  };

  const handleSearchChange = (value: string) => {
    setCurrentPage(1);
    handleSearch(value);
  };

  if (error) {
    return (
      <div className="text-center text-red-500 p-8">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full max-w-6xl mx-auto px-5 py-10">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
            {totalItems.toLocaleString()} Crypto Community
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            Made with ❤️ by
            <a
              href="https://nekowawolf.xyz/airdrop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-1"
            >
              nekowawolf
            </a>
          </p>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full max-w-lg px-4 bg-white py-2 mb-5 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <FilterButtons onFilterChange={handleFilterChange} />

        {loading ? (
          <Loading />
        ) : (
          <>
            <div id="fillcommunity">
              {currentItems.length === 0 ? (
                <div className="text-center">
                  <img
                    src="/img/pixchan.png"
                    alt="No data found"
                    className="mx-auto w-44 h-44"
                  />
                  <p className="text-gray-500 mt-4">No data available.</p>
                </div>
              ) : (
                currentItems.map((item, index) => (
                  <CommunityCard key={index} item={item} />
                ))
              )}
            </div>

            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={data.length}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>

      <footer className="bg-gray-800 p-4 w-full">
        <aside>
          <p className="text-white text-xs sm:text-sm flex justify-center">
            if you have feedback send it here
            <a
              href="https://t.me/nekowawolf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 ml-1"
            >
              telegram
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}
