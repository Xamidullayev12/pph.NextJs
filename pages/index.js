import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { BsArrowRightCircle } from 'react-icons/bs'


 // import Swiper JS
 import Swiper from 'swiper';
 // import Swiper styles
 import 'swiper/css';


//  const swiper = new Swiper(...);




export default function Home(props) {
  return (
    <div /*className={styles.container}*/>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection />
      <AboutSection />
      <Products />
      <AboutProduct />
      {/* <Partners /> */}
      <Partner />
    </div>
  )
}


 function MainSection() {

  return (
    <div>
      <section className="bg-black">
        <container>
          <div className="max-w-screen-xl flex ml-auto mr-auto">
            <div className="pt-20 pl-10 pb-20 z-10">
              <div className="pb-12">
                <img src="/src/image/main-sec-logo.png" />
              </div>
              <h1 className="text-white text-5xl max-w-2xl pb-4">
                Производство флаконов для фармацефтики
              </h1>
              <p className="text-white mb-12">
                Производство баклашок для фармацефтики
              </p>
              <div>
                <a href="catalog" className="bg-blue-500 rounded-3xl p-2 pl-6 pr-6  text-white">Перейти в каталог</a>
                <a className="items-stretch" href="#" >
                  <span className="text-white ml-10">Производство</span>
                  <svg className="ml-4 relative top-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/sv">
                    <path d="M10.664 6.05301L14.611 10L10.664 13.947M5.413 10H14.599M19.334 10C19.334 15.1556 15.1546 19.335 9.999 19.335C4.84342 19.335 0.664001 15.1556 0.664001 10C0.664001 4.84443 4.84342 0.665009 9.999 0.665009C15.1546 0.665009 19.334 4.84443 19.334 10Z"
                      stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="main__image flex flex-grow relative max-w-100%">
               <img  className="absolute bottom-0 right-72"
                src="/src/image/main-sec-img-2.png"
                height={320}
                width={400}
                alt="main-sec-image"
              /> 
              <img className="absolute bottom-0 right-2"
                src="/src/image/main-sec-img-1.png"
                height={500}
                width={560}
                alt="main-sec-image"
              /> 
              <div className=""></div>
            </div>
          </div>
        </container>
      </section>

    </div>
  )
}

function AboutSection() {
  
  return (
    <div>
        <section>
          <div className="max-w-screen-xl ml-auto mr-auto md:flex pt-20">
            <div className="ml-10 mr-16 pt-10">
               <img 
                src="/src/image/about-logo.png"
                alt=""
                /> 
            </div>
            <div>
              <p className="ml-10">
                Основанная в 2015 году в Узбекистане, ООО “PHARM PLAST HOLDING” расположен в самом центре Сырдарьинской области, 
                которая имеет самую высокую динамику производства среди 12 регионов Узбекистана.
                В настоящее время компания обслуживает более 200 компаний из более чем 10 стран, 
                хотя изначально ООО “PHARM PLAST HOLDING” была основана как компания-производитель пластмассовых изделий медицинского назначения. 
                В феврале, 2021 года запущена третья производственная линия ПЭТ-преформ, 
                что позволяет разнообразить ассортимент продукции при ежегодном объеме производства 300 000 000 ПЭТ-преформ, 
                76 000 000 двухкомпонентных и 250 000 000 однокомпонентных крышек.
              </p>
              <div className="flex mt-4 ml-10">
                <Link href="/about">
                  <a className="text-blue-600 block group group-hover:text-red-700 items-center transition-all">
                    <span className='group-hover:text-red-700 transition-all'>
                      Подробнее о нас 
                    </span>
                    <BsArrowRightCircle className='text-blue-500 relative top-1 left-3 group-hover:text-red-700 transition-all' size={20}/>
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-blue-600 ml-10 group group-hover:text-red-700 transition-all"> 
                    <span className='group-hover:text-red-700 transition-all'>
                      Экспорт
                    </span>  
                    <BsArrowRightCircle className='text-blue-500 relative top-1 left-3 group-hover:text-red-700 transition-all' size={20}/>
                  </a>
                </Link>
              </div>
              
              
              
            </div>
          </div>
        </section>
    </div>
  )
}

