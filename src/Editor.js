import React from "react";
import "./Editor.css";

export default function Editor({ handleChange }) {
  return <textarea id="editor" onChange={handleChange}></textarea>;
}
