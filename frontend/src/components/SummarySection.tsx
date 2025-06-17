
import { Card, CardContent } from '@/components/ui/card';

const SummarySection = () => {
  return (
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
  );
};

export default SummarySection;
