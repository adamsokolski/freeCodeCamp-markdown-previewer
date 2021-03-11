import React from "react";

export default function Editor({ handleChange, input }) {
  return (
    <textarea id="editor" onChange={handleChange} value={input}></textarea>
  );
}
