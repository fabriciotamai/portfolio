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
  // ContentStack,
  // ContentREACT,
  // Imgjs,
  // ContentNode,
  ImgFooter,
  // ContentBallmessage,
  // DescriptionMessage,
  // ContainerontentBallAfter,
  // ContentMessage,
  // ContentPhp,
} from './styles'

import ImgMain from '../../assets/hackbg.png'
// import IconJS from '../../assets/iconJS.svg'
// import IconReact from '../../assets/iconReact.svg'
// import IconNode from '../../assets/iconNODE.svg'
import IconLight from '../../assets/iconLight.svg'
// import IconPhp from '../../assets/iconPhp.svg'

// import MyAnimation from '../../../9KephTIg5W.json'

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
        {/* <ContentStack>
          <Imgjs src={IconJS} />
        </ContentStack> */}
        {/* <ContentPhp>
          <img
            src={IconPhp}
            alt="tteste"
            style={{
              width: '80px',
              height: '80px',
            }}
          />
        </ContentPhp> */}
        {/* <ContentNode>
          <img
            src={IconNode}
            alt="tteste"
            style={{
              width: '70px',
              height: '70px',
            }}
          />
        </ContentNode> */}
        {/* <ContentREACT>
          <img
            src={IconReact}
            alt="tteste"
            style={{
              width: '80px',
              height: '80px',
            }}
          />
        </ContentREACT> */}

        <ImageMain src={ImgMain} />
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
      </SectionForm>
    </Container>
  )
}
