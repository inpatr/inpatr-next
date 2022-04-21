import Link from 'next/link'
import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Head from 'next/head'

// function LanguagePicker() {
//   const { i18n } = useTranslation()
//   const changeLanguage = (lang: string) => {
//     i18n.changeLanguage(lang)
//   }
//   return (
//     <div className="flex bg-lightblue">
//       <button onClick={() => changeLanguage('de')}>german bitcheeeees</button>
//     </div>
//   )
// }
const Home: NextPage = () => {
  const router = useRouter()
  const { pathname, asPath, query } = router
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    router.push({ pathname, query }, asPath, { locale: lang })
  }

  return (
    <div className="bg-altrose space-y-5 lg:space-y-2 grid lg:grid-cols-5 lg:grid-rows-2">
      <Head>
        <title>{t('home:head.title')}</title>
        <meta http-equiv="Content-Type" content="text/html, charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="author" content="Inga Traub" />
        <meta name="description" content="portfolio" />
        <meta name="keywords" content={t('home:head.keywords')} />
      </Head>
      <div className="space-x-1">
        <button
          className="border-2 border-darkaltrose bg-lightaltrose text-darkaltrose hover:bg-lightblue hover:text-lightaltrose p-4 rounded-md"
          onClick={() => changeLanguage('de')}
        >
          german
        </button>
        <button
          className="border-2 border-darkaltrose bg-lightaltrose text-darkaltrose hover:bg-lightblue hover:text-lightaltrose p-4 rounded-md"
          onClick={() => changeLanguage('en')}
        >
          english
        </button>
      </div>
      {/*hero mobile*/}
      <section className="flex flex-col my-5 p-4 h-[715px] bg-halfbubble bg-no-repeat lg:hidden">
        <div className="flex flex-col">
          <h1 className="flex text-4xl m-6">{t('landing:header')}</h1>
          <div className="flex h-1 bg-gradient-to-l from-altrose"></div>
          <p className="flex text-lg w-1/2 m-5">{t('landing:introduction')}</p>
        </div>
      </section>
      {/*hero desktop*/}
      <section className="hidden lg:flex lg:row-start-1 lg:row-span-2 lg:col-start-2 lg:col-span-4 lg:ml-48 lg:relative lg:overflow-clip">
        {/*bubble*/}
        <div className="flex flex-col justify-center items-center bubbly rounded-full w-[55vw] h-[55vw] mt-16 relative">
          {/*pic*/}
          <div className="absolute rounded-full opacity-90 right-8 top-6 bg-devil h-64 w-64 bg-no-repeat bg-center"></div>
          <h1 className="text-4xl">{t('landing:header')}</h1>
          <div className="h-1 w-[40vw] bg-gradient-to-l from-paleblue  via-altrose "></div>
          <p className="flex text-lg w-3/4 m-5">{t('landing:introduction')}</p>
          <button className="flex self-center justify-center items-center bg-lightaltrose rounded-md w-48 h-16 m-4 text-lg text-altrose hover:bg-lightblue hover:text-lightaltrose">
            {t('landing:contactbutton')}
          </button>
        </div>
      </section>
      {/*cards*/}
      <div className="flex flex-col items-center lg:row-start-2 lg:col-start-1 lg:col-span-2 lg:items-start">
        <section className="flex flex-col justify-center items-center">
          <a href="./Projects.html">
            <div className="flex flex-col bg-darkaltrose p-4 my-8 mx-2 w-80 rounded-lg">
              <p className="leading-6 text-lg text-center">
                {t('projects:cardheader')}
              </p>
              <p className="text-2xl underline">{t('projects:heading')}</p>
              <p>{t('projects:date')}</p>
              <p>{t('projects:description')}</p>
            </div>
          </a>
          <Link href="/blog">
            <a>
              <div className="flex flex-col bg-darkaltrose p-4 mx-2 w-80 rounded-md">
                <p className="leading-6 text-lg text-center">
                  {t('blog:cardheader')}
                </p>
                <p className="text-2xl underline">{t('blog:heading')}</p>
                <p>{t('blog:date')}</p>
                <p>{t('blog:description')}</p>
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