function Products() {
  return(
    <section className="pb-10">
      <container>
        <div className="max-w-screen-xl mx-auto flex grid sm:grid-cols-2 md:grid-cols-3 gap-6 font-sans mt-10 px-6">

          <div className="w-full group rounded-xl bg-gray-100 hover:bg-blue-900 truncate mt-2 transition-all">
            <div className="header flex justify-between items-center p-10">
              <div>
                <span className="text-gray-400 text-sm font-medium group-hover:text-gray-300">Продукция</span>
                <p className="text-2xl font-bold group-hover:text-white">Флаконы</p>
              </div>
              <div>
                <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8448 12.4646C10.8448 13.6325 10.3581 14.6336 9.37793 15.4747C8.39773 16.309 7.21592 16.7261 5.82562 16.7261H4.37961V28.4468H5.42242V29.1976H0V28.4468H1.04273V0.750801H0V0H5.8325C7.2159 0 8.39773 0.417096 9.37793 1.2514C10.3581 2.0925 10.8448 3.09359 10.8448 4.26149V12.4646ZM7.50793 14.2999V2.4262C7.50793 1.9604 7.34114 1.5642 7.01434 1.2375C6.68764 0.9107 6.2913 0.750801 5.8325 0.750801H4.37961V15.9753H5.8325C6.2913 15.9753 6.68764 15.8154 7.01434 15.4887C7.34114 15.1619 7.50793 14.7657 7.50793 14.2999ZM23.1495 12.4646C23.1495 13.6325 22.6628 14.6336 21.6826 15.4747C20.7024 16.309 19.5206 16.7261 18.1303 16.7261H16.6843V28.4468H17.7271V29.1976H12.3047V28.4468H13.3474V0.750801H12.3047V0H18.1372C19.5206 0 20.7024 0.417096 21.6826 1.2514C22.6628 2.0925 23.1495 3.09359 23.1495 4.26149V12.4646ZM19.8126 14.2999V2.4262C19.8126 1.9604 19.6458 1.5642 19.319 1.2375C18.9923 0.9107 18.596 0.750801 18.1372 0.750801H16.6843V15.9753H18.1372C18.596 15.9753 18.9923 15.8154 19.319 15.4887C19.6458 15.1619 19.8126 14.7657 19.8126 14.2999ZM36.7055 29.1976H31.2831V28.4468H32.3259V14.14H28.989V28.4468H30.0318V29.1976H24.6094V28.4468H25.6521V0.750801H24.6094V0H30.0318V0.750801H28.989V13.3892H32.3259V0.750801H31.2831V0H36.7055V0.750801H35.6627V28.4468H36.7055V29.1976Z" fill="#E5E5E5"/>
                </svg>
              </div>
            </div>
            <div className="footer relative">
              <div className="absolute bottom-1/4 left-6 text-white text-9xl font-bold leading-loose z-10 ">Флаконы</div>
              <div className="relative mt-16 left-1/3 z-20">
                <img 
                  src="src/image/product-1.png" 
                  height={370}/>
              </div>
              <div className="text-center relative bottom-6 text-blue-500 cursor-pointer w-52 rounded-3xl pl-4 pr-20 pt-2 pb-4 mx-auto z-30 group-hover:text-white group-hover:bg-blue-600">
                <a href="">
                  <span>Перейти в каталог</span>
                  <BsArrowRightCircle className='text-blue-600 relative top-1 left-3' size={20}/>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full group rounded-xl bg-gray-100 hover:bg-blue-900 truncate mt-2 transition-all">
            <div className="header flex justify-between items-center p-10">
              <div>
                <span className="text-gray-400 text-sm font-medium group-hover:text-gray-300">Продукция</span>
                <p className="text-2xl font-bold group-hover:text-white">Капсулы</p>
              </div>
              <div>
                <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8448 12.4646C10.8448 13.6325 10.3581 14.6336 9.37793 15.4747C8.39773 16.309 7.21592 16.7261 5.82562 16.7261H4.37961V28.4468H5.42242V29.1976H0V28.4468H1.04273V0.750801H0V0H5.8325C7.2159 0 8.39773 0.417096 9.37793 1.2514C10.3581 2.0925 10.8448 3.09359 10.8448 4.26149V12.4646ZM7.50793 14.2999V2.4262C7.50793 1.9604 7.34114 1.5642 7.01434 1.2375C6.68764 0.9107 6.2913 0.750801 5.8325 0.750801H4.37961V15.9753H5.8325C6.2913 15.9753 6.68764 15.8154 7.01434 15.4887C7.34114 15.1619 7.50793 14.7657 7.50793 14.2999ZM23.1495 12.4646C23.1495 13.6325 22.6628 14.6336 21.6826 15.4747C20.7024 16.309 19.5206 16.7261 18.1303 16.7261H16.6843V28.4468H17.7271V29.1976H12.3047V28.4468H13.3474V0.750801H12.3047V0H18.1372C19.5206 0 20.7024 0.417096 21.6826 1.2514C22.6628 2.0925 23.1495 3.09359 23.1495 4.26149V12.4646ZM19.8126 14.2999V2.4262C19.8126 1.9604 19.6458 1.5642 19.319 1.2375C18.9923 0.9107 18.596 0.750801 18.1372 0.750801H16.6843V15.9753H18.1372C18.596 15.9753 18.9923 15.8154 19.319 15.4887C19.6458 15.1619 19.8126 14.7657 19.8126 14.2999ZM36.7055 29.1976H31.2831V28.4468H32.3259V14.14H28.989V28.4468H30.0318V29.1976H24.6094V28.4468H25.6521V0.750801H24.6094V0H30.0318V0.750801H28.989V13.3892H32.3259V0.750801H31.2831V0H36.7055V0.750801H35.6627V28.4468H36.7055V29.1976Z" fill="#E5E5E5"/>
                </svg>
              </div>
            </div>
            <div className="footer relative">
              <div className="absolute bottom-1/4 left-6 text-white text-9xl font-bold leading-loose z-10 ">Капсулы</div>
              <div className="relative mt-16 left-1/3 z-20">
                <img 
                  src="/src/image/product-2.png" 
                  height={370}/>
              </div>
              <div className="text-center relative bottom-6 text-blue-500 cursor-pointer w-52 rounded-3xl pl-4 pr-20 pt-2 pb-4 mx-auto z-30 group-hover:text-white group-hover:bg-blue-600">
                <a href="">
                  <span>Перейти в каталог</span>
                  <BsArrowRightCircle className='text-blue-600 relative top-1 left-3' size={20}/>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full group rounded-xl bg-gray-100 hover:bg-blue-900  truncate mt-2 transition-all">
            <div className=" header flex justify-between items-center p-10">
              <div>
                <span className="text-gray-400 text-sm font-medium group-hover:text-gray-300">Продукция</span>
                <p className="text-2xl font-bold group-hover:text-white">Крышка</p>
              </div>
              <div>
                <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8448 12.4646C10.8448 13.6325 10.3581 14.6336 9.37793 15.4747C8.39773 16.309 7.21592 16.7261 5.82562 16.7261H4.37961V28.4468H5.42242V29.1976H0V28.4468H1.04273V0.750801H0V0H5.8325C7.2159 0 8.39773 0.417096 9.37793 1.2514C10.3581 2.0925 10.8448 3.09359 10.8448 4.26149V12.4646ZM7.50793 14.2999V2.4262C7.50793 1.9604 7.34114 1.5642 7.01434 1.2375C6.68764 0.9107 6.2913 0.750801 5.8325 0.750801H4.37961V15.9753H5.8325C6.2913 15.9753 6.68764 15.8154 7.01434 15.4887C7.34114 15.1619 7.50793 14.7657 7.50793 14.2999ZM23.1495 12.4646C23.1495 13.6325 22.6628 14.6336 21.6826 15.4747C20.7024 16.309 19.5206 16.7261 18.1303 16.7261H16.6843V28.4468H17.7271V29.1976H12.3047V28.4468H13.3474V0.750801H12.3047V0H18.1372C19.5206 0 20.7024 0.417096 21.6826 1.2514C22.6628 2.0925 23.1495 3.09359 23.1495 4.26149V12.4646ZM19.8126 14.2999V2.4262C19.8126 1.9604 19.6458 1.5642 19.319 1.2375C18.9923 0.9107 18.596 0.750801 18.1372 0.750801H16.6843V15.9753H18.1372C18.596 15.9753 18.9923 15.8154 19.319 15.4887C19.6458 15.1619 19.8126 14.7657 19.8126 14.2999ZM36.7055 29.1976H31.2831V28.4468H32.3259V14.14H28.989V28.4468H30.0318V29.1976H24.6094V28.4468H25.6521V0.750801H24.6094V0H30.0318V0.750801H28.989V13.3892H32.3259V0.750801H31.2831V0H36.7055V0.750801H35.6627V28.4468H36.7055V29.1976Z" fill="#E5E5E5"/>
                </svg>
              </div>
            </div>
            <div className="footer relative">
              <div className="absolute bottom-1/4 left-6 text-white text-9xl font-bold leading-loose z-10 ">Крышка</div>
              <div className="relative mt-14 left-1/3 z-20">
                <img src="/src/image/product-3.png" />
              </div>
              <div className="text-center relative bottom-6 text-blue-500 cursor-pointer w-52 rounded-3xl pl-4 pr-20 pt-2 pb-4 mx-auto z-30 group-hover:text-white group-hover:bg-blue-600">
                <a href="">
                  <span>Перейти в каталог</span>
                  <BsArrowRightCircle className='group-hover:hidden text-blue-600 relative top-1 left-3' size={20}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </container>
    </section>
  )
}

