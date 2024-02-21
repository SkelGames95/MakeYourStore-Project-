import { useState, useEffect } from 'react';

export function useAuth() {
    // Inizializza lo stato del token con il valore dal localStorage, se presente
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Funzione per verificare se l'utente è loggato
    function isLoggedIn() {
        // Verifica se il token è presente
        return !!token;
    }

    // Effetto per aggiornare il token quando cambia nel localStorage
    useEffect(() => {
        const tokenFromStorage = localStorage.getItem('token');
        setToken(tokenFromStorage);
    }, [token]); // Aggiorna il token quando cambia

    return { token, isLoggedIn };
}
