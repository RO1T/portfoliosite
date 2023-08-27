import Image from 'next/image'

const Contact = () => {
  return (
    <div className="flex-col max-w-screen-xl flex justify-between items-center mx-auto p-4 gap-10 mt-20">

        <h1 className="font-bold text-2xl text-violet-600">Contact me 📱</h1>
        <p className="w-96">
            I'm currently looking for opportunities. 
            Either full time job or freelancing. 
            Send me a message if you are interested, I will get back to you as soon as possible.
        </p>
        <Image
            src="/images/tg.webp"
            alt="Tg logo"
            width={180}
            height={180}
        />

    </div>
  )
}

export default Contact