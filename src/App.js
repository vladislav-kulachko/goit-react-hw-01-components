import FriendList from './components/friend-list/friends-list';
import Profile from './components/social-profile/social-profile';
import Statistics from './components/statistics/statistics';
import TransactionHistory from './components/transaction-history/transaction-history';

import user from './components/social-profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friend-list/friends.json';
import transactions from './components/transaction-history/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
