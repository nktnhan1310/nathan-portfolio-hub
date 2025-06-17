
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
