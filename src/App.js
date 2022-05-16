import React from 'react';
import Loading from './loading';
import Tours from './Tours';
import { useEffect,useState } from 'react';
const url ='https://course-api.com/react-tours-project';

const App =()=>{

const [loading,setLoading] = useState(true);
const [tours,setTours] = useState([]);

   const getdata =async()=>{
       const response = await fetch(url);
       const data = await response.json();
       console.log(data);
       setLoading(false);
       setTours(data);
       console.log(tours);
   }

   useEffect(()=>{
    getdata();
   },[])

   function removeTour(id){
      let newtour = tours.filter( tour => tour.id!==id)
       setTours(newtour)
   }
 
   if(loading){
       return(
          <main className='loading'>

              <Loading />
          </main>
         
       )
   }

    return(
    <main className='container'>
            <Tours tours={tours} removeTour={removeTour} />
    </main>
    )
}

export default App;