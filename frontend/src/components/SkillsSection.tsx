import { Badge } from '@/components/ui/badge';
import { Code2, Cpu, Users, Languages } from 'lucide-react';

const SkillsSection = () => {
  const languages = [
    {
      name: "English",
      level: "Intermediate",
      description: "Professional working proficiency"
    },
    {
      name: "Vietnamese",
      level: "Native",
      description: "Full professional proficiency"
    }
  ];

  const technicalSkills = [
    ".NET Core",
    "ASP.NET MVC",
    "Web API",
    "Entity Framework",
    "Entity Framework Core",
    "SQL Server",
    "Angular",
    "AngularJS",
    "ReactJS",
    "Bootstrap",
    "Hangfire",
    "Windows Applications",
    "Git",
    "Azure DevOps"
  ];

  const interpersonalSkills = [
    "Problem Solving",
    "Communication",
    "Time Management",
    "Adaptability",
    "Collaboration",
    "Critical Thinking"
  ];

  const LanguageCard = ({ language }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-blue-100">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold text-gray-800">{language.name}</h4>
        <Badge 
          variant="secondary" 
          className="bg-blue-50 text-blue-700 hover:bg-blue-100"
        >
          {language.level}
        </Badge>
      </div>
      <p className="text-sm text-gray-600">{language.description}</p>
    </div>
  );

  const SkillCategory = ({ title, skills, icon: Icon, delay = 0, children }: { 
    title: string; 
    skills?: string[]; 
    icon: any; 
    delay?: number; 
    children?: React.ReactNode;
  }) => (
    <div className="space-y-4 animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="flex items-center gap-2 text-gray-800">
        <Icon className="w-6 h-6" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {children || (
        <div className="flex flex-wrap gap-3">
          {skills?.map((skill, index) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="px-4 py-2 text-sm font-medium bg-white hover:bg-blue-100 transition-colors duration-200 shadow-sm hover:shadow-md border-blue-200"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">Skills & Expertise</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SkillCategory 
              title="Languages" 
              icon={Languages} 
              delay={0}
            >
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <LanguageCard key={language.name} language={language} />
                ))}
              </div>
            </SkillCategory>

            <SkillCategory 
              title="Technical Skills" 
              skills={technicalSkills} 
              icon={Cpu} 
              delay={0.2}
            />

            <SkillCategory 
              title="Interpersonal Skills" 
              skills={interpersonalSkills} 
              icon={Users} 
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
