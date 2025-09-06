import { useState, useEffect } from "react";
import {
  Brain,
  Code,
  Coffee,
  BookOpen,
  Lightbulb,
  Share2,
  Rocket,
  Heart,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

const AboutMePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const passions = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Exploring the frontiers of AI/ML, from neural networks to large language models.",
    },
    {
      icon: Code,
      title: "Technology",
      description:
        "Building solutions with modern frameworks, cloud platforms, and emerging tech.",
    },
    {
      icon: Share2,
      title: "Knowledge Sharing",
      description:
        "Breaking down complex concepts into digestible insights for the community.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Experimenting with new ideas and pushing the boundaries of what's possible.",
    },
  ];

  const journey = [
    {
      year: "Early Days",
      title: "First Hello World",
      description:
        "Discovered the magic of programming and fell in love with creating digital solutions",
    },
    {
      year: "Growing",
      title: "Deep Dive into Tech",
      description:
        "Explored various technologies, frameworks, and started building real-world projects",
    },
    {
      year: "AI Era",
      title: "AI Revolution",
      description:
        "Witnessed the AI boom and became passionate about machine learning and its potential",
    },
    {
      year: "Today",
      title: "This Blog",
      description:
        "Sharing my journey, insights, and discoveries with the tech community",
    },
  ];

  const skills = [
    "JavaScript/TypeScript",
    "Python",
    "React/Next.js",
    "Node.js",
    "Machine Learning",
    "AI/LLMs",
    "Cloud Computing",
    "DevOps",
    "Technical Writing",
    "System Architecture",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div
          className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-2xl">
              👨‍💻
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Hello, I'm Quoc Huy-Le
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate developer sharing insights about{" "}
            <span className="font-semibold text-blue-600">Technology</span> and{" "}
            <span className="font-semibold text-purple-600">
              Artificial Intelligence
            </span>
          </p>

          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Let's Connect
            </button>
          </div>
        </div>
      </section>

      {/* Why This Blog */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Why I Created This Blog
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <Heart className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  My Mission
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Technology moves incredibly fast, especially in the AI space.
                  I created this blog to bridge the gap between complex
                  technological concepts and practical understanding.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My goal is to make cutting-edge tech accessible to everyone -
                  from beginners taking their first steps to experienced
                  developers exploring new frontiers.
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Learning Together
                    </h4>
                    <p className="text-gray-600">
                      Share discoveries, experiments, and lessons learned from
                      real-world projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      AI Demystified
                    </h4>
                    <p className="text-gray-600">
                      Break down complex AI concepts into practical,
                      understandable insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Share2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Community Building
                    </h4>
                    <p className="text-gray-600">
                      Create a space for meaningful discussions about
                      technology's impact on our future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Passionate About */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              What Drives Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the areas that fuel my curiosity and inspire my content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {passions.map((passion, index) => (
              <div
                key={passion.title}
                className={`group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <passion.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {passion.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {passion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              My Journey
            </h2>
            <p className="text-xl text-gray-600">
              From curious beginner to tech enthusiast sharing knowledge
            </p>
          </div>

          <div className="space-y-8">
            {journey.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-start space-x-6 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold min-w-fit">
                  {milestone.year}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Interests */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              What I Work With
            </h2>
            <p className="text-xl text-gray-600">
              Technologies and topics you'll see me writing about
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${1100 + index * 50}ms` }}
              >
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-1200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Always excited to discuss tech, share ideas, or collaborate on
              interesting projects
            </p>

            <div className="flex justify-center space-x-6">
              <button className="bg-gray-900 text-white p-4 rounded-full hover:bg-gray-800 transition-colors duration-200 hover:scale-110 transform">
                <Github className="w-6 h-6" />
              </button>
              <button className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors duration-200 hover:scale-110 transform">
                <Linkedin className="w-6 h-6" />
              </button>
              <button className="bg-blue-400 text-white p-4 rounded-full hover:bg-blue-500 transition-colors duration-200 hover:scale-110 transform">
                <Twitter className="w-6 h-6" />
              </button>
              <button className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-colors duration-200 hover:scale-110 transform">
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Note */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-1300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <p className="text-lg text-gray-700 italic">
              "Fueled by curiosity, powered by coffee, and driven by the endless
              possibilities of technology."
            </p>
            <p className="text-gray-600 mt-4">
              - Me, probably writing this at 2 AM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
