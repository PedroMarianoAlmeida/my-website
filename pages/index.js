import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Layout from './../components/all-pages/Layout'


export default function Home() {
  
  return (
    <Layout seo={ {title: "Home | Pedro Programmer", description: "The best content of Pedro Almeida, a Next.js Developer", author: "Pedro Almeida"} }>
      <h1 className='bg-danger'>My website <FontAwesomeIcon icon={faCoffee} /></h1>
    </Layout>

  )
}
