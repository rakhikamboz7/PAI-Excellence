import React from 'react';

const eventsData = [
  {
    id: 1,
    img: '/Images/Event1.png',
    title: 'AI Orientation for B.Ed. Students (23 April)',
    date: '23 April',
    description:
      'Our team conducted another AI session for Bachelors of Education (B.Ed.) students at PAI-Excellence, introducing fundamentals and practical demonstrations.',
  },
  {
    id: 2,
    img: '/Images/Event2.png',
    title: 'Online AI Orientation for Akal Academy, 100+ Schools (21 April)',
    date: '21 April',
    description:
      'PAI-Excellence hosted a live online AI orientation for over 100 Akal Academy schools, attended by 15,000+ students.',
  },
  {
    id: 3,
    img: '/Images/Event3.png',
    title: 'Expert Session for Practical AI Students (29 March)',
    date: '29 March',
    description:
      'Dr. Sandeep Singh Sandha led an expert deep-dive session on GPU-accelerated AI for our Practical AI cohort, covering hands-on ML workflows.',
  },
  {
    id: 4,
    img: '/Images/Event4.png',
    title: 'In-person AI Orientation for Akal Academy Schools (7 April)',
    date: '7 April',
    description:
      'PAI-Excellence delivered in-person AI workshops across multiple Akal Academy campuses, giving students live coding demonstrations.',
  },
];

export default function Events() {
  return (
    <div className="space-y-12 px-6 lg:px-20 py-12">
      {eventsData.map((evt, idx) => (
        <div
          key={evt.id}
          className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
            idx % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Event Image */}
          <div className="w-full md:w-1/2">
            <img
              src={evt.img}
              alt={evt.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#44425A] mb-2">
              {evt.title}
            </h3>
            <p className="text-[#6C6A74] mb-4">{evt.description}</p>
            <button className="inline-block bg-[#FF6600] text-white px-4 py-2 rounded hover:bg-[#e05500] transition">
              Know More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
