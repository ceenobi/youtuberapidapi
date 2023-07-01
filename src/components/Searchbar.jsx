import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

export default function Searchbar() {
  return (
    <InputGroup size='lg' w={{ base: '80%', md: '450px' }}>
      <Input
        type='search'
        // onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search accounts and videos'
        _placeholder={{ color: 'inherit' }}
        focusBorderColor='gray.400'
        bg='white'
        variant='filled'
        sx={{
          ':focus': {
            border: '1px solid gray',
            bg: 'white',
          },
        }}
        // value={searchTerm}
        rounded='xl'
        // onFocus={() => navigate('/search')}
      />
      <InputRightElement
        pointerEvents='none'
        children={<FiSearch color='green.500' type='submit' />}
      />
    </InputGroup>
  )
}
