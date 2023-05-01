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
      <ul className={s.stats}>
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
