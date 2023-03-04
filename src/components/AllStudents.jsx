import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getStudent, deleteData } from "../service/api";
import { Link } from "react-router-dom";
const AllStudents = () =>{

const TableStyling = styled(Table)`
    width: 90%;
    margin: 30px auto 0;
`
const TableHeaderRow = styled(TableRow)`
background: rgb(53,9,95);
background: linear-gradient(90deg, rgba(53,9,95,1) 0%, rgba(239,6,226,1) 92%, rgba(201,0,255,1) 100%);
     & > th {                 //Table cell is th in html 
        color: white;
        font-size: 20px;
    }
`

const [ user, setUser] = useState([]);

    useEffect(()=>{
        getStudentDetails();
    } , [])

    const getStudentDetails = async ()=>{
       let response = await getStudent();
       console.log(response)
       setUser(response.data);
    }

const deleteStudentData = async (id)=>{
    await deleteData(id);
    getStudentDetails();
}
    return(
        <>
        <TableStyling>
            <TableHead>
                <TableHeaderRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableHeaderRow>
            </TableHead>
            <TableBody>
                {
                    user.map(student=>(
                        <TableRow>
                            <TableCell>{student.id}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.username}</TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>{student.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style= {{marginRight : 20}} component= {Link} to = {`/edit/${student.id}`}>Edit</Button>
                                <Button variant="contained" onClick={()=> deleteStudentData(student.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </TableStyling>
        </>
    );

}

export default AllStudents;