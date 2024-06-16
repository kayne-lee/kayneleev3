"use client"
import React, { useState } from 'react';
import Image from 'next/image'
// https://www.figma.com/design/r5ypuxMMvze2QzDkzsT1yD/Instagram-UI-Clone-(Community)?node-id=10-9106&m=dev

export default function Profile(
  
) {
  const [activeDiv, setActiveDiv] = useState('professional');

  const handleDivClick = (divName) => {
    setActiveDiv(divName);
  };
  return (
    <div>
      <div className="w-[935px] flex flex-row border-black">
        <div className="pl-[71px] pr-[101px]">
          <Image src="/pfp.png" width={150} height={150} className="rounded-full"/>
        </div>
        <div className="flex flex-col items-around">
          <div className="flex flex-row align-start self-stretch items-center">
            <div className="font-sans text-black text-[28px] font-light">kaynelee_</div>
            <div className="w-[90px] h-[30px] bg-[#0095F6] ml-[20px] flex items-center justify-center rounded-[4px] text-white">Follow</div>
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
            <div className="font-sans text-black text-[16px] font-semibold">Kayne Lee</div>
            <div className="font-sans text-black text-[16px] font-normal">Computer Engineering Student @ Queen's University</div>
          </div>
        </div>
      </div>
      <div className=" mt-[44px] w-[935px] h-[1px] bg-[#DBDBDB]"/>
      <div className="flex flex-row gap-[60px] justify-center">
        <div
          className={`flex flex-row h-[18px] align-center justify-center items-center cursor-pointer ${activeDiv === 'professional' ? 'border-t-2 border-black' : ''}`}
          onClick={() => handleDivClick('professional')}
        >
          <div className=" mt-[17px] flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_108_2503)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 0.375H0.75C0.55 0.375 0.375 0.55 0.375 0.75V11.25C0.375 11.45 0.55 11.625 0.75 11.625H11.25C11.45 11.625 11.625 11.45 11.625 11.25V0.75C11.625 0.55 11.45 0.375 11.25 0.375ZM1.125 1.125H3.875V3.875H1.125V1.125ZM1.125 4.625H3.875V7.375H1.125V4.625ZM3.875 10.875H1.125V8.125H3.875V10.875ZM7.375 10.875H4.625V8.125H7.375V10.875ZM7.375 7.375H4.625V4.625H7.375V7.375ZM7.375 3.875H4.625V1.125H7.375V3.875ZM10.875 10.875H8.125V8.125H10.875V10.875ZM10.875 7.375H8.125V4.625H10.875V7.375ZM10.875 3.875H8.125V1.125H10.875V3.875Z" fill="#262626"/>
              </g>
              <defs>
                <clipPath id="clip0_108_2503">
                  <rect width="12" height="12" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div className="ml-[3px] text-[12px] font-normal text-[#262626]">PROFESSIONAL</div>
          </div>

        </div>
        <div
          className={`flex flex-row h-[18px] align-center justify-center items-center cursor-pointer ${activeDiv === 'extraCurriculars' ? 'border-t-2 border-black' : ''}`}
          onClick={() => handleDivClick('extraCurriculars')}
        >
          <div className="mt-[17px] flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_108_2541)">
                <path d="M10.375 1.375H7.6C7.475 1.375 7.35 1.325 7.25 1.225L6.25 0.225003C6.1 0.0750031 5.875 0.0750031 5.725 0.225003L4.725 1.225C4.625 1.325 4.5 1.375 4.375 1.375H1.625C0.8 1.375 0.125 2.05 0.125 2.875V10.375C0.125 11.2 0.8 11.875 1.625 11.875H10.375C11.2 11.875 11.875 11.2 11.875 10.375V2.875C11.875 2.05 11.2 1.375 10.375 1.375ZM3.025 11.125C2.875 11.125 2.75 10.975 2.775 10.825C2.95 10.025 3.65 9.425 4.475 9.425H7.475C8.325 9.425 9.025 10.025 9.175 10.825C9.2 10.975 9.075 11.125 8.925 11.125H3.025ZM11.125 10.375C11.125 10.8 10.8 11.125 10.375 11.125H10.225C10.1 11.125 10 11.025 9.975 10.9C9.825 9.65 8.775 8.675 7.5 8.675H4.5C3.225 8.675 2.15 9.65 2.025 10.9C2 11.025 1.9 11.125 1.775 11.125H1.625C1.2 11.125 0.875 10.8 0.875 10.375V2.875C0.875 2.45 1.2 2.125 1.625 2.125H4.4C4.725 2.125 5.05 2 5.275 1.75L6 1.025L6.725 1.75C6.95 1.975 7.275 2.125 7.6 2.125H10.375C10.8 2.125 11.125 2.45 11.125 2.875V10.375ZM6 3.125C4.675 3.125 3.6 4.2 3.6 5.525C3.6 6.85 4.675 7.925 6 7.925C7.325 7.925 8.4 6.85 8.4 5.525C8.4 4.2 7.325 3.125 6 3.125ZM6 7.15C5.1 7.15 4.35 6.425 4.35 5.5C4.35 4.6 5.075 3.85 6 3.85C6.925 3.85 7.65 4.575 7.65 5.5C7.65 6.4 6.9 7.15 6 7.15Z" fill="#8E8E8E"/>
              </g>
              <defs>
                <clipPath id="clip0_108_2541">
                  <rect width="12" height="12" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div className="ml-[3px] text-[12px] font-normal text-[#262626]">EXTRA-CURRICULARS</div>
          </div>
          
        </div>
      </div>

      {activeDiv === 'professional' && (
        <div>
          <p>Professional content goes here.</p>
          <img src="professional-image.jpg" alt="Professional" />
        </div>
      )}
      {activeDiv === 'extraCurriculars' && (
        <div>
          {/* Add your images and text for EXTRA-CURRICULARS here */}
          <p>Extra-curricular content goes here.</p>
          <img src="extra-curricular-image.jpg" alt="Extra-curricular" />
        </div>
      )}
    </div>
    
  )
}
