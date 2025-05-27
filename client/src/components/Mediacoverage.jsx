import React from 'react';

export default function Mediacoverage() {
  const articles = [
    {
      id: 1,
      title: 'PAI-Excellence Featured in Tech Today',
      link: '#',
    },
    {
      id: 2,
      title: 'Interview with Dr. Sandha on AI in Education',
      link: '#',
    },
    {
      id: 3,
      title: 'Local News: AI Workshops Drawing Crowds',
      link: '#',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-semibold text- [#44425A] mb-6 text-center">
        Media Coverage
      </h1>
      <ul className="space-y-4">
        {articles.map((art) => (
          <li key={art.id} className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-center">
            <span className="text-[#6C6A74]">{art.title}</span>
            <a
              href={art.link}
              className="text-[#FF6600] font-medium hover:underline"
            >
              Read More →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
