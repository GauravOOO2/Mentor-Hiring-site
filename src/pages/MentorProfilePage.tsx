import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Mentor } from '../types'
import { mentors } from '../data/mentors'

export function MentorProfilePage() {
  const [mentor, setMentor] = useState<Mentor | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const foundMentor = mentors.find(m => m.id === id)
    setMentor(foundMentor || null)
  }, [id])

  if (!mentor) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <img
            src={mentor.photo}
            alt={mentor.name}
            className="w-24 h-24 rounded-full mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
            <p className="text-xl text-gray-600 mb-2">{mentor.title}</p>
            <p className="text-gray-600">{mentor.location}</p>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700">{mentor.bio}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {mentor.skills.map((skill: string) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
          <p className="text-xl font-bold text-blue-600">${mentor.hourlyRate}/hr</p>
        </div>
        <Link
          to={`/booking/${mentor.id}`}
          className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Book a Session
        </Link>
      </div>
    </div>
  )
}