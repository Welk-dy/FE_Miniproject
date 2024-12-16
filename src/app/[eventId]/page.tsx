"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Event, Ticket, Discount, Review } from "@/models/Parameter";

const EventDetails: React.FC = () => {
  const { eventId }: { eventId: string } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newReview, setNewReview] = useState<string>("");

  useEffect(() => {
    const fetchEventDetails = async () => {
      if (!eventId) {
        setError("No event ID provided");
        setLoading(false);
        return;
      }

      try {
        // Fetch Event
        const eventResponse = await fetch(`http://localhost:8080/events/${eventId}`);
        if (!eventResponse.ok) throw new Error(`Error fetching event: ${eventResponse.status}`);
        const eventData = await eventResponse.json();
        if (eventData.success) {
          setEvent(eventData.data);
        } else {
          throw new Error(eventData.message || "Failed to fetch event");
        }

        // Fetch Tickets
        const ticketsResponse = await fetch(`http://localhost:8080/tickets/${eventId}`);
        if (ticketsResponse.ok) {
          const ticketsData = await ticketsResponse.json();
          setTickets(ticketsData);
        }

        // Fetch Discounts
        const discountsResponse = await fetch(`http://localhost:8080/discounts/${eventId}`);
        if (discountsResponse.ok) {
          const discountsData = await discountsResponse.json();
          setDiscounts(discountsData);
        }

        // Fetch Reviews
        const reviewsResponse = await fetch(`http://localhost:8080/reviews/${eventId}`);
        if (reviewsResponse.ok) {
          const reviewsData = await reviewsResponse.json();
          setReviews(reviewsData);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch details");
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview(event.target.value);
  };

  const handleReviewSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!newReview.trim()) return; // Don't submit empty reviews

    try {
      const response = await fetch(`http://localhost:8080/reviews/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback: newReview, rating: 5 }) // Use appropriate rating based on user input
      });

      if (!response.ok) throw new Error(`Failed to submit review: ${response.statusText}`);

      // Successfully submitted, reset form and update reviews
      const newReviewData: Review = await response.json();
      setReviews([...reviews, newReviewData]);
      setNewReview(""); // Clear the textarea
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-md space-y-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column: Image and Basic Details */}
        <div className="col-span-2 space-y-6">
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <img src={event.imageUrl} alt={event.title} className="w-full h-96 object-cover rounded-md shadow-md mb-4" />
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm bg-blue-100 text-blue-700 px-4 py-1 rounded-full">{event.categoryName}</span>
            <span className="text-sm bg-green-100 text-green-700 px-4 py-1 rounded-full">{event.cityName}</span>
          </div>
          <p className="text-gray-700 text-base">{event.description}</p>
        </div>

        {/* Right Column: Tickets and Discounts */}
        <div className="space-y-6">
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Tickets</h2>
            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <button key={ticket.ticketId} className="w-full bg-white text-black py-2 px-4 rounded-md mb-2 border border-gray-300 hover:bg-gray-100 transition" disabled>
                  {ticket.type}: {ticket.price.toLocaleString()} IDR
                </button>
              ))
            ) : (
              <p>No tickets available</p>
            )}
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Discount</h2>
            {discounts.length > 0 ? (
              discounts.map((discount) => (
                <button key={discount.discounteId} className="w-full bg-white text-black py-2 px-4 border border-gray-300 rounded-md mb-2 hover:bg-gray-100 transition" disabled>
                  {discount.title}: {discount.discountPercentage}% off
                </button>
              ))
            ) : (
              <p>No discounts available</p>
            )}
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700 transition" disabled>
              Buy Ticket
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Reviews */}
      <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg mt-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="p-4 bg-white border border-gray-300 rounded-md shadow-sm">
              <div className="flex items-start space-x-4 mb-2">
                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="text-gray-700">{review.feedback}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}

        {/* Leave a Review */}
        <form onSubmit={handleReviewSubmit} className="mt-4 space-y-2">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm resize-none"
            rows={3}
            placeholder="Leave a review..."
            value={newReview}
            onChange={handleReviewChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetails;