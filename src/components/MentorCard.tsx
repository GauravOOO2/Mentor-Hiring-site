import { Mentor } from '../types'
import { Link } from 'react-router-dom'

export function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={mentor.photo}
            alt={mentor.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">{mentor.name}</h2>
            <p className="text-gray-600">{mentor.title}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{mentor.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.skills.slice(0, 3).map((skill: string) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">${mentor.hourlyRate}/hr</span>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-gray-600">{mentor.rating.toFixed(1)}</span>
          </div>
        </div>
        <Link 
          to={`/mentor/${mentor.id}`}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}