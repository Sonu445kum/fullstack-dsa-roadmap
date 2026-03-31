import { useState } from "react";

export default function LiveInput() {
  

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}