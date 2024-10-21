import { useEffect, useState } from 'react';
import axios from 'axios';

const UseTeamMember = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=2&results=3&seed=abc&nat=us&inc=name,picture,email,cell');
        setMembers(response.data.results);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return { members, loading };
};

export default UseTeamMember;