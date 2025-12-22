import './App.css';
import ChatLog from './components/ChatLog';
import { useState } from "react";
import messages from './data/messages.json';

const App = () => {
  const [chatEntries, setChatEntries] = useState(messages);

  const toggleLike = (id) => {
    const updated = chatEntries.map((entry) =>
      entry.id === id ? { ...entry, liked: !entry.liked } : entry
    );
    setChatEntries(updated);
  };

  const totalLiked = chatEntries.filter(entry => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{totalLiked} ❤️s</h2>
      </header>

      <main>
        <ChatLog
          entries={chatEntries}
          onToggleLike={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
