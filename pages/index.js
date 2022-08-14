import Layout from '../Components/Layout'
import ProductItem from '../Components/ProductItem'
import data from '../utils/data'

export default function Home() {
  return (
    <Layout title='Home Page'>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {data.products.map(product=>(
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  )
}
