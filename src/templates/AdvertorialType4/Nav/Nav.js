import React, { useState } from 'react'
import * as S from './Nav.style'

export default () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        setVisible(!visible);
    }
    return (
        <S.Container>
            <S.Button onClick={toggleVisible}>
                <S.Line></S.Line>
                <S.Line></S.Line>
                <S.Line></S.Line>
            </S.Button>
            {(() => {
                if( visible ) {
                    return (<S.Nav>
                        <S.Link onClick={toggleVisible} href="#">Home</S.Link>
                        <S.Link onClick={toggleVisible} target="_blank" href="https://thepetlabco.com/pages/about-us-1">About Us</S.Link>
                        <S.Link onClick={toggleVisible} target="_blank" href="https://thepetlabco.com/collections/bestsellers">Products</S.Link>
                        <S.Link onClick={toggleVisible} target="_blank" href="https://thepetlabco.com/pages/subscription-benefits">Subscription Benefits</S.Link>
                        <S.Link onClick={toggleVisible} target="_blank" href="https://thepetlabco.com/">Contact Us</S.Link>
                        <S.Link onClick={toggleVisible} target="_blank" href="https://thepetlabco.com/pages/testimonials">Testimonials</S.Link>
                        <S.Link onClick={toggleVisible} href="#theme2_footer">Disclaimer</S.Link>
                    </S.Nav>)
                }
            })()}
        </S.Container>
    )
}
