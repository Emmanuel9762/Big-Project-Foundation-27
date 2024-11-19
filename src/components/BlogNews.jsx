import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const BlogPost = ({ image, title, date, readTime, excerpt, category }) => (
  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
          {category}
        </span>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          {readTime}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors duration-200">
        <a href="#">{title}</a>
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
      <a
        href="#"
        className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors duration-200"
      >
        Read More
        <ChevronRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  </article>
);

const BlogNews = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Community', 'Projects', 'Events', 'Updates'];

  const blogPosts = [
    {
      image: "src/assets/Blog1.jpeg",
      title: "New Community Center Opens Its Doors",
      date: "Nov 8, 2024",
      readTime: "5 min read",
      category: "Community",
      excerpt: "The long-awaited community center in downtown has finally opened, providing a space for education, gatherings, and community programs."
    },
    {
      image: "src/assets/Blog2.jpeg",
      title: "Annual Fundraising Gala Exceeds Goals",
      date: "Nov 6, 2024",
      readTime: "4 min read",
      category: "Events",
      excerpt: "This year's fundraising gala was a tremendous success, raising over R120 000 for our community development initiatives."
    },
    {
      image: "src/assets/Blog3.jpeg",
      title: "Youth Leadership Program Launches",
      date: "Nov 4, 2024",
      readTime: "6 min read",
      category: "Projects",
      excerpt: "Our new youth leadership program aims to empower the next generation of community leaders through mentorship and hands-on experience."
    },
    {
      image: "src/assets/Blog4.jpeg",
      title: "Sustainability Initiative Impact Report",
      date: "Nov 2, 2024",
      readTime: "8 min read",
      category: "Updates",
      excerpt: "Read about the remarkable progress and impact of our sustainability initiatives over the past year."
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest projects, community stories, and upcoming events.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogPost
              key={index}
              image={post.image}
              title={post.title}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              excerpt={post.excerpt}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200">
            Load More Posts
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;