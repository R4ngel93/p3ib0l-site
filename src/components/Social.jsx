//Import
import React from 'react'

//Main
const Social = () => {
    return(
        <div>
            {/* Social */}
            <div className='tab_01'>
                <span className='level_01'>Social</span>
                <span className='symbol'>:&#123;</span>
            </div>

            {/* Twitter */}
            <div className='tab_02'>
                <span className='level_02'>twitter</span>
                <span className='symbol'>: </span> 
                <a className='level_03' href='https://twitter.com/PabloRa54115997' target='blank_' >"@PabloRa54115997"</a>
                <span className='symbol'>,</span>
            </div>

            {/* Github */}
            <div className='tab_02'>
                <span className='level_02'>github</span>
                <span className='symbol'>: </span> 
                <a className='level_03' href='https://github.com/PeibolRam' target='blank_' >"PeibolRam"</a>
            </div>

            <div className='tab_01'>
                <span className='symbol'>&#125;</span>
            </div>  

        </div>
    );
}

//Export
export default Social