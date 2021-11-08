import axios from 'axios';


const studentsUrl = 'http://localhost:8080/students';

export const getStudents = async (id) => {
    id = id || '';
    return await axios.get(`${studentsUrl}/${id}`);
}

export const addStudent = async (student) => {
    return await axios.post(`${studentsUrl}/add`, student);
}

export const deleteStudent = async (id) => {
    return await axios.delete(`${studentsUrl}/${id}`);
}

export const editStudent = async (id, student) => {
    return await axios.put(`${studentsUrl}/${id}`, student)
}