function AboutProduct() {
    return(
      <section className="bg-blue-900">
        <div className="max-w-screen-xl mx-auto block lg:flex justify-between pt-20">
          <div className="w-4/12 relative top-1 mx-auto">
            <img className='w-full '
            src="/src/image/about-product-logo.png"/>
          </div>
          <div className="max-w-2xl pt-16 text-white justify-center w-full mx-auto">
              <h3 className="text-2xl ml-4 mb-16 text-center">О нашей продукции</h3>
              <ul className="flex flex-wrap w-full">
                <li className="w-72 ml-4 mb-20">
                  <p className="font-bold mb-4">Lorem Ipsum is simply</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </li>
                <li className="w-72 ml-4 mb-20">
                  <p className="font-bold mb-4">Lorem Ipsum is simply</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </li>
                <li className="w-72 ml-4 mb-20">
                  <p className="font-bold mb-4">Lorem Ipsum is simply</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </li>
                <li className="w-72 ml-4 mb-20">
                    <p className="font-bold mb-4">Lorem Ipsum is simply</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </li>
              </ul>
          </div>
        </div>
      </section>
    )
}

// function Partners() {
//   return(
//     <section>
//       <div className="max-w-screen-xl mx-auto">
//         <h3 className="text-center text-2xl mt-16">Наши партнёры</h3>
//         <div className={styles.slider} >
//           <div className={styles['slide-track']}>
//             <div className={styles.slide} >
//               <img src="/src/image/partners/logo-1.png"/>
//             </div>  
//             <div className={styles.slide} >
//               <img src="/src/image/partners/logo-1.png"/>
//             </div> 
//             <div className={styles.slide} >
//               <img src="/src/image/partners/logo-1.png"/>
//             </div> 
//             <div className={styles.slide} >
//               <img src="/src/image/partners/logo-1.png"/>
//             </div> 
//             <div className={styles.slide} >
//               <img src="/src/image/partners/logo-1.png"/>
//             </div> 
//             <div className={styles.slide} >
//               <img src="/src/image/partners/logo-1.png"/>
//             </div> 
//           </div>
//         </div>
//       </div>

