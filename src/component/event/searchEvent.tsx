import { useState, useCallback } from 'react';
import SearchBar from '@/component/event/searchBar';
import AllEvent from '@/component/event/allEvent';

const SearchEvent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  // Debounce function
  const debounce = (func: (query: string) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout | null = null;

    return (query: string) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func(query);
      }, delay);
    };
  };

  // Function to handle search input
  const handleSearch = useCallback(debounce((query: string) => {
    setDebouncedSearchQuery(query);
  }, 300), []); // 300ms debounce delay

  return (
    <main className="h-full">
      <SearchBar onSearch={handleSearch} />
      <AllEvent searchQuery={debouncedSearchQuery} />
    </main>
  );
};

export default SearchEvent;