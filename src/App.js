import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListAskedQuestionsComponent from './components/ListAskedQuestionsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AskQuestion from './components/AskQuestion';
import StudentComponent from './components/StudentComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent />
        <Routes>
          <Route path = "/" exact element={<ListAskedQuestionsComponent />}></Route>
          <Route path = "/ask-question" exact element={<AskQuestion />}></Route>
          <Route path = "/students" exact element={<StudentComponent />}></Route>
        </Routes>
        <FooterComponent />
      </Router>  
    </div>
  );
}

export default App;