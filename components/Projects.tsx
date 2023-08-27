import Image from "next/image"

const Projects = () => {
  return (
  <div className="pt-40">
    <span className="text-2xl font-semibold text-violet-600 ml-96">Projects</span>

    
    <div className="td relative gap-10 max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">  
      <div className="td__image" >
        <Image
            src="/images/td.png"
            alt="Hero"
            width={700}
            height={400}
        />
      </div>
      <div className="td__text">
        <p className="text-base">
          Tower Defence game made in Unity, fully by myself.
        </p>
        <p className="link">
          https://ririn3.itch.io/it-tower
        </p>
      </div>
    </div>

    <div className="alpha relative gap-10 max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">  
      <div className="alpha__text w-80">
        <p className="text-base">
        Desktop application for “Альфабанк”.  Allows you to convert tables from excel to excel, json, markdown, jira. 
        Also with the team we moved the application functionality to the web using Django.
        </p>
        <br/>
        <p className="link">
          https://github.com/RO1T/convertor-desktop
        </p>
      </div>
      <div className="alpha__image" >
        <Image
            src="/images/alpha.png"
            alt="Hero"
            width={700}
            height={400}
        />
      </div>
    </div>

    <div className="sail relative gap-10 max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">  
      <div className="sail__image" >
        <Image
            src="/images/sail.png"
            alt="Hero"
            width={700}
            height={400}
        />
      </div>
      <div className="sail__text">
        <p className="text-base">
          A web page built with HTML, CSS, JS, as part of one of the courses.
        </p>
        <br/>
        <p className="link">
          https://github.com/RO1T/sailclub
        </p>
      </div>
    </div>

  </div>
  )
}

export default Projects