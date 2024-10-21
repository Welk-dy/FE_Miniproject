export interface User {
    id: number; // Ensure this matches your fetched data
    picture: {
        medium: string; // This should be the correct structure
    };
    name: {
        first: string;
        last: string;
    };
    testimonial: string; // Assuming this is part of your user data
}