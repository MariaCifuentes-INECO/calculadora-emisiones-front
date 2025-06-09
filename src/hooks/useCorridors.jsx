import {useEffect, useState} from "react";

export const useCorridors = () => {

    const [corridors, setCorridors] = useState([]);

    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de la red completa
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch('http://localhost:8088/corredor', {
        fetch(`/api/corredor`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCorridors(data);
            });
    }, []);

    return [corridors, setCorridors];
}