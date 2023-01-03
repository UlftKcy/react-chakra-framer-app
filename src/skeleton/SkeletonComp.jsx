import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const SkeletonComp = () => {
  return (
    <Stack>
    <Skeleton height='33%' />
    <Skeleton height='33%' />
    <Skeleton height='33%' />
  </Stack>
  )
}

export default SkeletonComp;
