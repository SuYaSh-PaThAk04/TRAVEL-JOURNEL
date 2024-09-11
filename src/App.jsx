import React from 'react';
import ReactDOM from 'react-dom/client';
import Dataj from './data'
import Nav from './nav'
import Cards from './templete'
import Foot from './footer'
export default function Okay(){
    
    const Hero = Dataj.map(item=>{
        return(
            <Cards
            key={item.id}
            img={item.imageUrl}
            Title={item.title}
            location={item.location}
            startd={item.startDate}
            endd={item.endDate}
            description={item.description}
            />
        )
    })
    
    
    return(
        
        <>
        <Nav />
        {Hero}
        <Foot />
        </>
        
    )
    
}