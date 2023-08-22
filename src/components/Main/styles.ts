import { keyframes, styled } from '../../styles/index'
import { ReactSVG } from 'react-svg'

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Container = styled('section', {
  display: 'flex',
  height: 'calc(100% - 0px)',
  // padding: '0 7rem',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',

  '@media (min-width: 767px)': {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
})

export const SvgNode = styled(ReactSVG, {
  width: '0.25rem',
  height: '0.25rem',
})
export const Brainstorm = styled('div', {
  width: '17rem',
  height: '17rem',
  display: 'flex',
  // padding: '2rem',
  alignItems: 'flex-end',
  // justifyContent: 'flex-end',
  marginTop: '0rem',

  // position: 'relative',
  borderRadius: '50rem',
  // alignSelf: 'flex-end',
  // right: '0px',

  background: 'linear-gradient(to right, #131212, #2b2a2a, #131212)',
})

export const SectionForm = styled('section', {
  flexDirection: 'col',
  padding: '2rem 2rem',
  // margin: '1rem 0rem',
  maxWidth: '567px',
  alignItem: 'flex-start',
  justifyContent: 'flex-start',
})

export const ButtonDev = styled('button', {
  backgroundColor: '#71faa8',
  border: 'none',
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
  padding: '2rem 0rem',
  lineHeight: '1.5rem',
  fontSize: '1.2rem',
  fontFamily: 'monospace',
  fontWeight: 'lighter',
})

export const DescriptionStacks = styled('p', {
  color: '#fff',
  opacity: 0.6,
  fontFamily: 'monospace',
  lineHeight: '1.5rem',
  fontSize: '1rem',
  padding: '0.25rem 0',
})

export const ContentStack = styled('div', {
  width: '10rem',
  height: '10rem',
  display: 'flex',
  position: 'relative',
  // position: 'absolute',
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
  position: 'relative',
  top: '500px',
  // right: '-100px',
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

export const IconNode = styled('ReactSVG', {})

export const Imgjs = styled('img', {
  width: '100px',
  height: '100px',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ContentREACT = styled('div', {
  width: '140px',
  height: '140px',
  display: 'flex',
  top: '190px',
  // right: '-30px',
  // position: 'absolute',
  position: 'relative',
  zIndex: '100',
  '&:hover': {
    animation: `${rotate} 10s linear infinite`,
  },
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '200px',
  background: 'linear-gradient(to right, #131212, #2b2a2a, #131212)',
})

export const ContentNode = styled('div', {
  width: '120px',
  height: '100px',
  display: 'flex',
  // top: '-200px',
  // left: '1320px',
  position: 'relative',
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
  magin: 'auto',
  fontFamily: 'inherit',
  textDecoration: 'underline',
  fontSize: '1rem',
  fontWeight: 'lighter',
  lineHeight: '1.5rem',
  padding: '2rem 0',
})

export const ImageMain = styled('img', {
  objectFit: 'contain',
  // top: '100px',
  zIndex: '999px',
  alignSelf: 'flex-end',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  display: 'flex',
  // top: '50%',
  // left: '50%',
  // transform: ' translate(-50%, -50%)',
  width: '300px',
  '@media (min-width: 1280px)': {
    width: '400px',
  },

  // position: 'absolute',
})

export const ImgFooter = styled('img', {
  width: '200px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  opacity: 0.2,
  // marginLeft: '8rem',
  '&:hover': {
    opacity: 1,
    animation: `${rotate} 10s linear infinite`,
  },
})
