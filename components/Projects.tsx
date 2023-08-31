import Image from "next/image"

const Projects = () => {
  return (
  <div className="pt-40 w-full p-10" id="projects">
    <div className="text-center mb-14">
    <span className="text-3xl font-semibold text-violet-600">Projects</span>
    </div>

    <div className="flex flex-col gap-20">
    <div className="td relative gap-10 max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">  
      <div className="td__image" >
        <Image
            src="/images/td-orig.png"
            alt="Hero"
            width={700}
            height={400}
            className="shadow-2xl	rounded-3xl"
        />
      </div>
      <div className="td__text">
        <p className="text-base">
          Tower Defence game made in Unity, fully by myself.
        </p>
        <br/>
        <div className="flex flex-row justify-center gap-20 mt-5">
          <a href="https://github.com/RO1T/TD-IT">
          <Image
            src="/images/logos/github-mark.svg"
            alt="git logo"
            width={60}
            height={60}
            className="hover:shadow-xl rounded-full"
            />
            </a>
          <a href="https://ririn3.itch.io/it-tower">
          <Image
            src="/images/logos/itch.svg"
            alt="itch logo"
            width={60}
            height={60}
            className="hover:shadow-xl rounded-full"
            />
            </a>
        </div>
      </div>
    </div>

    <div className="alpha relative gap-10 max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">  
      <div className="alpha__text w-80">
        <p className="text-base">
        Desktop application for “Альфабанк”.  Allows you to convert tables from excel to excel, json, markdown, jira. 
        Also with the team we moved the application functionality to the web using Django.
        </p>
        <br/>
        <div className="flex flex-row justify-center gap-20 mt-5">
          <a href="https://github.com/RO1T/convertor-desktop">
          <Image
            src="/images/logos/github-mark.svg"
            alt="git logo"
            width={60}
            height={60}
            className="hover:shadow-xl rounded-full"
            />
            </a>
        </div>
      </div>
      <div className="alpha__image" >
        <Image
            src="/images/alpha-orig.png"
            alt="Hero"
            width={700}
            height={400}
            className="shadow-2xl	rounded-3xl"
        />
      </div>
    </div>

    <div className="sail relative gap-10 max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">  
      <div className="sail__image" >
        <Image
            src="/images/sail-orig.png"
            alt="Hero"
            width={700}
            height={400}
            className="shadow-2xl	rounded-3xl"
        />
      </div>
      <div className="sail__text">
        <p className="text-base">
          A web page built with HTML, CSS, JS, as part of one of the courses.
        </p>
        <br/>
        <div className="flex flex-row justify-center gap-20 mt-5">
          <a href="https://github.com/RO1T/sailclub">
          <Image
            src="/images/logos/github-mark.svg"
            alt="git logo"
            width={60}
            height={60}
            className="hover:shadow-xl rounded-full"
            />
            </a>
        </div>
      </div>
    </div>
    </div>
    


  </div>
  )
}

export default Projects