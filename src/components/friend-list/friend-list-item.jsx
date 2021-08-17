import PropTypes from 'prop-types';
import s from './friend-list-item.module.css';

export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <li className={s.friendList__item}>
      <span
        className={isOnline ? `${s.active} ${s.status}` : `${s.status}`}
      ></span>
      <img
        className={s.friendList__itemAvatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={s.friendList__itemName}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
