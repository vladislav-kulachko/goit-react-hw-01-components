import PropTypes from 'prop-types';
import './social-profile.css';
export default function UserProfile(props) {
  const {name, tag, location, avatar, stats} = props;
  return (
    <div className="profile">
      <div className="profile__description">
        <img
          className="profile__avatar"
          src={avatar}
          alt="Аватар пользователя"
        />
        <p className="profile__name">{name}</p>
        <p className="profile__tag">@{tag}</p>
        <p className="profile__location"> {location} </p>
      </div>

      <ul className="stats">
        <li>
          <span className="stats__label">Followers</span>
          <span className="stats__quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="stats__label">Views</span>
          <span className="stats__quantity">{stats.views}</span>
        </li>
        <li>
          <span className="stats__label">Likes</span>
          <span className="stats__quantity"> {stats.likes} </span>
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
