"use client"
import Image from 'next/image'
import styled from 'styled-components'

export default function Home() {
  const aspectRatio = 1200 / 500;
  return (
    <PageStyle className="flex flex-col items-center justify-between p-0 m-0">
      <div className='imageContainer m-10 w-full relative'>
      <Image
          src="/images/main-min.jpeg"
          alt="Background Image"
          layout="fill" // Set the layout to responsive
          objectFit="contain"
        />
      </div>
    </PageStyle>
  )
}

const PageStyle = styled.main`


`
