import styles from "/pages/catalog/catalog.module.css"

// import { Swiper, SwiperSlide } from "swiper/react";


// import "swiper/css";
// import "swiper/css/navigation"


// import SwiperCore, {Navigation} from 'swiper';


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);






export default function CatalogPage() {
    return (
        <>
            <CatalogMain/>
            <Flacon__1 />
            <Flacon__2 />
            <Flacon__3 />
        </>
    )
}






function CatalogMain() {
    return(
        <section className="bg-black">
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <h1 className="text-center py-12 text-white text-5xl">
                        Каталог продукций
                    </h1>
                </div>
                <div className="relative top-1">
                    <div className={styles.header__image}>
                        <img src="/src/image/catalog/main-logo.png" />
                    </div>

                </div>
            </div>
        </section>
    )
}




function Slider() {
    
    const [swiperRef, setSwiperRef] = useState(null);
    
    return (
      <>
      
        <Swiper onSwiper={setSwiperRef} slidesPerView={4} centeredSlides={true} spaceBetween={1} navigation={true} className="mySwiper">
            <SwiperSlide>
                <CatalogCard card=""/>
            </SwiperSlide>
            <SwiperSlide>
                <CatalogCard card=""/>
            </SwiperSlide>
            <SwiperSlide>
                <CatalogCard card=""/>
            </SwiperSlide>
            <SwiperSlide>
                <CatalogCard card=""/>
            </SwiperSlide>
        </Swiper>
    
    
      </>
    )
}






function CatalogCard(props) {
    return(
        <div className={props.card}>
            <div className={styles.card__image}>
                <img className="w-full h-full" src="/src/image/catalog/flacon-1/image-1.jpg" />
            </div>
            <div className="cursor-pointer text-center mt-4">
                <h1 className="text-base font-bold">Флакон "Мика-5"</h1>
                <h1 className="text-sm text-blue-500 font-normal">Артикул:06.009</h1>
            </div>
        </div>
    )
}



function Flacon__1() {
    return (
        <section className="px-6">
            <div className="max-w-screen-xl mx-auto bg-black rounded-3xl mt-10">
                <p className="relative">
                    <span className="absolute top-8 right-10">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" fill="#F4F7FA"/>
                            <path d="M28.334 28.335L32.999 33.001M30.334 23.507C30.334 27.278 27.277 30.335 23.506 30.335C19.735 30.335 16.678 27.278 16.678 23.507C16.678 19.736 19.735 16.679 23.506 16.679C27.277 16.679 30.334 19.736 30.334 23.507Z" stroke="#050505" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </p>
                <div className="sm:flex justify-between px-10 pt-10">
                    <div className="text-white">
                        <div className="mt-20">
                            <h1 className="text-base text-gray-400">
                                Продукция
                            </h1>
                            <h1 className="text-5xl mt-6">
                                Флаконы
                            </h1>
                        </div>
                        <a></a>
                        <button className="mt-10 px-7 py-3 bg-white border-none rounded-3xl">
                            Показать все продукции
                        </button>
                    </div>
                    <div className="mt-16 overflow-hidden">
                        <div className={styles.flacon__image_1}>
                            <img src="/src/image/catalog/flacon-1/main.png" />
                        </div>
                    </div>    
                </div>    
            </div>

            <div className="max-w-screen-xl mt-10 mb-10 mx-auto">
                <Slider />
            </div>

        </section>
    )
}



function Flacon__2() {
    return (
        <section className="bg-gray-100" >
            <div className="max-w-screen-xl mx-auto">
                <div className="grid md:grid-cols-2 grid-cols-1 mx-auto p-10">
                    <div className="relative  mb-8 bg-white rounded-3xl md:w-11/12 w-full">
                        <p className="relative">
                            <span className="absolute top-8 right-10">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="50" height="50" rx="25" fill="#F4F7FA"/>
                                    <path d="M28.334 28.335L32.999 33.001M30.334 23.507C30.334 27.278 27.277 30.335 23.506 30.335C19.735 30.335 16.678 27.278 16.678 23.507C16.678 19.736 19.735 16.679 23.506 16.679C27.277 16.679 30.334 19.736 30.334 23.507Z" stroke="#050505" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </p>
                        <div className="mt-20">
                            <div className="w-8/12 h-full mx-auto">
                                <img className="w-full h-full object-cover" src="/src/image/catalog/flacon-2/main-logo.png" />
                            </div>
                        </div>    
                        <div className="absolute bottom-20 left-8">
                            <div>
                                <p className="text-base text-gray-400">
                                    Продукция
                                </p>
                                <h1 className="z-10 py-4 text:4xl sm:text-5xl ">
                                    Флаконы
                                </h1>
                            </div>
                            <a href="/src/pages/Flacons_page/flacons">
                                <button className="bg-blue-600 rounded-3xl p-3 px-5 border-none text-white">
                                    Показать все продукции
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex grid grid-cols-2 gap-4">
                        <CatalogCard card="" />
                        <CatalogCard card=""/>
                        <CatalogCard card=""/>
                        <CatalogCard card=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}


function Flacon__3() {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto bg-black rounded-3xl mt-10">
                <p className="relative">
                    <span className="absolute top-8 right-10">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" fill="#F4F7FA"/>
                            <path d="M28.334 28.335L32.999 33.001M30.334 23.507C30.334 27.278 27.277 30.335 23.506 30.335C19.735 30.335 16.678 27.278 16.678 23.507C16.678 19.736 19.735 16.679 23.506 16.679C27.277 16.679 30.334 19.736 30.334 23.507Z" stroke="#050505" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </p>
                <div className="sm:flex justify-between px-10 pt-10">
                    <div className="text-white">
                        <div className="mt-20">
                            <h1 className="text-base text-gray-400">
                                Продукция
                            </h1>
                            <h1 className="text-5xl mt-6">
                                Флаконы
                            </h1>
                        </div>
                        <button className="mt-10 px-7 py-3 bg-white border-none rounded-3xl">
                            Показать все продукции
                        </button>
                    </div>
                    <div className="mt-16 overflow-hidden">
                        <div className={styles.flacon__image_1}>
                            <img src="/src/image/catalog/flacon-1/main.png" />
                        </div>
                    </div>    
                </div>    
            </div>

            
            <div className="max-w-screen-xl mt-10 mb-10 mx-auto">
                <Slider />
            </div>

        </section>
    )
}




//      MARQUEE HTML TAG 




