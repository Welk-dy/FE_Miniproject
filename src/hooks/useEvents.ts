import { useEffect, useState } from 'react';
import axios from 'axios';
import { Event } from '@/models/Parameter';

const useEvents = (currentPage: number, eventsPerPage: number) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8080/events', {
          params: { page: currentPage - 1, size: eventsPerPage }, // Adjusting API params
        });
        if (response.status === 200) {
          const { content, totalPages } = response.data.data; // Structure depends on API response
          setEvents(content);
          setTotalPages(totalPages); // Update total pages based on API response
        }
      } catch (err) {
        setError('Failed to fetch events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [currentPage, eventsPerPage]);

  return { events, loading, error, totalPages };
};

export default useEvents;