'use client'
import { useState } from 'react'

const Body = () => {
    const [data, setData] = useState(null)

    const getData = async () => {
        try {
            const response = await fetch('api/hello', {
                method: 'GET'
            });
            const data = await response.json();
            setData(data.body);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    getData();
  return (
    <div>Body: {data}</div>
  )
}

export default Body