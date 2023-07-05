import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY}
  ${styles.flexCenter} flex-col relative`}>

    <div className="absolute z-[0] blue__gradient rounded-full
    w-[60%] h-[60%] -right-[50%]"/>

    <div className="w-full flex justify-between md:flex-row
    flex-col sm:mb-16 mb-6 relative z-[1] items-center">
      <h1 className={`${styles.heading2}`}>Find a better card deal
        <br className='sm:block hidden' />
        in few easy steps.</h1>

        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your
          business anywhere on the planet.
          </p>
        </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center
    w-full feeback-container z-[1]">
      {feedback.map((card, index) => (
        <FeedbackCard key={card.id} {...card}/>
      ))}
    </div>
  </section>
)

export default Testimonials