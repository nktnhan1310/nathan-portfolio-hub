
import { Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
