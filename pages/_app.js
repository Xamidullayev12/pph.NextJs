import '../styles/globals.css'

import BaseHeader from '../public/src/pages/componenets/BaseHeader/inde'
import BaseFooter from '../public/src/pages/componenets/BaseFooter'
import "swiper/css/bundle";





function MyApp({ Component, pageProps }) {
  return  (
    <>  
      <BaseHeader />
      <div>
        <Component {...pageProps} />
      </div>
      <BaseFooter />
    </>
     )
}

export default MyApp
