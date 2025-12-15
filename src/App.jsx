import './App.css';
import ChatLog from './components/ChatLog';
import { useState } from "react";

const mockChatData = [
  {
    id: 1,
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
    liked: false,
  },
  {
    id: 2,
    sender: 'Estragon',
    body: 'Because you are wrong.',
    timeStamp: '2018-05-29T22:49:33+00:00',
    liked: false,
  },
  {
    id: 3,
    sender: 'Vladimir',
    body: 'because I am what',
    timeStamp: '2018-05-29T22:50:22+00:00',
    liked: false,
  },
  {
    id: 4,
    sender: 'Estragon',
    body: 'A robot.',
    timeStamp: '2018-05-29T22:52:21+00:00',
    liked: false,
  },
  {
    id: 5,
    sender: 'Vladimir',
    body: 'Notabot',
    timeStamp: '2019-07-23T22:52:21+00:00',
    liked: false,
  },
  {
    id: 6,
    sender: 'Estragon',
    body: 'Yes, Notabot.',
    timeStamp: '2019-07-23T22:53:21+00:00',
    liked: false,
  },
  {
    id: 7,
    sender: 'Vladimir',
    body: 'I prefer to be called Vladimir.',
    timeStamp: '2019-07-23T22:54:21+00:00',
    liked: false,
  },
  {
    id: 8,
    sender: 'Estragon',
    body: 'As you wish, Vladimir.',
    timeStamp: '2019-07-23T22:55:21+00:00',
    liked: false,
  },
  {
    id: 9,
    sender: 'Vladimir',
    body: 'Thank you.',
    timeStamp: '2019-07-23T22:56:21+00:00',
    liked: false,
  },
  {
    id: 10,
    sender: 'Estragon',
    body: 'You are welcome, Vladimir.',
    timeStamp: '2019-07-23T22:57:21+00:00',
    liked: false,
  },
  {
    id: 11,
    sender: 'Vladimir',
    body: 'Shall we continue our discussion?',
    timeStamp: '2019-07-23T22:58:21+00:00',
    liked: false,
  },
];


const App = () => {
  const [chatEntries, setChatEntries] = useState(mockChatData);

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
