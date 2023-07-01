import { Link } from 'react-router-dom'
import { Stack, Image, Container } from '@chakra-ui/react'
import { logo } from '../utils/constants'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <Container maxW='container.2xl'>
      <Stack
        direction='row'
        alignItems='center'
        p={4}
        pos='sticky'
        top={0}
        bg='BlackAlpha 900'
        justify='space-between'
      >
        <Link to='/'>
          <Image src={logo} alt='logo' boxSize={10} />
        </Link>
        <Searchbar />
      </Stack>
    </Container>
  )
}
