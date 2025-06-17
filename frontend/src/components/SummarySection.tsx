import { Sparkles, Code, Lightbulb, Rocket } from 'lucide-react';

const SummarySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Title with animated underline */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 animate-fade-in">
                <span className="relative inline-block">
                  Summary
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-expand-width"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                A passionate .NET developer with a strong foundation in software development and a drive for creating efficient, scalable solutions.
              </p>
            </div>

            {/* Key Points with Icons */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {/* Development Expertise */}
              <div className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                    <Code className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    Development Expertise
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    Proficient in C#, .NET Core, and modern web technologies
                  </p>
                </div>
              </div>

              {/* Problem Solving */}
              <div className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300">
                    <Lightbulb className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    Problem Solving
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    Strong analytical skills and innovative solution design
                  </p>
                </div>
              </div>

              {/* Continuous Learning */}
              <div className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors duration-300">
                    <Rocket className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    Continuous Learning
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    Committed to staying current with industry trends and best practices
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  With a solid foundation in software development and a passion for creating efficient, scalable solutions, 
                  I bring a unique blend of technical expertise and problem-solving abilities to every project. 
                  My experience spans across various aspects of software development, from backend systems to web applications, 
                  always focusing on delivering high-quality, maintainable code.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  I am particularly skilled in .NET development, with a deep understanding of C#, ASP.NET Core, 
                  and related technologies. My approach combines technical excellence with a strong focus on 
                  user experience and business requirements, ensuring that every solution not only meets but exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
