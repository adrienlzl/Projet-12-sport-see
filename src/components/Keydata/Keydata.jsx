import React from 'react';
import './Keydata.scss'
import caloriesIcon from "./calories-icon.png"
import carbsIcon from "./carbs-icon.png"
import fatIcon from "./fat-icon.png"
import proteinIcon from "./protein-icon.png"

function KeyData(props) {
    return (
        <div className="key-data-component">
            <div className="key-data-contenaire">
                <img className="key-data-icon" src={caloriesIcon} alt="pictogramme calories"/>
                <div className="key-data-datas">
                    <p className="key-data-results">{props.data.calorieCount}Kcal</p>
                    <p className="key-data-legends">Calories</p>
                </div>
            </div>
            <div className="key-data-contenaire">
                <img className="key-data-icon" src={proteinIcon} alt="pictogramme proteines"/>
                <div className="key-data-datas">
                    <p className="key-data-results">{props.data.proteinCount}g</p>
                    <p className="key-data-legends">Proteines</p>
                </div>
            </div>
            <div className="key-data-contenaire">
                <img className="key-data-icon" src={carbsIcon } alt="pictogramme pomme"/>
                <div className="key-data-datas">
                    <p className="key-data-results">{props.data.carbohydrateCount}g</p>
                    <p className="key-data-legends">Glucides</p>
                </div>
            </div>
            <div className="key-data-contenaire">
                <img className="key-data-icon" src={fatIcon} alt="pictogramme burger"/>
                <div className="key-data-datas">
                    <p className="key-data-results">{props.data.lipidCount}g</p>
                    <p className="key-data-legends">Lipides</p>
                </div>
            </div>
        </div>

    )
}
export default KeyData