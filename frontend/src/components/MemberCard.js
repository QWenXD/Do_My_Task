import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },

    header: {
        textAlign: "center",
        backgroundColor: "#2b6777",
        // backgroundColor: " #387366",
        // backgroundColor: "#52ab98 ",
        color:"#f2f2f2"
    },

    content: {
        display: "flex",
        flexDirection: "column",
    },

    action: {
        display: "flex",
        justifyContent: "space-between",
        float: "right",
    },

    noTopBotMargin: {
        marginTop: 0,
        marginBottom: 0,
    },

    invisible: {
        visibility: "hidden"
    },

    delegateBtn: {
        backgroundColor: "blue",
        color: "white",
        "&:hover": {
            backgroundColor: "#8478ff",
        },
        visibility: "hidden"
    },

    detailsBtn: {
        backgroundColor: "#c8d8e4",
        color: "black",
        "&:hover": {
            backgroundColor:"#f1f0ff",
        },
    },

    red: {
        color: "red",
        fontWeight: "normal"
    },
    green: {
        color: "green",
        fontWeight: "normal"
    },
    purple: {
        color: "purple",
        fontWeight: "normal"
    }
}));

export default function TaskCard(props) {
    const {people, setPeople, invited, id} = props
    const [update, setUpdate] = useState(false)
    const classes = useStyles();
    // console.log(props.status)

    return (
        <Card className={classes.root}>
            <CardHeader title={props.name} className={classes.header} />

            <CardContent className={classes.content}>
                <p className={classes.noTopBotMargin}><b>Status:</b> <span style={{color: props.status.toLowerCase()==="busy"?"red":props.status.toLowerCase()==="available"?"green":"purple"}}>{props.status.toUpperCase()}</span></p>
                <p className={classes.noTopBotMargin, classes.invisible}><b>Description:</b> {props.description}</p>
            </CardContent>

            <CardActions className={classes.action}>
                <Button className={classes.detailsBtn} onClick={()=>{
                    let people_copy = people
                    let person = people[id];
                    person['invited'] = !person['invited']
                    people_copy[id] = person
                    setPeople(people_copy)
                    props.setDummy(!props.dummy)
                    setUpdate(!update)
                }}>
                    {people[id]['invited']===false?"Invite":"Cancel Invitation"}
                </Button>
            </CardActions>
        </Card>
    )
}