import { Stack, IconButton, Flex, Text } from '@chakra-ui/react'
import { categories } from '../utils/constants'

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction='row'
      overflowY='auto'
      h={{ base: 'auto', md: '95%' }}
      flexDirection={{ md: 'column' }}
      gap={2}
    >
      {categories.map((category, i) => (
        <Flex
          align='center'
          gap={4}
          py={1}
          px={4}
          rounded='xl'
          cursor='pointer'
          _hover={{ bg: 'whiteAlpha.500', color: 'white' }}
          transition={{ transition: 'all', duration: '200' }}
          fontWeight='bold'
          key={i}
          sx={{
            bg: category.name === selectedCategory && '#FC1503',
            color: 'white',
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <IconButton
            sx={{
              color: category.name === selectedCategory ? 'white' : 'red',
            }}
            aria-label='icon label'
            variant='outline'
            border='none'
            icon={category.icon}
            display={{base: 'none', md: 'flex'}}
          />
          <Text
            sx={{
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }}
          >
            {category.name}
          </Text>
        </Flex>
      ))}
    </Stack>
  )
}
