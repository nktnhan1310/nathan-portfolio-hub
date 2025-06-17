
import { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Review {
  id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

const ReviewsSection = ({ reviews, averageRating, totalReviews }: ReviewsSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(5);
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, reviews.length));
  };

  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMoreReviews = visibleCount < reviews.length;

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
            Client Reviews & Ratings
          </h2>
          
          {/* Overall Rating Summary */}
          {totalReviews > 0 && (
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-gray-800">
                  {averageRating.toFixed(1)}
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${
                        star <= Math.round(averageRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                Based on {totalReviews} review{totalReviews > 1 ? 's' : ''}
              </p>
            </div>
          )}

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500 text-lg">
                    No reviews yet. Be the first to share your feedback!
                  </p>
                </CardContent>
              </Card>
            ) : (
              <>
                {visibleReviews.map((review) => (
                  <Card key={review.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                            {getInitials(review.name)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-800">{review.name}</h4>
                              <p className="text-sm text-gray-500">{formatDate(review.createdAt)}</p>
                            </div>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= review.rating
                                      ? 'fill-yellow-400 text-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          
                          {review.comment && (
                            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Show More Button */}
                {hasMoreReviews && (
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={handleShowMore}
                      variant="outline"
                      size="lg"
                      className="bg-white hover:bg-gray-50 text-gray-700 border-gray-300 shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Show More Reviews ({reviews.length - visibleCount} remaining)
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
