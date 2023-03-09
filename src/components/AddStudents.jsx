import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {addStudent} from "../service/api";
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

const AddStudents = () =>{

    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();
    
    const onValueChange = (e) => {
        
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log([e.target.name], e.target.value);
    }

    const addStudentDetails = async() => {
        await addStudent(user);
        navigate("/all");
    }
  
    return(
        <Container>
            <Typography variant="h4">Add a student name</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name= "name"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">User Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name= "username"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name= "email"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name= "phone"/>
            </FormControl>
            <FormControl>
                <Button  onClick={() => addStudentDetails()} variant="contained">Add student</Button>
            </FormControl>
        </Container>   
    );

}

export default AddStudents;