import { useState } from "react";
import "./styles.css";

const emojiDb = {
  "🙈": "See no evil monkey",
  "💥": "Collision",
  "💫️": "Dizzy",
  "💨": "Dashing away",
  "🦧": "Orangutan",
  "🐮": "Cow Face",
  "🐽": "Pig Nose",
  "🐺": "Wolf",
  "🦄": "Unicorn",
  "🦏": "Rhinoceros",
  "🦦": "Otter",
  "🦃": "Turkey"
};

const allEmojis = Object.keys(emojiDb);

export default function App() {
  const [userEmojiInput, setUserEmojiInput] = useState("");
  const [emojiMeaning, setEmojiMeaning] = useState(
    "emoji meaning will appear here"
  );

  const handleInputChange = (e) => {
    const userEmoji = e.target.value.trim();
    setUserEmojiInput(userEmoji);

    if (userEmoji in emojiDb) {
      setEmojiMeaning(emojiDb[userEmoji]);
    } else {
      setEmojiMeaning("Opps! we don't have data about this empji");
    }
  };

  const handleEmojiClick = (emoji) => {
    setEmojiMeaning(emojiDb[emoji]);
  };

  return (
    <div className="App">
      <section className="header">
        <h2>Emoji Camp</h2>
        <p>Find the meaning of any emoji</p>
      </section>
      <input
        type="text"
        placeholder="put an emoji here to know the meaning"
        className="userInput"
        value={userEmojiInput}
        onChange={handleInputChange}
      />
      <div>
        <p>{userEmojiInput}</p>
        <h3>{emojiMeaning}</h3>
      </div>

      <div>
        <p>Click on the emojis below to know their meaning </p>
        {allEmojis.map((emoji) => {
          return (
            <span className="emojiList" onClick={() => handleEmojiClick(emoji)}>
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
