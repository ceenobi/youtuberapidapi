import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { demoVideoTitle, demoVideoUrl } from '../utils/constants'

export default function VideoCard({ id: { videoId }, snippet }) {
  return (
    <>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Image
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          w='320px'
          h='180px'
        />
      </Link>
      <Stack mt='6' spacing='3'>
        <Link to={videoId ? `/video/${videoId}` : demoVideoTitle}>
          <Text>{snippet?.title.slice(0, 60)}</Text>
        </Link>
      </Stack>
    </>
  )
}
