import "./Selection.css";
import React, {useState} from "react";
import imgs from "./Images.jsx";

function Selection(){
    
    const [category, setCategory] = useState("");
    const [picIndex, setIndex] = useState();

    function clicked(value, index){
        setCategory(value);
        setIndex(index);
        console.log(index); 
    }

    return(<div>
    
        {/* pass value as a parameter for div-onClick */}
        {imgs.map((item,index) => (
            <div className="images" key={index} onClick={() => clicked(item.name, index)} value={item.name}>
        <img className={index === picIndex ? "imgSelected" : "img"} src={item.src} width="200" height="150"/>
            <div className="overlay">
                <p className="desc"> {item.name} </p>
            </div>
        </div>
        ))}

        <div>
            <p>You selected {category}</p>
        </div>
        

    </div>)
}

export default Selection;