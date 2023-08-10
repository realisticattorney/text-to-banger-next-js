"use client";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";

function App() {
  const [tweetIdea, setTweetIdea] = useState<string>("");
  const [generatedTweet, setGeneratedTweet] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [darkMode, setDarkMode] = useState<boolean>(true);

  const handleTweetIdeaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTweetIdea(e.target.value);
  };

  const handleGenerateTweet = () => {
    setIsLoading(true);
    setGeneratedTweet(null);

    fetch("http://localhost:8080/generate-banger", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ originalText: tweetIdea }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status code ${response.status}`);
        }
        console.log(response);
        const responseData = response.text(); // parse the response as JSON
        console.log(responseData);
        return responseData;
      })
      .then((data) => {
        if (data === "Error generating banger tweet.") {
          setGeneratedTweet("Error generating banger tweet.");
        } else {
          setGeneratedTweet(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setGeneratedTweet("Error generating banger tweet.");
        setIsLoading(false);
      });
  };

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleGenerateTweet();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerateTweet();
    }
  };

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
            onSubmit={handleFormSubmit}
            className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 border border-blue-600 rounded p-4 w-128 flex flex-col shadow-md"
          >
            <textarea
              id="tweetIdea"
              value={tweetIdea}
              onChange={handleTweetIdeaChange}
              onKeyDown={handleKeyDown}
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
            {generatedTweet && (
              <>
                <p
                  className={`${
                    generatedTweet.startsWith("Error") ? "text-red-800" : ""
                  }`}
                >
                  {generatedTweet}
                </p>
                {!generatedTweet.startsWith("Error") && (
                  <a
                    className="bg-blue-600 text-white p-2 text-center rounded-md cursor-pointer m-1 text-lg hover:bg-blue-500"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      generatedTweet
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Post Banger Tweet
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
