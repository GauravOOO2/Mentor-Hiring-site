import { Mentor } from '../types'

export const mentors: Mentor[] = [
        {
          "id": "1",
          "name": "John Doe",
          "photo": "https://randomuser.me/api/portraits/men/1.jpg",
          "title": "Career Coach",
          "summary": "Helping individuals reach their career goals for over 10 years.",
          "bio": "With a decade of experience in career coaching, I specialize in helping professionals navigate career transitions, improve their resumes, and ace interviews. My approach combines practical strategies with personalized guidance to help you achieve your career aspirations.",
          "location": "New York, NY",
          "skills": ["Resume Review", "Interview Preparation", "LinkedIn Optimization"],
          "hourlyRate": 150,
          "rating": 4.8,
          "availableSlots": [
            { "date": "2024-11-20", "slots": ["10:00 AM", "2:00 PM", "4:00 PM"] },
            { "date": "2024-11-21", "slots": ["11:00 AM", "1:00 PM"] }
          ],
          "services": [
            {
              "title": "Resume Makeover",
              "description": "Comprehensive review and optimization of your resume to highlight your strengths and stand out to potential employers.",
              "price": "$200 - 2 hour session"
            },
            {
              "title": "Interview Mastery",
              "description": "Intensive mock interview sessions with personalized feedback to boost your confidence and performance.",
              "price": "$150/hr - Minimum 2 hours"
            },
            {
              "title": "LinkedIn Profile Optimization",
              "description": "Strategic enhancement of your LinkedIn profile to attract recruiters and showcase your professional brand.",
              "price": "$250 - Includes follow-up review"
            }
          ]
        },
        {
          "id": "2",
          "name": "Jane Smith",
          "photo": "https://randomuser.me/api/portraits/women/2.jpg",
          "title": "Tech Leadership Mentor",
          "summary": "Guiding aspiring tech leaders to excel in management roles.",
          "bio": "As a former CTO of a Fortune 500 company, I now dedicate my time to mentoring the next generation of tech leaders. My sessions focus on developing leadership skills, managing teams effectively, and navigating the complex world of technology management.",
          "location": "San Francisco, CA",
          "skills": ["Leadership Development", "Team Management", "Tech Strategy"],
          "hourlyRate": 200,
          "rating": 4.9,
          "availableSlots": [
            { "date": "2024-11-22", "slots": ["9:00 AM", "1:00 PM", "3:00 PM"] },
            { "date": "2024-11-23", "slots": ["10:00 AM", "2:00 PM"] }
          ],
          "services": [
            {
              "title": "Tech Leadership Strategy Session",
              "description": "One-on-one session to develop your personal leadership style and create a roadmap for your career in tech leadership.",
              "price": "$300/hr - Minimum 2 hours"
            },
            {
              "title": "Team Management Workshop",
              "description": "Learn effective strategies for managing and motivating high-performing tech teams.",
              "price": "$500 - 3 hour workshop"
            },
            {
              "title": "Tech Strategy Consultation",
              "description": "Develop a comprehensive tech strategy aligned with business goals and industry trends.",
              "price": "$1000 - Full day session"
            }
          ]
        },
        {
          "id": "3",
          "name": "Alex Johnson",
          "photo": "https://randomuser.me/api/portraits/men/3.jpg",
          "title": "Startup Advisor",
          "summary": "Helping entrepreneurs turn ideas into successful businesses.",
          "bio": "With experience founding and scaling three successful startups, I offer practical advice on all aspects of startup life. From refining your pitch to securing funding and building your team, I'm here to guide you through the challenges of entrepreneurship.",
          "location": "Austin, TX",
          "skills": ["Business Planning", "Fundraising", "Product Development"],
          "hourlyRate": 175,
          "rating": 4.7,
          "availableSlots": [
            { "date": "2024-11-24", "slots": ["11:00 AM", "3:00 PM", "5:00 PM"] },
            { "date": "2024-11-25", "slots": ["9:00 AM", "1:00 PM"] }
          ],
          "services": [
            {
              "title": "Startup Idea Validation",
              "description": "Rigorous analysis and validation of your startup idea, including market research and competitive landscape review.",
              "price": "$500 - 3 hour session"
            },
            {
              "title": "Pitch Deck Creation",
              "description": "Collaborative development of a compelling pitch deck to attract investors and partners.",
              "price": "$1000 - Includes initial draft and two rounds of revisions"
            },
            {
              "title": "Fundraising Strategy",
              "description": "Develop a tailored fundraising strategy and connect with potential investors in my network.",
              "price": "$2000 - Comprehensive package"
            }
          ]
        },
        {
          "id": "4",
          "name": "Emily Chen",
          "photo": "https://randomuser.me/api/portraits/women/4.jpg",
          "title": "Data Science Expert",
          "summary": "Bridging the gap between data and business strategy.",
          "bio": "As a data scientist with a PhD in Machine Learning, I help professionals and organizations leverage the power of data. My sessions cover everything from basic statistical analysis to advanced AI applications, always with a focus on practical business applications.",
          "location": "Seattle, WA",
          "skills": ["Machine Learning", "Data Analysis", "AI Strategy"],
          "hourlyRate": 190,
          "rating": 4.9,
          "availableSlots": [
            { "date": "2024-11-26", "slots": ["10:00 AM", "2:00 PM", "4:00 PM"] },
            { "date": "2024-11-27", "slots": ["11:00 AM", "3:00 PM"] }
          ],
          "services": [
            {
              "title": "Data Strategy Consultation",
              "description": "Develop a comprehensive data strategy aligned with your business objectives and technical capabilities.",
              "price": "$500 - 2 hour session"
            },
            {
              "title": "Machine Learning Workshop",
              "description": "Hands-on workshop to implement machine learning models for your specific use case.",
              "price": "$1500 - Full day workshop"
            },
            {
              "title": "AI Implementation Roadmap",
              "description": "Create a detailed roadmap for integrating AI into your products or services.",
              "price": "$2000 - Includes strategy session and documentation"
            }
          ]
        },
        {
          "id": "5",
          "name": "Michael Brown",
          "photo": "https://randomuser.me/api/portraits/men/5.jpg",
          "title": "UX/UI Design Mentor",
          "summary": "Crafting user-centric designs that drive engagement.",
          "bio": "With over 15 years in UX/UI design, I've worked with startups and Fortune 100 companies alike. My mentoring focuses on teaching design thinking, creating intuitive user flows, and mastering the latest design tools and techniques.",
          "location": "Los Angeles, CA",
          "skills": ["User Research", "Wireframing", "Prototyping"],
          "hourlyRate": 160,
          "rating": 4.8,
          "availableSlots": [
            { "date": "2024-11-28", "slots": ["9:00 AM", "1:00 PM", "5:00 PM"] },
            { "date": "2024-11-29", "slots": ["10:00 AM", "2:00 PM"] }
          ],
          "services": [
            {
              "title": "UX Audit",
              "description": "Comprehensive review of your product's user experience with detailed recommendations for improvement.",
              "price": "$800 - Includes report and presentation"
            },
            {
              "title": "Design Thinking Workshop",
              "description": "Interactive workshop to apply design thinking principles to your product or service.",
              "price": "$1200 - Full day workshop for up to 10 participants"
            },
            {
              "title": "Prototyping Masterclass",
              "description": "Hands-on training in creating high-fidelity prototypes using industry-standard tools.",
              "price": "$500 - 3 hour session"
            }
          ]
        },
        {
          "id": "6",
          "name": "Sarah Lee",
          "photo": "https://randomuser.me/api/portraits/women/6.jpg",
          "title": "Digital Marketing Strategist",
          "summary": "Maximizing online presence and ROI for businesses.",
          "bio": "As a digital marketing veteran, I've helped countless businesses grow their online presence. My mentoring covers SEO, content marketing, social media strategy, and paid advertising, always with a focus on measurable results and ROI.",
          "location": "Chicago, IL",
          "skills": ["SEO", "Content Strategy", "Social Media Marketing"],
          "hourlyRate": 140,
          "rating": 4.7,
          "availableSlots": [
            { "date": "2024-11-30", "slots": ["11:00 AM", "3:00 PM", "5:00 PM"] },
            { "date": "2024-12-01", "slots": ["9:00 AM", "1:00 PM"] }
          ],
          "services": [
            {
              "title": "SEO Audit and Strategy",
              "description": "Comprehensive analysis of your website's SEO performance with actionable recommendations for improvement.",
              "price": "$750 - Includes detailed report"
            },
            {
              "title": "Content Marketing Plan",
              "description": "Develop a tailored content strategy to boost your brand's online visibility and engagement.",
              "price": "$1000 - 3 month plan"
            },
            {
              "title": "Social Media Campaign Management",
              "description": "End-to-end management of a social media campaign, from strategy to execution and analysis.",
              "price": "$2000/month - 3 month minimum"
            }
          ]
        },
        {
          "id": "7",
          "name": "David Wilson",
          "photo": "https://randomuser.me/api/portraits/men/7.jpg",
          "title": "Cybersecurity Expert",
          "summary": "Protecting businesses and individuals in the digital age.",
          "bio": "With a background in ethical hacking and corporate security, I offer insights into the world of cybersecurity. My sessions cover threat assessment, security best practices, and incident response planning for individuals and organizations.",
          "location": "Washington, D.C.",
          "skills": ["Network Security", "Ethical Hacking", "Incident Response"],
          "hourlyRate": 180,
          "rating": 4.9,
          "availableSlots": [
            { "date": "2024-12-02", "slots": ["10:00 AM", "2:00 PM", "4:00 PM"] },
            { "date": "2024-12-03", "slots": ["11:00 AM", "3:00 PM"] }
          ],
          "services": [
            {
              "title": "Cybersecurity Risk Assessment",
              "description": "Comprehensive evaluation of your organization's cybersecurity posture with detailed recommendations.",
              "price": "$2500 - Includes on-site assessment and report"
            },
            {
              "title": "Ethical Hacking Workshop",
              "description": "Hands-on training in ethical hacking techniques to better understand and prevent security breaches.",
              "price": "$1500 - Full day workshop"
            },
            {
              "title": "Incident Response Planning",
              "description": "Develop and test a customized incident response plan for your organization.",
              "price": "$3000 - Includes plan development and tabletop exercise"
            }
          ]
        },
        {
          "id": "8",
          "name": "Olivia Martinez",
          "photo": "https://randomuser.me/api/portraits/women/8.jpg",
          "title": "Agile Coach",
          "summary": "Transforming teams and organizations with agile methodologies.",
          "bio": "As a Certified Scrum Master and SAFe Program Consultant, I help teams and organizations embrace agile methodologies. My mentoring focuses on implementing Scrum, Kanban, and scaled agile frameworks to improve productivity and product quality.",
          "location": "Boston, MA",
          "skills": ["Scrum", "Kanban", "SAFe"],
          "hourlyRate": 170,
          "rating": 4.8,
          "availableSlots": [
            { "date": "2024-12-04", "slots": ["9:00 AM", "1:00 PM", "5:00 PM"] },
            { "date": "2024-12-05", "slots": ["10:00 AM", "2:00 PM"] }
          ],
          "services": [
            {
              "title": "Agile Transformation Consulting",
              "description": "Guide your organization through the process of adopting agile methodologies at scale.",
              "price": "$5000 - 2 week engagement"
            },
            {
              "title": "Scrum Master Certification Prep",
              "description": "Intensive training to prepare for Scrum Master certification exams.",
              "price": "$1200 - 3 day course"
            },
            {
              "title": "Kanban Implementation Workshop",
              "description": "Hands-on workshop to implement Kanban in your team or organization.",
              "price": "$800 - Full day workshop"
            }
          ]
        },
        {
          "id": "9",
          "name": "Robert Taylor",
          "photo": "https://randomuser.me/api/portraits/men/9.jpg",
          "title": "Financial Planning Advisor",
          "summary": "Guiding individuals and families to financial freedom.",
          "bio": "As a Certified Financial Planner with over 20 years of experience, I help individuals and families achieve their financial goals. My sessions cover budgeting, investment strategies, retirement planning, and wealth management.",
          "location": "Miami, FL",
          "skills": ["Retirement Planning", "Investment Strategies", "Tax Planning"],
          "hourlyRate": 190,
          "rating": 4.9,
          "availableSlots": [
            { "date": "2024-12-06", "slots": ["11:00 AM", "3:00 PM", "5:00 PM"] },
            { "date": "2024-12-07", "slots": ["9:00 AM", "1:00 PM"] }
          ],
          "services": [
            {
              "title": "Comprehensive Financial Plan",
              "description": "Develop a detailed financial plan tailored to your goals, including retirement, investments, and tax strategies.",
              "price": "$2500 - Includes initial consultation and plan development"
            },
            {
              "title": "Investment Portfolio Review",
              "description": "In-depth analysis of your current investment portfolio with recommendations for optimization.",
              "price": "$750 - Includes detailed report"
            },
            {
              "title": "Retirement Readiness Assessment",
              "description": "Evaluate your retirement preparedness and develop strategies to ensure a comfortable retirement.",
              "price": "$1000 - Includes assessment and action plan"
            }
          ]
        },
        {
          "id": "10",
          "name": "Lisa Wang",
          "photo": "https://randomuser.me/api/portraits/women/10.jpg",
          "title": "Product Management Coach",
          "summary": "Turning ideas into successful products.",
          "bio": "With experience leading product teams at top tech companies, I now mentor aspiring and current product managers. My sessions focus on product strategy, user-centric design, and effective stakeholder management.",
          "location": "San Jose, CA",
          "skills": ["Product Strategy", "User Stories", "Roadmapping"],
          "hourlyRate": 185,
          "rating": 4.8,
          "availableSlots": [
            { "date": "2024-12-08", "slots": ["10:00 AM", "2:00 PM", "4:00 PM"] },
            { "date": "2024-12-09", "slots": ["11:00 AM", "3:00 PM"] }
          ],
          "services": [
            {
              "title": "Product Strategy Workshop",
              "description": "Collaborative session to define and refine your product strategy, aligning it with business goals and user needs.",
              "price": "$1500 - Full day workshop"
            },
            {
              "title": "User Story Mapping Session",
              "description": "Learn and apply user story mapping techniques to improve your product development process.",
              "price": "$750 - Half-day session"
            },
            {
              "title": "Product Roadmap Development",
              "description": "Create a comprehensive product roadmap that balances user needs, business goals, and technical constraints.",
              "price": "$2000 - Includes strategy session and documentation"
            }
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
    ],
    services: [
      {
        title: 'Java/Python/JS/Go Expert',
        description: 'Expertise in implementation, customization, integration, and support of business application systems.',
        price: '$80/hr - Starting at $1K',
      },
      {
        title: 'C/C++ Software Development',
        description: 'Experience in making game plugins and reverse engineering assembly.',
        price: '$80/hr - Starting at $1K',
      },
      {
        title: 'AWS Serverless Backend Engineer',
        description: 'Expertise in architecture blueprints and detailed documentation.',
        price: '$80/hr - Starting at $1K',
      },
    ],
  },
  {
    "id": "11",
    "name": "James Foster",
    "photo": "https://randomuser.me/api/portraits/men/11.jpg",
    "title": "Blockchain Developer",
    "summary": "Building the decentralized future with blockchain technology.",
    "bio": "As a blockchain developer and consultant, I help individuals and companies navigate the world of cryptocurrencies and decentralized applications. My mentoring covers blockchain fundamentals, smart contract development, and DApp architecture.",
    "location": "Denver, CO",
    "skills": ["Smart Contracts", "DApp Development", "Cryptocurrency"],
    "hourlyRate": 200,
    "rating": 4.7,
    "availableSlots": [
      { "date": "2024-12-10", "slots": ["9:00 AM", "1:00 PM", "5:00 PM"] },
      { "date": "2024-12-11", "slots": ["10:00 AM", "2:00 PM"] }
    ],
    "services": [
      {
        "title": "Smart Contract Development",
        "description": "Design and implement secure and efficient smart contracts for various blockchain platforms.",
        "price": "$250/hr - Minimum 10 hours"
      },
      {
        "title": "DApp Architecture Consultation",
        "description": "Develop a robust architecture for your decentralized application, ensuring scalability and security.",
        "price": "$2000 - Includes initial design and follow-up review"
      },
      {
        "title": "Blockchain Fundamentals Workshop",
        "description": "Comprehensive workshop covering blockchain basics, cryptocurrencies, and emerging trends in the field.",
        "price": "$1500 - Full day workshop for up to 10 participants"
      }
    ]
  },
  {
    "id": "12",
    "name": "Sophia Patel",
    "photo": "https://randomuser.me/api/portraits/women/12.jpg",
    "title": "AI Ethics Consultant",
    "summary": "Ensuring responsible AI development and implementation.",
    "bio": "With a background in philosophy and computer science, I help organizations navigate the ethical challenges of AI. My sessions cover AI ethics frameworks, bias detection and mitigation, and responsible AI development practices.",
    "location": "Toronto, Canada",
    "skills": ["AI Ethics", "Bias Mitigation", "Responsible AI"],
    "hourlyRate": 175,
    "rating": 4.9,
    "availableSlots": [
      { "date": "2024-12-12", "slots": ["11:00 AM", "3:00 PM", "5:00 PM"] },
      { "date": "2024-12-13", "slots": ["9:00 AM", "1:00 PM"] }
    ],
    "services": [
      {
        "title": "AI Ethics Framework Development",
        "description": "Create a comprehensive AI ethics framework tailored to your organization's needs and values.",
        "price": "$3000 - Includes framework development and implementation plan"
      },
      {
        "title": "Bias Detection and Mitigation Workshop",
        "description": "Hands-on workshop to identify and mitigate bias in AI systems and datasets.",
        "price": "$1800 - Full day workshop for up to 15 participants"
      },
      {
        "title": "Responsible AI Audit",
        "description": "Thorough audit of your AI systems and development practices to ensure ethical and responsible implementation.",
        "price": "$5000 - Includes comprehensive report and recommendations"
      }
    ]
  },
  {
    "id": "13",
    "name": "Daniel Kim",
    "photo": "https://randomuser.me/api/portraits/men/13.jpg",
    "title": "DevOps Engineer",
    "summary": "Streamlining development and operations for maximum efficiency.",
    "bio": "As a seasoned DevOps engineer, I help teams implement efficient CI/CD pipelines and robust infrastructure. My mentoring covers containerization, infrastructure as code, and cloud-native technologies.",
    "location": "Portland, OR",
    "skills": ["Docker", "Kubernetes", "CI/CD"],
    "hourlyRate": 180,
    "rating": 4.8,
    "availableSlots": [
      { "date": "2024-12-14", "slots": ["10:00 AM", "2:00 PM", "4:00 PM"] },
      { "date": "2024-12-15", "slots": ["11:00 AM", "3:00 PM"] }
    ],
    "services": [
      {
        "title": "CI/CD Pipeline Optimization",
        "description": "Analyze and optimize your CI/CD pipeline for faster, more reliable deployments.",
        "price": "$2500 - Includes analysis, recommendations, and implementation support"
      },
      {
        "title": "Kubernetes Cluster Setup and Management",
        "description": "Set up and configure a production-ready Kubernetes cluster, including best practices for security and scalability.",
        "price": "$3500 - Includes initial setup and 1 month of support"
      },
      {
        "title": "Infrastructure as Code Workshop",
        "description": "Learn to manage your infrastructure using tools like Terraform or CloudFormation.",
        "price": "$1600 - Two-day workshop for up to 10 participants"
      }
    ]
  },
  {
    "id": "14",
    "name": "Emma Thompson",
    "photo": "https://randomuser.me/api/portraits/women/14.jpg",
    "title": "Sustainability Consultant",
    "summary": "Helping businesses thrive while minimizing environmental impact.",
    "bio": "With a background in environmental science and business, I guide organizations in implementing sustainable practices. My sessions cover sustainability strategy, green tech implementation, and ESG reporting.",
    "location": "Vancouver, Canada",
    "skills": ["Sustainability Strategy", "ESG Reporting", "Green Tech"],
    "hourlyRate": 160,
    "rating": 4.7,
    "availableSlots": [
      { "date": "2024-12-16", "slots": ["9:00 AM", "1:00 PM", "5:00 PM"] },
      { "date": "2024-12-17", "slots": ["10:00 AM", "2:00 PM"] }
    ],
    "services": [
      {
        "title": "Sustainability Strategy Development",
        "description": "Create a comprehensive sustainability strategy aligned with your business goals and stakeholder expectations.",
        "price": "$5000 - Includes strategy development and implementation roadmap"
      },
      {
        "title": "ESG Reporting and Disclosure",
        "description": "Develop robust ESG reporting processes and create impactful sustainability reports.",
        "price": "$3500 - Includes report development and stakeholder presentation"
      },
      {
        "title": "Green Tech Implementation Consultation",
        "description": "Identify and implement green technologies to reduce your organization's environmental footprint.",
        "price": "$2000 - Includes technology assessment and implementation plan"
      }
    ]
  },
  {
    "id": "15",
    "name": "Carlos Rodriguez",
    "photo": "https://randomuser.me/api/portraits/men/15.jpg",
    "title": "Mobile App Developer",
    "summary": "Crafting intuitive and performant mobile experiences.",
    "bio": "As a mobile app developer with experience in both iOS and Android, I help individuals and teams create successful mobile applications. My mentoring covers app architecture, UI/UX best practices, and performance optimization.",
    "location": "Madrid, Spain",
    "skills": ["iOS Development", "Android Development", "React Native"],
    "hourlyRate": 170,
    "rating": 4.8,
    "availableSlots": [
      { "date": "2024-12-18", "slots": ["11:00 AM", "3:00 PM", "5:00 PM"] },
      { "date": "2024-12-19", "slots": ["9:00 AM", "1:00 PM"] }
    ],
    "services": [
      {
        "title": "Mobile App Architecture Review",
        "description": "Comprehensive review of your mobile app architecture with recommendations for improvement.",
        "price": "$1500 - Includes detailed report and follow-up consultation"
      },
      {
        "title": "Cross-Platform Development with React Native",
        "description": "Learn to build efficient cross-platform mobile apps using React Native.",
        "price": "$2000 - Three-day intensive workshop"
      },
      {
        "title": "Mobile App Performance Optimization",
        "description": "Analyze and optimize your mobile app for better performance and user experience.",
        "price": "$1800 - Includes performance audit and optimization implementation"
      }
    ]
  },
  {
    "id": "16",
    "name": "Natalie Wong",
    "photo": "https://randomuser.me/api/portraits/women/16.jpg",
    "title": "Data Privacy Expert",
    "summary": "Navigating the complex world of data protection and privacy laws.",
    "bio": "As a certified information privacy professional, I help organizations comply with data protection regulations like GDPR and CCPA. My sessions cover privacy by design, data mapping, and creating effective privacy policies.",
    "location": "Singapore",
    "skills": ["GDPR Compliance", "Privacy by Design", "Data Mapping"],
    "hourlyRate": 190,
    "rating": 4.9,
    "availableSlots": [
      { "date": "2024-12-20", "slots": ["10:00 AM", "2:00 PM", "4:00 PM"] },
      { "date": "2024-12-21", "slots": ["11:00 AM", "3:00 PM"] }
    ],
    "services": [
      {
        "title": "GDPR Compliance Audit",
        "description": "Comprehensive audit of your organization's GDPR compliance status with actionable recommendations.",
        "price": "$4000 - Includes detailed audit report and compliance roadmap"
      },
      {
        "title": "Privacy by Design Workshop",
        "description": "Learn to incorporate privacy considerations into your product development lifecycle.",
        "price": "$2500 - Full day workshop for up to 15 participants"
      },
      {
        "title": "Data Mapping and DPIA Consultation",
        "description": "Conduct thorough data mapping and Data Protection Impact Assessments (DPIA) for your organization.",
        "price": "$3500 - Includes data mapping exercise and DPIA report"
      }
    ]
  },
  {
    "id": "17",
    "name": "Thomas Müller",
    "photo": "https://randomuser.me/api/portraits/men/17.jpg",
    "title": "Cloud Architecture Specialist",
    "summary": "Designing scalable and resilient cloud-based systems.",
    "bio": "With certifications in AWS, Azure, and Google Cloud, I help organizations design and implement robust cloud architectures. My mentoring covers cloud migration strategies, serverless computing, and multi-cloud environments.",
    "location": "Berlin, Germany",
    "skills": ["AWS", "Azure", "Google Cloud"],
    "hourlyRate": 195,
    "rating": 4.8,
    "availableSlots": [
      { "date": "2024-12-22", "slots": ["9:00 AM", "1:00 PM", "5:00 PM"] },
      { "date": "2024-12-23", "slots": ["10:00 AM", "2:00 PM"] }
    ],
    "services": [
      {
        "title": "Cloud Migration Strategy",
        "description": "Develop a comprehensive strategy for migrating your infrastructure and applications to the cloud.",
        "price": "$5000 - Includes assessment, strategy development, and migration roadmap"
      },
      {
        "title": "Serverless Architecture Design",
        "description": "Design scalable and cost-effective serverless architectures for your applications.",
        "price": "$3500 - Includes architecture design and implementation guide"
      },
      {
        "title": "Multi-Cloud Strategy Consultation",
        "description": "Develop a strategy to leverage multiple cloud providers for improved resilience and cost optimization.",
        "price": "$4000 - Includes strategy development and implementation plan"
      }
    ]
  },
  {
    "id": "18",
    "name": "Aisha Patel",
    "photo": "https://randomuser.me/api/portraits/women/18.jpg",
    "title": "Diversity and Inclusion Consultant",
    "summary": "Creating inclusive workplaces that drive innovation and growth.",
    "bio": "As a D&I expert, I help organizations build inclusive cultures that attract and retain diverse talent. My sessions cover unconscious bias training, inclusive leadership, and developing effective D&I strategies.",
    "location": "London, UK",
    "skills": ["Unconscious Bias Training", "Inclusive Leadership", "D&I Strategy"],
    "hourlyRate": 165,
    "rating": 4.9,
    "availableSlots": [
      { "date": "2024-12-24", "slots": ["11:00 AM", "3:00 PM", "5:00 PM"] },
      { "date": "2024-12-25", "slots": ["9:00 AM", "1:00 PM"] }
    ],
    "services": [
      {
        "title": "Unconscious Bias Training",
        "description": "Interactive workshop to help employees recognize and mitigate unconscious biases in the workplace.",
        "price": "$3000 - Full day workshop for up to 20 participants"
      },
      {
        "title": "Inclusive Leadership Development",
        "description": "Tailored program to develop inclusive leadership skills among your organization's leaders.",
        "price": "$5000 - Includes assessment, training sessions, and follow-up coaching"
      },
      {
        "title": "D&I Strategy Development",
        "description": "Create a comprehensive D&I strategy aligned with your organization's goals and culture.",
        "price": "$7500 - Includes strategy development, implementation plan, and metrics for success"
      }
    ]
  },
  {
    "id": "19",
    "name": "Ryan O'Connor",
    "photo": "https://randomuser.me/api/portraits/men/19.jpg",
    "title": "Growth Hacking Specialist",
    "summary": "Accelerating startup growth through data-driven strategies.",
    "bio": "As a growth hacker, I've helped numerous startups achieve rapid, sustainable growth. My mentoring covers customer acquisition strategies, viral marketing techniques, and optimizing conversion funnels.",
    "location": "Dublin, Ireland",
    "skills": ["A/B Testing", "Viral Marketing", "Funnel Optimization"],
    "hourlyRate": 175,
    "rating": 4.7,
    "availableSlots": [
      { "date": "2024-12-26", "slots": ["10:00 AM", "2:00 PM", "4:00 PM"] },
      { "date": "2024-12-27", "slots": ["11:00 AM", "3:00 PM"] }
    ],
    "services": [
      {
        "title": "Growth Strategy Development",
        "description": "Create a comprehensive growth strategy tailored to your startup's unique position and goals.",
        "price": "$3500 - Includes strategy development and 30-day action plan"
      },
      {
        "title": "A/B Testing and Optimization Workshop",
        "description": "Learn to design, implement, and analyze A/B tests to optimize your product and marketing efforts.",
        "price": "$2000 - Full day workshop for up to 10 participants"
      },
      {
        "title": "Viral Loop Design Consultation",
        "description": "Design viral loops and referral programs to accelerate your user acquisition.",
        "price": "$2500 - Includes strategy session and implementation plan"
      }
    ]
  },
  {
    "id": "20",
    "name": "Yuki Tanaka",
    "photo": "https://randomuser.me/api/portraits/women/20.jpg",
    "title": "AR/VR Developer",
    "summary": "Creating immersive experiences at the forefront of technology.",
    "bio": "As an AR/VR developer, I help individuals and companies explore the potential of immersive technologies. My mentoring covers AR/VR development fundamentals, 3D modeling for virtual environments, and creating engaging user experiences in AR/VR.",
    "location": "Tokyo, Japan",
    "skills": ["Unity3D", "ARKit", "Oculus Development"],
    "hourlyRate": 185,
    "rating": 4.8,
    "availableSlots": [
      { "date": "2024-12-28", "slots": ["9:00 AM", "1:00 PM", "5:00 PM"] },
      { "date": "2024-12-29", "slots": ["10:00 AM", "2:00 PM"] }
    ],
    "services": [
      {
        "title": "AR/VR Project Consultation",
        "description": "Expert guidance on planning and executing your AR/VR project, from concept to deployment.",
        "price": "$2000 - Includes initial consultation and project roadmap"
      },
      {
        "title": "Unity3D for AR/VR Development Workshop",
        "description": "Hands-on workshop to learn AR/VR development using Unity3D.",
        "price": "$2500 - Three-day intensive workshop for up to 8 participants"
      },
      {
        "title": "Immersive UX Design Review",
        "description": "Comprehensive review of your AR/VR application's user experience with actionable improvement recommendations.",
        "price": "$1800 - Includes detailed report and follow-up consultation"
      }
    ]
  }
]