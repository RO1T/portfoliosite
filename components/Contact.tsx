import Image from 'next/image'

const Contact = () => {
  return (
    <div className="flex-col w-full flex justify-between items-center mt-40 gap-16 mb-40" id="contact">

        <h1 className="font-bold text-2xl text-violet-600">Contact me 📱</h1>
        <div className="w-96">        
          <p className="w-f">
            I'm currently looking for opportunities. 
            Either full time job or freelancing. 
            Send me a message if you are interested, I will get back to you as soon as possible.
        </p>
        </div>
        <div className="flex flex-row gap-20">
        <a href="https://t.me/Mi4i0S">
        <Image
            src="/images/logos/tg.svg"
            alt="Tg logo"
            width={120}
            height={120}
            className="hover:shadow-xl rounded-full"
        /></a>
        <a href="https://github.com/RO1T">
        <Image
            src="/images/logos/github-mark.svg"
            alt="git logo"
            width={120}
            height={120}
            className="hover:shadow-xl rounded-full"
        /></a>
        </div>


    </div>
  )
}

export default Contact