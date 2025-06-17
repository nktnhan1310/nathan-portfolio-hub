
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skills = [".NET Core", "C#", "ASP.NET MVC", "Web API", "Entity Framework", "SQL Server", "Angular", "AngularJS", "JavaScript", "HTML/CSS", "Bootstrap", "Payment Integration", "SAP Integration", "Hangfire", "Windows Applications"];

  return (
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
  );
};

export default SkillsSection;
