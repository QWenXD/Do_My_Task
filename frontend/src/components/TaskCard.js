import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardActions, Button} from '@material-ui/core';
// import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Tooltip from '@material-ui/core/Tooltip';
import ModalWindowContainer from './ModalWindowContainer'
import AppContextProvider from '../AppContextProvider';
import { useHistory } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "320px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },

    header: {
        textAlign: "center",
        backgroundColor: "#2b6777",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#ffffff",
        minHeight: "60px",
    },

    content: {
        display: "flex",
        flexDirection: "column",
    },

    action: {
        display: "flex",
        justifyContent: "space-between",
    },

    noTopBotMargin: {
        marginTop: 0,
        marginBottom: 0,
    },

    delegateBtn: {
        backgroundColor: "#c8d8e4",
        color: "black",
        "&:hover": {
            backgroundColor: "#f1f0ff",
        },
    },

    detailsBtn: {
        backgroundColor: "#d4d4d4",
        color: "black",
        "&:hover": {
            backgroundColor: "#f2f2f2",
        }
    },

    cardTitle: {
        flexGrow: 1,
    },

    detailsAndAcceptBtn: {
        backgroundColor: "#c8d8e4",
        "&:hover": {
            backgroundColor: "#e5e3ff",
        },
        flexGrow: 1,
    },

    stateIcon: {
        paddingTop: "5px",
        paddingLeft: "5px",
        "&:hover": {
            cursor: "pointer",
        },
    },

    closeIcon: {
        color: "#ffa3b4",
        paddingTop: "5px",
        paddingRight: "5px",
        "&:hover": {
            cursor: "pointer",
            color: "#e8a5b1"
        },
    },
}));

export default function TaskCard(props) {
    const classes = useStyles();
    const {task, hostedTasksArray, setHostedTasksArray, currentTask, setCurrentTask,title, setOpenGDRO, setOpenGD} = props;
    let match = useRouteMatch();
    const history = useHistory();
    console.log(task)
    const dlt = () => {
        AppContextProvider.deleteTask(task.id);
        console.log(hostedTasksArray)
        const copy = hostedTasksArray.filter(e => e.id !==task.id)
        setHostedTasksArray(copy)
    }
    return (
        <Card className={classes.root}>
            <header className={classes.header}>
                {!props.isInvitation ?
                    <Tooltip title="Pending"><HourglassEmptyIcon className={classes.stateIcon}/></Tooltip> : <></>}

                <h1 className={classes.cardTitle}>{title}</h1>

                {!props.isInvitation ? <RemoveCircleIcon onClick={() => dlt()} className={classes.closeIcon}/> : <></>}
            </header>

            <CardContent className={classes.content}>
                {/* <p className={classes.noTopBotMargin}><b>Host:</b> {props.host}</p> */}
                <p className={classes.noTopBotMargin}><b>Description:</b> {props.description}</p>
            </CardContent>

            <CardActions className={classes.action}>
                {!props.isInvitation ? <>
                            <Button onClick={() => {history.push("/delegate");setCurrentTask(task);console.log(task)}} className={classes.delegateBtn}>
                                Delegate
                            </Button>


                        <Button className={classes.detailsBtn} onClick={() => setOpenGDRO(true)}>
                            Details
                        </Button> </> :
                    <>
                        <Button className={classes.detailsAndAcceptBtn} onClick={() => setOpenGD(true)}>
                            View And Accept/Decline
                        </Button>
                    </>
                }

            </CardActions>
        </Card>
    )
}