export interface Member {
  id: number;
  picture: {
      large: string;
      medium: string;
  };
  name: {
      first: string;
      last: string;
  };
  email: string;
  cell: string;
  testimonial: string;
}