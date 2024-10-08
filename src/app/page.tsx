"use client";

import { useState } from "react";

function HomePage() {
  const [text, setText] = useState("");

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <input
        className="mt-80 px-3 h-10 w-80 rounded-md text-black"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default HomePage;
