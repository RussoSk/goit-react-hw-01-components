import data from '../components/data/data.json';
import user from '../components/data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json'
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './Transactions/TransactionHistory'
import { FriendList } from './FriendList/FriendList';


export const App = () => {
  return (
    <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    /> 
    <Statistics 
      title="Upload stats" 
      stats={data} />
    
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
  </>
  );
};
