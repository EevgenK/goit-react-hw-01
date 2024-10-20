import { useState } from "react";
import userData from "./data/userData.json";
import css from "./app.module.css";
import Profile from "./components/profile/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;
