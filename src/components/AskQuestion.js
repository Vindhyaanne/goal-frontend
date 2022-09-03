import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import FistToFiveService from '../services/FistToFiveService'

const AskQuestion = () => {

    const [teacherId, setTeacherId] = useState('')
    const [question, setQuestion] = useState('')
    const navigate = useNavigate();


    const saveQuestion = (e) => {
        e.preventDefault();
        const questionNew = {question};

            FistToFiveService.postQuestion(teacherId, questionNew).then((response) =>{
                console.log(response.data)
                navigate('/students');
            }).catch(error => {
                console.log(error)
            })
    }

  return (
    <div>
    <br></br>
    <br></br>
    <div className = "container">
        <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
                <div className = "card-body">
                    <form>
                        <div className = "form-group mb-2">
                            <label className = "form-label"> Teacher Id :</label>
                            <input
                                type = "text"
                                placeholder = "Enter first name"
                                name = "teacherId"
                                className = "form-control"
                                value = {teacherId}
                                onChange = {(e) => setTeacherId(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className = "form-group mb-2">
                                    <label className = "form-label"> Question :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ask Question"
                                        name = "question"
                                        className = "form-control"
                                        value = {question}
                                        onChange = {(e) => setQuestion(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) => saveQuestion(e)} >Submit </button>                        </form>
                    </div>
                    </div>
                    </div>
                    </div> </div>
  )
}

export default AskQuestion