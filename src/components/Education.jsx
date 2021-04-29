//Import
import React from 'react'

//Main
const Education = () => {
    return(
        <div>
            {/* Education */}
            <div className='tab_01'>
                <span className='level_01'>Education</span>
                <span className='symbol'>:&#123;</span>
            </div>

            {/* IPN */}
            <div className='tab_02'>
                <span className='level_02'>IPN</span>
                <span className='symbol'>:&#91;</span> 
                
                <div className='tab_03'>
                    <div>
                        <span className='level_03'>"Ingenieria en sistemas computacionales"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"Técnico en computacón"</span>
                    </div>
                </div>

                <span className="symbol">&#93;</span>
            </div>

            <div className='tab_01'>
                <span className='symbol'>&#125;,</span>
            </div>   
        </div>
    );
}

//Export
export default Education