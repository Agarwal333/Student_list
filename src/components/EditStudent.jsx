import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getSingleStudent, editStudent} from "../service/api";
import { Link } from "react-router-dom";

const initialValues = {
    name:"",
    username: "",
    email: "",
    phone: ""
}

const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div{
    margin-top: 20px;
}
`

const EditStudent = () =>{

    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getSingleStudentData();
    }, [])

    const getSingleStudentData = async ()=>{
       let response =  await getSingleStudent(id);
       console.log(response);
       setUser(response.data);
    }
    
    const onValueChange = (e) => {
        
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log([e.target.name], e.target.value);
    }

    const addStudentDetails = async() => {
        await editStudent(user, id);
        navigate("/all");
    }
  
    return(
        <Container>
            <Typography variant="h4">Edit student name</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name= "name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">User Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name= "username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name= "email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name= "phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button  onClick={() => addStudentDetails()} variant="contained">Edit student</Button>
            </FormControl>
        </Container>   
    );

}

export default EditStudent;