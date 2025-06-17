'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownloadPdfButton = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/CV_NguyenKimThanhNhan.pdf';
    link.download = 'CV_NguyenKimThanhNhan.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center gap-2"
      aria-label="Download CV"
    >
      <Download className="w-6 h-6" />
      <span className="hidden sm:inline">Download CV</span>
    </Button>
  );
};

export default DownloadPdfButton; 