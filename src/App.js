import './App.css';



function App() {
    function handleSubmit() {
        console.log("button clicked!!!")
    }

    return (
    <div className="App">
      please login
        <form style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            border: "1px solid black"
        }}>
                <label>
                    email
                    <input/>
                </label>
                <br/>
                <label>
                    password
                    <input/>
                </label>
                <br/>
                <button onClick={() => handleSubmit()}>Login</button>
        </form>
    </div>
  );
}

export default App;
