import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mentor } from '../types';

interface BookedMentor {
  mentor: Mentor;
  date: Date;
  slot: string;
  purpose: string;
}

export function BookedMentorsPage() {
  const [bookedMentors, setBookedMentors] = useState<BookedMentor[]>([]);

  useEffect(() => {
    const storedBookings = localStorage.getItem('bookedMentors');
    if (storedBookings) {
      const bookingsArray = JSON.parse(storedBookings).map((booking: any) => ({
        ...booking,
        date: new Date(booking.date),
      }));
      setBookedMentors(bookingsArray);
    }
  }, []);

  const handleWithdraw = (index: number) => {
    if (window.confirm("Are you sure you want to withdraw this booking?")) {
      const updatedBookings = bookedMentors.filter((_, i) => i !== index);
      setBookedMentors(updatedBookings);
      localStorage.setItem('bookedMentors', JSON.stringify(updatedBookings));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Booked Mentors</h1>
      {bookedMentors.length === 0 ? (
        <p className="text-gray-600">You have not booked any mentors yet.</p>
      ) : (
        <ul className="space-y-4">
          {bookedMentors.map((booking, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
              <img
                src={booking.mentor.photo}
                alt={booking.mentor.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{booking.mentor.name}</h2>
                <p className="text-gray-600">Profession: {booking.mentor.title}</p>
                <p className="text-gray-600">Date: {booking.date.toLocaleDateString()}</p>
                <p className="text-gray-600">Time Slot: {booking.slot}</p>
                <p className="text-gray-600">Purpose: {booking.purpose}</p>
              </div>
              <button
                onClick={() => handleWithdraw(index)}
                className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Withdraw
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Back to Home
      </Link>
    </div>
  );
}