import React from 'react';


//class Ticker extends PureComponenet {
function Ticker() {
    //render(){
        return (
        <div>
            {/* <h1>Alexander Hillman Lee III</h1> */}
            <marquee 
            behavior='scroll' 
            direction='left' 
            scrollamount='25'
            style={{
                fontSize:'calc(48px + 2vmin)',
                color: 'white',
                paddingTop: '2%'
            }}>
              Javascript  &bull;  Angular  &bull;  React  &bull;  HTML  &bull;  Mongo DB  &bull;  SQL  &bull;  C# 
            </marquee>
            <marquee 
            behavior='scroll' 
            direction='left' 
            scrollamount='30'
            style={{
                fontSize:'calc(18px + 2vmin)',
                color: 'white',
                paddingTop: '2%'
            }}>
              7 yrs’ exp in IT &bull; Penchant for learning new technologies and skills &bull; Graduate of Georgia Institute of Technology Full Stack Development &bull; Well rounded &bull; Team player &bull; Positive energy &bull; Creative problem solver 
            </marquee>
            <marquee 
            behavior='scroll' 
            direction='left' 
            scrollamount='18'
            style={{
                fontSize:'calc(126px + 2vmin)',
                color: 'white',
                paddingTop: '2%'
            }}>
              Full Stack Dev &bull; Services/Solutions Engineer &bull; Composition Specialist
            </marquee>
        </div>
        )
    //}
}

export default Ticker