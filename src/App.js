import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  function handleName() {
    alert(this.fullName);
  }

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <Profile
        fullName="kajeta"
        handle={handleName}
        bio="i love watching movies, coding and musiccc plus twitter lol "
        profession="Software Developer"
      >
        <img style={{ width: "8rem" }} alt="timer" src={logo} />
      </Profile>
    </div>
  );
}

export default App;
