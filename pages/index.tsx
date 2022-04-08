import Link from 'next/link'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-altrose space-y-5 lg:space-y-2 grid lg:grid-cols-5 lg:grid-rows-2">
      {/*hero mobile*/}
      <section className="flex flex-col my-5 p-4 h-[715px] bg-halfbubble bg-no-repeat lg:hidden">
        <div className="flex flex-col">
          <h1 className="flex text-4xl m-6">hello</h1>
          <div className="flex h-1 bg-gradient-to-l from-altrose"></div>
          <p className="flex text-lg w-1/2 m-5">
            I am <br />
            and I'm building this website as mobile first. <br />
            Cookie lollipop dragée apple pie pie. Cookie biscuit chupa chups
            bonbon marzipan tootsie roll. Muffin cake shortbread chocolate
            biscuit. I love danish muffin tootsie roll caramels I love. Biscuit
            wafer I love lollipop sweet roll sugar plum. <br />
            donut.
            <br />
            somebody ate my berliner.
          </p>
        </div>
      </section>
      {/*hero desktop*/}
      <section className="hidden lg:flex lg:row-start-1 lg:row-span-2 lg:col-start-2 lg:col-span-4 lg:ml-48 lg:relative lg:overflow-clip">
        {/*bubble*/}
        <div className="flex flex-col justify-center items-center bubbly rounded-full w-[55vw] h-[55vw] mt-16 relative">
          {/*pic*/}
          <div className="absolute rounded-full opacity-90 right-8 top-6 bg-devil h-64 w-64 bg-no-repeat bg-center"></div>
          <h1 className="text-4xl">hello</h1>
          <div className="h-1 w-[40vw] bg-gradient-to-l from-paleblue  via-altrose "></div>
          <p className="flex text-lg w-3/4 m-5">
            I am Inga
            <br />
            and I'm building this website as mobile first. <br />
            Cookie lollipop dragée apple pie pie. Cookie biscuit chupa chups
            bonbon marzipan tootsie roll. Muffin cake shortbread chocolate
            biscuit. I love danish muffin tootsie roll caramels I love. Biscuit
            wafer I love lollipop sweet roll sugar plum. <br />
            donut.
            <br />
            somebody ate my berliner.
          </p>
          <button className="flex self-center justify-center items-center bg-lightaltrose rounded-md w-48 h-16 m-4 text-lg text-altrose hover:bg-lightblue hover:text-lightaltrose">
            CONTACT ME
          </button>
        </div>
      </section>
      {/*cards*/}
      <div className="flex flex-col items-center lg:row-start-2 lg:col-start-1 lg:col-span-2 lg:items-start">
        <section className="flex flex-col justify-center items-center">
          <a href="./Projects.html">
            <div className="flex flex-col bg-darkaltrose p-4 my-8 mx-2 w-80 rounded-lg">
              <p className="leading-6 text-lg text-center">PROJECTS</p>
              <p className="text-2xl underline">battleships</p>
              <p>
                27.02.2022
                <br />
                It’s finally playable! We added some soundeffects in the
                saturday session. Still working on design issues.
              </p>
            </div>
          </a>
          <Link href="/blog">
            <a>
              <div className="flex flex-col bg-darkaltrose p-4 mx-2 w-80 rounded-md">
                <p className="leading-6 text-lg text-center">BLOG</p>
                <p className="text-2xl underline">tailwind</p>
                <p>
                  03.03.2022
                  <br />i like tailwind. tailwind is shit. i love tailwind. i
                  hate tailwind. i guess it's okay. actually it's pretty nice..
                </p>
              </div>
            </a>
          </Link>
        </section>
        {/*about*/}
        <section className="flex my-5 lg:hidden" id="about">
          <div className="flex flex-col bg-lightblue/50 rounded-md mx-2 p-4 w-80">
            <p className="leading-6 text-lg text-center">ABOUT</p>
            <p className="text-2xl underline text-center">Inga P Traub</p>
            <div className="bg-tinydevil h-48 bg-no-repeat bg-center"></div>
            <p>
              I command you to hire me.
              <li>born 1993 in Bremerhaven</li>
              <li>currently learning @ Devhaus Academy</li>
              <li>more room for CV stuff</li>
              <button className="flex self-center justify-center items-center bg-lightaltrose rounded-md w-36 h-10 m-4">
                CONTACT ME
              </button>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
