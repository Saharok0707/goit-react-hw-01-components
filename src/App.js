import 'index.css';
import user from 'data/user.json';
import UserProfile from 'components/UserProfile/UserProfile';
import data from 'data/data.json';
import Statistics from 'components/Statistics/Statistics';
import friends from 'data/friends.json';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from 'data/transactions.json';

export default function App() {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
