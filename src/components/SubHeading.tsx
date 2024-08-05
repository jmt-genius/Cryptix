import React from 'react'

const Heading = ({text}:{text:string}) => {
  return (
    <div className='font-semibold text-2xl'>
        {text}
    </div>
  )
}

export default Heading