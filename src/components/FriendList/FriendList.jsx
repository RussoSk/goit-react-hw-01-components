import css from './FriendList.module.css';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types'; 


export function FriendList ({friends}) {
    return (
        <ul className={css.friendslist}>
             {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendsListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
        </ul>
    );
}
FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}