import React from 'react';
import './Firstname.scss'

function Firstname(props) {


    return (
        <div className="Firstname">
            <div className="Hello-firstname">
                <p className="Hello">Bonjour</p>
                <p className="red-firstname">{props.data}</p>
            </div>
            <div className="Daily-msg">
                <p >Félicitation : Vous avez explosé vos objectifs hier 👏</p>

            </div>

        </div>
    )
}
export default Firstname