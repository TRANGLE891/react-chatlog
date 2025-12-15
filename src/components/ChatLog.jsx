import ChatEntry from "./ChatEntry";
import PropTypes from "prop-types";
import "./ChatLog.css";
function ChatLog({ entries, onToggleLike }) {
    return (
        <div className="chat-log">
            {entries.map((entry) => {
                return (
                    <ChatEntry
                        key={entry.id}
                        id={entry.id}
                        sender={entry.sender}
                        body={entry.body}
                        timeStamp={entry.timeStamp}
                        liked={entry.liked}
                        onToggleLike={onToggleLike}
                    />
                );

            })}
        </div>
    );
}
ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
            onToggleLike: PropTypes.func.isRequired,
        })
    ).isRequired
};

export default ChatLog;