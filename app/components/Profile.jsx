import React from 'react'
import Image from 'next/image'
// https://www.figma.com/design/r5ypuxMMvze2QzDkzsT1yD/Instagram-UI-Clone-(Community)?node-id=10-9106&m=dev

export default function Profile() {
  return (
    <div className="w-[935px] flex flex-row">
      <div className="pl-[71px] pr-[101px]">
        <Image src="/pfp.png" width={150} height={150} className="rounded-full"/>
      </div>
      <div className="flex flex-col items-around">
        <div className="flex flex-row align-start self-stretch items-center">
          <div className="font-sans text-black text-[28px] font-light">kaynelee_</div>
          <div className="w-[90px] h-[30px] bg-[#0095F6] ml-[20px] flex items-center justify-center rounded-[4px]">Follow</div>
          <div className="h-[24px] w-[24px] ml-[13px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#262626"/>
              <path d="M6.5 13.5C7.32843 13.5 8 12.8284 8 12C8 11.1716 7.32843 10.5 6.5 10.5C5.67157 10.5 5 11.1716 5 12C5 12.8284 5.67157 13.5 6.5 13.5Z" fill="#262626"/>
              <path d="M17.5 13.5C18.3284 13.5 19 12.8284 19 12C19 11.1716 18.3284 10.5 17.5 10.5C16.6716 10.5 16 11.1716 16 12C16 12.8284 16.6716 13.5 17.5 13.5Z" fill="#262626"/>
            </svg>
          </div>
        </div>
        <div className="mt-[20px] flex flex-row align-start items-center">
          <div className="font-sans text-black text-[16px] font-semibold">12</div>
          <div className="font-sans text-black text-[16px] w-[43px] text-right font-normal">  posts</div>
          <div className="font-sans text-black text-[16px] font-semibold ml-[40px]">4M</div>
          <div className="font-sans text-black text-[16px] w-[69px] text-right font-normal"> followers</div>
          <div className="font-sans text-black text-[16px] font-semibold ml-[40px]">11</div>
          <div className="font-sans text-black text-[16px] w-[70px] text-right font-normal"> following</div>
        </div>
        <div className="mt-[20px]">
          <div className="font-sans text-black text-[16px] font-semibold ml-[40px]">hello</div>
        </div>
      </div>
    </div>
  )
}
