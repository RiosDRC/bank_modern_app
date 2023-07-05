import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { socialMedia, footerLinks } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}
  flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt="HooBank" className='w-[266px] h-[72px] object-contain'/>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}
        >A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between 
      flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, index)=>(
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          key={index}>
            <h4 className='text-white font-poppins leading-[27px] text-[18px] font-medium'>{footerLink.title}</h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li className={`text-dimWhite font-poppins font-normal text-[16px]
                leading-[24px] hover:text-secondary cursor-pointer mt-4`}
                key={index}>{link.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center
    md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="text-dimWhite font-poppins leading-[27px]
      text-[18px] text-center">
        <span className='font-mono'>Copyright</span>
        <span className='mx-4 font-extrabold text-[16px]'>©</span>
        2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <div key={social.id}>
            <a href={social.link} key={social.id}>          
              <img src={social.icon}
              alt="social-icon"
              
              className={` w-[21px] h-[21px] object-contain cursor-pointer
              ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}
              ${styles.flexCenter}`}/>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
)


export default Footer