
import axios from 'axios'
//const BASE_REST_API_URL = 'http://localhost:8081/api/v1';
const BASE_REST_API_URL = 'https://goal-backend-api.herokuapp.com/api/v1';

class FistToFiveService{

    getAllEmployees(){
        return axios.get(BASE_REST_API_URL + '/users/getAll');
    }

    postQuestion(teacherId, question)
    {
        return axios.put(BASE_REST_API_URL + '/teachers/' + teacherId, question);
    }

    getAskedQuestions()
    {
        return axios.get(BASE_REST_API_URL + '/teachers/askedQuestions');
    }
}

export default new FistToFiveService();