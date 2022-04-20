import React, { useState } from "react";
import "./Questions.css"
function Questions(){

    const [question, setQuestion] = useState();
    const [amount, setAmount] = useState(5);
    let data, url = `https://opentdb.com/api.php?amount=${amount}`;
    

    async function getData(){
        let response = await fetch(url);
        data = await response.json();
        console.log(data.results); 
    }
    getData();

    return (
    <div className="Questions">
     
    </div>
    )

}

export default Questions;