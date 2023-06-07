import React from 'react'

const SkillCard = (x) => {
  return (
    <div className='card'>
        <div><img src={x.thumbnail} alt="" /></div>
        <p>{x.title}</p>
    </div>
  )
}

export default SkillCard