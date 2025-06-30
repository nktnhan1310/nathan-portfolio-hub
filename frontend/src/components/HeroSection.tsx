import { Mail, Phone, ExternalLink, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating .NET Logos */}
        <div className="absolute w-16 h-16 top-1/4 left-1/4 animate-float-slow">
          <img src="/dotnet-logo.svg" alt=".NET" className="w-full h-full opacity-20" />
        </div>
        <div className="absolute w-16 h-16 top-1/3 right-1/4 animate-float-slower">
          <img src="/dotnet-logo.svg" alt=".NET" className="w-full h-full opacity-20" />
        </div>
        <div className="absolute w-16 h-16 bottom-1/4 right-1/3 animate-float">
          <img src="/dotnet-logo.svg" alt=".NET" className="w-full h-full opacity-20" />
        </div>

        {/* Code Symbols */}
        <div className="absolute text-4xl font-mono top-1/2 left-1/3 animate-float-slow opacity-20">
          {'{'}
        </div>
        <div className="absolute text-4xl font-mono top-1/3 right-1/3 animate-float-slower opacity-20">
          {'}'}
        </div>
        <div className="absolute text-4xl font-mono bottom-1/3 left-1/2 animate-float opacity-20">
          {';'}
        </div>
      </div>

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
              <div className="space-y-2">
                <p className="text-xl lg:text-2xl text-blue-100 font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                    Nguyen Kim Thanh Nhan
                  </span>
                </p>
                <p className="text-lg text-blue-200 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <span className="inline-flex items-center gap-2 group">
                    <span className="relative">
                      <span className="absolute -inset-1 bg-blue-500/20 rounded-full blur-sm group-hover:bg-blue-500/30 transition-all duration-300"></span>
                      <span className="relative px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                        .NET Developer
                      </span>
                    </span>
                    <span className="text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mail className="w-4 h-4" />
                <span className="text-sm">nhannkt1995@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
                onClick={() => window.open('https://www.linkedin.com/in/nhan-nguyen-a6a893209/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
                onClick={() => window.open('https://github.com/nktnhan1310', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Github Profile
              </Button>
            </div>

            {/* Slogan Section */}
            <div className="mt-6 inline-block">
              <div className="relative group">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
                  <div className="relative">
                    <p className="text-xl font-bold italic text-white group-hover:text-blue-100 transition-colors duration-300">
                      "No pain, no gain"
                    </p>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-blue-400 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <Avatar className="relative w-48 h-64 lg:w-48 lg:h-64 border-4 border-white/20 shadow-2xl">
                <AvatarImage
                    src="/portfolio_avatar.png"
                    alt="Nathan Nguyen"
                    className="object-fill transition-transform duration-300 hover:scale-125"
                />
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
