import { text } from "dom7"









export default function NewsPage() {
    return (
        <section>
            <Main/>
        </section>
    )
}





//  NEWS PAGE CARD COMPONENT 

function Card(props) {
    return (
        <div>
            <div className="relative">
                <div className="">
                    <img className="w-full h-full object-cover" src={props.image_src} />
                </div>
                <div className="absolute top-0 right-0 px-4 py-2 bg-blue-600">
                    <p className="text-white text-center font-semibold">
                        {props.date_line}
                    </p>
                </div>
            </div>
            <div>
                <p className="mt-1 truncate">{props.text}</p>
                <div className="mt-1">
                    <a className="text-blue-700" href={props.more_src}>
                        Подробнее
                        <svg className="relative top-1 ml-4" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.164 6.05298L15.111 9.99998L11.164 13.947M5.913 9.99998H15.099M19.834 9.99998C19.834 15.1556 15.6546 19.335 10.499 19.335C5.34342 19.335 1.164 15.1556 1.164 9.99998C1.164 4.8444 5.34342 0.664978 10.499 0.664978C15.6546 0.664978 19.834 4.8444 19.834 9.99998Z" stroke="#2E57EA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}



//      NEWS PAGE COMPONENT

function Main() {
    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex flex-wrap justify-between items-center my-8">
                <h1 className="sm:text-4xl text-3xl">Новости</h1>
                <div className="sm:mt0 mt-4">
                    <img src="/src/image/header_logo.png"/>
                </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-2 sm:grid-rows-3 sm:grid-cols-3 gap-6 mb-20 ">
                <div className="hover:drop-shadow-2xl">
                    <Card image_src={"/src/image/news/image 1.jpg"} 
                            date_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={""}/>
                </div>
                <div>
                    <Card image_src={"/src/image/news/image 2.jpg"} 
                            date_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={""}/>
                </div>
                <div>
                    <Card image_src={"/src/image/news/image 3.jpg"} 
                            date_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={""}/>
                </div>
                <div>
                    <Card image_src={"/src/image/news/image 4.jpg"} 
                            date_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={""}/>
                </div>
                <div>
                    <Card image_src={"/src/image/news/image 5.jpg"} 
                            date_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={""}/>
                </div>
                <div>
                    <Card image_src={"/src/image/news/image 6.jpg"} 
                            date_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={""}/>
                </div>
                <div>
                    <Card image_src={"/src/image/news/image 7.jpg"} 
                            date_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={""}/>
                </div>
                <div>
                    <Card image_src={"/src/image/news/image 8.jpg"} 
                            date_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={""}/>
                </div>
                <div>
                    <Card image_src={"/src/image/news/image 9.jpg"} 
                            date_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={""}/>
                </div>
            </div>
        </div>
    )
}   