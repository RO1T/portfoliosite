import Image from 'next/image'

const Icons = () => {
  return (
<div className="flex mt-48 items-center justify-center">
  <div className="w-full md:w-1/2 rounded-lg bg-white px-8 py-4 shadow-md m-4">

    <div className="px-1 py-4">
      <h3 className="font-bold text-2xl text-violet-600">Stack</h3>
    </div>

    <ul className="grid grid-cols-5 gap-5 px-1">
      <li className="flex items-center flex-col">
      <Image
        src="/images/logos/css.svg"
        alt="css logo"
        width={45}
        height={45}
        className="hover:shadow-xl rounded-2xl"
      ></Image>
      </li>
      <li className="flex items-center flex-col">
        <Image
        src="/images/logos/fastapi.svg"
        alt="fastapi logo"
        width={60}
        height={60}
        className="hover:shadow-xl rounded-full"
      ></Image>
      </li>
      <li className="flex items-center flex-col">
        <Image
        src="/images/logos/github-mark.svg"
        alt="github logo"
        width={60}
        height={60}
        className="hover:shadow-xl rounded-full"
      ></Image>
      </li>
      <li className="flex items-center flex-col">
        <Image
        src="/images/logos/html.svg"
        alt="html logo"
        width={60}
        height={60}
        className="hover:shadow-xl rounded-2xl"
      ></Image>
      </li>
      <li className="flex items-center flex-col">
       <Image
        src="/images/logos/react.svg"
        alt="react logo"
        width={60}
        height={60}
        className="hover:shadow-xl rounded-full"
      ></Image>
      </li>
      <li className="flex items-center flex-col py-3">
        <Image
        src="/images/logos/tailwind.svg"
        alt="tailwind logo"
        width={60}
        height={60}
        className="hover:shadow-xl rounded-full"
      ></Image>
      </li>
      <li className="flex items-center flex-col">
        <Image
        src="/images/logos/ts.svg"
        alt="ts logo"
        width={60}
        height={60}
        className="hover:shadow-xl"
      ></Image>
      </li>
      <li className="flex items-center flex-col">
        <Image
        src="/images/logos/js.svg"
        alt="js logo"
        width={60}
        height={60}
        className="hover:shadow-xl"
      ></Image>
      </li>
      <li className="flex items-center flex-col py-2">
        <Image
        src="/images/logos/php.svg"
        alt="php logo"
        width={80}
        height={80}
        className="hover:shadow-xl rounded-2xl"
      ></Image>
      </li>
      <li className="flex items-center flex-col">
        <Image
        src="/images/logos/Python-logo-notext.svg"
        alt="python logo"
        width={60}
        height={60}
        className="hover:shadow-xl rounded-3xl"
      ></Image>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Icons