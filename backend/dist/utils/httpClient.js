import axios from 'axios';
export async function timedGet(url) {
    const start = Date.now();
    const response = await axios.get(url);
    const duration = Date.now() - start;
    return { response, duration };
}
