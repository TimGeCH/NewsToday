import React from 'react';

const LinkCard = ({ link }) => (
  <div className="bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{link.name}</h3>
      <p className="text-sm text-gray-600 mb-3">{link.description}</p>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-purple-600 hover:text-purple-800 transition-colors duration-200 hover:underline"
      >
        Visit Site →
      </a>
    </div>
  </div>
);

const LinkCategory = ({ title, links }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((link, index) => (
        <LinkCard key={index} link={link} />
      ))}
    </div>
  </div>
);

export default function Links() {
  const linkCategories = [
    {
      title: "International News",
      links: [
        { name: "BBC News", url: "https://www.bbc.com/news", description: "Global news coverage with a British perspective" },
        { name: "Reuters", url: "https://www.reuters.com", description: "Worldwide news with unparalleled coverage" },
        { name: "Al Jazeera", url: "https://www.aljazeera.com", description: "News with a focus on the Middle East" }
      ]
    },
    {
      title: "Entertainment News",
      links: [
        { name: "Variety", url: "https://variety.com", description: "Entertainment industry news and analysis" },
        { name: "The Hollywood Reporter", url: "https://www.hollywoodreporter.com", description: "Breaking news about Hollywood and entertainment" },
        { name: "E! Online", url: "https://www.eonline.com", description: "Celebrity news, entertainment, and gossip" }
      ]
    },
    {
      title: "Technology News",
      links: [
        { name: "TechCrunch", url: "https://techcrunch.com", description: "Latest in tech and startup ecosystems" },
        { name: "Wired", url: "https://www.wired.com", description: "Where tomorrow is realized" },
        { name: "The Verge", url: "https://www.theverge.com", description: "Covering the intersection of technology, science, art, and culture" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Explore News Sources</h1>
        {linkCategories.map((category, index) => (
          <LinkCategory key={index} title={category.title} links={category.links} />
        ))}
      </div>
    </div>
  );
}