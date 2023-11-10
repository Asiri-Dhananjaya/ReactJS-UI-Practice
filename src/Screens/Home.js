import React from "react";
import './Styles/Home.css';
import './Styles/Card.css';
import './Styles/AddButton.css';
import './Styles/First_Button.css';

export default function Home(){
    return(
       <div className="centered-div">
            <div class="card">
                <div class="card__content">
                    <div class="coolinput">
                        <label for="input" class="text">Enter values:</label>
                        <input type="text" placeholder="Write here..." name="input" class="input" />
                    </div>
                    <div class="button-box">
                        <button className="a_button">
                               +
                        </button> 
                    </div>   
                </div>
                    <div class="button-box-2">
                        <button className="f_button">
                                Show Items
                        </button> 
                    </div>  
            </div> 
                   
       </div>
    )
}

