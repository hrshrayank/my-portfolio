import { Button, withStyles } from '@material-ui/core'
import React from 'react'
import Navbar from '../Components/Header/Navbar'
import HeroBG from '../Components/HeroContainer/HeroBG'
import classNames from 'classnames'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import StackGrid from 'react-stack-grid'
import style from '../Pages/Homes.module.css'

import { ScrollingProvider, Section } from 'react-scroll-section'
// Import Swiper styles

const styles = {
  about__me: {
    padding: '6vw',
    '& h2': {
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bolder',
      fontSize: '34px',
      marginBottom: '10px',
    },
    textAlign: 'center',
    backgroundColor: 'rgb(241, 173, 47)',
  },

  p__img__container: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      lineHeight: '1.8rem',
      fontSize: '22px',
      margin: '20px',
    },
    '& img': {
      width: '250px',
      // height: '100px',
    },
    '@media (max-width:780px)': {
      flexDirection: 'column-reverse',
    },
  },
  project__container: {
    padding: '6vw',
    textAlign: 'center',

    backgroundColor: 'rgb(241, 173, 47)',

    // color: 'grey  ',

    '& h2': {
      fontSize: '28px',
    },

    '& p': {
      margin: '20px 0 80px',
      fontSize: '18px',
    },
  },
  project__card__content: {
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    backgroundColor: 'var(--white)',
    padding: '2vw',
  },
  img__container: {
    backgroundColor: 'white',
    height: '300px',
    overflow: 'hidden',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    '& img': {
      height: '300px',

      // width: '1000px',
    },
  },
  project__tech__tools: {
    display: 'flex',
    flexWrap: 'wrap',

    '& div': {
      width: '40px',
      margin: '10px 10px 0 0',
    },
    '& img': {
      width: '100%',
    },
  },
  project__tech__info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > div': {
      margin: '10px 0',
    },
  },
  project__card__container: {
    display: 'grid',
    color: 'black',
    textAlign: 'left',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '2vw',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    '& img': {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      width: '100%',
    },
    '@media (max-width:1020px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media (max-width:780px)': {
      gridTemplateColumns: '1fr',
    },
  },

  techImgContainer: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',

    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      margin: '20px 20px 0 0',
    },
  },

  menuButton: {
    width: '100px',

    marginRight: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    border: '0.01em solid #cfcccc',
    boxShadow: ' 0px 1px 1px #b6b3b3 ',
    // font: '30%',
    color: 'inherit',

    padding: ' 10px 10px',

    transition: '0.2s all ease-in',
    // "@media (max-width:768px)":{

    //     margin:"8px 0 ",
    // },
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  btnText: {
    marginLeft: '4px',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  resumeBtn: {
    width: '200px',
  },
  orange: {
    backgroundColor: 'orange',
    color: 'black',
    boxShadow: ' unset',
  },
  techContainer: {
    textAlign: 'center',
    padding: '0 6vw',
    // marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(241, 173, 47)',
  },
  experince: {
    padding: '40px 6vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'rgb(241, 173, 47)',
    borderTop: '1px solid #5a5a5a',
  },
  commits: {
    display: 'flex',
    padding: '6vw 0 0 0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(241, 173, 47)',
  },
  contactMe: {
    // marginTop: '80px',
    minHeight: '250px',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0',
    '& h2': {
      fontWeight: 'bolder',
      color: 'var(--white)',
      marginBottom: '30px',
    },
  },
  contactBtnContainer: {
    display: 'flex',
    marginBottom: '20px',
    '@media (max-width:780px)': {
      flexDirection: 'column',
      '& button': {
        margin: '15px',
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
}

function Home({ classes }) {
  const goTo = (url) => {
    console.log(url)
    window.location.assign(url)
  }

  return (
    <ScrollingProvider>
      <Navbar />

      <HeroBG />
      <Fade bottom>
        <Section id='about' className={classes.about__me}>
          <h2>About Me</h2>
          <div className={classes.p__img__container}>
            <p>
              Hi I'm Shrayank, Aspiring Full-Stack Developer, skilled in both
              front-end and back-end web development. Well versed in coding with
              React.js, Redux, HTML, CSS & Javascript for the client-side, and
              maintaining databases and infrastructure using Node.js, Express.js
              & MongoDB on the server-side.
            </p>
            <img
              src='https://www.pngjoy.com/pngl/804/9537968_avatar-web-developer-coder-avatar-hd-png-download.png'
              alt=''
            />
          </div>

          <button
            onClick={() =>
              goTo(
                'https://drive.google.com/file/d/17c5HpOSawHbWuGHeBoDKof2sSiVFvj9x/view?usp=sharing'
              )
            }
            className={classNames(
              classes.menuButton,
              classes.orange,
              classes.resumeBtn
            )}
            id={style.butn}
          >
            View Resume
          </button>
        </Section>
      </Fade>
      <Fade left>
        <section className={classes.techContainer}>
          <h2>Tools and Technologies</h2>
          <div className={style.tools}>
            <img
              alt='tech-pic'
              height='100'
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
            />
            <img
              alt='tech-pic'
              height='100'
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
            />

            <img
              alt='tech-pic'
              height='100'
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
            />
            <img
              alt='tech-pic'
              height='100'
              src='https://material-ui.com/static/logo.png'
            />

            <img
              alt='tech-pic'
              height='100'
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
            />
            <img
              alt='tech-pic'
              height='100'
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png'
            />
            <img
              alt='tech-pic'
              height='100'
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png'
            />
            <img
              alt='tech-pic'
              height='100'
              src='https://img.favpng.com/20/4/0/node-js-javascript-react-mean-angularjs-png-favpng-9jx9sihXGEqtr5xCmpXZtGFjQ.jpg'
            />
            <img
              alt='tech-pic'
              height='100'
              src='https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png'
            />
            <img
              alt='tech-pic'
              height='100'
              src='https://i.imgur.com/Rq9TURL.png'
            />
          </div>
        </section>
      </Fade>

      <Section id='projects' className={classes.project__container}>
        <Fade bottom>
          <h2>Projects</h2>
          <p></p>
        </Fade>
        {/* First Project */}
        <div className={classes.project__card__container}>
          <div className={classes.project__card}>
            <div className={classes.img__container}>
              <img src={process.env.PUBLIC_URL + '/images/cnn.gif'} alt='cnn' />
            </div>

            <div className={classes.project__card__content}>
              <h2>CNN News</h2>
              <p>
                CNN is International news website.We have tried implementing
                searching of news ,images change on the click and
                filtering,changing languages .This was a collaborative project
                and was done in 4 days
              </p>
              <div className={classes.project__tech__info}>
                <h3>Technologies Used</h3>
                <div className={classes.project__tech__tools}>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png'
                    />
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  <button
                    onClick={() => goTo('#')}
                    className={classNames(classes.menuButton)}
                  >
                    Live Version
                  </button>

                  <button
                    onClick={() => goTo('https://github.com/MaheshFSD/ethane')}
                    className={classes.menuButton}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => goTo('#')}
                    className={classes.menuButton}
                  >
                    Blog
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.project__card}>
            <div className={classes.img__container}>
              <img
                src={process.env.PUBLIC_URL + '/images/Boat.gif'}
                alt='boat'
              />
            </div>

            <div className={classes.project__card__content}>
              <h2>Boat Website</h2>
              <p>
                Boat is India's Audio Company.We have tried implementing
                searching of products ,colour change on the product and
                filtering them based on the filter.This was a collaborative
                project and was done in 3 days
              </p>
              <div className={classes.project__tech__info}>
                <h3>Technologies Used</h3>
                <div className={classes.project__tech__tools}>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => goTo('#')}
                    className={classNames(classes.menuButton)}
                  >
                    Live Version
                  </button>

                  <button
                    onClick={() =>
                      goTo('https://github.com/hrshrayank/Boat-Clone')
                    }
                    className={classes.menuButton}
                  >
                    Code
                  </button>
                  <button
                    onClick={() =>
                      goTo(
                        'https://hrshrayank.medium.com/boat-clone-collab-project-in-3-days-aeea867a87e7'
                      )
                    }
                    className={classes.menuButton}
                  >
                    Blog
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.project__card}>
            <div className={classes.img__container}>
              <img
                src={process.env.PUBLIC_URL + '/images/Timely.gif'}
                alt='timely'
              />
            </div>

            <div className={classes.project__card__content}>
              <h2>Timely Website</h2>
              <p>
                Timely is a Automated Time Tracking Software.We have tried
                implementing some of the features like adding blogs ,creating a
                dashboard and impleting settings.This was a collaborative
                project and was done in 3 days
              </p>
              <div className={classes.project__tech__info}>
                <h3>Technologies Used</h3>
                <div className={classes.project__tech__tools}>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => goTo(' #')}
                    className={classNames(classes.menuButton)}
                  >
                    Live Version
                  </button>

                  <button
                    onClick={() =>
                      goTo('https://github.com/hrshrayank/Timely-Clone-Final')
                    }
                    className={classes.menuButton}
                  >
                    Code
                  </button>
                  <button
                    onClick={() =>
                      goTo(
                        'https://hrshrayank.medium.com/boat-clone-collab-project-in-3-days-aeea867a87e7'
                      )
                    }
                    className={classes.menuButton}
                  >
                    Blog
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Last */}
        </div>
      </Section>

      <Fade left>
        <section className={classes.experince}>
          <div className='circle small'>
            <h2>100+ Hours</h2>
            <p>Softskills Training</p>
          </div>
          <div className='circle small'>
            <h2>1200+ Hours</h2>
            <p>Fullstack coding</p>
          </div>
          <div className='circle small'>
            <h2>1200+ Hours</h2>
            <p>Datastructures and Algorithms</p>
          </div>
          <div className='circle small'>
            <h2>600+</h2>
            <p>Git Commits</p>
          </div>
        </section>
      </Fade>

      <section className={classes.commits}>
        <img
          src={process.env.PUBLIC_URL + '/images/github.png'}
          alt='netflix'
          style={{ width: '80%', marginBottom: '10%' }}
        />
      </section>
      <Section id='contact' className={classes.contactMe}>
        <h2>Contact Me</h2>
        <div className={classes.contactBtnContainer}>
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
      </Section>
    </ScrollingProvider>
  )
}

