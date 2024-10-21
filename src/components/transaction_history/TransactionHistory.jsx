import PropTypes from "prop-types";

import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  const tableElements = items.map(({ id, type, amount, currency }) => {
    return (
      <tr className={css.row} key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{tableElements}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
