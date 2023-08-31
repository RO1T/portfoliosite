import Image from 'next/image'

import {Icons} from '@/components'


const About = () => {
  return (
    <div id="about">
    <div className="relative pt-40 gap-10 max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">
      <div className="relative w-full max-w-lg">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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