import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the type for the testimonial data
interface Testimonial {
  id: number;
  text: string;
  name: string;
  picture: string;
}

// Hook implementation
const useTestimonial = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get<Testimonial[]>('https://example.com/api/testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading };
};

export default useTestimonial;