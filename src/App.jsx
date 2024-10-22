import { userData, friends, transactions } from "./data";
import css from "./App.module.css";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/";
import FriendList from "./components/FriendList/FriendList";

function App() {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
