import React, { useState, useRef } from 'react';
import { FaUser, FaClock, FaStar } from 'react-icons/fa';

export default function Coursedetails() {
  const topCourses = [
    { id: 1, classLabel: '1st class', title: 'Learn & Master AI Now', description: 'This session marked the start of the Practical Artificial Intelligence Course for the April…' },
    { id: 2, classLabel: '2nd class', title: 'Steps in Creating AI & AI for Agriculture', description: 'This session marked the start of the Practical Artificial Intelligence Course for the April…' },
    { id: 3, classLabel: '3rd class', title: 'Steps in Creating AI with Deeper Insights', description: 'This session marked the start of the Practical Artificial Intelligence Course for the April…' },
  ];

  const moreCourses = [
    { title: 'Age of Intelligence', img: '/Images/Card1.png', students: '1k students', duration: '1hr 20min', rating: '4.0 (300)', date: 'Jan 25, 2025' },
    { title: 'What is AI?', img: '/Images/Card2.png', students: '800 students', duration: '1hr 10min', rating: '4.2 (180)', date: 'Jan 26, 2025' },
    { title: 'What is AI in Punjabi', img: '/Images/Card3.png', students: '800 students', duration: '1hr 10min', rating: '4.2 (180)', date: 'Jan 27, 2025' },
    { title: 'Steps in Creating AI', img: '/Images/Card4.png', students: '800 students', duration: '1hr 10min', rating: '4.2 (180)', date: 'Jan 28, 2025' },
    { title: 'Simplified AI Steps', img: '/Images/Card5.png', students: '800 students', duration: '1hr 10min', rating: '4.2 (180)', date: 'Jan 29, 2025' },
    { title: 'Can AI Replace Humans?', img: '/Images/Card6.png', students: '800 students', duration: '1hr 10min', rating: '4.2 (180)', date: 'Jan 30, 2025' },
    { title: 'The journey of Data', img: '/Images/Card7.png', students: '800 students', duration: '1hr 10min', rating: '4.2 (180)', date: 'Feb 1, 2025' },
    { title: 'Human Experts vs AI', img: '/Images/Card8.png', students: '1K students', duration: '1hr 10min', rating: '4.2 (180)', date: 'Feb 3, 2025' },
    { title: 'Steps in Using AI', img: '/Images/Card9.png', students: '1K students', duration: '1hr 10min', rating: '4.2 (180)', date: 'Feb 4, 2025' },
  ];

  const testimonials = [
    { id: 1, img: '/Images/student1.png', text: 'This course opened my eyes to real-world AI applications in healthcare and agriculture. Highly recommend!', name: '— Aisha Kapoor' },
    { id: 2, img: '/Images/student3.png', text: 'Hands-on sessions with expert instructors made complex concepts easy to grasp.', name: '— Rohit Mehra' },
    { id: 3, img: '/Images/student2.png', text: 'Great roadmap and practical examples; I built my first AI project within a week!', name: '— Sneha Iyer' },
  ];

  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0 });
  const cardRefs = useRef([]);

  const handleMouseEnter = (idx) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPanelPos({ top: rect.top + window.scrollY + 16, left: rect.right + window.scrollX + 16 });
    setHoveredIdx(idx);
  };
  const handleMouseLeave = () => setHoveredIdx(null);

  const handleWatchNow = () => {
    window.location.href = 'https://www.youtube.com/embed/JIKf55ZBPes?si=3WSSi0REj7YCKgj6';
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[360px] bg-cover bg-center flex items-center justify-center text-center px-6 lg:px-20" style={{ backgroundImage: "url('/Images/Main.jpg')" }}>
        <div className="relative z-10 text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Dive Into Our Comprehensive AI Courses</h2>
          <p className="max-w-2xl text-lg opacity-90 mb-6">Our hands-on experience with real-world AI projects and case studies, in interactive labs designed to increase your skills.</p>
          <input type="text" placeholder="Search courses..." className="w-full max-w-md px-4 py-2 rounded-full text-gray-800 focus:outline-none" />
        </div>
      </section>

      {/* Top 3 Recordings */}
      <section className="container mx-auto px-6 lg:px-20 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-[#44425A]">Practical AI Course Recordings: Batch (26 April 2025 – Present)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topCourses.map(({ id, classLabel, title, description }) => (
            <div key={id} className="bg-white border border-gray-300 rounded-[20px] flex flex-col overflow-hidden">
              <div className="p-6 flex-grow">
                <span className="inline-block text-xs text-[#6C6A74] bg-[#EBEAEF] px-3 py-1 rounded-full mb-4">{classLabel}</span>
                <h4 className="text-lg font-bold mb-2 text-[#44425A]">{title}</h4>
                <p className="text-sm text-[#6C6A74] leading-relaxed">{description}</p>
              </div>
              <button onClick={handleWatchNow} className="mx-4 mb-4 py-3 text-center text-white bg-[#FF6600] font-semibold rounded-full hover:brightness-90 transition">Watch Now →</button>
            </div>
          ))}
        </div>
      </section>

      {/* 9 Course Cards with Hover Detail */}
      <section className="container mx-auto px-6 lg:px-20 py-12 rounded-t-3xl">
        <h3 className="text-2xl font-semibold mb-6 text-[#44425A]">Practical AI Course Recordings (Batch: 25 Jan 2025 – 4 Apr 2025)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreCourses.map((course, idx) => (
            <div
              key={course.title}
              ref={el => (cardRefs.current[idx] = el)}
              className="relative bg-white border border-gray-300 rounded-[20px] overflow-hidden hover:shadow-lg transition"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={course.img} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center text-sm text-[#6C6A74] mb-2 space-x-4">
                  <div className="flex items-center"><FaUser className="mr-1 text-[#FF6600]" />{course.students}</div>
                  <div className="flex items-center"><FaClock className="mr-1 text-[#FF6600]" />{course.duration}</div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-[#44425A]">{course.title}</h4>
                <hr className="border-gray-200 mb-2" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-[#6C6A74]"><FaStar className="mr-1 text-[#FF6600]" />{course.rating}</div>
                  <button onClick={handleWatchNow} className="px-4 py-1 bg-[#FF6600] text-white rounded-full text-sm font-semibold hover:brightness-90 transition">Watch Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hover Panel */}
        {hoveredIdx !== null && (
          <div className="fixed z-50 w-80 bg-white rounded-lg shadow-xl p-6" style={{ top: panelPos.top, left: panelPos.left }}>
            <div className="absolute -left-2 top-6 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white" />
            <h3 className="text-xl font-bold mb-2 text-[#44425A]">About This Module: {moreCourses[hoveredIdx].title}</h3>
            <p className="text-sm text-[#6C6A74] mb-2"><strong>Session Date:</strong> {moreCourses[hoveredIdx].date}</p>
            <p className="text-sm text-[#6C6A74] mb-2"><strong>Instructor:</strong> Dr. Sandeep Singh Sandha (UCLA, IIT Roorkee)</p>
            <p className="text-sm text-[#6C6A74] mb-2"><strong>Key Takeaways:</strong> Real-world AI use in healthcare, agriculture, and wildlife. Hands-on projects using Python.</p>
            <p className="text-sm text-[#6C6A74] mb-4"><strong>Who Joined:</strong> Students from 200+ cities, ready to lead the AI revolution.</p>
            <p className="text-sm text-[#6C6A74]">Explore how AI is transforming the world—and start building it yourself.</p>
          </div>
        )}
      </section>

      {/* Explore More Button */}
      <div className="container mx-auto px-6 lg:px-20 py-8 text-center">
        <button className="px-6 py-3 bg-[#FF6600] text-white font-semibold rounded-full hover:bg-yellow-600 transition">Explore more</button>
      </div>

      {/* Contact Form */}
      <section className="container mx-auto px-6 lg:px-20 pt-12 pb-12 bg-[#EBEAEF]">
        <h3 className="text-2xl font-semibold mb-2 text-center text-[#44425A]">Have any course-related doubts?</h3>
        <p className="text-center text-sm mb-6 text-[#6C6A74]">(Drop your questions below and our team will get back to you with detailed answers and guidance.)</p>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 border border-[#6C6A74] rounded-full focus:outline-none placeholder-[#6C6A74] text-[#6C6A74]" />
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-[#6C6A74] rounded-full focus:outline-none placeholder-[#6C6A74] text-[#6C6A74]" />
          <textarea rows="4" placeholder="Enter your query" className="w-full px-4 py-3 border border-[#6C6A74] rounded-[20px] focus:outline-none placeholder-[#6C6A74] text-[#6C6A74]" />
          <button type="submit" className="w-full px-4 py-3 rounded-full bg-[#FF6600] text-white font-semibold hover:brightness-90 transition">Submit Query</button>
        </form>
      </section>

      {/* Hear From Our Students Section */}
      <section className="container mx-auto px-6 lg:px-20 py-12 bg-white">
        <h3 className="text-3xl font-semibold text-[#44425A] text-center mb-8">Hear From Our Students</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ id, img, text, name }) => (
            <div key={id} className="flex flex-col items-center text-center px-4">
              <div className="h-32 w-32 mb-4"><img src={img} alt={`${name} photo`} className="h-full w-full object-cover rounded-full" /></div>
              <p className="text-[#6C6A74] text-sm italic"><span className="text-[#FF6600]">“</span>{text}<span className="text-[#FF6600]">”</span></p>
              <h5 className="mt-3 font-medium text-[#6C6A74]">{name}</h5>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
