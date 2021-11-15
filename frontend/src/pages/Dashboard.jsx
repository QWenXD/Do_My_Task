import React from 'react';
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TaskCard from '../components/TaskCard';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import HelpIcon from '@material-ui/icons/Help';
import Footer from '../components/Footer';
import MousePopover from '../components/MousePopover';
import AvatarCard from '../components/AvatarCard';
import ModalWindowContainer from '../components/ModalWindowContainer'
import CreateGame from '../components/create-game/CreateGame'
import GameDetails from '../components/game-details/GameDetails'
import GameDetailsReadOnly from '../components/game-details/GameDetailsReadOnly'
import { useAuth0 } from "@auth0/auth0-react";
import AppContextProvider from '../AppContextProvider.js';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: "40px",
    },

    hostHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    createBtn: {
        backgroundColor: "#2b6777",
        height: "fit-content",
        color: "#ffffff",
        marginTop: "auto",
        marginBottom: "auto",
        padding: "10px",
        "&:hover": {
            backgroundColor: "#52ab98",
        }
    },

    sectionPadding: {
        paddingLeft: "7%",
        paddingRight: "7%",
        paddingBottom: "15px",
    },

    sectionTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    helpIcon: {
        marginLeft: "10px",
        marginRight: "10px",
        fontSize: "28px",
        "&:hover": {
            cursor: "pointer",
        },
    },

    hostedSection: {
        backgroundColor: "#f2f2f2",
    },

    taskGrid: {
        maxWidth: "100%",
    },

    invitedSection: {
        backgroundColor: "#c8d8e4",
    },


    footer: {
        display: "flex",
        flexDirection: "row",
        padding: "0px 10%",
        boxSizing: "content-box",
        justifyContent: "space-between",
        backgroundColor: "#2b6777",
        color: "white",
    },

    flexRow: {
        display: "flex",
        flexDirection: "row",
    },

    linkIcon: {
        height: "30px",
        alignSelf: "center",
        margin: "0px 5px",
    }
}));


