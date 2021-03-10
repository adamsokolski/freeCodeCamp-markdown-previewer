import React from "react";
import marked from "marked";

export default function Preview({ input }) {
  let stringToDom = marked(input);
  return <div dangerouslySetInnerHTML={{ __html: stringToDom }} />;
}
