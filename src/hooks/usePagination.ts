import { useState } from 'react';

export function usePagination(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  const nextSlide = () => {
    if (!isLastSlide) setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isFirstSlide) setCurrentSlide((prev) => prev - 1);
  };

  return { currentSlide, nextSlide, prevSlide, isFirstSlide, isLastSlide };
}