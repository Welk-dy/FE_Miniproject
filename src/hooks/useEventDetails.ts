"use client";

import { useEffect, useState } from "react";
import { Event } from "@/models/Parameter";

interface UseEventReturn {
  event: Event | null;
  loading: boolean;
  error: string | null;
}

const useEventDetails = (eventId: string): UseEventReturn => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) {
        setError("No event ID provided");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:8080/events/${eventId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const responseBody = await response.json();
        if (responseBody.success) {
          setEvent(responseBody.data);
        } else {
          throw new Error(responseBody.message || "Failed to fetch event");
        }
      } catch (err: any) {
        console.error("Fetch error:", err.message);
        setError(err.message || "Failed to fetch event");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  return { event, loading, error };
};

export default useEventDetails;