"use client";

import useLocalStorageState from "@/hooks/useLocalStorageState";

function HomePage() {
  const [text, setText] = useLocalStorageState("", "text");

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
