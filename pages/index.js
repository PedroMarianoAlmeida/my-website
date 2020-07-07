import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Container } from 'reactstrap'

export default function Home() {
  return (
    <Container>
      <h1 className='bg-danger'>My website <FontAwesomeIcon icon={faCoffee} /></h1>
    </Container>
  )
}
