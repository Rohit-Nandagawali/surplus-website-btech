

import axios from 'axios';
import { API_URL } from '../data/constants';

// get feebacks with donationId
export const getFeedbackByDonation = async (donationId) => {
    try {

        const responce = await axios.get(`${API_URL}/feedbacks/${donationId}`);
        return responce

    } catch (error) {
        console.error('Feedbacks fetching failed:', error);
    }
}

// create feeback
export const createFeedback = async (donationId, feedbackTitle, feedbackDescription, doneeId) => {
    try {

        const responce = await axios.post(`${API_URL}/feedback`, { donationId, feedbackTitle, feedbackDescription, doneeId });
        return responce

    } catch (error) {
        console.error('Feedback Creating failed:', error);
    }
}