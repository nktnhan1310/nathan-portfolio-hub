import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import RatingModal from '@/components/RatingModal';

interface RatingSectionProps {
  onReviewSubmit: (data: { name: string; email: string; rating: number; comment: string }) => void;
  isSubmitting?: boolean;
}

const RatingSection = ({ onReviewSubmit, isSubmitting }: RatingSectionProps) => {
  return (
    <section className="py-12 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <Card className="max-w-md mx-auto shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-gray-800">Share Your Experience</CardTitle>
            <CardDescription>Your feedback helps me improve and grow</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <RatingModal onSubmit={onReviewSubmit} isSubmitting={isSubmitting} />
            <p className="text-xs text-gray-500 mt-4">
              Share your thoughts about working with me
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RatingSection;
