import React, { FC } from 'react'


interface ButtonProps {
  text: string
}


const button:FC <ButtonProps> = ({text}) => {
  return (
    <div>
         <button className=" rounded-[20px] px-6 py-2  text-white bg-[#5E37EC]">
          {text}
         </button>
    </div>
  )
}

export default button