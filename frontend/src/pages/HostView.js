// import React from 'react';
// import MemberCard from '../components/MemberCardGrid';
// import MemberCardGrid from '../components/MemberCardGrid';
// import MemberCardGrid from '../components/MemberCardGrid';
// import { makeStyles } from '@material-ui/core/styles';

import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MemberCard from '../components/MemberCard';
import Grid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import HelpIcon from '@material-ui/icons/Help';
import Footer from '../components/Footer';
import MousePopover from '../components/MousePopover';
import Typography from '@material-ui/core/Typography'
import AppContextProvider from '../AppContextProvider';
import axios from 'axios';
import http from "../http-common.js";
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: "40px",
    },

    // hostHeader: {
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    // },

    createBtn: {
        backgroundColor: "#2b6777",
        height: "fit-content",
        color: "#ffffff",
        marginTop: "auto",
        marginBottom: "auto",
        padding: "10px",
        "&:hover": {
            backgroundColor: "#547e8a",
        }
    },

    sectionPadding: {
        paddingLeft: "7%",
        paddingRight: "7%",
        paddingTop: "15px",
        paddingBottom: "80px",
    },

    sectionTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    helpIcon: {
        marginLeft: "10px",
        marginRight: "10px",
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

    btnGrid: {
        maxWidth: "100%",
        padding: "central",
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
    },
    btn: {
        // "padding": "2",
        margin: "5px 15px",
        "border-style": "solid",
        // borderWidth: "15px",
        borderColor: "transparent",
        backgroundColor: "#c8d8e4",
        color: "black",
        "&:hover": {
            backgroundColor: "#dbdbdb",
        },
    },
    btn2: {
        // "padding": "2",
        margin: "5px 15px",
        "border-style": "solid",
        // borderWidth: "15px",
        borderColor: "transparent",
        backgroundColor: "#2b6777",
        color: "white",
        "&:hover": {
            backgroundColor: "#52ab98",
        },
    },
    invisible: {}
}));


export default function HostView({currentTask, setCurrentTask}) {
    const [people, setPeople] = useState([
        {
            invited: false,
            id: 0,
            name: "Josh Lim",
            status: "busy",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000.",
        },
        {
            invited: false,
            id: 1,
            name: "Simon Cheng",
            status: "busy",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000.",
        },
        {
            invited: false,
            id: 2,
            name: "Hajin Kim",
            status: "available",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000.",
        },
        {
            invited: false,
            id: 3,
            name: "Steven Kan",
            status: "available",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000."
        },
        {
            invited: false,
            id: 4,
            name: "James You",
            status: "not busy",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000."
        },
        {
            invited: false,
            id: 5,
            name: "Jinkai Zhang",
            status: "not busy",
            host: "Weak af guy who can't finish this task alone",
            description: "I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000."
        }
    ])

    // const [list, setList] = useState([])
    // useEffect(()=>{ //find all tasks related to the user_id
    //     AppContextProvider.getAllUsers().then((res)=>{
    //         for (let i = 0; i < res.data.length; i++){
    //             var data = {
    //                 invited: false,
    //                 id: res.data[i].id,
    //                 name: res.data[i].name,
    //                 status: ["available","not busy","busy"][res.data[i].status],
    //                 host: "",
    //                 description: ""
    //             }
                
    //             list.push(data)
    //         }})
    //         setPeople(list)
    //         console.log(people)
    //     },[])

    const classes = useStyles();
    const history = useHistory();
    const getPeopleToInvite = (ppl) => {
        return ppl.filter(e => e.invited === true).map(e => e.name).join(', ')
    }

    const [update, setUpdate] = useState(false)
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

    
    
    window.scrollTo(0, 0);

    const submit = () => {
        const ppl = people.filter(e=>e.invited===true)
        for (let i = 0; i < ppl.length; i++){
            if (ppl[i].invited === true){
                const data = {
                    task_id: currentTask.id, //retrieve from task's details **hard coded
                    user_id: ppl[i].id
                }
                AppContextProvider.createInvitation(data)
            }
        }
        history.push("/Project-A")
    }

    return (
        <div>
            <section className={`${classes.hostedSection} ${classes.sectionPadding}`}>
                {/* <div className={classes.hostHeader}> */}

                <div>
                    <div style={{float:"left"}}>
                        <Typography variant="h4">
                            <b>Task: </b>{currentTask.title?currentTask.title:"not here yet"}
                        </Typography>

                        {/*<h1 className={classes.heading}>*/}
                        {/*    <HelpIcon className={classes.helpIcon} onMouseEnter={handlePopoverOpenHost} onMouseLeave={handlePopoverCloseHost} />*/}
                        {/*</h1>*/}
                    </div>
                    <div style={{float:"right"}}>
                        <Button className={classes.btn2} onClick={() => submit()}>
                            Submit
                        </Button>
                        <Button className={classes.btn} onClick={() => history.push("/Project-A")}>
                            Cancel
                        </Button>
                    </div>
                </div>
                <div style={{clear: "both"}}>
                    <Typography variant="body1">

                        Send Invitation to: {getPeopleToInvite(people)}
                        {update?"":""}
                        <br/>
                    </Typography>
                </div>


                {/* <Button className={classes.createBtn}><AddIcon />Create Task</Button> */}
                {/* </div> */}
                <Grid container spacing={3}>
                    {people.map(e => {
                        return <Grid item lg={3} md={3} sm={6} xs={12} key={e.id} className={classes.taskGrid}>
                            <MemberCard name={e.name} status={e.status} host={e.host} description={e.description}
                                        id={e.id} invited={e.invited} people={people} setPeople={setPeople} dummy={update} setDummy={setUpdate}/>
                        </Grid>
                    })}
                </Grid>
            </section>

            <Footer/>

            <MousePopover anchorEl={anchorElHostHelp} handlePopoverClose={handlePopoverCloseHost}>
                <img
                    src="https://user-images.githubusercontent.com/41566813/124340855-4cbb6580-dc0c-11eb-8979-2cbb5882bfb0.png"/>
            </MousePopover>

            <MousePopover anchorEl={anchorElHostInvi} handlePopoverClose={handlePopoverCloseInvi}>
                <img
                    src="https://user-images.githubusercontent.com/41566813/124340855-4cbb6580-dc0c-11eb-8979-2cbb5882bfb0.png"/>
            </MousePopover>
        </div>
    )
}

// export default function HostView2() {
//     // const classes = useStyles();
//     const classes = useStyles();
//     return (


//         <div className={classes.hostedSection}> 
//             <h1>Task: Implementing UI</h1>
//             {/* <h2>Hosted Tasks:</h2> */}
// <section>
//     <MemberCardGrid> this</MemberCardGrid>
// </section>
//             {/* <h2>Invited Tasks</h2> */}
//             <section>

//             </section>
//         </div>
//     )
// }
