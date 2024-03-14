import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = () => {
      let newText = text.toLowerCase();
      setText(newText);
    }

    const toSentenceCase = (str) => {
      let sentences = str.split('. ');
      for (let i = 0; i < sentences.length; i++) {
          let sentence = sentences[i];
          if (sentence.length > 0) {
              sentences[i] = sentence.charAt(0).toUpperCase() + sentence.slice(1);
          }
      }
      return sentences.join('. ');
    }

    const handleSenclick = () => {
      let newText = toSentenceCase(text) ;
      setText(newText);
      }


      const toAltCase = (str) => {
        let sentences = str.split('. ');
        for (let i = 0; i < sentences.length; i++) {
            let sentence = sentences[i];
            let newSentence = '';
            for (let j = 0; j < sentence.length; j++) {
                if (j % 2 === 0) {
                    newSentence += sentence[j].toUpperCase();
                } else {
                    newSentence += sentence[j].toLowerCase();
                }
            }
            sentences[i] = newSentence;
        }
        return sentences.join('. ');
    }
    

    const handleAltclick = () => {
      let newText = toAltCase(text) ;
      setText(newText);
      }

      const handleClearclick = () => {
        let newText = '';
        setText(newText);
        }

      const handleCopyclick = () => {
          var text = document.getElementById("myBox");
          text.select();
          navigator.clipboard.writeText(text.value);
          }
  


    const handleOnchange = (event) => {
        setText(event.target.value);
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: 
      props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleSenclick}>Sentence case</button>
    <button className="btn btn-primary mx-1" onClick={handleAltclick}>Alternate case</button>
    <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopyclick}>Copy text</button>
    </div>
    <div className="contianer my-2" style={{color : props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*(text.split(" ").length)} minutes to read!</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the above textbox to preview it here!"}</p>
    </div>
    </>
  )
}


