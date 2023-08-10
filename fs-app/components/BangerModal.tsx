"use client";

import { useChat } from "ai/react";

export default function BangerModal() {
  // const [darkMode, setDarkMode] = useState<boolean>(true);

  const {
    messages,
    input: tweetIdea,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat({
    api: "/api/banger",
  });
  return (
    <div className="text-center dark:text-white">
      {/* <button
        className="bg-blue-600 text-white p-2 rounded-full fixed top-5 right-5 w-10 h-10 text-lg shadow-md hover:bg-blue-500 transition"
        onClick={toggleDarkMode}
      >
        {darkMode ? "🌙" : "☀️"}
      </button> */}
      <header className="min-h-screen flex flex-col justify-center text-white bg-gradient-to-br from-gray-800 to-gray-900 dark:from-white dark:to-gray-200">
        <div className="flex justify-center w-full">
          {/* <img src={logo} className="h-14 mb-8 pointer-events-none animate-spin" alt="logo" /> */}
          <h1 className="font-mono text-4xl font-bold text-blue-600">
            text-to-banger
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 border border-blue-600 rounded p-4 w-128 flex flex-col shadow-md"
          >
            <textarea
              id="tweetIdea"
              value={tweetIdea}
              onChange={handleInputChange}
              placeholder="What's happening?"
              rows={4}
              className="border-none p-2 resize-none outline-none font-mono text-lg leading-5 bg-transparent dark:text-black"
            />
            <button
              className="bg-blue-600 text-white p-2 text-center rounded-md cursor-pointer m-1 text-lg disabled:opacity-50"
              type="submit"
              disabled={isLoading}
            >
              Generate Banger Tweet
            </button>
          </form>
          {isLoading && <p>generating a banger...</p>}
          <div className="w-1/3 m-auto text-center pt-5">
            {messages.map((m) => (
              <div key={m.id}>
                {m.role === "user" ? "User: " : "AI: "}
                {m.content}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
