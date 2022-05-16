import React from 'react';

export default function Tour({id,name,image,info,price,removeTour}){

   const [readMore,setReadmore] = React.useState(false)
    
    return(
        <section className='section'>

            <img src={image} alt={name} />
            <footer>
               <div className='tour-info'>
              <h4>{name}</h4>
              <h4>${price}</h4>
             
               </div>
               <div className='info-box'>
                 {readMore ? info : info.slice(0,250)} 
                <button id='Rd_btn' onClick={()=>setReadmore(!readMore)}>{readMore ? ' ReadLess':' ...ReadMore'}</button>
               </div>
                 <button id='Del_btn' onClick={()=>removeTour(id)}>Delete Item</  button>
            </footer>
        </section>

    )
}