import './App.css';
import FriendList from './friend-list/friends-list';
import Profile from './social-profile/social-profile';
import Statistics from './statistics/statistics';
import TransactionHistory from './transaction-history/transaction-history';

import user from '../src/social-profile/user.json';
import statisticalData from '../src/statistics/statistical-data.json';
import friends from '../src/friend-list/friends.json';
import transactions from '../src/transaction-history/transactions.json';

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
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
