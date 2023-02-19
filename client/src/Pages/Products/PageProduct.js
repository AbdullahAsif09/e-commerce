import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ListProducts from '../../components/Products/ListProducts'
import { useParams } from 'react-router'
function PageProduct() {
  const {category} = useParams()
  // console.log(category)
  return (
    <div >
    <Navbar />
    <ListProducts cat={category} />
    <Footer />
    </div>
  )
}

export default PageProduct