import { styled } from '../../styles/index'

export const HeaderContainer = styled('header', {
  display: 'flex',
  padding: '3rem',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
})

export const ImageLogo = styled('img', {})

export const NavHeader = styled('nav', {
  display: 'flex',
  gap: '2rem',
  margin: 0,
  padding: '0 4rem  ',
  justifyContent: 'flex-end',
  maxWidth: '960px',
})

export const ButtonNav = styled('button', {
  // width: '4rem',
  backgroundColor: 'transparent',
  color: '#fff',
  padding: '0 0.50rem',
  opacity: 0.3,
  border: 'none',
  fontSize: '1rem',
  cursor: 'pointer',

  '&:hover': {
    opacity: 1,
  },
})
