import { useEffect, useState } from 'react';
import axios from 'axios';

const UseTestimony = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=6&results=3&seed=abc&nat=us&inc=name,picture');
        setMembers(response.data.results);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return { members, loading };
};

export default UseTestimony;