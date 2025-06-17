import { useState } from 'react';
import { Mail, Phone, Calendar, MapPin, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import RatingModal from '@/components/RatingModal';
import ReviewsSection from '@/components/ReviewsSection';

const Index = () => {
  // State for reviews (in a real app, this would come from a database)
  const [reviews, setReviews] = useState([
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      rating: 5,
      comment: 'Nathan is an exceptional .NET developer. His work on our audit management system was outstanding. Highly professional and delivered exactly what we needed.',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      rating: 4,
      comment: 'Great experience working with Nathan. His expertise in .NET Core and API development really helped our project succeed.',
      createdAt: '2024-01-10'
    }
  ]);

  const experiences = [
    {
      role: ".NET Developer",
      company: "Stepmedia",
      period: "April 2022 - Present",
      location: "Ho Chi Minh City",
      projects: [
        {
          name: "GOSELLWebApp",
          duration: "Oct 2024 - Present",
          achievements: [
            "Integrated payment gateway support for seamless transactions and quick sales processing",
            "Implemented real-time inventory tracking, allowing users to monitor stock levels, track sales, and manage product availability efficiently",
            "Incorporated customer management features, including contact information, purchase history, and loyalty programs",
            "Enabled business owners to access detailed reports and analytics for sales performance, inventory turnover, and customer insights"
          ]
        },
        {
          name: "Levvia Audit Management",
          duration: "April 2022 - Oct 2024",
          achievements: [
            "Developed and maintained features to support the full audit process, including engagement creation, archival, legal hold package handling, and risk assessments, Preliminary Audit Plan (PAP), GATS, CAP, Carry forward, Copy engagement, Trial balance, Test of Details",
            "Integrated modules for SAP data extraction, and Journal Entry Testing to assist auditors in conducting thorough financial reviews",
            "Implemented tools for managing and organizing Working Papers, ensuring traceability, version control, and compliance with audit standards",
            "Enabled secure collaboration among audit teams and clients through structured workflows and access management",
            "Focused on improving audit efficiency, accuracy, and documentation integrity through automation and centralized management"
          ]
        }
      ]
    },
    {
      role: ".NET Developer",
      company: "Mona Media",
      period: "April 2021 - December 2022",
      location: "Ho Chi Minh City",
      achievements: [
        "Build APIs for Hospital Management in Examination Process",
        "Build APIs for Medical Examination Management: Register for Examination, Payment, Authentication, Report",
        "Fix all bugs and issues"
      ]
    },
    {
      role: ".NET Developer",
      company: "Vinorsoft Corporation",
      period: "August 2019 - January 2021",
      location: "Ho Chi Minh City",
      projects: [
        {
          name: "Asset Valuation",
          achievements: [
            "Build report module with print, using excel to calculate asset values",
            "Build assign employee management"
          ]
        },
        {
          name: "ANZ",
          achievements: [
            "Build a window application to manage about money transfer methods for the bank"
          ]
        },
        {
          name: "Tax Management",
          achievements: [
            "Build report, invitation, notification, decision management",
            "Build Hang Fire Job for synchronized tax codes to DB; sending Email, SMS"
          ]
        }
      ]
    },
    {
      role: ".NET Developer",
      company: "Lac Viet Computing Corporation",
      period: "August 2017 - August 2019",
      location: "Ho Chi Minh City",
      achievements: [
        "Developed and maintained the back-end using .NET MVC",
        "Implemented front-end features using AngularJs",
        "Managed and integrated .NET services"
      ]
    }
  ];

  const skills = [".NET Core", "C#", "ASP.NET MVC", "Web API", "Entity Framework", "SQL Server", "Angular", "AngularJS", "JavaScript", "HTML/CSS", "Bootstrap", "Payment Integration", "SAP Integration", "Hangfire", "Windows Applications"];

  const handleReviewSubmit = (data: { name: string; email: string; rating: number; comment: string }) => {
    const newReview = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight animate-fade-in">
                  <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Nathan Nguyen
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                  Nguyen Kim Thanh Nhan
                </p>
                <p className="text-lg text-blue-200">.NET Developer</p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">nhannkt1995@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">0934100306</span>
                </div>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
                  onClick={() => window.open('https://linkedin.com/in/nguyen-kim-thanh-nhan-a6a893209', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <Avatar className="relative w-48 h-48 lg:w-64 lg:h-64 border-4 border-white/20 shadow-2xl">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="Nathan Nguyen" />
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">NN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section className="py-12 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <Card className="max-w-md mx-auto shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold text-gray-800">Share Your Experience</CardTitle>
              <CardDescription>Your feedback helps me improve and grow</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <RatingModal onSubmit={handleReviewSubmit} />
              <p className="text-xs text-gray-500 mt-4">
                Share your thoughts about working with me
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Professional Summary</h2>
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a passionate and skilled .NET Developer with extensive experience in full-stack development, I am eager to contribute my expertise to your dynamic team. My commitment to delivering high-quality solutions and my enthusiasm for continuous learning align perfectly with your organization's goals. I am excited about the opportunity to collaborate with talented professionals and drive innovative projects that make a meaningful impact. Let's build the future together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">Technical Skills</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-white hover:bg-blue-100 transition-colors duration-200 shadow-sm hover:shadow-md animate-fade-in border-blue-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">Professional Experience</h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/30">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                      <CardDescription className="text-blue-100 font-medium text-lg">{exp.company}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-blue-100 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-100">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {exp.projects ? (
                    <div className="space-y-6">
                      {exp.projects.map((project, pIndex) => (
                        <div key={pIndex}>
                          <div className="flex items-center gap-2 mb-3">
                            <h4 className="font-semibold text-gray-800">{project.name}</h4>
                            {project.duration && (
                              <Badge variant="outline" className="text-xs">
                                {project.duration}
                              </Badge>
                            )}
                          </div>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, aIndex) => (
                              <li key={aIndex} className="flex items-start gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          {pIndex < exp.projects.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {exp.achievements?.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection 
        reviews={reviews}
        averageRating={averageRating}
        totalReviews={reviews.length}
      />

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
              onClick={() => window.location.href = 'mailto:nhannkt1995@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://linkedin.com/in/nguyen-kim-thanh-nhan-a6a893209', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Nathan Nguyen. Built with passion and .NET expertise.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
