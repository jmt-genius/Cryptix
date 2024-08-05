import React from 'react'

const Heading = ({text}:{text:string}) => {
  return (
    <div className='font-bold text-3xl underline'>
        {text}
    </div>
  )
}

export default Heading