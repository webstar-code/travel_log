import React from 'react'
import marker from './images/marker.png'
import s from './images/download (1).jfif'
import { Container,Intro, Caption, Para, Img, Instruction, Inst, Screenshot, H4, P, Footer } from './styles/HomeStyles'

export default function Home() {
    return(
        <>
        <Container>
            <Intro>
            <Caption>
    Mark your memories <Img src={marker}></Img>
            </Caption>
            <Para>
                keep track of your travelling journey
            </Para>
            </Intro>
            <Instruction>
                <Inst>
                    <Screenshot src={s}>
                    </Screenshot>

                    <H4>Add markers</H4>
                    <P>Double click on your location to add the marker</P>
                </Inst>
                <Inst>
                <Screenshot src={s}>
                    </Screenshot>

                    <H4>Add Details</H4>
                    <P>Add description,comments,images,date and etc..</P>
                </Inst>
            </Instruction>

        

        </Container>




</>
    )
}
