import axios from "axios";

//for signup
export async function saveUser(formData){
    try {
        const response=await axios.post("http://127.0.0.1:4200/User",formData);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//for login
export async function login(credentials){
    const response=await axios.post("http://127.0.0.1:4200/User/login",credentials);
    return response.data;
}


//for update users detalis
export async function updateuser(updatedUser,email){
    try {
        const response=await axios.put(`http://127.0.0.1:4200/User/${email}`,updatedUser);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//for delete user
export async function deleteuser(email){
    try {
        const response=await axios.delete(`http://127.0.0.1:4200/User/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//for fetch all users db
export async function fetchUser(){
    try {
        const response=await axios.get("http://127.0.0.1:4200/User");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//for fech particular user fron db
export async function fetchuserByEmail(email){
    try {
        const response=await axios.get(`http://127.0.0.1:4200/User/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveContact(formData){
    try {
        const response=await axios.post("http://127.0.0.1:4200/ContactUs",formData);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

