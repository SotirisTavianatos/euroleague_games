import React from "react"
import '.././App.css'

export default function Question(props) {
    return (
        <div id="answers">
            <h1>{props.question}</h1>
           <button onClick={props.clicked1}>{props.answer1}<br/></button>
           <button onClick={props.clicked2}>{props.answer2}<br/></button>
           <button onClick={props.clicked3}>{props.answer3}<br/></button>
           <button onClick={props.clicked4}>{props.answer4}<br/></button>
           <div hidden id="correctanswer">{props.correct}</div>
        </div>
    )
}