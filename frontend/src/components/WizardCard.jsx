import React from "react";
import { Link } from "react-router-dom";

const WizardCard = ({wizard}) => {
    return (
        <Link to={`/mago/${wizard.id}`}>
        <div className="WizardCard">
                <img src={wizard.imagen} alt={wizard.nombre} />
                <div className="Wizard-info">
                <h3>{wizard.nombre}</h3>
                <h3>{wizard.edad}</h3>
                <h3>{wizard.status}</h3>
                </div>
        </div>
        </Link>
    )
}

export default WizardCard;