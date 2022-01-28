












export default function Gallery() {
    return (
        <section>
            <MainGallery />
        </section>
    )
}




function GalleryImage(props) {
    return (
            <div className="w-full h-full">
                <img className="w-full h-full object-cover" src={props.image_src} />
            </div>
    )
}



function MainGallery() {
    return (
        <section className="max-w-screen-xl mx-auto px-6">
            <div className="flex flex-wrap justify-between items-center my-8">
                <h1 className="sm:text-4xl text-3xl">Фотогалерея</h1>
                <div className="sm:mt0 mt-4">
                    <img src="/src/image/header_logo.png"/>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 sm:grid-rows-4 gap-2 mb-20">
                <div className="row-span-2">
                    <GalleryImage image_src={"/src/image/gallery/image 1.png"}/>
                </div>
                <div>
                    <GalleryImage image_src={"/src/image/gallery/image 2.png"}/>
                </div>
                <div>
                    <GalleryImage image_src={"/src/image/gallery/image 3.png"}/>
                </div>
                <div>
                    <GalleryImage image_src={"/src/image/gallery/image 4.png"}/>
                </div>
                <div>
                    <GalleryImage image_src={"/src/image/gallery/image 5.png"}/>
                </div>
                <div className="row-span-2 col-span-2">
                    <GalleryImage image_src={"/src/image/gallery/image 6.png"}/>
                </div>
                <div>
                    <GalleryImage image_src={"/src/image/gallery/image 7.png"}/>
                </div>
                <div>
                    <GalleryImage image_src={"/src/image/gallery/image 8.png"}/>
                </div>
            </div>
        </section>
    )
}