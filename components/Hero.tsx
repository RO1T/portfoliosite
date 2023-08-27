import Image from 'next/image'

const Hero = () => {
  return (
    <div>
        <div className="relative pt-40 gap-10 max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">
            <div className="hero__text w-80">
                <h1 className="hero__title font-bold text-2xl">
                    Web-developer 
                    Rinat Khusnutdinov 👋
                </h1>
                <p className="hero__undertext text-xl">
                    Hi, my name is Rinat Khusntudionov,
                    i’m a programmer 👨‍💻 from Russia,
                    based in Ekaterinburg. 📍
                </p>
            </div>

            <div className="hero__image" >
                <Image
                    src="/images/rinat.png"
                    alt="Hero"
                    width={300}
                    height={300}
                    className="hero__image"
                />
            </div>
        </div>
    </div>
  )
}

export default Hero