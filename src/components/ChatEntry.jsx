import './ChatEntry.css';
import TimeStamp from "./TimeStamp";
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onToggleLike }) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className={`chat-entry ${sender === 'Vladimir' ? 'local' : 'remote'}`}>
      <article className={`chat-entry ${sender === 'Vladimir' ? 'local' : 'remote'}`}></article>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={() => onToggleLike(id)}>
          {liked ? "❤️" : "🤍"}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onToggleLike: PropTypes.func.isRequired,
};

export default ChatEntry;
