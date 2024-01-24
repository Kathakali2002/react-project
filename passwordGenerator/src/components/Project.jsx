import { useEffect, useState } from "react"

function Project() {
    const [inputEmoji, setInputEmoji] = useState(null)
    const [inputValue, setInputValue] = useState("")
    const [emojis, setEmojis] = useState([])
    /*const [newColor, setNewColor] = useState("white");


    const greenColor = () => {
        setNewColor("green")
    }

    const redColor = () => {
        setNewColor("red")
    }*/

   useEffect(() => {
    fetch("https://emoji-api.com/emojis?access_key=bb30f66ed02777161019664838c9405f31b1aaf4")
    .then((res) => res.json())
    .then((data) => {
        setEmojis(data)
    });
   },[])


  return (
    /*<div className='d-flex align-items-center justify-content-center flex-column w-100' style={{backgroundColor: newColor}}>
        <h1>Colors</h1>
        <div className="d-flex gap-3">
            <button className="btn btn-success" onClick={greenColor}>Green</button>
            <button className="btn btn-danger" onClick={redColor}>Red</button>
        </div>
    </div>*/

    <div>
        <h1>Emojipedia</h1>
        <input type="text" value={inputValue} onChange={(e) => setInputEmoji(e.target.value)}/>
        <p>Meaning :</p>

        <h2>Emoji Pad</h2>
        <ul>
            {
                emojis.map((emoji,index) => (
                    <button key={index} onClick={() => setInputValue(emoji["character"])}>{emoji["character"]}</button>
                ))
            }
        </ul>
    </div>

  )
}

export default Project