
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ExperienceSection = () => {
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

  return (
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
  );
};

export default ExperienceSection;
