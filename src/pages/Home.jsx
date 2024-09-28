import React from 'react'
import { Link } from 'react-router-dom'



function Home({allData, setAllData}) {


    return (
        <>
            <div>
                {allData &&
                    allData.map((eachElement, i) => {
                        return (
                            <div key={i}>
                                <p>Hola</p>
                                <Link to={`details/${eachElement.imagenid}`}>
                                <img src={eachElement.img} alt={`imagen ${i}`} style={{ width: '50px' }} />
                                </Link>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default Home