export interface Event {
  eventId: number;
  title: string;
  description: string;
  categoryName: string;
  cityName: string;
  imageUrl: string;
  eventDate: string;
  tickets: {
    price: number;
    availableTicket: number;
  }[];
}

export interface Ticket {
  ticketId: number;
  type: string;
  price: number;
  availableTicket: number;
}

export interface Discount {
  discounteId: number;
  discountPercentage: number;
  title: string;
  description: string;
  maxUsage: number;
  expiredDate: string;
}

export interface Review {
  eventId: number;
  rating: number;
  feedback: string;
}