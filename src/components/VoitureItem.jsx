import React, { useState } from 'react';


function VoitureItem(props) {

    // 6- Changer couleur de filter de l'image par CSS3
    const filtres = ['none', 'grayscale(100%)', 'sepia(100%)', 'blur(5px)', 'contrast(200%)'];
    const [filtreIndex, setFiltreIndex] = useState(0);

    const handleChangeColor = () => {
        setFiltreIndex((prevIndex) => (prevIndex + 1) % filtres.length);
    };

    return (
        <div className="card">
            <img
                src={props.data.thumbnail}
                className="card-img-top"
                alt={props.data.marque}
                style={{ filter: filtres[filtreIndex] }}
            />
            <div className="card-body">
                <h5 className="card-title text-uppercase">{props.data.marque}</h5>
                <p className="card-text">Prix: {props.data.prixAchat}</p>
                <p className="card-text">Matricule: {props.data.matricule}</p>
                <button className="btn btn-primary" onClick={handleChangeColor}>
                    Changer Couleur
                </button>
                <button className="btn btn-danger ms-2" >Supprimer</button>
            </div>
        </div>
    );
}

export default VoitureItem;
