import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
function App() {
  const [user, setUser] = useState(null);

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
      <Header user={user} setUser={setUser} />
      {user ? (
        <Route path="/">
          <Home setUser={setUser} />
        </Route>
      ) : (
        <Route path="/">
          <Auth setUser={setUser} />
        </Route>
      )}
    </div>
  );
}

export default App;
