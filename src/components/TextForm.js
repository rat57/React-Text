import React, { useState } from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "Converted to uppercase");

    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "Converted to lowercase");

    }

    function totitleCase(value) {
        let myValue = value.toLowerCase()
        let newValue = myValue.split(" ")
        let newarray = []
        for (let i = 0; i < newValue.length; i++) {
            let arrayValue = newValue[i][0].toUpperCase() + newValue[i].slice(1)
            newarray.push(arrayValue)
        }
        return newarray.join(" ")
    }

    const buttonClick = () => {
        let newText = totitleCase(text)
        setText(newText)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleremoveSpace = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }


    const [text, setText] = useState("");




    return (
        <>
  
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>
                    <textarea className="form-control" id="myBox" rows="8" placeholder={text} value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#333333" : "white", color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>lowercase</button>
                <button className="btn btn-primary mx-2" onClick={buttonClick}>Title Case</button>
                <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
                <button className="btn btn-primary mx-2" onClick={handleremoveSpace}>Remove Extra Space</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>{0.008 * text.split(' ').length} Mins will take to read it</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Please type anything to the above.."}</p>
            </div>
        </>
    )
}
