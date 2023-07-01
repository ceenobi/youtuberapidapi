import { Stack, Box } from '@chakra-ui/react'
import { ChannelCard, VideoCard } from './'

export default function Videos({ videos }) {
  console.log(videos)
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard {...item} />}
          {/* {item.id.channelId && <ChannelCard channelId={item}/>} */}
        </Box>
      ))}
    </Stack>
  )
}
