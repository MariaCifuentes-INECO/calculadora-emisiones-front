import {useEffect, useState} from "react";

export const useCompleteNetwork = () => {

    const [completeNetwork, setCompleteNetwork] = useState([]);

    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de la red completa
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        fetch('http://localhost:8088/redCompleta', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCompleteNetwork(data);
            });
    }, []);

    return completeNetwork;
}