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
        {Object.keys(stats).map((key, value) => {
          return (
            <li key={key} className={`${s.noLeftBorder} ${s.statsItem}`}>
              <span className={s.label}>{key}</span>
              <span className={s.quantity}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