//     </section>
//   )
// }

function Partner() {
  return (
    <>
    <div>
      <marquee behavior="scroll" direction="left" scrollamount="10">
        <div className="flex space-x-20 px-6 py-6">
            <div className={styles.slide} >
              <img src="/src/image/partners/logo-1.png"/>
            </div> 
            <div className={styles.slide} >
              <img src="/src/image/partners/logo-1.png"/>
            </div>
            <div className={styles.slide} >
              <img src="/src/image/partners/logo-1.png"/>
            </div> 
            <div className={styles.slide} >
              <img src="/src/image/partners/logo-1.png"/>
            </div> 
            <div className={styles.slide} >
              <img src="/src/image/partners/logo-1.png"/>
            </div> 
            <div className={styles.slide} >
              <img src="/src/image/partners/logo-1.png"/>
            </div> 
            <div className={styles.slide} >
              <img src="/src/image/partners/logo-1.png"/>
            </div>  
        </div>
      </marquee>
    </div>
    </>
  )
}



// <div> 
//   <div className="flex mt-16 mb-16">
//   <div>
//     <img src="/src/image/partners/logo-1.png"/>
//   </div>
//   <div>
//     <img src="/src/image/partners/logo-2.png"/>
//   </div>
//   <div>
//     <img src="/src/image/partners/logo-3.png"/>
//   </div>
//   <div>
//     <img src="/src/image/partners/logo-4.png"/>
//   </div>
//   <div>
//     <img src="/src/image/partners/logo-5.png"/>
//   </div>
//   <div>
//     <img src="/src/image/partners/logo-1.png"/>
//   </div>
//   <div>
//     <img src="/src/image/partners/logo-2.png"/>
//   </div>
//   <div>
//     <img src="/src/image/partners/logo-3.png"/>
//   </div>
//   </div>
// </div>

