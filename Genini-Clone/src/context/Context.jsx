import { createContext } from "react";
import runChat from "../Config/gemini";
import { useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, SetInput] = useState("");
  const [recentPrompt, SetRecentPrompt] = useState("");
  const [prevPrompt, SetPrevPrompt] = useState([]);
  const [showResult, SetShowResult] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [resultData, SetResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      SetResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

    const newChat = () => {
        SetLoading(false);
        SetShowResult(false);
    }

  const onSent = async (prompt) => {
    SetResultData("");
    SetLoading(true);
      SetShowResult(true);
      let response;
      if (prompt !== undefined) {
          response = await runChat(prompt);
          SetRecentPrompt(prompt);
      } else {
          SetPrevPrompt((prev) => [...prev, input]);
          SetRecentPrompt(input);
          response =  await runChat(input)
      }
    
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    SetLoading(false);
    SetInput("");
  };

  const contextValue = {
    input,
    SetInput,
    prevPrompt,
    SetPrevPrompt,
    recentPrompt,
    SetRecentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
