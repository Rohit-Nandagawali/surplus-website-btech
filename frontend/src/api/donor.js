import axios from 'axios';
import { API_URL } from '../data/constants';



// get single donor
export const getSingleDonor = async (donorId) => {
    try {

        const responce = await axios.get(`${API_URL}/donor/${donorId}`);
        return responce

    } catch (error) {
        console.error('Data fetching failed:', error);
    }
}

// login donor
export const loginDonor = async (email, passwd) => {
    try {

        const responce = await axios.post(`${API_URL}/donor/login`, { email: email, passwd: passwd });
        return responce

    } catch (error) {

        console.error('Data fetching failed:', error);
        return error
    }
}

// register donor
export const registerDonor = async (name, orgName, email, passwd, latitude, longitude, geohash, avgRatings) => {
    try {

        const responce = await axios.post(`${API_URL}/donor/register`, { name, orgName, email, passwd, latitude, longitude, geohash, avgRatings });
        return responce

    } catch (error) {
        console.error('Data insert failed:', error);
    }
}

// update donor
export const updateDonor = async (donorId, name, orgName, latitude, longitude, geohash, passwd) => {
    try {

        const responce = await axios.put(`${API_URL}/donor/${donorId}`, { name, orgName, latitude, longitude, geohash, passwd });
        return responce

    } catch (error) {
        console.error('Data insert failed:', error);
    }
}