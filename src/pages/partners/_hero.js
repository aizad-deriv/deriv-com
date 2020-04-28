import React from 'react'
import styled from 'styled-components'
import PartnerVideo from './partner-video.mp4'
import { localize } from 'components/localization'
import { Container } from 'components/containers'
import { Header } from 'components/elements'

const StyledHero = styled.div`
    width: 100%;
    height: 80rem;
    position: relative;
    background: var(--color-black);
`

const StyledVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.4);

    /* for edge */
    @supports (object-fit: fill) {
        object-fit: fill;
        top: 0%;
        left: unset;
        transform: unset;
    }
`

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Hero = () => {
    return (
        <StyledHero>
            <StyledVideo
                title={localize('deriv.app platform video')}
                width="100%"
                height="100%"
                autoPlay
                muted
                playsInline
                loop
            >
                <source src={PartnerVideo} type="video/mp4" />
            </StyledVideo>
            <Content direction="column">
                <Container direction="column" height="100%">
                    <Header as="h1" color="white" align="center">
                        {localize('Deriv partnership programmes')}
                    </Header>
                    <Header color="white" align="center" size="var(--text-size-header-1)">
                        {localize('Partner with a trusted online trading provider.')}
                    </Header>
                </Container>
            </Content>
        </StyledHero>
    )
}

export default Hero
