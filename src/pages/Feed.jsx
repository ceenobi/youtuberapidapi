import { useState } from 'react'
import { Text, Box, Container, Stack, Heading } from '@chakra-ui/react'
import { Sidebar, Videos } from '../components'
import useFetchData from '../hooks/useFetchData'

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const { error, data } = useFetchData(
    `search?part=snippet&q=${selectedCategory}`
  )
  return (
    <Container maxW={{base: 'none', md: 'container.2xl'}}>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Box
          h={{ base: 'auto', md: '92vh' }}
          borderRight='1px solid #3d3d3d'
          px={{ base: 0, md: 4 }}
        >
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          <Text color='white' display={{base: 'none', md:'flex'}}>Copyright 2023</Text>
        </Box>
        <Box p={2} overflowY='auto' h='90vh' flex='2'>
          <Heading as='h2' size='xl' color='white' fontWeight='bold' mb={2}>
            {selectedCategory}
            <Box as='span' color='#F31503' ml={4}>
              videos
            </Box>
          </Heading>
          <Videos videos={data}/>
        </Box>
      </Stack>
    </Container>
  )
}
