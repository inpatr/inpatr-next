import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-altrose space-y-5 lg:space-y-2">
      <header className="relative flex justify-center w-full">
        <nav className="flex content-evenly justify-items-center place-content-around w-full">
          <li className="hidden lg:flex">
            <a href="./Projects.html">projects</a>
          </li>
          <li className="hidden lg:flex">
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </li>
          <Link href="/">
            <a>
              <div className="flex justify-center px-4 py-3 lg:py-2">
                {/*logo*/}
                <svg
                  width="70"
                  height="85"
                  viewBox="0 0 97 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.5 91C71.9721 91 91 71.9721 91 48.5C91 25.0279 71.9721 6 48.5 6C25.0279 6 6 25.0279 6 48.5C6 71.9721 25.0279 91 48.5 91ZM48.5 97C75.2858 97 97 75.2858 97 48.5C97 21.7142 75.2858 0 48.5 0C21.7142 0 0 21.7142 0 48.5C0 75.2858 21.7142 97 48.5 97Z"
                    fill="#93CBFF"
                  />
                  <path
                    d="M42.2097 33.712H53.7457V112H42.2097V33.712Z"
                    fill="#93CBFF"
                  />
                </svg>
              </div>
            </a>
          </Link>
          <li className="hidden lg:flex">
            <Link href="/guestbook">
              <a>Guestbook</a>
            </Link>
          </li>
          <li className="hidden lg:flex">
            <Link href="#">
              <a>about</a>
            </Link>
          </li>
        </nav>
        {/* horizontal lines */}
        <div className="absolute top-20 right-0 my-5 h-1 w-full bg-lightblue"></div>
        <div className="absolute top-24 right-0 my-5 h-1 w-9/12 bg-lightblue rounded-md"></div>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
