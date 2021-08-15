import PropTypes from 'prop-types';

export default function UserProfile(props) {
  const {name, tag, location, avatar, stats} = props;
  return (
    <div className="profile">
      <div className="description">
        <img className="avatar" src={avatar} alt="Аватар пользователя" />
        <p className="name">{name}</p>
        <p className="tag"> {tag} </p>
        <p className="location"> {location} </p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity"> {stats.likes} </span>
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
