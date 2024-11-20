import { useState } from 'react';
import { MentorCard } from '../components/MentorCard';
import { mentors } from '../data/mentors';
import { FaSearch, FaUsers, FaFileInvoiceDollar, FaMoneyBillWave } from 'react-icons/fa';

const skills = [
  'Business Planning',
  'Data Analysis',
  'UX/UI Design',
  'Career Coaching',
];

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [visibleMentors, setVisibleMentors] = useState(6); // Number of mentors to show initially
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter mentors based on the search term and selected skill
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearchTerm =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSkill = selectedSkill ? mentor.skills.includes(selectedSkill) : true;

    return matchesSearchTerm && matchesSkill;
  });

  // Show more mentors
  const handleShowMore = () => {
    setVisibleMentors(prev => prev + 3); // Increase the number of visible mentors by 3
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <div className="bg-gray-300 p-6 rounded-lg mb-6 mt-4">
            <h1 className="text-4xl font-bold text-center mb-4 hidden md:block">Find Your Perfect Mentor</h1>
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
                  className="border-2 rounded-full pl-10 pr-4 py-3 w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-4 top-4 text-gray-500 transition duration-300 ease-in-out transform hover:scale-125" />
              </div>
            </div>

            {/* Skill Filter Buttons - Hidden on Small Screens */}
            <div className="flex justify-center mb-4 skill-buttons">
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

            {/* Informational Boxes - Converted to Dropdown for Mobile */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
              >
                Info
              </button>
              {isDropdownOpen && (
                <div className="bg-white shadow-lg rounded-lg p-4 mt-2 transition-transform transform scale-100">
                  <div className="flex items-center justify-start mb-4">
                    <FaUsers className="text-blue-600 text-3xl mr-2" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold">800,000</h3>
                      <p className="text-gray-600">Employers Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mb-4">
                    <FaFileInvoiceDollar className="text-blue-600 text-3xl mr-2" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold">1 Million</h3>
                      <p className="text-gray-600">Paid Invoices</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start">
                    <FaMoneyBillWave className="text-blue-600 text-3xl mr-2" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold">$250 Million</h3>
                      <p className="text-gray-600">Paid to Freelancers</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Informational Boxes - Desktop View */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
                <FaUsers className="text-blue-600 text-3xl mr-2" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">800,000</h3>
                  <p className="text-gray-600">Employers Worldwide</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
                <FaFileInvoiceDollar className="text-blue-600 text-3xl mr-2" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">1 Million</h3>
                  <p className="text-gray-600">Paid Invoices</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
                <FaMoneyBillWave className="text-blue-600 text-3xl mr-2" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">$250 Million</h3>
                  <p className="text-gray-600">Paid to Freelancers</p>
                </div>
              </div>
            </div>
          </div>

          {/* New Heading for Mentor Cards */}
          <h2 className="text-3xl font-bold text-center mb-6">Top Personal Training Freelancing Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {filteredMentors.slice(0, visibleMentors).map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
          {visibleMentors < filteredMentors.length && ( // Show "Show More" button if there are more mentors to display
            <div className="text-center mt-4">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Show More
              </button>
            </div>
          )}

          {/* Additional Information Section */}
          <div className="flex flex-col md:flex-row mt-8">
            <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Hire an Online Personal Trainer</h2>
              <p className="text-gray-700 mb-2">
                <strong>Why Should You Hire a Personal Trainer?</strong><br />
                Personal training works on achieving your fitness goals, including but not limited to weight loss, strength training, toning, or overall health management. This training is given as per the client’s current fitness level. Depending on your fitness level, the personal trainer customizes a plan that helps you achieve your fitness, weight loss, advanced training, or other goals.
              </p>
              <p className="text-gray-700 mb-2">
                Personal training oversees an individual’s fitness in a fitness facility or private setting. If you are looking for a healthy lifestyle, a commitment to a fit physique, and want to take your fitness to the next level, you must appoint a freelance personal trainer. If you are concerned about how to hire a personal trainer, Guru can help you connect with the best trainers.
              </p>
              <p className="text-gray-700 mb-2 my-textarea">
                <strong>What Does a Personal Trainer Do?</strong><br />
                Personal trainers are professionals who give guidance to clients interested in weight loss, muscle building, or increasing fitness levels. They create individual plans for achieving the fitness goals as per the client’s requirement. They also give you supplemental nutritional information that will help support your fitness goals. These professionals also educate you on different ways to engage in physical exercise and healthy living.
              </p>
              <p className="text-gray-700 mb-2 my-textarea">
                Personal trainers have to make sure that they provide the clients with safe, reasonable exercises that can be performed in the gym as well as at home. A freelance fitness trainer leads, instructs, and encourages individuals or groups of all ages in different exercise activities. If one is interested in learning about the yogic lifestyle, food, exercises, meditation, and more, one must consider yoga instructors for hire.
              </p>
              <p className="text-gray-700 mb-2 my-textarea">
                If you are looking to hire an online personal trainer, Guru can help you find the best professional in this domain. Before you find an online personal trainer, do ensure that the professional:
              </p>
              <ul className="list-disc list-inside mb-4  ">
                <li>Has knowledge of human anatomy, exercise, and nutrition.</li>
                <li>They are able to assess and screen the clients, both initially and progressively.</li>
                <li>They can design health, wellness, and fitness programs as per the client’s specific needs.</li>
                <li>They have a good understanding of cardiovascular, flexibility, resistance exercises, and other forms and formats of exercises.</li>
              </ul>
              <p className="text-gray-700 mb-2 my-textarea">
                <strong>Benefits of Hiring Personal Trainers</strong><br />
                Personal trainers will create a workout plan that will help you meet your fitness goals. These professionals will make the plan on the basis of your current physical state.
              </p>
              <p className="text-gray-700 mb-2 my-textarea">
                These experts will make sure that you are using the correct form of exercise to get the best results. You can find an online personal trainer who will guide you on both achieving fitness goals and nutritional requirements. Personal trainers will use their expertise to come up with new exercises and workouts. A freelance personal trainer will keep your entire plan exciting by introducing new and innovative ways to increase your fitness levels and keep the journey interesting.
              </p>
            </div>

            <div className="md:w-1/3 bg-blue-100 p-5 mb-3 rounded-lg shadow-md ml-0 md:ml-4">
              <h2 className="text-xl font-bold mb-4">Popular Skills</h2>
              <ul className="list-disc list-inside">
                <li>Fitness Consultants</li>
                <li>Weight Loss Coaches</li>
                <li>Physical Education Teachers</li>
                <li>Bodybuilding Coaches</li>
                <li>Community Mental Health Services</li>
                <li>Trainers</li>
                <li>Patient Educators</li>
                <li>Yoga Instructors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 w-full">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl text-white font-bold mb-2">Join Us Today!</h2>
            <p className="mb-4">Connect with top mentors and take your career to the next level.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
            <p className="mt-4">&copy; {new Date().getFullYear()} MentorMatch. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}