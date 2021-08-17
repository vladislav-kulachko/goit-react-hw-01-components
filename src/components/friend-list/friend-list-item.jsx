import PropTypes from 'prop-types';

export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <li className="friend-list__item">
      <span className={isOnline ? 'status active' : 'status'}></span>
      <img
        className="friend-list__item-avatar"
        src={avatar}
        alt={name}
        width="48"
      />
      <p className="friend-list__item-name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
