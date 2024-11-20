import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MentorMatch
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/booked-mentors">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                  Booked Mentors
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}