import React, { useState } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [area, setArea] = useState({ title: "", note: "" });
  const [isExpanded, setisExpanded] = useState(false);

  function areaHandler(event) {
    const { name, value } = event.target;
    setArea((prevObj) => {
      if (name === "title") {
        return { title: value, note: prevObj.note };
      } else if (name === "content") {
        return { title: prevObj.title, note: value };
      }
    });
  }
  function expandHandler() {
    setisExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={areaHandler}
            placeholder="Title"
            value={area.title}
          />
        )}
        <textarea
          name="content"
          onClick={expandHandler}
          onChange={areaHandler}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={area.content}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(e) => {
              props.onAdd(area);
              e.preventDefault();
              setArea({ title: "", content: "" });
            }}
          >
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
