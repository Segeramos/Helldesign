import React from 'react'
import { FaGoogle, FaLaptopCode } from "react-icons/fa";



export default function Hero() {
  const certifications = [
    {
      name: 'Front-End Web Development',
      issuer: 'ALX',
      link: 'https://savanna.alxafrica.com/certificates/CE8B5fFhN7',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'

    },
    {
      name: 'Professional Foundations',
      issuer: 'ALX',
      link: 'https://savanna.alxafrica.com/certificates/9e2BSs5Zhc',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
    },
    {
      name: 'Graphic Design',
      issuer: 'ALX',
      link: 'https://www.freecodecamp.org/certification/yourusername/responsive-web-design',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
    },
    {
      name: 'ALX AI Starter Kit',
      issuer: 'ALX',
      link: 'https://savanna.alxafrica.com/certificates/cny5pJFxzr',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
    },
    {
      name: 'Digital Marketing',
      issuer: 'Udemy',
      link: 'https://coursera.org/verify/meta-frontend-certification',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGllHM_06tkceB-8rg2x8PV1yK52frVK0CQ&s'
    },
    {
      name: 'UI/UX Design',
      issuer: 'ALX',
      link: 'https://www.linkedin.com/learning/certificates/your-certificate-id',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Building digital <br />
              products, brands <br />
              <span className="inline-flex items-center gap-2">
                <span className="text-purple-600">🛠</span>
                <span className="text-purple-600">experience.</span>
              </span>
            </h1>
            <p className="text-gray-700 text-lg">
              a <strong>Digital Marketer</strong> and <strong>Web Developer</strong> <br />
              I specialize in Responsive Web Design, <br />
              
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 w-full sm:w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md">
                Connect With Me
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src="/Screenshot 2025-05-23 231700.png"
            
              alt="designer"
              className="rounded-xl w-full max-w-sm lg:max-w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16 text-gray-800">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-purple-700 mb-4">✨ About Me</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Passionate developer and designer, turning creative ideas into functional and beautiful digital experiences.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">🎓 Education Background</h3>
            <p>
            I hold a <strong>Bachelor of Science in Information Technology</strong> from <strong> Cooperative University of Kenya, Karen</strong>.
              I Also have skills in UI/UX, Graphic Design ,Web development,Digital Marketing  (SEO) and interactive web technologies.
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">📜 Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center border rounded-lg shadow-md p-6 hover:shadow-xl transition"
                >
                  <img src={cert.logo} alt={cert.issuer} className="h-16 mb-4 object-contain" />
                  <h4 className="text-lg font-bold text-purple-600">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
  <h3 className="text-2xl font-semibold text-purple-800 flex items-center gap-2">
    💼 Work Background
  </h3>
  
  <div className="space-y-4">

    {/* Google Internship */}
          <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center mb-2 text-blue-600 font-semibold text-lg">
              <FaGoogle className="mr-2" /> Google – UX Engineer Intern
            </div>
            <p className="text-sm text-gray-600 italic mb-1">Summer 2024</p>
            <p className="text-gray-700">Redesigned internal tools, increasing productivity by <span className="font-semibold text-green-600">25%</span>.</p>
          </div>

          {/* Freelance Work */}
          <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center mb-2 text-green-600 font-semibold text-lg">
              <FaLaptopCode className="mr-2" /> Freelance – Frontend Developer
            </div>
            <p className="text-sm text-gray-600 italic mb-1">2022 - 2025</p>
            <p className="text-gray-700">Delivered <span className="font-semibold">scalable</span> React apps with <span className="font-semibold text-purple-600">pixel-perfect</span> UI.</p>
          </div>

        </div>
      </div>

          {/* Skills & Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">🛠 Skills & Tools</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <h4 className="text-purple-700 font-bold mb-2">Languages</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Python</li>
                </ul>
              </div>
              <div>
                <h4 className="text-purple-700 font-bold mb-2">Frameworks & Libraries</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
              <div>
                <h4 className="text-purple-700 font-bold mb-2">Tools & Platforms</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Git & GitHub</li>
                  <li>Figma</li>
                  <li>Firebase</li>
                  <li>VS Code</li>
                </ul>
              </div>
              <div>
                <h4 className="text-purple-700 font-bold mb-2">Soft Skills</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Creative Problem Solving</li>
                  <li>Communication</li>
                  <li>Teamwork</li>
                  <li>Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
