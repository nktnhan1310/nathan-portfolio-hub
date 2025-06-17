import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ReviewsSection from '@/components/ReviewsSection';
import RatingSection from '@/components/RatingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { reviewsApi, type ReviewInput } from '@/services/reviews';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import DownloadPdfButton from '@/components/DownloadPdfButton';

const PAGE_SIZE = 5; // Number of reviews per page

const Index = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch reviews
  const { data: reviewsData, isLoading } = useQuery({
    queryKey: ['reviews', currentPage, PAGE_SIZE],
    queryFn: () => reviewsApi.getReviews({ 
      pageNumber: currentPage, 
      pageSize: PAGE_SIZE 
    })
  });

  // Submit review mutation
  const submitReviewMutation = useMutation({
    mutationFn: reviewsApi.submitReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
      toast({
        title: "Thank you!",
        description: "Your review has been submitted successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleReviewSubmit = (data: ReviewInput) => {
    submitReviewMutation.mutate(data);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const averageRating = reviewsData?.items.length 
    ? reviewsData.items.reduce((sum, review) => sum + review.rating, 0) / reviewsData.items.length 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
      <div id="portfolio-content">
        <HeroSection />
        <SummarySection />
        <SkillsSection />
        <ExperienceSection />
      </div>
      <RatingSection 
        onReviewSubmit={handleReviewSubmit} 
        isSubmitting={submitReviewMutation.isPending}
      />
      <ReviewsSection 
        reviews={reviewsData?.items ?? []}
        averageRating={averageRating}
        totalReviews={reviewsData?.totalItems ?? 0}
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={reviewsData?.totalPages ?? 0}
        onPageChange={handlePageChange}
      />
      <ContactSection />
      <Footer />
      <div className="download-button">
        <DownloadPdfButton />
      </div>
    </div>
  );
};

export default Index;
