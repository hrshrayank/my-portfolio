import React, { useState } from 'react'
import { withStyles } from '@material-ui/core'
import Hamburger from 'hamburger-react'
import classNames from 'classnames'
import { useScrollSection } from 'react-scroll-section'

const styles = {
  header: {
    height: '66px',
    position: 'fixed',
    top: '0',
    overflow: 'hidden',
    zIndex: '1000',
  },
  navbar: {
    height: '100%',
    width: '100vw',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'black',
    boxShadow:
      'box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)',
  },
  ham__bg__container: {
    display: 'none',
    '@media (max-width:600px)': {
      display: 'block',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    padding: '0 6vw',
  },
  menuContainer__sm: {
    position: 'fixed',
    top: '66px',
    backgroundColor: 'var(--white)',
    right: '0',
    height: 'calc(100vh - 66px)',
    width: '235px',
    transform: 'translateX(235px)',
    transition: '0.2s all ease-in',
    display: 'flex',
    zIndex: '100',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width:600px)': {
      display: 'none',
    },
  },
  active: {
    transform: 'translateX(0)',
  },
  menuItem: {
    width: '100%',
    textAlign: 'center',
    padding: '8px 12px',
    margin: '16px 0',
    height: '40px',
    cursor: 'pointer',

    // "@media (max-width:600px)":{
    //     padding:"4px 6px",
    //     margin:"8px 0 0 0",
    // }
  },
  menuContainer__lg: {
    display: 'flex',
    flex: '1',
    justifyContent: 'flex-end',
    '@media (max-width:600px)': {
      display: 'none',
    },
  },
  menuButton: {
    width: '80%',
    height: '55px',
    borderRadius: '50px',
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
    // "@media (max-width:768px)":{

    //     margin:"8px 0 ",
    // },
    '&:hover': {
      border: '0.01em solid var(--bgGreen)',
      boxShadow: ' 0px 1px 1px  var(--bgGreen)',
      transform: 'scale(1.05)',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },

  mgR10: {
    marginRight: '10px',
  },
  btnText: {
    marginLeft: '2px',
  },
}

