"use client";

import { classNames } from "@/utils/classNames";
import { useChat } from "ai/react";
import Image from "next/image";

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
    initialMessages: [
      {
        content:
          "Sorry babe I can't listening how was your day ever again. I lose my edge context-switching to your toxic work environment",
        role: "user",
        id: "ISgO141",
      },
      {
        id: "XEAnGmj",
        content:
          "\"I just saw someone walking around with a sign that said 'I'm an undefined variable' and I couldn't help but think, same.",
        role: "system",
      },
      {
        content: "I dont know mannn\n",
        role: "user",
        id: "TftCoI2",
      },
      {
        id: "dnE9T9I",
        content:
          '"Just found out my ex was an alien the whole time. Talk about out of this world!"',
        role: "assistant",
      },
      {
        content: "thanks broter\n",
        role: "user",
        id: "JSK2xq1",
      },
      {
        id: "BgeGxWj",
        content:
          '"Ducks are so weird. I mean, have you ever seen one wearing pants?',
        role: "assistant",
      },
      {
        content: "hehehehehehehehehe",
        role: "user",
        id: "5KyZadz",
      },
      {
        id: "3WrgVR6",
        content:
          '"My therapist just told me I have an unhealthy obsession with the Oxford comma. I think it\'s time to take a break from our sessions."',
        role: "assistant",
      },
    ],
  });

  console.log(messages);
  return (
    <div className="text-center dark:text-white">
      {/* <button
        className="bg-primary text-white p-2 rounded-full fixed top-5 right-5 w-10 h-10 text-lg shadow-md hover:bg-blue-500 transition"
        onClick={toggleDarkMode}
      >
        {darkMode ? "🌙" : "☀️"}
      </button> */}
      <header className="min-h-screen flex flex-col justify-center text-white bg-gradient-to-br from-gray-800 to-gray-900 dark:from-white dark:to-gray-200">
        <div className="flex justify-center w-full">
          <h1 className="font-mono mb-8 text-4xl font-bold text-primary">
            text-to-banger
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center mx-5">
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 border border-primary rounded p-4 w-full max-w-[500px] flex flex-col shadow-md"
          >
            <textarea
              id="tweetIdea"
              value={tweetIdea}
              onChange={handleInputChange}
              placeholder="What's happening?"
              rows={4}
              className="border-none p-2 resize-none outline-none font-mono text-lg bg-transparent dark:text-black"
            />
            <button
              className="bg-primary text-white p-2 text-center font-mono rounded-md cursor-pointer m-1 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading || !tweetIdea}
            >
              {isLoading ? (
                <Image
                  src="spinner.svg"
                  className="animate-spin mx-auto"
                  alt="spinner"
                  width={20}
                  height={20}
                />
              ) : (
                <p>Generate Banger Tweet</p>
              )}
            </button>
          </form>
          <div className="m-auto pt-5 mt-4 rounded-lg max-w-md h-96 overflow-y-auto overflow-x-hidden">
            {messages.map((m, index) => (
              <div
                key={m.id}
                className={classNames(
                  "p-2 text-left my-2 text-gray-300 rounded-md",
                  m.role === "user" ? "ml-5" : "mr-5",
                  index % 2 === 0 ? "bg-[#092c4949]" : "bg-[#094b8149]"
                )}
              >
                <strong>{m.role === "user" ? "User" : "AI"}:</strong>{" "}
                {m.content}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
