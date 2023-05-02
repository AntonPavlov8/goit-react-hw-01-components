import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './Nav/NavBar';
import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import user from '../data/user.json';
import statistics from '../data/statistics.json';

import s from './app.module.css';

export const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <NavBar />
        <div className={s.main}>
          <Routes>
            <Route path="/*" element={<Profile {...user} />} />
            <Route
              path="/task2"
              element={<Statistics title="UPLOAD STATS" stats={statistics} />}
            />
            <Route path="/task3" element="" />
            <Route path="/task4" element="" />
            <Route path="/task5" element="" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
