import Link from 'next/link'





export default function BaseFooter() {
    return (

        <>
            <footer className="bg-black">
                <div className="max-w-screen-xl mx-auto text-white px-6 pt-5 pb-10">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-60 pt-5">
                            <div className='cursor-pointer'>
                                <Link href="/">
                                    <img src="/src/image/header_logo.png"/>
                                </Link>
                            </div>
                            <p className="pt-4">
                            ООО “PHARM PLAST HOLDING” — это динамично развивающийся компания    
                            </p>
                        </div>
                        <div className="flex">
                            <div>
                                <ul className="leading-10  pt-5">
                                    <li className='hover:text-blue-500 transition-all'>
                                        <Link href="/">
                                            <a>Главная</a>
                                        </Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all'>
                                        <Link href="/">
                                            <a>Фото галерея</a>
                                        </Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all'>
                                        <Link href="/">
                                            <a>О нас</a>
                                        </Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all'>
                                        <Link href="/">
                                            <a>Новости</a>
                                        </Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all'>
                                        <Link href="/">
                                            <a>Карьера</a>
                                        </Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all'>
                                        <Link href="/">
                                            <a>Местонахождение</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="pl-6 leading-10 pt-5">
                                    <p className="font-bold">Продукции</p>
                                    <li className='hover:text-blue-500 transition-all'>
                                        <Link href="/">
                                            <a>Флаконы</a>
                                        </Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all'>
                                        <Link href="/">
                                            <a>Крышки</a>
                                        </Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all'>
                                        <Link href="/">
                                            <a>Капсулы</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-72 pt-5  className='hover:text-blue-500 transition-all'">
                            <div>

                            </div>
                            <p>Адрес:</p>
                            <p>Город Ташкент, Яккасарайский р-н, улица Кичик Бешягач 124Д</p>
                        </div>
                        <div className=' pt-5 '>
                            <div className='hover:text-blue-500 transition-all cursor-pointer'>
                                <p>Связаться с нами:</p>
                                <p >+998 93 131 7171</p>
                            </div>
                            <div className="mt-4 hover:text-blue-500 transition-all cursor-pointer cursor-pointer">
                                <p>E-mail:</p>
                                <p >info@ppholding.uz</p>
                            </div>
                            <div className="flex mt-4 justify-center items-center">
                                <div className="m-2 px-1 cursor-pointer">
                                    <svg className='' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5026 25.5043C20.1265 25.5043 25.4962 20.1351 25.4962 13.5119C25.4962 6.8887 20.1265 1.51953 13.5026 1.51953C6.87865 1.51953 1.50891 6.8887 1.50891 13.5119C1.50891 20.1351 6.87865 25.5043 13.5026 25.5043ZM13.5026 25.5043V15.0863M18.6416 7.86522L18.4642 7.8134C15.9839 7.08873 13.5026 8.94884 13.5026 11.5329V15.0863M13.5026 15.0863H17.7698M13.5026 15.0863H10.0193" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className="m-2  cursor-pointer">
                                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.9717 9.03938L21.9744 9.04104M13.8925 27.4536H17.1075C20.7245 27.4536 22.533 27.4536 23.9145 26.7497C25.1297 26.1305 26.1177 25.1425 26.7369 23.9273C27.4408 22.5458 27.4408 20.7373 27.4408 17.1203V13.9054C27.4408 10.2883 27.4408 8.47985 26.7369 7.09833C26.1177 5.88312 25.1297 4.89512 23.9145 4.27594C22.533 3.57202 20.7245 3.57202 17.1074 3.57202H13.8925C10.2755 3.57202 8.46703 3.57202 7.08551 4.27594C5.8703 4.89512 4.8823 5.88312 4.26312 7.09833C3.5592 8.47985 3.5592 10.2884 3.5592 13.9054V17.1203C3.5592 20.7373 3.5592 22.5458 4.26312 23.9273C4.8823 25.1425 5.8703 26.1305 7.08551 26.7497C8.46703 27.4536 10.2755 27.4536 13.8925 27.4536ZM20.234 15.5132C20.234 18.1264 18.1156 20.2447 15.5025 20.2447C12.8894 20.2447 10.771 18.1264 10.771 15.5132C10.771 12.9001 12.8894 10.7817 15.5025 10.7817C18.1156 10.7817 20.234 12.9001 20.234 15.5132Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className="m-2  cursor-pointer">
                                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.646 10.6242C24.646 17.9861 19.2206 25.2124 11.6197 25.2124C7.55001 25.2124 3.48083 23.0177 3.48083 23.0177C5.15326 23.0177 8.00362 22.3589 10.4528 20.5109C9.22391 20.102 7.19639 18.9638 5.24001 17.541M24.646 10.6242C24.646 9.62086 24.339 8.68927 23.8138 7.91818M24.646 10.6242L27.5271 9.42226M3.48083 5.81104C7.11752 10.5734 13.1774 12.1643 14.9716 11.8898C15.0033 11.4818 15.0197 11.0601 15.0197 10.6242C15.0197 7.96594 17.1746 5.81104 19.8328 5.81104C21.4878 5.81104 22.9476 6.64626 23.8138 7.91818M23.8138 7.91818C24.3814 8.03604 25.7578 7.77961 26.7229 5.81104M4.54117 12.1461C5.88726 13.2574 6.29033 13.6286 7.73052 14.3162" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' '>
                    <p className="h-px bg-gray-500"></p>
                    <div className="max-w-screen-xl justify-between flex flex-wrap mx-auto px-6 pt-1 pb-5">
                        <div className="text-gray-400 mt-4">
                            Pharm Plast  Holding. Все права защишены 2021
                        </div>
                        <div className="w-1/3 mt-4">
                            <button className="p-2 ml-2 text-white border-none rounded bg-blue-500">Ру</button>
                            <button className="p-2 ml-2 text-white border-none rounded bg-blue-500">Ўз</button>
                        </div>
                        <div className="text-gray-400 mt-4">
                            Сайт разработал 
                            <span className="text-gray-200 ml-2">ItUnity</span>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}