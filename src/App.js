import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
function App() {
  const [formName, setFormName] = useState("");
  const [user, setUser] = useState(null);
  const [purpose, setPurpose] = useState(null);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (!user) {
      if (localStorage.getItem("raintechUser")) {
        let u = JSON.parse(localStorage.getItem("raintechUser"));
        setUser({ ...u });
      }
    }
  }, []);

  return (
    <div className="App" style={{ paddingTop: "10vh" }}>
      <Header
        setMovieData={setMovieData}
        setPurpose={setPurpose}
        formName={formName}
        setFormName={setFormName}
        user={user}
        setUser={setUser}
      />
      {user ? (
        <Route path="/">
          <Home
            purpose={purpose}
            setPurpose={setPurpose}
            movieData={movieData}
            setMovieData={setMovieData}
            setUser={setUser}
          />
        </Route>
      ) : (
        <Route path="/">
          <Auth
            formName={formName}
            setFormName={setFormName}
            setUser={setUser}
          />
        </Route>
      )}
    </div>
  );
}

export default App;
