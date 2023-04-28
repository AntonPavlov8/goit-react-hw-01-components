import user from './Profile/data/user.json';
import Profile from './Profile/Profile';
export const App = () => {
  return <Profile {...user} />;
};
