import React from 'react'
import * as S from './RecommendedPosts.style'
import RecommendedItem from '../RecommendedItem/RecommendedItem'

export default ({ recommendedPosts }) => {
    
    return (
        <S.Container>
            <S.Title>Recommended Posts</S.Title>
            {recommendedPosts.map((post, index) => {
                return <RecommendedItem key={index} {...post} />
            })}
        </S.Container>
    )
}
