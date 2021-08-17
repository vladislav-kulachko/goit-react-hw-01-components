import PropTypes from 'prop-types';
import FriendListItem from './friend-list-item';
import s from './friends-list.module.css';

export default function FriendList({friends}) {
  return (
    <ul className={s.friendList}>
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
