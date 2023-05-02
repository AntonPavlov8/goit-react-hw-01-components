import s from './friendList.module.css';

export const Friends = ({ friendsList }) => {
  return (
    <div>
      <ul className={s['friend-list']}>
        {friendsList.map(listItem => (
          <li key={listItem.id} className={s.friendListItem}>
            <span
              style={{
                backgroundColor: listItem.isOnline ? '#32cd32' : '#ff4500',
              }}
              className={s.onlineBlock}
            />
            <img
              className="avatar"
              src={listItem.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{listItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
