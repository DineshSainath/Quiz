import "./Selection.css";
import React, {useState} from "react";

function Selection(){
    
    const [category, setCategory] = useState("");

    let imgs = [
        {
            id: "1",
            name: "Film",
            src: "https://images.ctfassets.net/3s5io6mnxfqz/3qYlrsjfuRzOrGBvGW3iog/1028a32ba6d03297f9f0c6e337ade965/AdobeStock_113882591.jpeg?fm=jpg&w=900&fl=progressive" 
        },
        {
            id: "2",
            name: "Television", 
            src: "https://media.istockphoto.com/photos/an-old-tv-with-a-monochrome-picture-id1159377900?k=20&m=1159377900&s=612x612&w=0&h=UTB9D0IMHbjdoZB6dDUFs_9Q_lCGAGDKNwe2EVuRZPk="
        },
        {
            id: "3",
            name: "Mathematics", 
            src: "https://www.usnews.com/dims4/USNEWS/9b4381c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F16%2F8a%2F7f6cb88e4a4bae4b0dd576654aa1%2Fcomplexmathequation.jpg"
        },
        {
            id: "4",
            name: "Nature", 
            src: "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
        },
        
        {
            id: "5",
            name: "Computers", 
            src: "https://i.insider.com/5d77cedd6f24eb491118e643?width=750&format=jpeg&auto=webp"
        },
        {
            id: "6",
            name: "Politics", 
            src: "https://thebasilisk.org/wp-content/uploads/2021/03/frieden-1600.jpg"
        },
    ];

    function clicked(value){
        setCategory(value); 
        console.log("lavde");
    }

    return(<div>
    
        {/* pass value as a parameter for div-onClick */}
        {imgs.map((item,index) => (
            <div className="images" onClick={() => clicked(item.name)} value={item.name}>
        <img className="img" src={item.src} width="200" height="150"/>
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