import {createContext, useState, useEffect } from "react";
import axios from 'axios'

 
//componente contexto => se encarga de compartir la data por toda la app
 const DataContext = createContext()


//component envoltorio => se encarga de almacenar la data a compartir
function DataWrapper({children}) {
 
    const [allData, setAllData] = useState(null)
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        getData();
      }, []);
    
      const getData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/imagenes`);
          setAllData(response.data);
        } catch (error) {
          console.log(error);
        }
      };

    /*const passedContext = {
        allData,
        setAllData
    }*/
    
    return (
        <DataContext.Provider value={{allData, filteredData, setFilteredData}}>
        {children}
        </DataContext.Provider>
    )
   
}

export{
    DataContext,
    DataWrapper
}