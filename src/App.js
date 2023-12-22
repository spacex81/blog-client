import './App.css';
import LoginForm from "./LoginForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./Signup"; // Import Routes and Route



function App() {

    return (
        <Router>
            <div className="App">
                <Routes> {/* Define your routes here */}
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
