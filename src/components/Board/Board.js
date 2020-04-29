import React, { useEffect } from "react";
import Table from "../Table";
import { useMark } from "./BoardHook";

function Board (props) {
    const { HEIGHT, WIDTH, MINE_PERCENT, modalOpen } = props;
    const [mark, score, under, setMark] = useMark(HEIGHT, WIDTH, MINE_PERCENT);

    useEffect(() => {
        if (HEIGHT * WIDTH === score)
            modalOpen();
    }, [score, HEIGHT, WIDTH, modalOpen]);

    return (
        <>
            <div className={'Board'}>
                <Table under={under} setMark={setMark} mark={mark} HEIGHT={HEIGHT} WIDTH={WIDTH}/>
            </div>
        </>
    );
}

export default Board;