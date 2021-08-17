import PropTypes from 'prop-types';
import s from './social-profile.module.css';

export default function UserProfile(props) {
  const {name, tag, location, avatar, stats} = props;
  return (
    <div className={s.profile}>
      <div className={s.profile__description}>
        <img
          className={s.profile__avatar}
          src={avatar}
          alt="Аватар пользователя"
        />
        <p className={s.profile__name}>{name}</p>
        <p className={s.profile__tag}>@{tag}</p>
        <p className={s.profile__location}> {location} </p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.stats__label}>Followers</span>
          <span className={s.stats__quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.stats__label}>Views</span>
          <span className={s.stats__quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.stats__label}>Likes</span>
          <span className={s.stats__quantity}> {stats.likes} </span>
        </li>
      </ul>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
