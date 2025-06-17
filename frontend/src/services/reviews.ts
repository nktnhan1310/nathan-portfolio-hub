import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface Review {
  id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ReviewInput {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

export interface ReviewsResponse {
  items: Review[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export interface GetReviewsParams {
  pageNumber: number;
  pageSize: number;
}

export const reviewsApi = {
  getReviews: async ({ pageNumber = 1, pageSize = 5 }: GetReviewsParams): Promise<ReviewsResponse> => {
    const { data } = await axios.get(`${API_URL}/reviews`, {
      params: { pageNumber, pageSize }
    });
    return data;
  },

  submitReview: async (review: ReviewInput): Promise<Review> => {
    const { data } = await axios.post(`${API_URL}/reviews`, review);
    return data;
  }
}; 