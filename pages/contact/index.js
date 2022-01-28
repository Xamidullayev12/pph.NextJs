




export default function ContactPage() {
    return (
        <section>
            <Main />
            <Map />
        </section>
    )
}







//   CONTACT MAIN COMPONENT

function Main() {
    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <div>
                <h1 className="text-3xl md:text-5xl">Контакты</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 mt-12">
                <div className="flex">   
                    <div className="mr-4">
                        <img src="/src/image/contact/phone.png" />
                    </div>
                    <div>
                        <p className="text-sm">Номер телефона:</p>
                        <p>+998 88 900 3009</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4">
                        <img src="/src/image/contact/email.png" />
                    </div>
                    <div>
                        <p className="text-sm">E-mail:</p>
                        <p>info@truckbest.com</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4">
                        <img src="/src/image/contact/adress.png" />
                    </div>
                    <div>
                        <p className="text-sm">Адрес:</p>
                        <p className="w-72">3524 SILVERSIDE RD STE 35B WILMINGTON, DE 19810-4929</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


//      MAP COMPONENT

function Map() {
    return (
        <div className="max-w-screen-xl mx-auto mb-10 px-6 grid md:grid-rows-2">
            <div className="w-full md:w-4/12 px-12 py-16 bg-black my-6">
                <div className="text-white">
                    <h1 className="text-3xl">Связаться с нами</h1>
                    <p className="">Оставьте ваши контактные данные. Наши спецмалисты свяжутся с Вами.</p>
                </div>
                <div className="">
                    <div className="">
                        <div className="border-b-2 mt-12">
                            <input className="border-0 w-full text-white bg-black outline-none py-2" type="text" placeholder="Ваше имя" />
                            <p className="w-full h-px bg-gray-200"></p>
                        </div>
                        <div className="border-b-2 mt-12">
                            <input className="border-0 w-full text-white bg-black outline-none py-2" type="text" placeholder="Номер телефона"/>
                            <p className="w-full h-px bg-gray-200"></p>
                        </div>
                        <div className="border-b-2 mt-12">
                            <input className="border-0 w-full text-white bg-black outline-none py-2" type="email" placeholder="Ваш e-mail"/>
                            <p className="w-full h-px bg-gray-200"></p>
                        </div>
                        <div className="border-b-2 mt-12">
                            <input className="border-0 w-full text-white" type="checkbox " placeholder=""/>
                        </div>
                    </div>
                    <div className="w-full h-full">

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}





