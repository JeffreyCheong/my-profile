import { Theme, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Particles from "react-tsparticles";

const useStyles = makeStyles((theme: Theme) => ({
    particle: {
        background: 'radial-gradient(circle, rgba(193, 196, 209, 1) 0%, rgba(3, 3, 29, 1) 100%)',
        height: '100vh'
    },
    title: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        '& .MuiTypography-h1': {
            color: 'white',
            fontWeight: 'bold',
            textShadow: '1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)'
        }
    },
    scaleInCenter: {
        animation: 'scaleInCenter 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both'
    },
    "@keyframes scaleInCenter": {
        '0%':{
            // -webkit-transform: scale(0),
            transform: 'scale(0)',
            opacity: 1
        },
        '100%':{
            // -webkit-transform: scale(1),
            transform: 'scale(1)',
            opacity: 1
        }
      }
}))

export const UnderConstruction: React.FC = () => {
    const classes = useStyles()

    return (
        // <Grid
        //     container
        //     spacing={0}
        //     direction="column"
        //     alignItems="center"
        //     justify="center"
        //     style={{ minHeight: '100vh' }}
        // >
        // </Grid>
        <>
            <div className={classes.title}>
                <Typography variant='h1' className={classes.scaleInCenter}>Stay Tuned</Typography>
            </div> 
            <Particles className={classes.particle} 
                options={{
                    background: {
                      color: {
                        value: '#0a0b3a',
                      },
                    },
                    fpsLimit: 100,
                    interactivity: {
                      detectsOn: "canvas",
                      events: {
                        onClick: {
                          enable: true,
                          mode: "push",
                        },
                        onHover: {
                          enable: true,
                          mode: "repulse",
                        },
                        resize: true,
                      },
                      modes: {
                        bubble: {
                          distance: 500,
                          duration: 3,
                          opacity: 0.8,
                          size: 40,
                        },
                        push: {
                          quantity: 10,
                        },
                        repulse: {
                          distance: 200,
                          duration: 0.4,
                        },
                      },
                    },
                    particles: {
                      color: {
                        value: "#ffffff",
                      },
                      links: {
                        color: "#ffffff",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 2,
                      },
                      collisions: {
                        enable: false,
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: true,
                        speed: 6,
                        straight: false,
                      },
                      number: {
                        density: {
                          enable: true,
                          value_area: 800,
                        },
                        value: 80,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        random: true,
                        value: 5,
                      },
                    },
                    detectRetina: true,
                  }}
            
            >
            </Particles>
            
        </>
    )
}