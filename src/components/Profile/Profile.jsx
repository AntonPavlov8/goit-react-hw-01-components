import PropTypes from 'prop-types';

import s from './profile.module.css';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.statistics}>
        {Object.entries(stats).map(entry => {
          return (
            <li key={entry[0]} className={`${s.noLeftBorder} ${s.statsItem}`}>
              <span className={s.label}>{entry[0]}</span>
              <span className={s.quantity}>{entry[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.object.isRequired,
};
