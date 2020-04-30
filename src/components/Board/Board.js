import React, { useEffect } from "react";
import Table from "../Table";
import { useMark } from "./BoardHook";

function Board (props) {
    const { HEIGHT, WIDTH, MINE_PERCENT, modalOpen } = props;
    const [ score, mineCount, setMark, showContent ] = useMark(HEIGHT, WIDTH, MINE_PERCENT);
    useEffect(() => {
        if (HEIGHT * WIDTH === score) {
            if (score !== 0)
                modalOpen();
        }
    }, [score, HEIGHT, WIDTH, modalOpen]);

    return (
        <>
            <div className={'Board'}>
                <h1><span>💣</span> : {mineCount}</h1>
                <Table setMark={setMark} showContent={showContent} HEIGHT={HEIGHT} WIDTH={WIDTH}/>
            </div>
        </>
    );
}

export default Board;