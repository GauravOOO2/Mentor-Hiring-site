import { useLocation, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { Mentor, Slot } from '../types'

interface BookingState {
  mentor: Mentor
  date: Date
  slot: Slot
  purpose: string
}

export function ConfirmationPage() {
  const location = useLocation()
  const { mentor, date, slot, purpose } = location.state as BookingState

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Booking Confirmed!</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Mentor:</span> {mentor.name}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {format(date, 'MMMM d, yyyy')}
          </p>
          <p>
            <span className="font-semibold">Time:</span> {slot.startTime} - {slot.endTime}
          </p>
          <p>
            <span className="font-semibold">Purpose:</span> {purpose}
          </p>
        </div>
      </div>
      <p className="text-gray-600 mb-4 text-center">
        Please find your bookings at the booked Mentors section at the top button.
      </p>
      <div className="text-center">
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}