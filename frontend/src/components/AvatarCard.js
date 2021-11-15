import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "transparent",
        padding: "5px",
        maxWidth: "100%",
        borderRadius: "20px",
        backgroundColor: "#f2f2f2",
    },

    img: {
        height: "50px",
        width: "50px",
    },

    paragraph: {
        fontSize: "12px",
        marginTop: "2px",
        marginBottom: "2px",
    },    
}));


export default function AvatarCard(props) {
    const fname = props.Fname
    const lname = props.Lname
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Avatar className={classes.img} src={props.img}>{fname.charAt(0).toUpperCase() + lname.charAt(0).toUpperCase()}</Avatar>
            <p className={classes.paragraph}>{fname + "." + lname.charAt(0).toUpperCase()}</p>
        </Card>
    )
}
