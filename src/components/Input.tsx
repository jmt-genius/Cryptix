import React from 'react'

const Input = ({type,placeholder,otherClasses}:{type:string,placeholder:string,otherClasses?:string}) => {
  return (
    <div>
        <input type={type} className={`${otherClasses} p-2 rounded-md border border-black`} placeholder={placeholder} />
    </div>
  )
}

export default Input