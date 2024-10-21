'use client'

import { useEffect, useState } from 'react';
import { fetchUserData } from '@/data/fetchUserData';

export const useTestimonial = () => {
  const [users, setUsers] = useState<any[]>([]);
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