export default withStyles(styles)(Home)

{
  /* <img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" /> */
}

//{/* First Project */}
{
  /* <div className={classes.project__card__container}>
<div className={classes.project__card}>
  <div className={classes.img__container}>
    <img
      src={process.env.PUBLIC_URL + '/images/Boat.png'}
      alt='netflix'
    />
  </div>

  <div className={classes.project__card__content}>
    <h2>Twitter MERN</h2>
    <p>
      This is a clone of the worltd's biggest social networking
      webiste The user can tweet, foollow other users, view their
      profiles and can do much more. The appliction was built within 1
      month individually. .The tech stacks used were React for the
      frontend, Redux for state management at the client side. Node
      and Express were used for the Backend Integration and Mongo Db
      was used to persist the data.
    </p>
    <div className={classes.project__tech__info}>
      <h3>Technologies Used</h3>
      <div className={classes.project__tech__tools}>
        <div>
          <img
            alt='tech-pic'
            height='40'
            src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
          />
        </div>
        <div>
          <img
            alt='tech-pic'
            height='40'
            src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
          />
        </div>
        <div>
          <img
            alt='tech-pic'
            height='40'
            src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
          />
        </div>
        <div>
          <img
            alt='tech-pic'
            height='40'
            src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
          />
        </div>
        <div>
          <img
            alt='tech-pic'
            height='40'
            src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png'
          />
        </div>
        <div>
          <img
            alt='tech-pic'
            height='40'
            src='https://e7.pngegg.com/pngimages/301/171/png-clipart-node-js-javascript-software-developer-computer-icons-angularjs-others-miscellaneous-text-thumbnail.png'
          />
        </div>
        <div>
          <img
            alt='tech-pic'
            height='40'
            src='https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png'
          />
        </div>
      </div>
      <div>
        <button
          onClick={() =>
            goTo('https://twitter-clone-netlify.netlify.app/')
          }
          className={classNames(classes.menuButton, classes.green)}
        >
          Live Version
        </button>

        <button
          onClick={() =>
            goTo(
              'https://github.com/MahenParameshwar/TwitterCloneMERN'
            )
          }
          className={classes.menuButton}
        >
          Code
        </button>
      </div>
    </div>
  </div>
</div> */
}
