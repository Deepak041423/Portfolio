import React from 'react'
import "./floatingDiv.css"
const FloatingDiv = (i) => {
  return (
    <div>
        <div className="floatingDiv" id='fd'>
          
            <img src={i.image} id="crown" alt="" />
            <div className='di'>
                {i.txt1}
                <br />
                {i.txt2}
            </div>
        </div>
    </div>
  )
}

export default FloatingDiv