import axios from 'axios';

const API_URL = "http://127.0.0.1:3002/users";

export const addStudent = async (data) =>{
    try{
        return await axios.post(API_URL, data);
    }catch(error){
        console.log("Error while calling api addStudent", error.message);
    }
}

export const getStudent = async ()=>{
    try{
        return await axios.get(API_URL);
    }catch(error){
        console.log("Error while calling api getStudent", error.message);
    }
}

export const getSingleStudent = async (data)=>{
    try{
        return await axios.get(`${API_URL}/${data}`);
    }catch(error){
        console.log("Error while calling api getSingleStudent", error.message);
    }
}

export const editStudent = async (data, id)=>{
    try{
        return await axios.put(`${API_URL}/${id}`, data);
    }catch(error){
        console.log("Error while calling api editStudent", error.message);
    }
}


export const deleteData = async (id) =>{
    try{
        return await axios.delete(`${API_URL}/${id}`);
    }catch(error){
        console.log("Error while calling api deleteData", error.message)
    }
}

