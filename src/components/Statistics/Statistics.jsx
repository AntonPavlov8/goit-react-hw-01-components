import PropTypes from 'prop-types';

import s from './statistics.module.css';

export const Statistics = props => {
  const { stats, title } = props;
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.header}>{props.title}</h2> : ''}

      <ul className={s.statsBlock}>
        {stats.map(statItem => {
          return (
            <li
              key={statItem.id}
              className={s.statItem}
              style={{
                backgroundColor: `rgb(${100 - statItem.percentage}%, 70%, ${
                  statItem.percentage
                }%)`,
              }}
            >
              <span>{statItem.label}</span>
              <span>{statItem.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
