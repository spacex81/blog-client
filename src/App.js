import './App.css';
import LoginForm from "./LoginForm";



function App() {
    function handleSubmit() {
        console.log("button clicked!!!")
    }

    return (
    <div className="App">
        <LoginForm/>
    </div>
  );
}

export default App;
