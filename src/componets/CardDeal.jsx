import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} mb-5`}>
        Find a better card deal <br className='sm:block hidden'/> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Arcu tortor, purus in mattis at sed integer 
        faucibus. Aliquet quis aliquet eget mauris 
        tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10"/>
    </div>
    <div className={`${layout.sectionImg} w-[100%] h-[100%]`}>
      <img src={card} alt="card" />
    </div>
  </section>
)


export default CardDeal