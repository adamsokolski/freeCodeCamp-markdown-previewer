import React from "react";
import marked from "marked";

export default function Preview({ input }) {
  let stringToDom = marked(input, { breaks: true });
  return <div id="preview" dangerouslySetInnerHTML={{ __html: stringToDom }} />;
}
