import React from "react";


function Panel (props) {
    const { low, col, under, setMark, mark } = props;
    const showContent = () => {
        let content;
        switch(mark[low][col]) {
            case "notting":
                content=<div className={'NotClick'}></div>;
                break;
            case "clicked":
                content=under[low][col];
                if (content === 0)
                    content = <div className={'Zero'}></div>;
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
        setMark(low, col, "clicked");
    }

    const contextmenuHandler = (e) => {
        e.preventDefault();
        setMark(low, col, "contextMenued");
    }

    return  <>
                <td onClick={clickHandler} onContextMenu={contextmenuHandler}>
                    {showContent()}
                </td>
            </>;
}

export default Panel;