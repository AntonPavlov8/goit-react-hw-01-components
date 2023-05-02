import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './Nav/NavBar';
import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './FriendList/FriendList';

import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friendsList from '../data/friends.json';

import s from './app.module.css';

export const App = () => {
  return (
    <>
      <div className={s.appWrapper}>
        <NavBar />
        <div className={s.main}>
          <Routes>
            <Route path="/task1" element={<Profile {...user} />} />
            <Route
              path="/task2"
              element={<Statistics title="UPLOAD STATS" stats={statistics} />}
            />
            <Route
              path="/task3"
              element={<Friends friendsList={friendsList} />}
            />
            <Route path="/task4" element="" />
            <Route path="*" element={<Navigate to="/task1" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
