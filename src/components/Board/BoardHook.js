import { useState } from "react";

const initialBoard = (HEIGHT, WIDTH, MINE_PERCENT) => {
    const mined = Array(HEIGHT).fill(null).map(() => (Array(WIDTH).fill(false)));
    const nearMineNum = Array(HEIGHT).fill(null).map(() => (Array(WIDTH).fill(0)));
    
    for (let i = 0 ; i < HEIGHT; i++) {
        for (let j = 0 ; j < WIDTH ; j++) {
            mined[i][j] = Math.random() < MINE_PERCENT;
            if (mined[i][j]) {
                // 상
                if (i > 0)
                    nearMineNum[i-1][j]++;
                // 하
                if (i < HEIGHT - 1)
                    nearMineNum[i+1][j]++;
                // 좌
                if (j > 0)
                    nearMineNum[i][j-1]++;
                // 우
                if (j < WIDTH - 1)
                    nearMineNum[i][j+1]++;
                // 북서
                if (i > 0 && j > 0)
                    nearMineNum[i-1][j-1]++;
                // 북동
                if (i > 0 && j < WIDTH - 1)
                    nearMineNum[i-1][j+1]++;
                // 남서
                if (i < HEIGHT - 1 && j > 0)
                    nearMineNum[i+1][j-1]++;
                // 남동
                if (i < HEIGHT - 1 && j < WIDTH - 1)
                    nearMineNum[i+1][j+1]++;
            }
        }
    }

    
    for (let i = 0 ; i < HEIGHT; i++) {
        for (let j = 0 ; j < WIDTH; j++) {
            if (mined[i][j])
                nearMineNum[i][j] = "💣";
        }
    }

    return nearMineNum;
}

const useScore = (initValue) => {
    const [score, setScore] = useState(initValue);
    const upScore = (value) => {
        setScore(score + value);
    }
    return [score, upScore];
}

const useMark = (HEIGHT, WIDTH, MINE_PERCENT) => {
    const [ mark, setMarking ] = useState(Array(HEIGHT).fill(null).map(() => Array(WIDTH).fill("notting")));
    const [ score, upScore ] = useScore(0);
    const [ under ] = useState(initialBoard(HEIGHT, WIDTH, MINE_PERCENT));
    const setMark = (low, col, event) => {      
        const ary = [];
        for (let i = 0 ; i < mark.length; i++) {
            ary.push(i);
        }
        const copy = ary.map((idx) => mark[idx].slice(0));
        

        if (event === "clicked") {
            let count = 0;
            switch(mark[low][col]) {
                case "notting":
                    const recursiveCall = (low, col) => {
                        if (under[low][col] === 0 && copy[low][col] === "notting") {
                            copy[low][col] = "clicked";
                            count++;
                            if (low > 0) {
                                if (col > 0) {
                                    recursiveCall(low-1,col-1,copy);
                                }
                                if (col < WIDTH - 1) {
                                    recursiveCall(low-1,col+1,copy);
                                }
                                recursiveCall(low-1, col,copy);
                                
                            }
                            if (low < HEIGHT - 1) {
                                if (col > 0) {
                                    recursiveCall(low+1,col-1,copy);
                                
                                }
                                if (col < WIDTH - 1) {
                                    recursiveCall(low+1,col+1,copy);
                                }
                                recursiveCall(low+1, col,copy);   
                            }
                            if (col > 0) {
                                recursiveCall(low,col-1,copy);
                            }
                            if (col < WIDTH - 1) {
                                recursiveCall(low,col+1,copy);
                            }
                        }
                        else if (under[low][col] !== 0 && copy[low][col] !== "clicked") {
                            copy[low][col] = "clicked";
                            count++;
                        }
                    }
                    recursiveCall(low,col);
                    if (under[low][col] === "💣")
                        setTimeout(() => {
                            alert("실패입니다. 게임을 재시작합니다.");
                            window.location.reload();
                        }, 10);
                    else {
                        upScore(count);
                    }
                    break;
                case "clicked":
                    // do notting
                    break;
                case "contextMenued":
                    // do notting
                    break;
                default:
                    break;
            }
        }
        else if (event === "contextMenued") {
            switch(mark[low][col]) {
                case "notting":
                    copy[low][col] = "contextMenued";
                    if (under[low][col] === "💣")
                        upScore(1);
                    break;
                case "clicked":
                    // do notting
                    break;
                case "contextMenued":
                    copy[low][col] = "notting";
                    if (under[low][col] === "💣")
                        upScore(-1);
                    break;
                default:
                    break;
            }         
        }
        setMarking(copy);
    };
    return [ mark, score, under, setMark ];
}

export { useScore, useMark };