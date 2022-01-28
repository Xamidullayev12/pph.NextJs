import styles from "/pages/about/about.module.css"






export default function AboutPage() {
    return (
        <>
            <section>
                <AboutTitle />
                <AboutVideo />
                <AboutImages />
                <AboutBottom />
            </section>
        </>
    )
}






//    ABOUT  HEAD   COMPONENT


function AboutTitleText(props) {
    return(
        <p className={styles.about_main_text}>
            {props.title_text}
        </p>
    )
}

function AboutTitle() {
    return (
        <div className="max-w-screen-md mx-auto mt-20 p-6">
            <div className="flex flex-wrap justify-between items-center mb-6">
                <h1 className="text-3xl">О компании</h1>
                <div className="mt-6">
                    <img src="/src/image/header_logo.png" />
                </div>
            </div>
            <div className="mb-14">
                <AboutTitleText title_text={` Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} />
            </div>
        </div>
    )
}







//      ABOUT VIDEO COMPONENT


// function AboutVideo(props) {
//     return (
//         <div className={styles.about_video}>
//             <video src={props.about_video_src} />
//         </div>
//     )
// }

function AboutVideoText(props) {
    return (
        <p className="text-semibold">
            {props.about_video_text}
        </p>
    )
}


function AboutVideo(props) {
    return(
        <div className="max-w-screen-md mx-auto p-6">
            <div className="w-full rounded-3xl mb-10">
                {/* <AboutVideo  about_video_src={""}/> */}
            </div>
            <div className="mb-10">
                <AboutVideoText about_video_text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} />
            </div>
            <div className="flex grid grid-cols-3">
                <div className="text-center">
                    <p className="text-blue-700 text-3xl font-semibold">3500+</p>
                    <p className="font-bold w-7/12 mx-auto">Loads Booked</p>
                </div>
                <div className="text-center">
                    <p className="text-blue-700 text-3xl font-semibold">$7 500</p>
                    <p className="font-bold w-7/12 mx-auto">Average Gross Revenue</p>
                </div>
                <div className="text-center">
                    <p className="text-blue-700 text-3xl font-semibold">100</p>
                    <p className="font-bold w-7/12 mx-auto">Mln Lbs Dispatched</p>
                </div>
            </div>
        </div>
    )
    
}





//      ABOUT IMAGE COMPONENT

function AboutImageText(props) {
    return (
        <p className="text-semibold">
            {props.about_image_text}
        </p>
    )
}


function AboutImage(props) {
    return(
        <div className="">
            <img className="w-full h-full" src={props.image_src}/>
        </div>
    )
}


function AboutImages() {
    return(
        <div className="">
            <div className="flex grid md:grid-cols-4 sm:grid-cols-2 gap-2 mt-4">
                <AboutImage image_src={"/src/image/about/image 1.png"}/>
                <AboutImage image_src={"/src/image/about/image 2.jpg"}/>
                <AboutImage image_src={"/src/image/about/image 3.jpg"}/>
                <AboutImage image_src={"/src/image/about/image 4.png"}/>
            </div>
            <div className="flex grid md:grid-cols-4 sm:grid-cols-2 gap-2 mt-2">
                <AboutImage image_src={"/src/image/about/image 5.png"}/>
                <AboutImage image_src={"/src/image/about/image 6.jpg"}/>
                <AboutImage image_src={"/src/image/about/image 7.jpg"}/>
                <AboutImage image_src={"/src/image/about/image 8.png"}/>
            </div>
            <div className="max-w-screen-md mx-auto mt-12 px-6">
                <AboutImageText  about_image_text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
            </div>
        </div>
    )
}





//       ABOUT CERTIFICATE COMPONENT 


function CertificatImage(props) {
    return (
        <div className={styles.certificate__image}>
            <img src={props.certificate_src} />
        </div>
    )
}


function AboutBottom(props) {
    return (
        <div className="max-w-screen-md mx-auto my-12 px-6">
            <div >
                <h2 className="text-center text-4xl mb-10">Сертификаты</h2>
                <div className=" grid sm:grid-cols-3 justify-center">
                    <CertificatImage certificate_src={"/src/image/about/certificate/image 1.jpg"}/>
                    <CertificatImage certificate_src={"/src/image/about/certificate/image 2.jpg"}/>
                    <CertificatImage certificate_src={"/src/image/about/certificate/image 3.jpg"}/>
                </div>
            </div>
        </div>
    )
    
}




