import { Slot } from '../types'

interface TimeSlotsProps {
  selectedDate: Date | null
  selectedSlot: Slot | null
  onSelectSlot: (slot: Slot) => void
}

export function TimeSlots({ selectedDate, selectedSlot, onSelectSlot }: TimeSlotsProps) {
  const availableSlots: Slot[] = [
    { id: '1', startTime: '09:00', endTime: '10:00' },
    { id: '2', startTime: '10:00', endTime: '11:00' },
    { id: '3', startTime: '11:00', endTime: '12:00' },
    { id: '4', startTime: '13:00', endTime: '14:00' },
    { id: '5', startTime: '14:00', endTime: '15:00' },
    { id: '6', startTime: '15:00', endTime: '16:00' },
  ]

  if (!selectedDate) {
    return <div className="text-gray-600">Please select a date to view available time slots.</div>
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {availableSlots.map((slot) => (
        <button
          key={slot.id}
          onClick={() => onSelectSlot(slot)}
          className={`
            p-2 rounded border
            ${
              selectedSlot?.id === slot.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }
          `}
        >
          {slot.startTime} - {slot.endTime}
        </button>
      ))}
    </div>
  )
}