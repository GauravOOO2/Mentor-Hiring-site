import { useState } from 'react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns'

interface CalendarProps {
  selectedDate: Date | null
  onSelectDate: (date: Date) => void
}

export function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2 className="text-lg font-semibold">{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 p-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {monthDays.map((day) => (
          <button
            key={day.toISOString()}
            onClick={() => onSelectDate(day)}
            className={`
              p-2 rounded-full
              ${!isSameMonth(day, currentMonth) && 'text-gray-400'}
              ${isSameDay(day, selectedDate as Date) && 'bg-blue-600 text-white'}
              ${isToday(day) && !isSameDay(day, selectedDate as Date) && 'bg-blue-100'}
            `}
          >
            {format(day, 'd')}
          </button>
        ))}
      </div>
    </div>
  )
}