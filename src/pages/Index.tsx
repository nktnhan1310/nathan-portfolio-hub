
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ReviewsSection from '@/components/ReviewsSection';
import RatingSection from '@/components/RatingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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
      <HeroSection />
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <ReviewsSection 
        reviews={reviews}
        averageRating={averageRating}
        totalReviews={reviews.length}
      />
      <RatingSection onReviewSubmit={handleReviewSubmit} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
