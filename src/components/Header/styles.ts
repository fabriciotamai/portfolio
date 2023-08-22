import { styled } from '../../styles/index'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  // backgroundColor: 'red',
  padding: '2.0rem',
  alignItems: 'center',
  // margin: 'auto',
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

export const Title = styled('h1', {})

export const ButtonNav = styled('button', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: 'transparent',
  color: '#fff',
  padding: '0 0.50rem',
  opacity: 0.8,
  border: 'none',
  fontSize: '1rem',
  fontFamily: 'system-ui',
  fontWeight: 'normal',
  cursor: 'pointer',

  '&:hover': {
    opacity: 1,
    color: '#71faa8',
  },
})

export const ImgIcon = styled('img', {
  // margin: '0 0.25rem ',
  marginRight: '0.75rem',
})
