import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
export default function FriendList({ friends }) {
  let items = [];
  friends.map(({ id, avatar, name, isOnline }) => {
    items.push(
      <li className={css.item} key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    );
  });
  return <ul className={css.list}>{items}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
