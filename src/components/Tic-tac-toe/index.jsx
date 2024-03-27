import React, { useEffect, useState } from "react";
import "../Tic-tac-toe/tictac.css";
import ButtonComponent from "./ButtonComponent";
export default function Tiktactoe() {
  const [selections, setSelections] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!checkWinning(selections) && selections.every((item) => item !== "")) {
      setStatus("it was a draw");
    } else if (checkWinning(selections)) {
      setStatus(
        `congratulations ${checkWinning(
          selections
        )} you have won, click on the button below to restart`
      );
    } else {
      setStatus(`your turn player ${isXturn ? "X" : "O"}`);
    }
  }, [selections, isXturn]);

  const checkWinning = (currentSelections) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let index = 0; index < winningPattern.length; index++) {
      const [x, y, z] = winningPattern[index];
      if (
        currentSelections[x] &&
        currentSelections[x] === currentSelections[y] &&
        currentSelections[x] === currentSelections[z]
      ) {
        //setStatus(currentSelections[x]);
        return currentSelections[x];
      }
    }

    return null;
  };
  const handleClick = (selection) => {
    let myCopiedState = [...selections];
    if (checkWinning(myCopiedState) || myCopiedState[selection]) {
      return null;
    }
    myCopiedState[selection] = isXturn ? "X" : "O";
    setSelections(myCopiedState);
    setIsXturn(!isXturn);
  };

  const handleRestart = () => {
    setSelections(Array(9).fill(""));
    setIsXturn(true);
  };
  return (
    <div>
        <h3 style={{textAlign: "center", marginTop: "20px"}}>TIC TAC TOE Game</h3>
      <section>
        <div className="main-tiktic-wrapper">
          <div className="boxes">
            <div className="top-row-boxes">
              <ButtonComponent
                value={selections[0]}
                onClick={() => handleClick(0)}
              />
              <ButtonComponent
                value={selections[1]}
                onClick={() => handleClick(1)}
              />
              <ButtonComponent
                value={selections[2]}
                onClick={() => handleClick(2)}
              />
            </div>
            <div className="center-row-boxes">
              <ButtonComponent
                value={selections[3]}
                onClick={() => handleClick(3)}
              />
              <ButtonComponent
                value={selections[4]}
                onClick={() => handleClick(4)}
              />
              <ButtonComponent
                value={selections[5]}
                onClick={() => handleClick(5)}
              />
            </div>
            <div className="center-row-bottom">
              <ButtonComponent
                value={selections[6]}
                onClick={() => handleClick(6)}
              />
              <ButtonComponent
                value={selections[7]}
                onClick={() => handleClick(7)}
              />
              <ButtonComponent
                value={selections[8]}
                onClick={() => handleClick(8)}
              />
            </div>
          </div>
          <div>
            <p
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontSize: "18px",
              }}
            >
              {status}
            </p>
            <button
              onClick={handleRestart}
              style={{
                padding: "5px",
                color: "black",
                margin: "auto",
                display: "block",
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
