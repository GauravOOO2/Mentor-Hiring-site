import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-blue-600 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MentorMatch
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/booked-mentors" className="hover:underline">
                Booked Mentors
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}