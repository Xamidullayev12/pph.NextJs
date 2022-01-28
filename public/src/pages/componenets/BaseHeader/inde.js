import Link from 'next/link'
import styles from './BaseHeader.module.css'




export default function BaseHeader() {

    // RESPONSIVE 


    return (
        <header className="bg-black p-4 items-center">
            <div className="max-w-screen-xl mx-auto flex mr-auto ml-auto items-center">
                <nav className="flex flex-grow justify-between">
                    <Link href="/">
                        <a>
                            <img src="/src/image/header_logo.png" />
                        </a>
                    </Link>
                    <ul className="nav__container flex text-white items-center flex-grow">
                        <li className="ml-auto">
                            <Link href="/">
                                <a>
                                    Главная
                                </a>
                            </Link>
                        </li>
                        <li className="ml-10">
                            <Link href="/catalog">
                                <a>
                                    Каталог
                                </a>
                            </Link>
                        </li>
                        <li className="ml-10">
                            <Link href="/about">
                                <a>
                                    О нас
                                </a>
                            </Link>
                        </li>
                        <li className="ml-10">
                            <Link href="/gallery">
                                <a>
                                    Фото галерея
                                </a>
                            </Link>
                        </li>
                        <li className="ml-10">
                            <Link href="/news">
                                <a>
                                    Новости
                                </a>
                            </Link>
                        </li>
                        <li className="ml-10">
                            <Link href="/contact">
                                <a>
                                    Контакты
                                </a>
                            </Link>
                        </li>
                        <ul className="flex items-center ml-auto text-white">
                            <li className="ml-2" >
                                <button className="p-2 bg-blue-500 border-none rounded text-white">Ру</button>
                            </li>
                            <li>
                                <button className="p-2 ml-2 bg-gray-500 border-none rounded text-white">Ўз</button>
                            </li>
                            <li className="ml-5">
                                Связаться с нами:
                                <p>
                                    +998 99 999 99 99
                                </p>
                            </li>
                        </ul>
                    </ul>
                    <div className="relative top-6 hidden">
                        <div className={styles.nav_burger}></div>
                    </div>
                </nav>
            

            </div>


        </header>
    )


}