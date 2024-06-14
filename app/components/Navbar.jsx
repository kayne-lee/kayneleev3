import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="h-[53px] w-full justify-center align-center flex flex-row mb-[40px]">
      <div className="w-[935px] h-[53px] flex justify-between align-center">
        <Image src='/logo.png' width={103} height={29}/>
        <div className="flex flex-row text-black gap-2">
          <p>linkedin</p>
          <p>github</p>
          <p>email</p>
        </div>
      </div>
    </div>
  )
}
