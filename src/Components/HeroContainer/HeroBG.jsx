import React from 'react'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import Zoom from 'react-reveal/Zoom'

import { useScrollSection } from 'react-scroll-section'

const styles = {
  container: {
    position: 'relative',
    zIndex: '1',
    display: 'flex',
  },
  hero__bg__container: {
    position: 'absolute',

    zIndex: '-1',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'flex',
    // width: '100%',
    height: '100%',
    backgroundColor: 'rgb(32,20,66)',
    // backgroundImage:
    //   'url(https://www.aalpha.net/wp-content/uploads/2020/12/full-stack-development.gif)',

    backgroundSize: 'cover',
    borderBottomLeftRadius: '1000% 1000px',
    borderBottomRightRadius: '1000% 1000px',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'darken',
    // opacity: '0.4',
    // filter: 'blur(9px)',
    marginTop: '66px',
    flex: '1',
  },
  hero__h1: {
    color: 'white',

    fontSize: '34px',
    margin: '0 0 20px ',
  },
  hero__bg__content: {
    width: '50%',
    height: '20%',
    zIndex: '10',

    padding: '30vh 6vh',

    left: '5vw',
    '@media (max-width:780px)': {
      width: '100%',
      padding: '10vh 6vh',
    },
  },
  text_developer: {
    opacity: '2',
    color: 'white',
    fontSize: '25px',
    margin: ' 0 0 20px',
  },
  btn_container: {
    display: 'flex',
    '@media (max-width:780px)': {
      flexDirection: 'column',
    },
  },
  menuButton: {
    flex: '1',
    marginRight: '10px',
    height: '55px',

    cursor: 'pointer',
    outline: 'none',
    border: '0.01em solid #cfcccc',
    boxShadow: ' 0px 1px 1px #b6b3b3 ',
    font: 'inherit',
    color: 'inherit',
    margin: '16px 0',
    padding: ' 10px 0px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.2s all ease-in',

    '&:hover': {
      border: '0.01em solid orange',
      boxShadow: ' 0px 1px 1px  orange',
      transform: 'scale(1.05)',
    },
    '& svg': {
      marginRight: '5px',
    },
  },
  orange: {
    // backgroundColor: 'var(--bgGreen)',
    borderRadius: '0px',
    background: 'orange',

    color: 'var(--white)',
    boxShadow: ' unset',
    border: 'none',
  },
}

function HeroBG({ classes }) {
  const projectsSection = useScrollSection('projects')
  const goTo = (url) => {
    console.log(url)
    window.location.assign(url)
  }
  return (
    <>
      <section className={classes.container}>
        <Zoom>
          <div className={classes.hero__bg__container}></div>
          <div className={classes.hero__bg__content}>
            <h1 className={classes.hero__h1}>
              Passionate In developing Web applications
            </h1>

            <div className={classes.text_developer}>
              Fullstack Web Developer from Bengaluru, India
            </div>

            {/* buttons */}
            <div className={classes.btn_container}>
              <button
                onClick={projectsSection.onClick}
                selected={projectsSection.selected}
                className={classNames(classes.menuButton, classes.orange)}
              >
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 48 32'
                  fill='#fff'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  {' '}
                  <path d='M17.3928 15.5021C17.3928 16.9146 18.0342 18.2693 19.1759 19.2681C20.3176 20.2669 21.8661 20.828 23.4808 20.828C25.0954 20.828 26.6439 20.2669 27.7856 19.2681C28.9273 18.2693 29.5687 16.9146 29.5687 15.5021C29.5687 14.0896 28.9273 12.735 27.7856 11.7362C26.6439 10.7374 25.0954 10.1762 23.4808 10.1762C21.8661 10.1762 20.3176 10.7374 19.1759 11.7362C18.0342 12.735 17.3928 14.0896 17.3928 15.5021V15.5021ZM47.0825 14.2753C41.9295 4.77903 34.1402 0 23.6982 0C13.2508 0 5.46692 4.77903 0.313885 14.28C0.107195 14.6629 0 15.0811 0 15.5045C0 15.9279 0.107195 16.3461 0.313885 16.729C5.46692 26.2252 13.2563 31.0043 23.6982 31.0043C34.1456 31.0043 41.9295 26.2252 47.0825 16.7242C47.5011 15.9539 47.5011 15.0599 47.0825 14.2753V14.2753ZM23.4808 23.8714C18.1973 23.8714 13.914 20.1242 13.914 15.5021C13.914 10.88 18.1973 7.13288 23.4808 7.13288C28.7643 7.13288 33.0476 10.88 33.0476 15.5021C33.0476 20.1242 28.7643 23.8714 23.4808 23.8714Z'></path>{' '}
                </svg>
                <span className={classes.btnText}>Projects</span>
              </button>
              <button
                onClick={() => goTo('https://github.com/hrshrayank')}
                className={classes.menuButton}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 25 25'
                  fill='#4a4a4a'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  {' '}
                  <path d='M12.5014 1.07431e-06C5.59435 -0.00286787 0 5.74076 0 12.8299C0 18.4359 3.49961 23.2012 8.37337 24.9512C9.02972 25.1205 8.92917 24.6414 8.92917 24.3143V22.0909C5.13909 22.5471 4.98548 19.9707 4.73131 19.5404C4.21741 18.6395 3.00246 18.41 3.36555 17.9797C4.22858 17.5235 5.10837 18.0944 6.12781 19.6408C6.86515 20.7626 8.30354 20.5732 9.03251 20.3867C9.19171 19.7125 9.53245 19.1101 10.0017 18.6424C6.07474 17.9194 4.43805 15.4579 4.43805 12.5316C4.43805 11.1114 4.89331 9.80606 5.78706 8.75316C5.21729 7.01744 5.84013 5.53133 5.92392 5.31042C7.54664 5.16124 9.2336 6.5039 9.36487 6.61005C10.2866 6.35472 11.3395 6.21988 12.5182 6.21988C13.7024 6.21988 14.7581 6.36046 15.6882 6.61866C16.0038 6.37193 17.5679 5.21861 19.0761 5.35919C19.1571 5.5801 19.7659 7.03179 19.2297 8.74455C20.1346 9.80032 20.5955 11.1172 20.5955 12.5402C20.5955 15.4722 18.9476 17.9367 15.0095 18.6482C15.3468 18.9889 15.6146 19.3953 15.7973 19.8435C15.98 20.2918 16.074 20.7729 16.0736 21.2589V24.4865C16.096 24.7447 16.0736 25 16.4926 25C21.4389 23.2872 25 18.4875 25 12.8328C25 5.74076 19.4029 1.07431e-06 12.5014 1.07431e-06Z'></path>{' '}
                </svg>

                <span className={classes.btnText}>Github</span>
              </button>
            </div>
            {/* buttons end */}
          </div>
        </Zoom>
      </section>
    </>
  )
}

export default withStyles(styles)(HeroBG)
