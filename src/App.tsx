import { useState } from "react";
import "./App.css";
 const phrases = {
  "No",
  "Are You Sure?",
  "sura naba tlga?",
  "luuh",
  "weh sure nba?",
  "im ganna cry na",
  "you are breaking my heart :(",
 ];

function App() {
  const [noCount, setNocount] = useState(0);
  const [yesPressed, setYesPressed] = useState(False);
  const yesButtonSize = noCount * 20 + 16;
  function handleNoClick() {
    setNoCount(noCount + 1);
  }
  function getNoButtonText() {
    return phrases [math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="love-container">
      {yesPressed ? (
        <>
        <img
        alt="cat kissing"
        src="https://i.pinimg.com/originals/8c/bb/9b/8cbb9b70ce1e8f18f721119a064c1c3b.gif"
        />
        <div className="text">YAYYY!!!!</div>
        </>
      ) : (
        <>
        <img
        alt="cat hugging"
        src="https://i.pinimg.com/originals/60/7b/01/607b01352712d545f5abbc7d6ca02fdd.gif"
        ;