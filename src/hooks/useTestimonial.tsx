'use client'

import { useEffect, useState } from 'react';
import { fetchUserData } from '@/data/fetchUserData';

interface User {
  id: number;
  name: string;
  testimonial: string;
}

export const useTestimonial = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUserData();
      setUsers(fetchedUsers);
      setLoading(false);
    };

    getUsers();
  }, []);

  return { users, loading };
};