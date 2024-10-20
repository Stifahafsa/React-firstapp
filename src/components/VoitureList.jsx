import React from 'react';
import VoitureItem from './VoitureItem';

function VoitureList() {
    // Tableau de voitures sous forme d'objets
    const voitures = [
        {
            matricule: '1234AB',
            marque: 'Mercedes',
            thumbnail: './images/V1.jpeg',
            carburant: 'Essence',
            prixAchat: 100490,
        },
        {
            matricule: '5678CD',
            marque: 'Audi',
            thumbnail: './images/V2.jpeg',
            carburant: 'Diesel',
            prixAchat: 200000,
        },
        {
            matricule: '9101EF',
            marque: 'BMW',
            thumbnail: './images/V3.jpeg',
            carburant: 'Essence',
            prixAchat: 127560,
        },
        {
            matricule: '1121GH',
            marque: 'Chevrolet',
            thumbnail: './images/V4.jpeg',
            carburant: 'Essence',
            prixAchat: 300000,
        },
    ];

    // 2-c Calculer le nombre total de voitures
    const totalVoitures = voitures.length;

    // 2-d Calculer le nombre de voitures par marque
    const voituresParMarque = [];

    voitures.forEach((voiture) => {
        const index = voituresParMarque.findIndex(entry => entry[0] === voiture.marque);
        if (index !== -1) {
            
            voituresParMarque[index][1] += 1;
        } else {
            
            voituresParMarque.push([voiture.marque, 1]);
        }
    });

    // 2-e Trouver la voiture ayant le prix maximal
    const voitureMax = voitures.reduce((prev, current) => (prev.prixAchat > current.prixAchat) ? prev : current);

    return (
        <div className="container mt-2">
            <h2 className="text-center">Liste des Voitures</h2>
            <div className="row justify-content-center">
                {voitures.map((voiture) => (
                    <div className="col-md-3 mb-4" key={voiture.matricule}>
                        <VoitureItem data={voiture} />
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <h5>Total des voitures: {totalVoitures}</h5>
                <h5>Nombre de voitures par marque:</h5>
                <ul>
                    {voituresParMarque.map(([marque, count]) => (
                        <li key={marque}>{marque}: {count}</li>
                    ))}
                </ul>
                <h5>Voiture la plus chère: {voitureMax.marque} ({voitureMax.prixAchat.toLocaleString()} DH)</h5>
            </div>
        </div>
    );
}

export default VoitureList;
