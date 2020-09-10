import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID U754jgcgwxI4k7v4bg5g8P2xB3x2g7ZD4PwJyr2JwxA'
    }
});