export default function Dashboard({ currentTask, setCurrentTask }) {

    const classes = useStyles();

    const [anchorElHostHelp, setAnchorElHostHelp] = React.useState(null);
    const handlePopoverOpenHost = (event) => {
        setAnchorElHostHelp(event.currentTarget);
    };
    const handlePopoverCloseHost = () => {
        setAnchorElHostHelp(null);
    };

    const [anchorElHostInvi, setAnchorElHostInvi] = React.useState(null);
    const handlePopoverOpenInvi = (event) => {
        setAnchorElHostInvi(event.currentTarget);
    };
    const handlePopoverCloseInvi = () => {
        setAnchorElHostInvi(null);
    };

    // create task modal window
    const [createTaskOpen, setCreateTaskOpen] = useState(false)
    const [openGDRO, setOpenGDRO] = useState(false)
    const [openGD, setOpenGD] = useState(false)

    const { user } = useAuth0();
    const { name, email } = user;
    const data = {
        name: name,
        email: email
    }

    const [hostedCardsArray, setHostedCardsArray] = useState([])
    const invitedCardsArray = [
        {
            title: "Machine Learning",
            id: 1,
            host: "Alan Turing",
            description: "Machine learning (ML) is the study of computer algorithms that improve automatically through experience and by the use of data."
        },
        {
            title: "General Relativity ",
            id: 2,
            host: "Albert Einstein",
            description: "The theory of general relativity says that the observed gravitational effect between masses results from their warping of spacetime."
        },
        {
            title: "Law of Gravitational",
            id: 3,
            host: "Issac Newtow",
            description: "Newton's law of gravitation, statement that any particle of matter in the universe attracts any other with a force varying directly as the product of the masses and inversely as the square of the distance between them."
        }

    ]

    // const user_id = AppContextProvider.createUser(data);
    const [foundUser, setUser] = useState(null)
    useEffect(() => { //return User from database
        AppContextProvider
            .createUser(data)
            .then((res) => {
                setUser(res.data)
                console.log("hello", foundUser)
                AppContextProvider.findTasks_user_id(1).then((res) => {
                    console.log(res.data)
                    setHostedCardsArray(res.data)
                })
            })

    }, [])



    // const [importantData, setImportantData] = useState(null)
    // useEffect(()=>{
    //         AppContextProvider.getAllUsers().then((res)=>{
    //             setImportantData(res.data)
    //             console.log(res.data)
    //         })
    //     },[])

    // const submitData = ()=>{
    //     AppContextProvider.getAllUsers().then((res)=>{
    //         setImportantData(res.data)
    //     })
    // }

    const people = [
        {
            invited: false,
            id: 0,
            fname: "Josh",
            lname: "Lim",
            imgSrc: "https://scontent-akl1-1.xx.fbcdn.net/v/t1.18169-1/c14.14.173.173a/s100x100/545091_576234675724845_636698896_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=L1sJ7G_ulhAAX_mwAyf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-akl1-1.xx&tp=28&oh=5c716b98f1b92edc4ecd9bbf9f8cdf93&oe=60E5FE7D",
            status: "busy",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000.",
        },
        {
            invited: false,
            id: 1,
            fname: "Simon",
            lname: "Cheng",
            imgSrc: "https://scontent-akl1-1.xx.fbcdn.net/v/t1.6435-1/p100x100/46697735_2369683893266927_5930451247013298176_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=_UTfxZEnav4AX-zZ0VL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-akl1-1.xx&tp=6&oh=2560acbc30a254ac7b40cd86c47af37a&oe=60E47DD6",
            status: "busy",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000.",
        },
        {
            invited: false,
            id: 2,
            fname: "Hajin",
            lname: "Kim",
            imgSrc: "https://scontent-akl1-1.xx.fbcdn.net/v/t1.6435-1/p100x100/193711539_3958024440945392_5869130516519871956_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=W9St27I77bEAX-18tT8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-akl1-1.xx&tp=6&oh=563677a35585248345e781d9307d5bad&oe=60E5A490",
            status: "available",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000.",
        },
        {
            invited: false,
            id: 3,
            fname: "Steven",
            lname: "Kan",
            imgSrc: "https://scontent-akl1-1.xx.fbcdn.net/v/t1.6435-1/p100x100/37550538_1811218005590646_6572964816757981184_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=xvXiopbrgaMAX_J93dX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-akl1-1.xx&tp=6&oh=3abeac0f3fc39c36cc80e8288952a6f2&oe=60E4AE84",
            status: "available",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000."
        },
        {
            invited: false,
            id: 4,
            fname: "James",
            lname: "You",
            imgSrc: "https://scontent-akl1-1.xx.fbcdn.net/v/t1.6435-1/p100x100/133712701_1006757366401138_5795045807967342353_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=LDcOEYe4oHcAX-bwXZc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-akl1-1.xx&tp=6&oh=3be843e3e72539fa886cb360c0752102&oe=60E58951",
            status: "not busy",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000."
        },
        {
            invited: false,
            id: 5,
            fname: "Jinkai",
            lname: "Zhang",
            imgSrc: "https://scontent-akl1-1.xx.fbcdn.net/v/t1.18169-1/p100x100/10430455_10205613713686155_3767434688648202143_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=qXpzcLQT8uUAX9JqvO6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-akl1-1.xx&tp=6&oh=c46ca69c10bb31bb6eeeb6fc8d6c4d5a&oe=60E65D92",
            status: "not busy",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000."
        }
    ];

    const CG = () => {
        return (
            <CreateGame hostedTasksArray={hostedCardsArray} setHostedTasksArray={setHostedCardsArray} setOpen={setCreateTaskOpen} />
        )
    }

    const GD = () => {
        return (
            <GameDetails opener={setOpenGD} />
        )
    }

    return (
        <div>
            <ModalWindowContainer modalContent={GD} open={openGD} setOpen={setOpenGD} />
            <ModalWindowContainer modalContent={GameDetailsReadOnly} open={openGDRO} setOpen={setOpenGDRO} />
            <ModalWindowContainer modalContent={CG} open={createTaskOpen} setOpen={setCreateTaskOpen} />
            <section className={`${classes.invitedSection} ${classes.sectionPadding}`}>
                <div className={classes.hostHeader}>
                    <div className={classes.sectionTitle}>
                        <h1 className={classes.heading}>Members of <u>Project A</u>:</h1>
                    </div>
                </div>
                <Grid container spacing={3}>
                    {people.map((person) => {
                        return (<Grid item lg={1} md={1} sm={4} xs={6} className={classes.taskGrid}>
                            <AvatarCard Lname={person.lname} Fname={person.fname} img={person.imgSrc} />
                        </Grid>);
                    })}
                </Grid>
            </section>

            <section className={`${classes.hostedSection} ${classes.sectionPadding}`}>
                <div className={classes.hostHeader}>
                    <div className={classes.sectionTitle}>
                        <h1 className={classes.heading}>Hosted Tasks:</h1>
                        <HelpIcon className={classes.helpIcon} onMouseEnter={handlePopoverOpenHost} onMouseLeave={handlePopoverCloseHost} />
                    </div>


                    <Button className={classes.createBtn} onClick={() => setCreateTaskOpen(true)}><AddIcon />Create Task</Button>
                </div>
                <Grid container spacing={3}>
                    {hostedCardsArray.map(e => {
                        return (<Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                            <TaskCard hostedTasksArray={hostedCardsArray} setHostedTasksArray={setHostedCardsArray} currentTask={currentTask} setCurrentTask={setCurrentTask} task={e} title={e.title} setOpenGDRO={setOpenGDRO} setOpenGD={setOpenGD} host={"it's not part of the database"} description={e.description} />
                        </Grid>)
                    })}
                </Grid>
            </section>

            <section className={`${classes.invitedSection} ${classes.sectionPadding}`}>
                <div className={classes.sectionTitle}>
                    <h1 className={classes.heading}>Invited Tasks:</h1>
                    <HelpIcon className={classes.helpIcon} onMouseEnter={handlePopoverOpenInvi} onMouseLeave={handlePopoverCloseInvi} />
                </div>
                <Grid container spacing={5}>
                    {invitedCardsArray.map(e => {
                        return (
                            <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                                <TaskCard setOpenGDRO={setOpenGDRO} setOpenGD={setOpenGD} isInvitation={true} host={e.host} description={e.description} title={e.title} />
                            </Grid>
                        )
                    })}
                </Grid>
            </section>

            <Footer />

            <MousePopover anchorEl={anchorElHostHelp} handlePopoverClose={handlePopoverCloseHost}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <img width="400px" alt="img_logo1" src="https://user-images.githubusercontent.com/68091892/124366857-e6cfec00-dca6-11eb-82db-ec6fd028b75d.png" />
                    <br/>
                    <img width="400px" alt="img_logo1" src="https://user-images.githubusercontent.com/68091892/124366779-51ccf300-dca6-11eb-972d-28ced7795574.png" />
                </div>
            </MousePopover>

            <MousePopover anchorEl={anchorElHostInvi} handlePopoverClose={handlePopoverCloseInvi} style={{ width: "auto" }}>
                <img width="550px" alt="img_logo2" src="https://user-images.githubusercontent.com/68091892/124366681-8be9c500-dca5-11eb-8c46-f7880611a5f9.png" />
            </MousePopover>
        </div>
    )
}