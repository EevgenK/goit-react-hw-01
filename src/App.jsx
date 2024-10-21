import { userData, friends, transactions } from "./data";
import css from "./app.module.css";
import Profile from "./components/profile/Profile";
import FriendList from "./components/frendlist/FriendList";
import TransactionHistory from "./components/transaction_history/TransactionHistory";

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
