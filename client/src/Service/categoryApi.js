import axios from 'axios';


const categorysUrl = 'http://localhost:8080/category';

export const getCategory = async (id) => {
    id = id || '';
    return await axios.get(`${categorysUrl}/${id}`);
}

export const addCategory = async (category) => {
    return await axios.post(`${categorysUrl}/add`, category);
}
