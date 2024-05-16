import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleTitleClick = () => {
        let newText = text.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        });
        setText(newText);
        props.showAlert("Converted to titlecase", "success");
    }

    const copyFunction = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "info");
    }

    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const clearText = () => {
        setText("");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container mt-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#535252' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length === 0} className={props.mode === 'dark' ? 'btn btn-dark me-2 my-1' : 'btn btn-primary me-2 my-1'} onClick={handleUpClick}>Convert to UPPER case</button>
                <button disabled={text.length === 0} className={props.mode === 'dark' ? 'btn btn-dark me-2 my-1' : 'btn btn-primary me-2 my-1'} onClick={handleLowClick}>Convert to Lower case</button>
                <button disabled={text.length === 0} className={props.mode === 'dark' ? 'btn btn-dark me-2 my-1' : 'btn btn-primary me-2 my-1'} onClick={handleTitleClick}>Convert to Title case</button>
                <button disabled={text.length === 0} className={props.mode === 'dark' ? 'btn btn-dark me-2 my-1' : 'btn btn-primary me-2 my-1'} onClick={copyFunction}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className={props.mode === 'dark' ? 'btn btn-dark me-2 my-1' : 'btn btn-primary me-2 my-1    '} onClick={removeExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-danger" onClick={clearText}>Clear</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in text area to see the preview"}</p>
            </div>
        </>
    )
}
