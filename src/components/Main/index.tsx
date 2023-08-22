import {
  Container,
  Brainstorm,
  ImageMain,
  SectionForm,
  TitleName,
  TitleRole,
  DescriptionStacks,
  ButtonDev,
  LestsChat,
  ContentStack,
  ContentREACT,
  Imgjs,
  ContentNode,
  ImgFooter,
  ContentBallmessage,
  DescriptionMessage,
  ContainerontentBallAfter,
  ContentMessage,
  ContentPhp,
} from './styles'

import ImgMain from '../../assets/hackbg.png'
import IconJS from '../../assets/iconJS.svg'
import IconReact from '../../assets/iconReact.svg'
import IconNode from '../../assets/iconNODE.svg'
import IconLight from '../../assets/iconLight.svg'
import IconPhp from '../../assets/iconPhp.svg'

import MyAnimation from '../../../9KephTIg5W.json'

export function Main() {
  return (
    <Container>
      <Brainstorm>
        {/* <ContentMessage>
          <ContentBallmessage>
            <DescriptionMessage>
              Prazer em telo aqui!
              <br /> Eu Fabricio Alves, estou preparado pra te trazer
              experiencia inimaginaveis e te alavancar para o proximo nivel
            </DescriptionMessage>
          </ContentBallmessage>
          <ContainerontentBallAfter />
        </ContentMessage> */}

        <ContentREACT>
          <img
            src={IconReact}
            alt="tteste"
            style={{
              width: '80px',
              height: '80px',
            }}
          />
        </ContentREACT>
        <ContentPhp>
          <img
            src={IconPhp}
            alt="tteste"
            style={{
              width: '80px',
              height: '80px',
            }}
          />
        </ContentPhp>

        <ImageMain src={ImgMain} />
        <ContentNode>
          <img
            src={IconNode}
            alt="tteste"
            style={{
              width: '70px',
              height: '70px',
            }}
          />
        </ContentNode>
        <ContentStack>
          <Imgjs src={IconJS} />
        </ContentStack>
      </Brainstorm>
      <SectionForm>
        <ButtonDev>
          <TitleRole>Full Stack Developer</TitleRole>
        </ButtonDev>

        <TitleName>
          Talk is cheap.
          <br />
          show me the code
        </TitleName>
        <DescriptionStacks>
          "Eu desenho e codifico coisas lindamente simples e adoro fazer"
        </DescriptionStacks>
        <LestsChat>LETS CHAT!</LestsChat>
        <ImgFooter src={IconLight} />

        {/* <Lottie animationData={MyAnimation} /> */}
      </SectionForm>
    </Container>
  )
}
