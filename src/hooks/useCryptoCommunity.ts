'use client';

import { useState, useEffect } from 'react';
import { urlAPICryptoCommunity } from '../config/url';
import { CommunityItem, CommunityResponse } from '../types/community.d';

export default function useCryptoCommunity() {
  const [data, setData] = useState<CommunityItem[]>([]);
  const [filteredData, setFilteredData] = useState<CommunityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(urlAPICryptoCommunity);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result: CommunityResponse = await response.json();
        setData(result.data);
        setFilteredData(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterByCategory = (category: string) => {
    if (category === 'All Types') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => item.category === category);
      setFilteredData(filtered);
    }
    setSearchTerm('');
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
    if (term === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(term)
      );
      setFilteredData(filtered);
    }
  };

  return {
    data: filteredData,
    loading,
    error,
    totalItems: data.length,
    filterByCategory,
    handleSearch,
    searchTerm,
  };
}