function Navbar({ classes }) {
  const [isOpen, setOpen] = useState(false)

  const aboutSection = useScrollSection('about')
  const contactSection = useScrollSection('contact')
  const goTo = (url) => {
    console.log(url)
    window.location.assign(url)
  }

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.container}>
          <div>
            <img
              src='https://i.ibb.co/Kqms1vK/logo.jpg'
              alt=''
              style={{ width: '15%' }}
            />
          </div>
          <div className={classes.menuContainer__lg}>
            <div
              className={classNames(
                classes.menuContainer__lg__menu,
                classes.flex
              )}
            >
              <div
                onClick={() => {
                  window.location.href = 'mailto:hrshrayank77@gmail.com'
                }}
                className={classNames(classes.flex, classes.mgR10)}
              >
                <svg
                  width='20'
                  height='15'
                  viewBox='0 0 32 25'
                  fill='#ffffff'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M28.8 0H3.2C1.44 0 0.016 1.40625 0.016 3.125L0 21.875C0 23.5938 1.44 25 3.2 25H28.8C30.56 25 32 23.5938 32 21.875V3.125C32 1.40625 30.56 0 28.8 0ZM28.8 6.25L16 14.0625L3.2 6.25V3.125L16 10.9375L28.8 3.125V6.25Z'></path>
                </svg>
              </div>
              <div
                onClick={() => goTo('https://www.linkedin.com/in/hrshrayank/')}
                className={classNames(classes.flex, classes.mgR10)}
              >
                <svg
                  width='20'
                  height='18'
                  viewBox='0 0 25 25'
                  fill='#ffffff'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  {' '}
                  <path d='M24 0H1C0.446875 0 0 0.446875 0 1V24C0 24.5531 0.446875 25 1 25H24C24.5531 25 25 24.5531 25 24V1C25 0.446875 24.5531 0 24 0ZM7.41562 21.3031H3.70625V9.37187H7.41562V21.3031ZM5.5625 7.74063C5.13727 7.74063 4.72159 7.61453 4.36802 7.37828C4.01446 7.14204 3.73889 6.80625 3.57616 6.41339C3.41343 6.02053 3.37085 5.58824 3.45381 5.17118C3.53677 4.75412 3.74154 4.37103 4.04222 4.07035C4.3429 3.76966 4.726 3.56489 5.14306 3.48194C5.56012 3.39898 5.99241 3.44156 6.38527 3.60428C6.77813 3.76701 7.11391 4.04258 7.35016 4.39615C7.5864 4.74971 7.7125 5.1654 7.7125 5.59062C7.70937 6.77812 6.74688 7.74063 5.5625 7.74063ZM21.3031 21.3031H17.5969V15.5C17.5969 14.1156 17.5719 12.3375 15.6688 12.3375C13.7406 12.3375 13.4438 13.8438 13.4438 15.4V21.3031H9.74063V9.37187H13.2969V11.0031H13.3469C13.8406 10.0656 15.05 9.075 16.8563 9.075C20.6125 9.075 21.3031 11.5469 21.3031 14.7594V21.3031Z'></path>{' '}
                </svg>
              </div>
              <div
                onClick={() => goTo('https://twitter.com/hrshrayank77')}
                className={classNames(classes.flex, classes.mgR10)}
              >
                <svg
                  className='svg-icon'
                  width='25'
                  height='22'
                  viewBox='0 0 25 25'
                  fill='#ffffff'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  {' '}
                  <path d='M12.5 0C5.5971 0 0 5.5971 0 12.5C0 19.4029 5.5971 25 12.5 25C19.4029 25 25 19.4029 25 12.5C25 5.5971 19.4029 0 12.5 0ZM18.5073 9.42243C18.5156 9.55357 18.5156 9.69029 18.5156 9.82422C18.5156 13.9202 15.3962 18.6384 9.69587 18.6384C7.93806 18.6384 6.30859 18.1278 4.93583 17.2489C5.18694 17.2768 5.4269 17.2879 5.68359 17.2879C7.13449 17.2879 8.46819 16.7969 9.53125 15.9654C8.16964 15.9375 7.02567 15.0446 6.63504 13.817C7.11216 13.8867 7.54185 13.8867 8.03292 13.7612C7.33183 13.6187 6.70166 13.238 6.24949 12.6835C5.79731 12.1291 5.55102 11.4353 5.55246 10.7199V10.6808C5.96261 10.9124 6.44531 11.0547 6.95033 11.0742C6.52579 10.7913 6.17762 10.408 5.93669 9.95823C5.69577 9.50851 5.56954 9.00628 5.5692 8.49609C5.5692 7.91853 5.71987 7.39118 5.99051 6.93359C6.7687 7.89156 7.73976 8.67506 8.84058 9.23316C9.9414 9.79126 11.1473 10.1115 12.38 10.173C11.942 8.06641 13.5156 6.36161 15.4074 6.36161C16.3002 6.36161 17.1038 6.73549 17.6702 7.33817C18.3705 7.20703 19.0402 6.94475 19.6373 6.59319C19.4057 7.31027 18.9202 7.91574 18.2757 8.29799C18.9007 8.23103 19.5033 8.05804 20.0614 7.81529C19.6401 8.43471 19.1127 8.98438 18.5073 9.42243V9.42243Z'></path>{' '}
                </svg>
              </div>
              <div
                onClick={() => goTo('https://github.com/hrshrayank')}
                className={classNames(classes.flex, classes.mgR10)}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 25 25'
                  fill='#ffffff'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  {' '}
                  <path d='M12.5014 1.07431e-06C5.59435 -0.00286787 0 5.74076 0 12.8299C0 18.4359 3.49961 23.2012 8.37337 24.9512C9.02972 25.1205 8.92917 24.6414 8.92917 24.3143V22.0909C5.13909 22.5471 4.98548 19.9707 4.73131 19.5404C4.21741 18.6395 3.00246 18.41 3.36555 17.9797C4.22858 17.5235 5.10837 18.0944 6.12781 19.6408C6.86515 20.7626 8.30354 20.5732 9.03251 20.3867C9.19171 19.7125 9.53245 19.1101 10.0017 18.6424C6.07474 17.9194 4.43805 15.4579 4.43805 12.5316C4.43805 11.1114 4.89331 9.80606 5.78706 8.75316C5.21729 7.01744 5.84013 5.53133 5.92392 5.31042C7.54664 5.16124 9.2336 6.5039 9.36487 6.61005C10.2866 6.35472 11.3395 6.21988 12.5182 6.21988C13.7024 6.21988 14.7581 6.36046 15.6882 6.61866C16.0038 6.37193 17.5679 5.21861 19.0761 5.35919C19.1571 5.5801 19.7659 7.03179 19.2297 8.74455C20.1346 9.80032 20.5955 11.1172 20.5955 12.5402C20.5955 15.4722 18.9476 17.9367 15.0095 18.6482C15.3468 18.9889 15.6146 19.3953 15.7973 19.8435C15.98 20.2918 16.074 20.7729 16.0736 21.2589V24.4865C16.096 24.7447 16.0736 25 16.4926 25C21.4389 23.2872 25 18.4875 25 12.8328C25 5.74076 19.4029 1.07431e-06 12.5014 1.07431e-06Z'></path>{' '}
                </svg>
              </div>
              <div
                onClick={aboutSection.onClick}
                selected={aboutSection.selected}
                className={classes.menuItem}
                style={{ color: 'white' }}
              >
                About
              </div>
              <div
                onClick={contactSection.onClick}
                selected={contactSection.selected}
                className={classes.menuItem}
                style={{ color: 'white' }}
              >
                Contact
              </div>
            </div>
          </div>

          <div className={classes.ham__bg__container}>
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
      <div
        className={classNames(classes.menuContainer__sm, {
          [classes.active]: isOpen,
        })}
      >
        <div
          onClick={aboutSection.onClick}
          selected={aboutSection.selected}
          className={classes.menuItem}
        >
          About
        </div>
        <div
          onClick={contactSection.onClick}
          selected={contactSection.selected}
          className={classes.menuItem}
        >
          Contact
        </div>
        <button
          onClick={() => {
            window.location.href = 'mailto:hrshrayank77@gmail.com'
          }}
          className={classNames(classes.menuButton, classes.flex)}
        >
          <svg
            width='20'
            height='15'
            viewBox='0 0 32 25'
            fill='#4A4A4A'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M28.8 0H3.2C1.44 0 0.016 1.40625 0.016 3.125L0 21.875C0 23.5938 1.44 25 3.2 25H28.8C30.56 25 32 23.5938 32 21.875V3.125C32 1.40625 30.56 0 28.8 0ZM28.8 6.25L16 14.0625L3.2 6.25V3.125L16 10.9375L28.8 3.125V6.25Z'></path>
          </svg>

          <span className={classes.btnText}>Email</span>
        </button>

        <button
          onClick={() => goTo('https://www.linkedin.com/in/hrshrayank/')}
          className={classNames(classes.menuButton, classes.flex)}
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 25 25'
            fill='#4a4a4a'
            xmlns='http://www.w3.org/2000/svg'
          >
            {' '}
            <path d='M24 0H1C0.446875 0 0 0.446875 0 1V24C0 24.5531 0.446875 25 1 25H24C24.5531 25 25 24.5531 25 24V1C25 0.446875 24.5531 0 24 0ZM7.41562 21.3031H3.70625V9.37187H7.41562V21.3031ZM5.5625 7.74063C5.13727 7.74063 4.72159 7.61453 4.36802 7.37828C4.01446 7.14204 3.73889 6.80625 3.57616 6.41339C3.41343 6.02053 3.37085 5.58824 3.45381 5.17118C3.53677 4.75412 3.74154 4.37103 4.04222 4.07035C4.3429 3.76966 4.726 3.56489 5.14306 3.48194C5.56012 3.39898 5.99241 3.44156 6.38527 3.60428C6.77813 3.76701 7.11391 4.04258 7.35016 4.39615C7.5864 4.74971 7.7125 5.1654 7.7125 5.59062C7.70937 6.77812 6.74688 7.74063 5.5625 7.74063ZM21.3031 21.3031H17.5969V15.5C17.5969 14.1156 17.5719 12.3375 15.6688 12.3375C13.7406 12.3375 13.4438 13.8438 13.4438 15.4V21.3031H9.74063V9.37187H13.2969V11.0031H13.3469C13.8406 10.0656 15.05 9.075 16.8563 9.075C20.6125 9.075 21.3031 11.5469 21.3031 14.7594V21.3031Z'></path>{' '}
          </svg>

          <span className={classes.btnText}>LinkedIn</span>
        </button>
        <button
          onClick={() => goTo('https://twitter.com/hrshrayank77')}
          className={classNames(classes.menuButton, classes.flex)}
        >
          <svg
            className='svg-icon'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='#4A4A4A'
            xmlns='http://www.w3.org/2000/svg'
          >
            {' '}
            <path d='M12.5 0C5.5971 0 0 5.5971 0 12.5C0 19.4029 5.5971 25 12.5 25C19.4029 25 25 19.4029 25 12.5C25 5.5971 19.4029 0 12.5 0ZM18.5073 9.42243C18.5156 9.55357 18.5156 9.69029 18.5156 9.82422C18.5156 13.9202 15.3962 18.6384 9.69587 18.6384C7.93806 18.6384 6.30859 18.1278 4.93583 17.2489C5.18694 17.2768 5.4269 17.2879 5.68359 17.2879C7.13449 17.2879 8.46819 16.7969 9.53125 15.9654C8.16964 15.9375 7.02567 15.0446 6.63504 13.817C7.11216 13.8867 7.54185 13.8867 8.03292 13.7612C7.33183 13.6187 6.70166 13.238 6.24949 12.6835C5.79731 12.1291 5.55102 11.4353 5.55246 10.7199V10.6808C5.96261 10.9124 6.44531 11.0547 6.95033 11.0742C6.52579 10.7913 6.17762 10.408 5.93669 9.95823C5.69577 9.50851 5.56954 9.00628 5.5692 8.49609C5.5692 7.91853 5.71987 7.39118 5.99051 6.93359C6.7687 7.89156 7.73976 8.67506 8.84058 9.23316C9.9414 9.79126 11.1473 10.1115 12.38 10.173C11.942 8.06641 13.5156 6.36161 15.4074 6.36161C16.3002 6.36161 17.1038 6.73549 17.6702 7.33817C18.3705 7.20703 19.0402 6.94475 19.6373 6.59319C19.4057 7.31027 18.9202 7.91574 18.2757 8.29799C18.9007 8.23103 19.5033 8.05804 20.0614 7.81529C19.6401 8.43471 19.1127 8.98438 18.5073 9.42243V9.42243Z'></path>{' '}
          </svg>

          <span className={classes.btnText}>Twitter</span>
        </button>
        <button
          onClick={() => goTo('https://github.com/hrshrayank')}
          className={classNames(classes.menuButton, classes.flex)}
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
    </header>
  )
}

export default withStyles(styles)(Navbar)
