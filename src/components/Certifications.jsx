//Import
import React from 'react'

//Main
const Certifications = () => {
    return(
        <div>
            
            {/* Certifications */}
            <div className='tab_01'>
                <span className='level_01'>Certifications</span>
                <span className='symbol'>:&#123;</span>
            </div>

            {/* Bedu */}
            <div className='tab_02'>
                <span className='level_02'>BeduTech_Platzi</span>
                <span className='symbol'>: </span> 
                <a className='level_03' href='http://peibolramirez.com/imgs/bedu.png' target='_blank' rel="noreferrer">"FullStack Javascript"</a>
            </div>

            <div className='tab_01'>
                <span className='symbol'>&#125;,</span>
            </div>  

        </div>
    );
}

//Export
export default Certifications
