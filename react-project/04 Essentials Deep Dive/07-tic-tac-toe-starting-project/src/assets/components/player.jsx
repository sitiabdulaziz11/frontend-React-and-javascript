import { useState } from "react";

export default function Player({name, symbole}) {

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        // setIsEditing(isEditing ? false :true); or we can use the following
        // setIsEditing(!isEditing); but this two not perfect solution.
        setIsEditing(isEditing ? false :true);
    }

    let playerName = <span className="player-name">{name}</span>;
    // let btnCaption = "Edit";

    if (isEditing) {
        playerName = <input type="text" required value={name} />
        // btnCaption="Save";
    }

    return (
    <li>
        <span className="player">
            {playerName}
            {/*<span className="player-name">{name}</span>*/}
            <span className="player-symbole">{symbole}</span>
        </span>
        <button onClick={handleEditClick}>{/*btnCaption*/} {isEditing ? 'Save' : 'Edit'}</button>
    </li>
    );
}