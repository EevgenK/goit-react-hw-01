import PropTypes from "prop-types";
import css from "./profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  let items = [];
  for (let key in stats) {
    items.push(
      <li className={css.statisticItem} key={key}>
        <span className={css.label}>{key}</span>
        <span className={css.value}>{stats[key]}</span>
      </li>
    );
  }
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.statisticList}>{items}</ul>
    </div>
  );
}
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
