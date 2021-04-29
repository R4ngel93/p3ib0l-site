//Import
import React from 'react'

//Main
const Contact = () => {
    return(
        <div>
            {/* Contact */}
            <div className='tab_01'>
                <span className='level_01'>Contact</span>
                <span className='symbol'>:&#123;</span>
            </div>    

            {/* Name */}
            <div className='tab_02'>
                <span className='level_02'>name</span>
                <span className='symbol'>: </span> 
                <span className='level_03'>"Pablo Antonio Ramirez Vázquez"</span>
                <span className='symbol'>,</span>
            </div>

            {/* Email */}
            <div className='tab_02'>
                <span className='level_02'>email</span>
                <span className='symbol'>: </span> 
                <span className='level_03'>"ramirezvazquezp@gmail.com"</span>
                <span className="symbol">,</span>
            </div>

            {/* Phone */}
            <div className='tab_02'>
                <span className='level_02'>phone</span>
                <span className='symbol'>: </span> 
                <span className='level_03'>"55 3442 8542"</span>
            </div>

            <div className='tab_01'>
                <span className='symbol'>&#125;,</span>
            </div>   
        </div>
    );
}

//Export
export default Contact