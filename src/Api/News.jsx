import axios from 'axios'
import React from 'react'

export const getCovidAPI = async () => {
    return await axios.get('https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True', {

        headers: {
            'X-RapidAPI-Key': 'd43a122a3fmsh8932d0f80d906a8p110115jsn5a0b6503dac2',
            'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
        }
    }).then(response => response.json()
    ).then(data =>  {
        return data
    }
    ).catch(err => console.error(err))

} 