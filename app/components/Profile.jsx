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
      {/* stories */}
      <div className="flex flex-row ml-[48px] mt-[44px] gap-[40px]">
        <div className=" flex flex-row items-center">
          <div className="px-[23px] py-[11px] flex flex-col">
          <Image src="/queens.png" width={67} height={67} className="rounded-full"/>
            <div className="  pt-[15px] flex items-center justify-center">
              <Image src="/book.png" width={20} height={20} className=""/>
            </div>
          </div>
        </div>
        <div className=" flex flex-row items-center">
          <div className="px-[23px] py-[11px] flex flex-col">
            <Image src="/tech.png" width={67} height={67} className="rounded-full"/>
            <div className="  pt-[15px] flex items-center justify-center">
              <Image src="/computer.webp" width={20} height={20} className=""/>
            </div>
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
        <div
          className={`flex flex-row h-[18px] align-center justify-center items-center cursor-pointer ${activeDiv === 'projects' ? 'border-t-2 border-black' : ''}`}
          onClick={() => handleDivClick('projects')}
        >
          <div className="mt-[17px] flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_113_2512)">
                <path d="M6 12H5.925L0.3 10.75C0.125 10.7 0 10.55 0 10.375V0.374991C0 0.249991 0.05 0.149991 0.15 0.0749908C0.25 -9.15676e-06 0.35 -0.0250092 0.45 -9.1549e-06L6.075 1.24999C6.25 1.29999 6.375 1.44999 6.375 1.62499V11.625C6.375 11.75 6.325 11.85 6.225 11.925C6.175 11.975 6.075 12 6 12ZM0.75 10.075L5.625 11.15V1.92499L0.75 0.849991V10.075Z" fill="#8E8E8E"/>
                <path d="M6 12C5.925 12 5.825 11.975 5.775 11.925C5.675 11.85 5.625 11.75 5.625 11.625V1.62499C5.625 1.44999 5.75 1.29999 5.925 1.24999L11.55 -9.1549e-06C11.65 -0.0250092 11.775 -9.15676e-06 11.875 0.0749908C11.95 0.149991 12 0.249991 12 0.374991V10.375C12 10.55 11.875 10.7 11.7 10.75L6.075 12H6ZM6.375 1.92499V11.15L11.25 10.075V0.849991L6.375 1.92499Z" fill="#8E8E8E"/>
                <path d="M7.625 9.70001C7.45 9.70001 7.3 9.57501 7.25 9.40001C7.2 9.20001 7.325 9.00001 7.525 8.95001L9.9 8.42501C10.1 8.37501 10.3 8.50001 10.35 8.70001C10.4 8.90001 10.275 9.10001 10.075 9.15001L7.7 9.67501C7.675 9.70001 7.65 9.70001 7.625 9.70001ZM4.375 9.70001H4.3L1.925 9.17501C1.725 9.12501 1.6 8.92501 1.65 8.72501C1.7 8.52501 1.9 8.40001 2.1 8.45001L4.475 8.97501C4.675 9.02501 4.8 9.22501 4.75 9.42501C4.7 9.57501 4.55 9.70001 4.375 9.70001ZM4.375 6.20001H4.3L1.925 5.67501C1.75 5.62501 1.625 5.47501 1.625 5.30001V2.67501C1.625 2.55001 1.675 2.45001 1.775 2.37501C1.875 2.30001 1.975 2.27501 2.1 2.30001L4.475 2.82501C4.65 2.87501 4.775 3.02501 4.775 3.20001V5.82501C4.775 5.95001 4.725 6.05001 4.625 6.12501C4.55 6.17501 4.45 6.20001 4.375 6.20001ZM2.375 5.00001L4 5.35001V3.50001L2.375 3.15001V5.00001ZM7.625 6.20001C7.55 6.20001 7.45 6.17501 7.4 6.12501C7.3 6.05001 7.25 5.95001 7.25 5.82501V3.20001C7.25 3.02501 7.375 2.87501 7.55 2.82501L9.925 2.30001C10.025 2.27501 10.15 2.30001 10.25 2.37501C10.35 2.45001 10.4 2.55001 10.4 2.67501V5.30001C10.4 5.47501 10.275 5.62501 10.1 5.67501L7.725 6.20001H7.625ZM8 3.50001V5.35001L9.625 5.00001V3.15001L8 3.50001ZM7.625 8.20001C7.45 8.20001 7.3 8.07501 7.25 7.90001C7.2 7.70001 7.325 7.50001 7.525 7.45001L9.9 6.92501C10.1 6.87501 10.3 7.00001 10.35 7.20001C10.4 7.40001 10.275 7.60001 10.075 7.65001L7.7 8.17501C7.675 8.20001 7.65 8.20001 7.625 8.20001Z" fill="#8E8E8E"/>
              </g>
              <defs>
                <clipPath id="clip0_113_2512">
                  <rect width="12" height="12" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div className="ml-[3px] text-[12px] font-normal text-[#262626]">PROJECTS</div>
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
      {activeDiv === 'projects' && (
        <div>
          {/* Add your images and text for EXTRA-CURRICULARS here */}
          <p>Projects</p>
          <img src="extra-curricular-image.jpg" alt="Extra-curricular" />
        </div>
      )}
    </div>
    
  )
}
