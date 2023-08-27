import Image from 'next/image'

import {Icons} from '@/components'


const About = () => {
  return (
    <div>
    <div className="relative pt-40 gap-10 max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">
        <div className="hero__text w-80">
            <Image
                src="/images/kek.png"
                alt="Picture of the author"
                width={200}
                height={200}
            ></Image>
        </div>

        <div className="about__text  w-80" >
          <h2  className="hero__title text-2xl font-bold text-violet-600">About me</h2>
          <h3 className="text-xl font-bold  mt-2 mb-4">Fullstack-programmer with a wide skillset</h3>
          <p className="text-base">I'm a man who loves what I do. 
            At the moment, I am studying at a top-10 university in Russia on an 
            IT speciality. I have a wide range of interests, 
            I work with web technologies, 
            I am familiar with ML, maths, algorithms. 
            I took a lot of courses related to CS. 
            In teamwork I am friendly and understanding, 
            and most of all I have a great love for learning 
            and knowledge. ✅</p>
        </div>
    </div>
    <Icons/>
    </div>
  )
}

export default About