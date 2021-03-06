import React, {FunctionComponent} from 'react'
import styled from '@emotion/styled'
import {IGatsbyImageData} from 'gatsby-plugin-image'
import PostHeadInfo, {PostHeadInfoProps} from 'components/Post/PostHeadInfo'

// type GatsbyImgProps = {
//   image: IGatsbyImageData
//   alt: string
//   className?: string
// }

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;

  @media (max-width: 768px) {
    height: 300px;
  }
`

// const BackgroundImage = styled((props: GatsbyImgProps) => (
//     <GatsbyImage {...props} style={{position: 'absolute'}}/>
// ))`
//   z-index: -1;
//   width: 100%;
//   height: 400px;
//   object-fit: cover;
//   filter: brightness(0.25);
//   @media (max-width: 768px) {
//   height: 300px;
// }
// `

const PostHead: FunctionComponent<PostHeadProps> = function (
    {
      title,
      date,
      categories,
    }) {
  return (
      <PostHeadWrapper>
          <PostHeadInfo title={title} date={date} categories={categories}/>
      </PostHeadWrapper>

  )
}

export default PostHead