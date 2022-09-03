import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import FistToFiveService from '../services/FistToFiveService';

const ListAskedQuestionsComponent = () => {

  const [users, setUsers] = useState([]);

  const [askedQuestions, setAskedQuestions] = useState([]);

  
  useEffect(() => {
    FistToFiveService.getAskedQuestions().then((response) => {
      setUsers(response.data);
      console.log("Vindhya ", response.data);
     }).catch((error) => console.log(error));
 }, [])

 
  return (
    <div className="container">
            <h2 className='text-center'> List of Users </h2>
            <Link to="/ask-question" className="btn btn-primary mb-2"> Ask Question </Link>
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Teacher Name</th>
                    <th>Question</th>
                </tr>
                </thead>
                <tbody>
                    {
                       users.map(user => 
                        <tr key={user.teacherName}>
                            <td> {user.teacherName} </td>
                            <td> {user.question} </td>
                        </tr>
                       )
                    }
                </tbody>
                </table>
                </div>
                
  )
}

export default ListAskedQuestionsComponent