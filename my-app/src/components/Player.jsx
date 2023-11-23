import { useState } from "react";

function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editPlayerName = <span className="player-name "> {playerName} </span>;

  if (isEditing) {
    editPlayerName = (
      <input required type="text" value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleEdit}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}

export default Player;
