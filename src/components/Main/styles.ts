import { keyframes, styled } from '../../styles/index'

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Container = styled('section', {
  display: 'flex',
  height: 'calc(100% - 0px)',
  magin: 'auto',
  paddingTop: '7rem',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
  },
})
export const Brainstorm = styled('div', {
  width: '800px',
  height: '800px',
  borderRadius: '800px',
  // left: '0px',
  right: '300px',
  // right: '20px',
  position: 'relative',
  background: 'linear-gradient(to right, #131212, #2b2a2a, #131212)',
})

export const SectionForm = styled('section', {
  flexDirection: 'col',
  maxWidth: '480px',
  paddingRight: '13rem',
})

export const ButtonDev = styled('button', {
  backgroundColor: '#71faa8',
  // background: 'linear-gradient(to right, #131212, #2b2a2a, #131212)',
  border: 'none',
  // padding: '0.02 2rem',
  borderRadius: '0.25rem',
})
export const ContentMessage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '220px',
  zIndex: '99px',
  marginLeft: '45rem',
})

export const ContentBallmessage = styled('div', {
  width: '25rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.25rem',

  border: '2px solid #71faa8',
  borderRadius: '2rem',
  display: 'inline-block',
  marginBottom: '7.45rem',
  position: 'realtive',
  backgroundColor: '#191718',
})

export const DescriptionMessage = styled('p', {
  // padding: '2rem 0',
  textAlign: 'center',
})

export const ContainerontentBallAfter = styled('div', {
  content: '',
  height: '25px',
  width: '25px',
  display: 'block',
  right: 120,
  borderRadius: '0.25rem',
  position: 'absolute',
  transform: 'rotate(50deg)',
  backgroundColor: '#191718',
  borderRight: '1px solid #71faa8',
  borderBottom: '1px solid #71faa8',
})

export const TitleRole = styled('h5', {
  color: '#000',
  padding: '0.25rem 1.25rem',
  lineHeight: '2rem',
  fontSize: '0.95rem',
})

export const TitleName = styled('h4', {
  padding: '2rem 0',
  lineHeight: '3.5rem',
  fontSize: '3.0rem',
  fontFamily: 'monospace',
  fontWeight: 'lighter',
})

export const DescriptionStacks = styled('p', {
  color: '#fff',
  opacity: 0.6,
  fontFamily: 'monospace',
  // fontWeight: 'initial',
  lineHeight: '1.5rem',
  fontSize: '1rem',
  // textDecoration:''
  padding: '0.25rem 0',
})

export const ContentStack = styled('div', {
  width: '150px',
  height: '150px',
  display: 'flex',
  position: 'absolute',
  top: '500px',

  bottom: '0',
  '&:hover': {
    animation: `${rotate} 10s linear infinite`,
  },
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '200px',
  background: 'linear-gradient(to right, #131212, #2b2a2a, #131212)',
})

export const ContentPhp = styled('div', {
  width: '100px',
  height: '100px',
  display: 'flex',
  position: 'absolute',
  top: '500px',
  right: '-50px',
  zIndex: 99,
  bottom: '0',
  '&:hover': {
    animation: `${rotate} 10s linear infinite`,
  },
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '200px',
  background: 'linear-gradient(to right, #131212, #2b2a2a, #131212)',
})

export const Imgjs = styled('img', {
  // opacity: 0.5,
  width: '100px',
  height: '100px',
  // '&:hover': {
  //   opacity: 1,
  // },
  alignItems: 'center',
  justifyContent: 'center',
})

export const ContentREACT = styled('div', {
  width: '140px',
  height: '140px',
  display: 'flex',

  top: '190px',
  right: '-30px',
  // opacity: 0.5,
  position: 'absolute',
  zIndex: '100',
  // '&:hover': {
  '&:hover': {
    animation: `${rotate} 10s linear infinite`,
  },
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '200px',
  background: 'linear-gradient(to right, #131212, #2b2a2a, #131212)',
})

export const ContentNode = styled('div', {
  width: '100px',
  height: '100px',
  display: 'flex',
  top: '60px',

  left: '130px',
  position: 'absolute',
  zIndex: '100',
  '&:hover': {
    animation: `${rotate} 10s linear infinite`,
  },
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '200px',
  background: 'linear-gradient(to right, #393436, #2b2a2a, #131212)',
})

export const LestsChat = styled('p', {
  color: '#71faa8',
  // opacity: 0.6,
  magin: 'auto',
  fontFamily: 'inherit',
  textDecoration: 'underline',
  fontSize: '1rem',
  fontWeight: 'lighter',
  lineHeight: '1.5rem',
  padding: '2rem 0',
})

export const ImageMain = styled('img', {
  // borderRadius: '450px',
  // backgroundColor: 'red',
  objectFit: 'contain',
  position: 'absolute',
  // top: '100px',
  bottom: '0px',
  zIndex: '99px',
  // right: '100px',
  left: '-100px',
  padding: '0 10rem',
  alignSelf: 'flex-end',
  // alignItems: 'flex-end',
  // justifyContent: 'flex-end',

  width: '900px',
})

export const ImgFooter = styled('img', {
  width: '300px',
  height: '300px',
  opacity: 0.2,
  marginLeft: '8rem',
  '&:hover': {
    opacity: 1,
    animation: `${rotate} 10s linear infinite`,
  },
})
