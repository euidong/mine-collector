import React, { useEffect, useState, useRef } from "react";
import Mdaol from "react-modal";
// 랜덤한 지뢰 생성
// <table>
// <tr> * 10
// <td> * 10
//TODO: 폭탄 눌렀을 때, 전체 비활성화
//TODO: 옆에 폭탄 갯수 세기
function Panel (props) {
    const { low, col, under, setMark, mark, upScore } = props;
    const showContent = () => {
        let content;
        switch(mark[low][col]) {
            case "notting":
                content="";
                break;
            case "clicked":
                content=under[low][col];
                break;
            case "contextMenued":
                content="🚩";
                break;
            default:
                break;
        }
        return content;
    }

    const clickHandler = (e) => {
        e.preventDefault();

        switch(mark[low][col]) {
            case "notting":
                setMark(low, col, "clicked");
                if (under[low][col] === "💣")
                    setTimeout(() => {
                        alert("실패입니다. 게임을 재시작합니다.");
                        window.location.reload();
                    }, 10);
                break;
            case "clicked":
                if (under[low][col] !== "💣")
                    setMark(low, col, "clicked");
                break;
            case "contextMenued":
                // do notting
                break;
            default:
                break;
        }
    }

    const contextmenuHandler = (e) => {
        e.preventDefault();
        switch(mark[low][col]) {
            case "notting":
                setMark(low, col, "contextMenued");
                if (under === "💣")
                    upScore(1);
                break;
            case "clicked":
                // do notting
                break;
            case "contextMenued":
                setMark(low, col, "notting");
                if (under === "💣")
                    upScore(-1);
                break;
            default:
                break;
        }
    }

    return  <>
                <td onClick={clickHandler} onContextMenu={contextmenuHandler}>
                    {showContent()}
                </td>
            </>;
}

const useScore = (init) => {
    const [ opened, setOpened ] = useState(init);
    const uploadCurrent = (value) => {
        setOpened(opened + value);
    };
    return [ opened, uploadCurrent ];
}


const useMark = (initValue) => {
    const [ mark, setMarking ] = useState(initValue);
    
    const setMark = (low, col, event) => {      
        const ary = [];
        for (let i = 0 ; i < mark.length; i++) {
            ary.push(i);
        }
        const copy = ary.map((idx) => mark[idx].slice(0));
        copy[low][col] = event;
        setMarking(copy);
    };
    return [ mark, setMark ];
}

// 폭탄 갯수를 카운팅해주어야 함.
// td의 state를 여기까지 끌어올린다.
function Table (props) {
    const { openModal } = props;
    const MINE_PERCENT = 0.1;
    const HEIGHT = 10;
    const WIDTH = 10;

    const result = useRef(initialBoard(HEIGHT, WIDTH, MINE_PERCENT)); // 판 아래에 있는 내용
    const [ under, mineCount ] = result.current;
    const [ mark, setMark ] = useMark(initMark(HEIGHT, WIDTH)); // 실제 표시되는 내용
    const [ score, upScore ] = useScore(0); // 찾은 지뢰수 
    
    useEffect(() => {
        if (score === mineCount) {
            openModal();
        }
    }, [score, mineCount, openModal]);

    const trIdx = [];
    for (let i = 0; i < HEIGHT; i++) {
        trIdx[i] = i;
    }

    const tdIdx = [];
    for (let i = 0; i < WIDTH; i++) {
        tdIdx[i] = i;
    }

    const trs = trIdx.map((low) => 
        <tr key={low}>
            {tdIdx.map((col) => 
                <Panel key={col} upScore={upScore} low={low} col={col} under={under} setMark={setMark}mark={mark}/>       
            )}  
        </tr>);

    return (
        <>
            <table>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </>
    );
}


function Time (props){
    return (<h1 className= {'Time'}> Time : {props.time}s </h1>);
}


const initialBoard = (HEIGHT, WIDTH, MINE_PERCENT) => {
    const mined = Array(HEIGHT).fill(null).map(() => (Array(WIDTH).fill(false)));
    const nearMineNum = Array(HEIGHT).fill(null).map(() => (Array(WIDTH).fill(0)));
    
    let mineCount = 0;
    for (let i = 0 ; i < HEIGHT; i++) {
        for (let j = 0 ; j < WIDTH ; j++) {
            mined[i][j] = Math.random() < MINE_PERCENT;
            if (mined[i][j]) {
                mineCount++;
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

    return [ nearMineNum, mineCount ];
}

const initMark = (height, width) => {
    const mark = Array(height);
    let line = Array(width);
    line.fill("notting");
    mark.fill(line);

    return mark;
}

function Board () {
    const [ time, setTime ] = useState(0);
    const completeTime = useRef();
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const afterOpenModal = () =>{
        completeTime.current = time;
    }
    const closeModal = () => {
        setIsOpen(false);
    };

    
    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(c => c+1);
        }, 1000);
        return () => {clearInterval(timerID);};
    }, []);

    return (
        <>
            <div className={'Board'}>
                <h1> Mine Collector </h1>
                <Time time={time}/>
                <Table openModal={openModal} />
                
            </div>
        </>
    );
}

export default Board;
