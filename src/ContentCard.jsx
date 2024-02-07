import React from 'react'

const ContentCard = (props) => {
  return (
    <div className='context-card m-10 w-80'>
        <img src={props.imgUrl} alt="" />
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
    </div>
  )
}

export default ContentCard