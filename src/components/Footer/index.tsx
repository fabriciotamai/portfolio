import { HeaderContainer, NavHeader, ButtonNav, ImageLogo } from './styles'

import Logo from '../../../src/assets/Logo.png'
export function Footer() {
  return (
    <HeaderContainer>
      <ImageLogo src={Logo} />
      <NavHeader>
        <ButtonNav>Quem sou eu</ButtonNav>
        <ButtonNav>Front-end skils</ButtonNav>
        <ButtonNav>Mobile skils</ButtonNav>
        <ButtonNav>Back-end skill</ButtonNav>
        <ButtonNav>Portfolio</ButtonNav>
        <ButtonNav>Contato</ButtonNav>
      </NavHeader>
    </HeaderContainer>
  )
}
