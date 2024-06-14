import React from 'react'
import Image from 'next/image'

export default function Main() {
  return (
    // parent
    <div className="">
        {/* profile */}
        <div>
            <Image src="/pfp.png" width={200} height={200} className="rounded-full"/>
        </div>
    </div>
  )
}
