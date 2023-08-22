import {
  HeaderContainer,
  NavHeader,
  ButtonNav,
  ImgIcon,
  ImageLogo,
  Title,
} from './styles'
import IconLikedin from '../../assets/iconLinkedin.svg'
import IconGitHub from '../../assets/iconGithub.svg'

import Logo from '../../../src/assets/Logo.png'
export function Header() {
  return (
    <HeaderContainer>
      <Title>FabricioAlves</Title>
      {/* <ImageLogo src={Logo} /> */}
      <NavHeader>
        <ButtonNav>Quem sou eu</ButtonNav>
        <ButtonNav>Front-end skils</ButtonNav>
        <ButtonNav>Mobile skils</ButtonNav>
        <ButtonNav>Back-end skill</ButtonNav>
        <ButtonNav>Portfolio</ButtonNav>
      </NavHeader>
      <NavHeader>
        <ButtonNav>
          <ImgIcon src={IconLikedin} width={20} height={20} />
          Likedin
        </ButtonNav>
        <ButtonNav>
          <ImgIcon src={IconGitHub} width={23} height={40} />
          Github
        </ButtonNav>
        <ButtonNav>Contato</ButtonNav>
      </NavHeader>
    </HeaderContainer>
  )
}
