import PropTypes from 'prop-types';

import s from './transactioHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.tableHeader}>
        <tr>
          <th className={s.tableHeaderText}>Type</th>
          <th className={s.tableHeaderText}>Amount</th>
          <th className={s.tableHeaderText}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>

            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
