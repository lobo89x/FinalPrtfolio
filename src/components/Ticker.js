import React from 'react';


//class Ticker extends PureComponenet {
function Ticker() {
    //render(){
        return (
        <div>
            <h1>Alexander Hillman Lee III</h1>
            <marquee 
            behavior='scroll' 
            direction='left' 
            scrollamount='40'
            style={{
                fontSize:'calc(48px + 2vmin)'
            }}>
              Full Stack Dev &bull; Services/Solutions Engineer
            </marquee>
        </div>
        )
    //}
}

export default Ticker