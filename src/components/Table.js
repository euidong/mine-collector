import React from "react";
import Panel from "./Panel";

function Table(props) {
    const { under, setMark, mark, HEIGHT, WIDTH } = props;

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
                <Panel className="Panel" key={col} low={low} col={col} under={under} setMark={setMark} mark={mark}/>       
            )}
        </tr>);

    return (
        <>
            <table>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </>);
}

export default Table;