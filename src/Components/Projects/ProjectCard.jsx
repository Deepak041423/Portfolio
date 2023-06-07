import React from 'react'

const ProjectCard = (x) => {
  return (
    
    <div className='mainproj'>
        <div className='projcard'>
            <div><img src={x.thumbnail} alt="" /></div>
            <div className="projdata">
                <p>{x.title}</p>
                <br />
                <span>{x.text}</span>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard