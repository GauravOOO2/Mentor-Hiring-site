import { useState } from 'react'
import { Mentor, Slot } from '../types'
import { format } from 'date-fns'

interface BookingFormProps {
  mentor: Mentor
  selectedDate: Date | null
  selectedSlot: Slot | null
  onSubmit: (purpose: string) => void
}

export function BookingForm({ mentor, selectedDate, selectedSlot, onSubmit }: BookingFormProps) {
  const [purpose, setPurpose] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(purpose)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Booking Summary</h2>
      <div>
        <p className="font-semibold">Mentor:</p>
        <p>{mentor.name}</p>
      </div>
      <div>
        <p className="font-semibold">Date:</p>
        <p>{selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Not selected'}</p>
      </div>
      <div>
        <p className="font-semibold">Time:</p>
        <p>
          {selectedSlot ? `${selectedSlot.startTime} - ${selectedSlot.endTime}` : 'Not selected'}
        </p>
      </div>
      <div>
        <label htmlFor="purpose" className="block font-semibold mb-1">
          Purpose of Booking:
        </label>
        <textarea
          id="purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        disabled={!selectedDate || !selectedSlot}
      >
        Confirm Booking
      </button>
    </form>
  )
}