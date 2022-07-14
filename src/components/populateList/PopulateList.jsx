import React from "react";
import Fred from './flint-fred.jpg';
import Wilma from './flint-wilma.jpg';
import Barney from './flint-barney.jpg';
import Betty from './flint-betty.jpg';
import Pebbles from './flint-pebbles.jpg';
import Bambam from './flint-bambam.jpg';

function PopulateList() {
    //const flintstones = ["Fred","Wilma","Barney","Betty","Pebbles","Bambam"];
    const imgStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "50%"
    }
    const names = [
        {image: Fred,
         character: "Fred",
         charLast: "Flintstone",
         occupation:"Brontasaurus excavator",
        },
        {image: Wilma,
         character: "Wilma",
         charLast: "Flintstone",
         occupation:"Spendaholic"
        },
        {image: Barney,
         character:"Barney",
         charLast: "Rubble",
         occupation:"Dino Minor"
        },
        {image: Betty,
        character:"Betty",
        charLast: "Rubble",
         occupation:"Personal Assistant"
        },
        {image: Pebbles,
        character:"Pebbles",
        charLast: "Flintstone"
        },
        {image: Bambam,
         character:"BamBam",
         charLast: "Flintstone"
        }
    ]

    let populatedItems = names.map((name, index) =>
                    <li>
                        <img style={imgStyle} id={name.character+"-"+index} src={name.image} alt="missing image" />
                        Name : {name.character + " " + name.charLast}
                        <br />
                        Occupation : {!name.occupation ? "Too young to work" : name.occupation}
                    </li>
    )

    return (
        <div>
        <h3>Meet the Flintstones!</h3>
        <ol>
            {populatedItems}
        </ol>
        </div>
    );
}

export default PopulateList;