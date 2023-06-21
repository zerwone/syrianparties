import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Popup = () => {
  const navigate = useNavigate();

  const closePopup = () => {
    navigate("/");
  };

  const [randomJoke, setRandomJoke] = useState("");

  useEffect(() => {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Why don't skeletons fight each other? They don't have the guts!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why did the bicycle fall over? Because it was two-tired!",
      "Why couldn't the leopard play hide and seek? Because he was always spotted!",
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    setRandomJoke(jokes[randomIndex]);
  }, []);

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Oops, you stumbled upon a joke!</h2>
        <img
          src="https://cdn.discordapp.com/attachments/1117916689129029703/1117918785161150494/51.-Stopping.png"
          alt=""
        />
        <p>{randomJoke}</p>

        <p className="popup-message">
          But seriously, we're still working on this page. Check back later!
        </p>
        <button className="close-button" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
};
