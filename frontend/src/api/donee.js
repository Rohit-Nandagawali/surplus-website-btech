import axios from 'axios';
import { API_URL } from '../data/constants';



// get single donee information
export const getSingleDonee = async (doneeId) => {
    try {

        const responce = await axios.get(`${API_URL}/donees/${doneeId}`);
        return responce

    } catch (error) {
        console.error('Data fetching failed:', error);
    }
}

// login donee
export const loginDonee = async (email, passwd) => {
    try {

        const responce = await axios.post(`${API_URL}/donee/login`, { email: email, passwd: passwd });
        return responce

    } catch (error) {
        console.error('Data fetching failed:', error);
    }
}
// register donee
export const registerDonee = async (doneeName, latitude, longitude, geohash, email, passwd) => {
    try {

        const responce = await axios.post(`${API_URL}/donee/register`, { doneeName, latitude, longitude, geohash, email, passwd });
        return responce

    } catch (error) {
        console.error('Data insert failed:', error);
    }
}

// update donor
export const updateDonee = async (doneeId, doneeName, latitude, longitude, geohash, passwd) => {
    try {

        const responce = await axios.put(`${API_URL}/donee/${doneeId}`, { doneeName, latitude, longitude, geohash, passwd });
        return responce

    } catch (error) {
        console.error('Data insert failed:', error);
    }
}