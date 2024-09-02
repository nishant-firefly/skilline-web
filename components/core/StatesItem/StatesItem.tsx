import Image from 'next/image';
import React from 'react'

type StatesItem = {
    icon: string;
    count: string;
    label: string;
}

export const StatesItem = ({icon, label, count}: StatesItem) => {
  return (
    <div className='text-center shadow-[rgba(149,157,165,0.2)_0px_8px_24px] p-5 rounded-[20px] bg-white'>
        <Image src={icon} alt={label} width={200} height={200} className='w-[20%] m-auto'/>
        <div>
        <h2 className='text-[35px] font-semibold'>{count}</h2>
        <h3 className='text-balance text-lg'>{label}</h3>
        </div>
    </div>
  )
}
