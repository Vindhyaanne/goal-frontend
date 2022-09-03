import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';

//const initialValues = {studentResponse: ""};

const StudentComponent = () => {
    const [studentResponse, setStudentResponse] = useState("");
    const navigate = useNavigate();

    const submitResponse = (e) => {
        e.preventDefault();
        navigate('/');
    }

  return (
    <div>    
        <br></br>        
         <form>
        <div className = "mb-3 row">
    <label className = "col-sm-2 col-form-label"> Student Response </label>
    <div className="col-sm-6">
        <select  id = "studentResponse" 
        value={studentResponse} 
        onChange = {(e) => setStudentResponse(e.target.value)}
        style = {{marginLeft:"10px"}}>
            <option> 0 </option>
            <option> 1 </option>
            <option> 2 </option>
            <option> 3 </option>
            <option> 4 </option>
            <option> 5 </option>
        </select>
    </div>
</div>
<button className = "btn btn-success" onClick = {(e) => submitResponse(e)} >Submit </button>    
</form>
</div>
  )
}

export default StudentComponent