import { useState } from "react";

export default function Player({initialName, symbole}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        // setIsEditing(isEditing ? false :true); or we can use the following
        // setIsEditing(!isEditing); but this two not perfect solution.
        setIsEditing(isEditing ? false :true);
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = "Edit";

    if (isEditing) {
        //playerName = <input type="text" required defaultValue={name} />
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />

        // btnCaption="Save";
    }

    return (
    <li>
        <span className="player">
            {editablePlayerName}
            {/*<span className="player-name">{name}</span>*/}
            <span className="player-symbole">{symbole}</span>
        </span>
        <button onClick={handleEditClick}>{/*btnCaption*/} {isEditing ? 'Save' : 'Edit'}</button>
    </li>
    );
}