import React from 'react'
import * as S from './Body.style'
import RecommendedPosts from '../RecommendedPosts/RecommendedPosts';
import Heading from '../Heading/Heading';
import Content from '../Content/Content'
export default (props) => {
    const { heading, recommendedPosts, body } = props;
    return (
        <>
        <S.Container>
                <S.ColLeft>
                    <Heading heading={heading} />
                    <Content body={body} />
                </S.ColLeft>
                <S.ColRight>
                    <RecommendedPosts recommendedPosts={recommendedPosts} />
                </S.ColRight>
        </S.Container>
        </>
    )
}
