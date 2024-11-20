import { useState } from 'react';
import { MentorCard } from '../components/MentorCard';
import { mentors } from '../data/mentors';
import { FaSearch } from 'react-icons/fa';

const skills = [
  'Business Planning',
  'Data Analysis',
  'Social Media Marketing',
  'Ethical Hacking',
];

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Filter mentors based on the search term and selected skill
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearchTerm =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSkill = selectedSkill ? mentor.skills.includes(selectedSkill) : true;

    return matchesSearchTerm && matchesSkill;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Find Your Perfect Mentor</h1>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Find and Hire Freelance Mentors</h2>
          <p className="text-gray-600">Browse 1,931 Mentoring Experts Free</p>
          <p className="text-gray-600">Hire skilled Mentoring Freelancers on Guru and get work done on a flexible and secure platform.</p>
        </div>
        <div className="flex justify-center mb-4">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by name, skill, or profession..."
              className="border rounded-full pl-10 pr-4 py-2 w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
        </div>
        <div className="flex justify-center mb-4">
          {skills.map(skill => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(skill)}
              className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mx-1 hover:bg-blue-200 transition"
            >
              {skill}
            </button>
          ))}
          <button
            onClick={() => setSelectedSkill(null)} // Clear skill filter
            className="bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full mx-1 hover:bg-gray-300 transition"
          >
            All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}