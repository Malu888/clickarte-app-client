import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Home() {
    const [allData, setAllData] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        try {
            const response = await axios.get(`http://localhost:5000/imagenes`);
            console.log(response)
            setAllData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    if (allData === null) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div>
                {allData &&
                    allData.map((eachElement, i) => {
                        return (
                            <div key={i}>
                                <p>Hola</p>
                                <img src={eachElement.img} alt={`imagen ${i}`} style={{width: '50px'}}/>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default Home