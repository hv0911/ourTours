import React from 'react';
import Tour from './Tour'

export default function Tours({tours,removeTour}){
    return(
        <section className='container'>
            <h1 id='heading'>Our Tours</h1> 
          <div id='underline'></div>
          <div>
              {
                tours.map( (tour) => { return <Tour key={tour.id} {...tour} removeTour={removeTour} />})
              }
          </div>
        </section>
    )
}