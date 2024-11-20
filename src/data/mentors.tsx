import { Mentor } from '../types'

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'John Doe',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    title: 'Career Coach',
    summary: 'Helping individuals reach their career goals for over 10 years.',
    bio: 'With a decade of experience in career coaching, I specialize in helping professionals navigate career transitions, improve their resumes, and ace interviews. My approach combines practical strategies with personalized guidance to help you achieve your career aspirations.',
    location: 'New York, NY',
    skills: ['Resume Review', 'Interview Preparation', 'LinkedIn Optimization'],
    hourlyRate: 150,
    rating: 4.8,
    availableSlots: [
      { date: '2024-11-20', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
      { date: '2024-11-21', slots: ['11:00 AM', '1:00 PM'] }
    ]
  },
  {
    id: '2',
    name: 'Jane Smith',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Tech Leadership Mentor',
    summary: 'Guiding aspiring tech leaders to excel in management roles.',
    bio: 'As a former CTO of a Fortune 500 company, I now dedicate my time to mentoring the next generation of tech leaders. My sessions focus on developing leadership skills, managing teams effectively, and navigating the complex world of technology management.',
    location: 'San Francisco, CA',
    skills: ['Leadership Development', 'Team Management', 'Tech Strategy'],
    hourlyRate: 200,
    rating: 4.9,
    availableSlots: [
      { date: '2024-11-22', slots: ['9:00 AM', '1:00 PM', '3:00 PM'] },
      { date: '2024-11-23', slots: ['10:00 AM', '2:00 PM'] }
    ]
  },
  {
    id: '3',
    name: 'Alex Johnson',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    title: 'Startup Advisor',
    summary: 'Helping entrepreneurs turn ideas into successful businesses.',
    bio: 'With experience founding and scaling three successful startups, I offer practical advice on all aspects of startup life. From refining your pitch to securing funding and building your team, Im here to guide you through the challenges of entrepreneurship.',
    location: 'Austin, TX',
    skills: ['Business Planning', 'Fundraising', 'Product Development'],
    hourlyRate: 175,
    rating: 4.7,
    availableSlots: [
      { date: '2024-11-24', slots: ['11:00 AM', '3:00 PM', '5:00 PM'] },
      { date: '2024-11-25', slots: ['9:00 AM', '1:00 PM'] }
    ]
  },
  {
    id: '4',
    name: 'Emily Chen',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
    title: 'Data Science Expert',
    summary: 'Bridging the gap between data and business strategy.',
    bio: 'As a data scientist with a PhD in Machine Learning, I help professionals and organizations leverage the power of data. My sessions cover everything from basic statistical analysis to advanced AI applications, always with a focus on practical business applications.',
    location: 'Seattle, WA',
    skills: ['Machine Learning', 'Data Analysis', 'AI Strategy'],
    hourlyRate: 190,
    rating: 4.9,
    availableSlots: [
      { date: '2024-11-26', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
      { date: '2024-11-27', slots: ['11:00 AM', '3:00 PM'] }
    ]
  },
  {
    id: '5',
    name: 'Michael Brown',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
    title: 'UX/UI Design Mentor',
    summary: 'Crafting user-centric designs that drive engagement.',
    bio: 'With over 15 years in UX/UI design, Ive worked with startups and Fortune 100 companies alike. My mentoring focuses on teaching design thinking, creating intuitive user flows, and mastering the latest design tools and techniques.',
    location: 'Los Angeles, CA',
    skills: ['User Research', 'Wireframing', 'Prototyping'],
    hourlyRate: 160,
    rating: 4.8,
    availableSlots: [
      { date: '2024-11-28', slots: ['9:00 AM', '1:00 PM', '5:00 PM'] },
      { date: '2024-11-29', slots: ['10:00 AM', '2:00 PM'] }
    ]
  },
  {
    id: '6',
    name: 'Sarah Lee',
    photo: 'https://randomuser.me/api/portraits/women/6.jpg',
    title: 'Digital Marketing Strategist',
    summary: 'Maximizing online presence and ROI for businesses.',
    bio: 'As a digital marketing veteran, Ive helped countless businesses grow their online presence. My mentoring covers SEO, content marketing, social media strategy, and paid advertising, always with a focus on measurable results and ROI.',
    location: 'Chicago, IL',
    skills: ['SEO', 'Content Strategy', 'Social Media Marketing'],
    hourlyRate: 140,
    rating: 4.7,
    availableSlots: [
      { date: '2024-11-30', slots: ['11:00 AM', '3:00 PM', '5:00 PM'] },
      { date: '2024-12-01', slots: ['9:00 AM', '1:00 PM'] }
    ]
  },
  {
    id: '7',
    name: 'David Wilson',
    photo: 'https://randomuser.me/api/portraits/men/7.jpg',
    title: 'Cybersecurity Expert',
    summary: 'Protecting businesses and individuals in the digital age.',
    bio: 'With a background in ethical hacking and corporate security, I offer insights into the world of cybersecurity. My sessions cover threat assessment, security best practices, and incident response planning for individuals and organizations.',
    location: 'Washington, D.C.',
    skills: ['Network Security', 'Ethical Hacking', 'Incident Response'],
    hourlyRate: 180,
    rating: 4.9,
    availableSlots: [
      { date: '2024-12-02', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
      { date: '2024-12-03', slots: ['11:00 AM', '3:00 PM'] }
    ]
  },
  {
    id: '8',
    name: 'Olivia Martinez',
    photo: 'https://randomuser.me/api/portraits/women/8.jpg',
    title: 'Agile Coach',
    summary: 'Transforming teams and organizations with agile methodologies.',
    bio: 'As a Certified Scrum Master and SAFe Program Consultant, I help teams and organizations embrace agile methodologies. My mentoring focuses on implementing Scrum, Kanban, and scaled agile frameworks to improve productivity and product quality.',
    location: 'Boston, MA',
    skills: ['Scrum', 'Kanban', 'SAFe'],
    hourlyRate: 170,
    rating: 4.8,
    availableSlots: [
      { date: '2024-12-04', slots: ['9:00 AM', '1:00 PM', '5:00 PM'] },
      { date: '2024-12-05', slots: ['10:00 AM', '2:00 PM'] }
    ]
  },
  {
    id: '9',
    name: 'Robert Taylor',
    photo: 'https://randomuser.me/api/portraits/men/9.jpg',
    title: 'Financial Planning Advisor',
    summary: 'Guiding individuals and families to financial freedom.',
    bio: 'As a Certified Financial Planner with over 20 years of experience, I help individuals and families achieve their financial goals. My sessions cover budgeting, investment strategies, retirement planning, and wealth management.',
    location: 'Miami, FL',
    skills: ['Retirement Planning', 'Investment Strategies', 'Tax Planning'],
    hourlyRate: 190,
    rating: 4.9,
    availableSlots: [
      { date: '2024-12-06', slots: ['11:00 AM', '3:00 PM', '5:00 PM'] },
      { date: '2024-12-07', slots: ['9:00 AM', '1:00 PM'] }
    ]
  },
  {
    id: '10',
    name: 'Lisa Wang',
    photo: 'https://randomuser.me/api/portraits/women/10.jpg',
    title: 'Product Management Coach',
    summary: 'Turning ideas into successful products.',
    bio: 'With experience leading product teams at top tech companies, I now mentor aspiring and current product managers. My sessions focus on product strategy, user-centric design, and effective stakeholder management.',
    location: 'San Jose, CA',
    skills: ['Product Strategy', 'User Stories', 'Roadmapping'],
    hourlyRate: 185,
    rating: 4.8,
    availableSlots: [
      { date: '2024-12-08', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
      { date: '2024-12-09', slots: ['11:00 AM', '3:00 PM'] }
    ]
  },
  {
    id: '11',
    name: 'James Foster',
    photo: 'https://randomuser.me/api/portraits/men/11.jpg',
    title: 'Blockchain Developer',
    summary: 'Building the decentralized future with blockchain technology.',
    bio: 'As a blockchain developer and consultant, I help individuals and companies navigate the world of cryptocurrencies and decentralized applications. My mentoring covers blockchain fundamentals, smart contract development, and DApp architecture.',
    location: 'Denver, CO',
    skills: ['Smart Contracts', 'DApp Development', 'Cryptocurrency'],
    hourlyRate: 200,
    rating: 4.7,
    availableSlots: [
      { date: '2024-12-10', slots: ['9:00 AM', '1:00 PM', '5:00 PM'] },
      { date: '2024-12-11', slots: ['10:00 AM', '2:00 PM'] }
    ]
  },
  {
    id: '12',
    name: 'Sophia Patel',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    title: 'AI Ethics Consultant',
    summary: 'Ensuring responsible AI development and implementation.',
    bio: 'With a background in philosophy and computer science, I help organizations navigate the ethical challenges of AI. My sessions cover AI ethics frameworks, bias detection and mitigation, and responsible AI development practices.',
    location: 'Toronto, Canada',
    skills: ['AI Ethics', 'Bias Mitigation', 'Responsible AI'],
    hourlyRate: 175,
    rating: 4.9,
    availableSlots: [
      { date: '2024-12-12', slots: ['11:00 AM', '3:00 PM', '5:00 PM'] },
      { date: '2024-12-13', slots: ['9:00 AM', '1:00 PM'] }
    ]
  },
  {
    id: '13',
    name: 'Daniel Kim',
    photo: 'https://randomuser.me/api/portraits/men/13.jpg',
    title: 'DevOps Engineer',
    summary: 'Streamlining development and operations for maximum efficiency.',
    bio: 'As a seasoned DevOps engineer, I help teams implement efficient CI/CD pipelines and robust infrastructure. My mentoring covers containerization, infrastructure as code, and cloud-native technologies.',
    location: 'Portland, OR',
    skills: ['Docker', 'Kubernetes', 'CI/CD'],
    hourlyRate: 180,
    rating: 4.8,
    availableSlots: [
      { date: '2024-12-14', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
      { date: '2024-12-15', slots: ['11:00 AM', '3:00 PM'] }
    ]
  },
  {
    id: '14',
    name: 'Emma Thompson',
    photo: 'https://randomuser.me/api/portraits/women/14.jpg',
    title: 'Sustainability Consultant',
    summary: 'Helping businesses thrive while minimizing environmental impact.',
    bio: 'With a background in environmental science and business, I guide organizations in implementing sustainable practices. My sessions cover sustainability strategy, green tech implementation, and ESG reporting.',
    location: 'Vancouver, Canada',
    skills: ['Sustainability Strategy', 'ESG Reporting', 'Green Tech'],
    hourlyRate: 160,
    rating: 4.7,
    availableSlots: [
      { date: '2024-12-16', slots: ['9:00 AM', '1:00 PM', '5:00 PM'] },
      { date: '2024-12-17', slots: ['10:00 AM', '2:00 PM'] }
    ]
  },
  {
    id: '15',
    name: 'Carlos Rodriguez',
    photo: 'https://randomuser.me/api/portraits/men/15.jpg',
    title: 'Mobile App Developer',
    summary: 'Crafting intuitive and performant mobile experiences.',
    bio: 'As a mobile app developer with experience in both iOS and Android, I help individuals and teams create successful mobile applications. My mentoring covers app architecture, UI/UX best practices, and performance optimization.',
    location: 'Madrid, Spain',
    skills: ['iOS Development', 'Android Development', 'React Native'],
    hourlyRate: 170,
    rating: 4.8,
    availableSlots: [
      { date: '2024-12-18', slots: ['11:00 AM', '3:00 PM', '5:00 PM'] },
      { date: '2024-12-19', slots: ['9:00 AM', '1:00 PM'] }
    ]
  },
  {
    id: '16',
    name: 'Natalie Wong',
    photo: 'https://randomuser.me/api/portraits/women/16.jpg',
    title: 'Data Privacy Expert',
    summary: 'Navigating the complex world of data protection and privacy laws.',
    bio: 'As a certified information privacy professional, I help organizations comply with data protection regulations like GDPR and CCPA. My sessions cover privacy by design, data mapping, and creating effective privacy policies.',
    location: 'Singapore',
    skills: ['GDPR Compliance', 'Privacy by Design', 'Data Mapping'],
    hourlyRate: 190,
    rating: 4.9,
    availableSlots: [
      { date: '2024-12-20', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
      { date: '2024-12-21', slots: ['11:00 AM', '3:00 PM'] }
    ]
  },
  {
    id: '17',
    name: 'Thomas Müller',
    photo: 'https://randomuser.me/api/portraits/men/17.jpg',
    title: 'Cloud Architecture Specialist',
    summary: 'Designing scalable and resilient cloud-based systems.',
    bio: 'With certifications in AWS, Azure, and Google Cloud, I help organizations design and implement robust cloud architectures. My mentoring covers cloud migration strategies, serverless computing, and multi-cloud environments.',
    location: 'Berlin, Germany',
    skills: ['AWS', 'Azure', 'Google Cloud'],
    hourlyRate: 195,
    rating: 4.8,
    availableSlots: [
      { date: '2024-12-22', slots: ['9:00 AM', '1:00 PM', '5:00 PM'] },
      { date: '2024-12-23', slots: ['10:00 AM', '2:00 PM'] }
    ]
  },
  {
    id: '18',
    name: 'Aisha Patel',
    photo: 'https://randomuser.me/api/portraits/women/18.jpg',
    title: 'Diversity and Inclusion Consultant',
    summary: 'Creating inclusive workplaces that drive innovation and growth.',
    bio: 'As a D&I expert, I help organizations build inclusive cultures that attract and retain diverse talent. My sessions cover unconscious bias training, inclusive leadership, and developing effective D&I strategies.',
    location: 'London, UK',
    skills: ['Unconscious Bias Training', 'Inclusive Leadership', 'D&I Strategy'],
    hourlyRate: 165,
    rating: 4.9,
    availableSlots: [
      { date: '2024-12-24', slots: ['11:00 AM', '3:00 PM', '5:00 PM'] },
      { date: '2024-12-25', slots: ['9:00 AM', '1:00 PM'] }
    ]
  },
  {
    id: '19',
    name: "Ryan O'Connor",
    photo: 'https://randomuser.me/api/portraits/men/19.jpg',
    title: 'Growth Hacking Specialist',
    summary: 'Accelerating startup growth through data-driven strategies.',
    bio: 'As a growth hacker, Ive helped numerous startups achieve rapid, sustainable growth. My mentoring covers customer acquisition strategies, viral marketing techniques, and optimizing conversion funnels.',
    location: 'Dublin, Ireland',
    skills: ['A/B Testing', 'Viral Marketing', 'Funnel Optimization'],
    hourlyRate: 175,
    rating: 4.7,
    availableSlots: [
      { date: '2024-12-26', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
      { date: '2024-12-27', slots: ['11:00 AM', '3:00 PM'] }
    ]
  },
  {
    id: '20',
    name: 'Yuki Tanaka',
    photo: 'https://randomuser.me/api/portraits/women/20.jpg',
    title: 'AR/VR Developer',
    summary: 'Creating immersive experiences at the forefront of technology.',
    bio: 'As an AR/VR developer, I help individuals and companies explore the potential of immersive technologies. My mentoring covers AR/VR development fundamentals, 3D modeling for virtual environments, and creating engaging user experiences in AR/VR.',
    location: 'Tokyo, Japan',
    skills: ['Unity3D', 'ARKit', 'Oculus Development'],
    hourlyRate: 185,
    rating: 4.8,
    availableSlots: [
      { date: '2024-12-28', slots: ['9:00 AM', '1:00 PM', '5:00 PM'] },
      { date: '2024-12-29', slots: ['10:00 AM', '2:00 PM'] }
    ]
  }
]