import React from 'react';
import { 
  Layers, 
  ArrowRight, 
  Zap,
  Target,
  Rocket,
  User,
  Code,
  Award,
  Briefcase,
  MapPin,
  BookOpen,
  Coffee,
} from 'lucide-react';
import { Link } from "react-router-dom";

const LandingPage = () => {
  // English content only
  const content = {
    navigation: {
      hero: 'Home',
      features: 'Features',
      author: 'About Jonathan'
    },
    hero: {
      title: 'Unleash Your Potential',
      subtitle: 'Advanced Performance Management',
      description: 'Revolutionize your workflow with our application',
      cta: 'Launch Dashboard'
    },
    author: {
      name: 'Jonathan Leewin',
      title: 'Developer Program Organiser',
      company: 'Google',
      location: 'Jakarta, Indonesia',
      briefIntro: 'A visionary tech leader driving innovation and developer empowerment across Southeast Asia.',
      background: {
        overview: 'With over a decade of experience in tech ecosystem development, Jonathan has been instrumental in scaling developer communities and creating transformative technology platforms.',
        expertise: [
          'Developer Ecosystem Strategy',
          'Tech Community Building',
          'Innovation Program Management',
          'Cross-cultural Technology Leadership'
        ]
      },
      achievements: [
        {
          title: 'Developer Ecosystem Expansion',
          description: 'Led initiatives that grew developer communities by 300% across Indonesia and Southeast Asia.',
          icon: Rocket
        },
        {
          title: 'Innovation Program Leadership',
          description: 'Designed and implemented Google\'s flagship developer support programs in the region.',
          icon: Award
        }
      ],
      technicalSkills: [
        'Community Development',
        'Strategic Planning',
        'Technology Advocacy',
        'Program Management',
        'Cross-cultural Communication'
      ],
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/jonathanleewin'
      }
    },
    features: [
      {
        icon: Zap,
        title: 'Accelerate',
        description: 'Supercharge productivity with intelligent workflow automation.'
      },
      {
        icon: Target,
        title: 'Precision',
        description: 'Laser-focused goal setting and real-time performance insights.'
      },
      {
        icon: Rocket,
        title: 'Elevate',
        description: 'Transform challenges into breakthrough achievements.'
      }
    ]
  };

  // Function to scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <Layers className="text-purple-600" size={32} />
            <span className="text-2xl font-bold text-gray-800">Nova</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="px-4 py-2 rounded-lg transition text-gray-700 hover:bg-gray-100"
              >
                {content.navigation.hero}
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="px-4 py-2 rounded-lg transition text-gray-700 hover:bg-gray-100"
              >
                {content.navigation.features}
              </button>
              <button 
                onClick={() => scrollToSection('author')}
                className="px-4 py-2 rounded-lg transition text-gray-700 hover:bg-gray-100"
              >
                {content.navigation.author}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="hero" className="py-20 text-center min-h-screen flex items-center justify-center">
          <div>
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-4">
              {content.hero.subtitle}
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              {content.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {content.hero.description}
            </p>
            <div className="flex justify-center space-x-4">
            <Link
                to="/dashboard" // Navigates without reloading
                className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition flex items-center space-x-2"
            >
                <span>{content.hero.cta}</span>
                <ArrowRight className="ml-2" />
            </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = ['#8B5CF6', '#EC4899', '#22D3EE'];
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-200"
                >
                  <div className="mb-4 flex justify-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: colors[index % colors.length],
                        boxShadow: `0 0 20px ${colors[index % colors.length]}30` 
                      }}
                    >
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-3"
                    style={{ color: colors[index % colors.length] }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

{/* Author Section */}
<section id="author" className="py-20">
  <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
    About the Author
  </h2>
  <div className="grid md:grid-cols-2 gap-12">
    {/* Author Profile Card */}
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
      <div className="flex items-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 rounded-full flex items-center justify-center mr-6">
          <User className="text-white" size={48} />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            {content.author.name}
          </h2>
          <div className="flex items-center space-x-2 text-gray-600">
            <Briefcase size={16} />
            <span>{content.author.title}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Coffee size={16} />
            <span>{content.author.company}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin size={16} />
            <span>{content.author.location}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-6">
        {content.author.briefIntro}
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3 text-pink-500 flex items-center">
          <BookOpen className="mr-2" /> 
          Background
        </h3>
        <p className="text-gray-600">
          {content.author.background.overview}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3 text-purple-600 flex items-center">
          <Code className="mr-2" /> 
          Key Expertise
        </h3>
        <div className="flex flex-wrap gap-2">
          {content.author.background.expertise.map((skill, index) => (
            <span 
              key={index} 
              className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <a 
          href={content.author.socialLinks.linkedin} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-opacity-80 transition"
        >
          LI
        </a>
      </div>
    </div>

    {/* Author Achievements */}
    <div>
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        Key Achievements
      </h3>
      
      <div className="space-y-6">
        {content.author.achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-purple-400 transition"
            >
              <div className="flex space-x-4 items-center">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-xl w-12 h-12">
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font   -semibold text-gray-800 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-6 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
        Technical Skills
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {content.author.technicalSkills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Learn More About the Author Button */}
  <div className="mt-10 text-center">
    <a 
      href="/app" 
      className="text-lg font-semibold text-blue-500 hover:underline"
    >
      Learn More About the Author →
    </a>
  </div>
</section>

      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Layers className="text-purple-600" size={24} />
            <span className="text-xl font-bold text-gray-800">Nova</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2025 Nova Performance Management. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;