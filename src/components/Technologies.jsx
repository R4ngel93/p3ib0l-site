//Import
import React from 'react'

//Main
const Technologies = () => {
    return(
        <div>
            {/* Technologies */}
            <div className='tab_01'>
                <span className='level_01'>Technologies</span>
                <span className='symbol'>:&#123;</span>
            </div>

            {/* Front End */}
            <div className='tab_02'>
                <span className='level_02'>front_end</span>
                <span className='symbol'>:&#91;</span> 
                
                <div className='tab_03'>
                    <div>
                        <span className='level_03'>"React JS"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"React Hooks"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"Next JS"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"Angular"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"HTML & CSS"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"Bootstrap"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"Materialize"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"jQuery"</span>
                    </div>
                </div>

                <span className="symbol">&#93;,</span>
            </div>

            {/* Back End */}
            <div className='tab_02'>
                <span className='level_02'>back_end</span>
                <span className='symbol'>:&#91;</span> 
                
                <div className='tab_03'>
                    <div>
                        <span className='level_03'>"Node JS"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"Express JS"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"MongoDB"</span>
                    </div>
                </div>

                <span className="symbol">&#93;,</span>
            </div>

            {/* Programming languages */}
            <div className='tab_02'>
                <span className='level_02'>programming_languages</span>
                <span className='symbol'>:&#91;</span> 
                
                <div className='tab_03'>
                    <div>
                        <span className='level_03'>"JavaScript"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"Python"</span>
                    </div>
                </div>

                <span className="symbol">&#93;,</span>
            </div>

            {/* SO */}
            <div className='tab_02'>
                <span className='level_02'>operative_systems</span>
                <span className='symbol'>:&#91;</span> 
                
                <div className='tab_03'>
                    <div>
                        <span className='level_03'>"MAC OS"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"Windows 10"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"GNU/Linux"</span>
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
export default Technologies