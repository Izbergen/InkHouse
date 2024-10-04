import http from './http.js';

export default async (catalogName) => {
    try {
        const response = await http.get(`/${catalogName}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching catalog:', error);
        throw new Error('Error fetching catalog');
    }
};
