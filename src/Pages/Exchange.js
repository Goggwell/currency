import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import axios from 'axios'


const Exchange = (props, context) => {
    const [loading, setLoading] = useState(false);
    const [currencies, setCurrencies] = useState([]);
    const [user, setUser] = useState({
        username: 'nik',
        currentCurrencyIso: 'USD',
        currentAmount: 50.00,
        currentCurrency: {}
    });
    const [targetIso, setTargetIso] = useState('AUD');
    const [targetAmount, setTargetAmount] = useState(0.00);
    const [countries, setCountries] = useState([]);

    const sendQuery = (query, variables) => {
        return axios.post('https://api.everbase.co/graphql?apikey=' + process.env.EVERBASE_API_KEY, {
            query
        });
    }

    useEffect(() => {
        setLoading(true);

        let c = sendQuery()
    }, []);

    return (
        <div>
            <h1>Hi</h1>
        </div>
    )
}

export default Exchange
