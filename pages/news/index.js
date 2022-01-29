import { text } from "dom7"
import { BsArrowRightCircle } from 'react-icons/bs'








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
                    <img className="w-full h-full object-cover" src={props.img_src} />
                </div>
                <div className="absolute top-0 right-0 px-4 py-2 bg-blue-600">
                    <p className="text-white text-center font-semibold">
                        {props.data_line}
                    </p>
                </div>
            </div>
            <div>
                <p className="mt-1 truncate">{props.text}</p>
                <div className="mt-1">
                    <a className="text-blue-700 group group-hover:text-red-600" href={props.more_src}>
                        <span className="group-hover:text-red-600">
                            Подробнее
                        </span>
                       <BsArrowRightCircle className="relative top-1 left-3 group-hover:text-red-600" size={20}/>
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
                    <Card img_src={"/src/image/news/image 1.jpg"} 
                            data_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={"#"}/>
                </div>
                <div>
                    <Card img_src={"/src/image/news/image 2.jpg"} 
                            data_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={"#"}/>
                </div>
                <div>
                    <Card img_src={"/src/image/news/image 3.jpg"} 
                            data_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={"#"}/>
                </div>
                <div>
                    <Card img_src={"/src/image/news/image 4.jpg"} 
                            data_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={"#"}/>
                </div>
                <div>
                    <Card img_src={"/src/image/news/image 5.jpg"} 
                            data_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={"#"}/>
                </div>
                <div>
                    <Card img_src={"/src/image/news/image 6.jpg"} 
                            data_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={"#"}/>
                </div>
                <div>
                    <Card img_src={"/src/image/news/image 7.jpg"} 
                            data_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={"#"}/>
                </div>
                <div>
                    <Card img_src={"/src/image/news/image 8.jpg"} 
                            data_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={"#"}/>
                </div>
                <div>
                    <Card img_src={"/src/image/news/image 9.jpg"} 
                            data_line={"17.12.2021"}
                            text={"Производитель качественных Линия по производству флаконов антибиотиков"}
                            more_src={"#"}/>
                </div>
            </div>
        </div>
    )
}   