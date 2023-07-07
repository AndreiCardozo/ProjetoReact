import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import motosData from '../../assets/motos/motos.json';

export function Moto() {
    const [motos, setMotos] = useState([]);

    useEffect(() => {
        setMotos(motosData.motos);
    }, []);

    return (
        <div>
            <Header />

            <div>
                {motos.map((moto) => (
                    <div key={moto.NomeMoto}>
                        <h2>{moto.NomeMoto}</h2>
                        <p>Preço: R${moto.PrecoMoto}</p>
                        <p>{moto.DescMoto}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
