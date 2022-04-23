import "./Selection.css";
import React, {useState} from "react";
import imgs from "./Images.jsx";
import Slider from '@mui/material/Slider';

function Selection(){
    
    const [category, setCategory] = useState("");
    const [picIndex, setIndex] = useState();

    const [difficulty, setDifficulty] = useState("");
    const labels = []

    function clicked(value, index){
        setCategory(value);
        setIndex(index);
        console.log(index); 
    }

    return(<div>

        <h2>Category</h2>
    
        {/* pass value as a parameter for div-onClick */}
        {imgs.map((item,index) => (
            <div className="images" key={index} onClick={() => clicked(item.name, index)} value={item.name}>
        <img className={index === picIndex ? "imgSelected" : "img"} src={item.src} width="200" height="150"/>
            <div className="overlay">
                <p className="desc"> {item.name} </p>
            </div>
        </div>
        ))}


        <div className="selection2">
            <div className="difficulty">
                <h2>Difficulty</h2>
                
                <Slider className="slider" aria-label="Difficulty"
                defaultValue={30}
                // getAriaValueText="random"
                valueLabelDisplay="auto"
                step={10}
                marks min={10} max={30}
                 />
                
            </div>
            <div className = "Qty">
                <h2>No. of Questions</h2>
            </div>
        </div>

    </div>)
}

export default Selection;