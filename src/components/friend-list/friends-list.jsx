import PropTypes from 'prop-types';
import FriendListItem from './friend-list-item';
import './friends-list.module.css';

export default function FriendList({friends}) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number})),
};
