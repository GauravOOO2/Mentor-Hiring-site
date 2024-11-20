import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Mentor, Slot } from '../types'
import { Calendar } from '../components/Calendar'
import { TimeSlots } from '../components/TimeSlots'
import { BookingForm } from '../components/BookingForm'
import { mentors } from '../data/mentors'

export function BookingPage() {
  const [mentor, setMentor] = useState<Mentor | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null)
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    const foundMentor = mentors.find(m => m.id === id)
    setMentor(foundMentor || null)
  }, [id])

  const handleBooking = (purpose: string) => {
    if (mentor && selectedDate && selectedSlot) {
      navigate('/confirmation', {
        state: {
          mentor,
          date: selectedDate,
          slot: selectedSlot,
          purpose,
        },
      })
    }
  }

  if (!mentor) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Book a Session with {mentor.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
          <TimeSlots
            selectedDate={selectedDate}
            selectedSlot={selectedSlot}
            onSelectSlot={setSelectedSlot}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <BookingForm
          mentor={mentor}
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          onSubmit={handleBooking}
        />
      </div>
    </div>
  )
}