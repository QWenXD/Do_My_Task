import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';
import MemberCard from './MemberCard';

const useStyles = makeStyles((theme) => ({

    MemberCardGridContainer: {
        margin: "auto",
        padding: "20px",
        width: "100%",
    },

    MemberCardGrid: {
        display: "flex",
        "align-content": "center",
        "justify-content": "center",
        padding: "20px",
    },

    MemberCardObject: {
        margin: "20px",
        display: "flex",
    }

}));

export default function MemberCardGrid(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.MemberCardGridContainer}>
                <Grid key={"card_"} className={classes.MemberCardGrid}>
                    <Grid className={classes.MemberCardObject}>
                        <MemberCard name="Simon Cheng" status="busy" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>
                    <Grid className={classes.MemberCardObject}>
                        <MemberCard name="Hajin Kim" status="busy" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>
                    <Grid className={classes.MemberCardObject}>
                        <MemberCard name="Kan Qi Wen" status="available" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.MemberCardGridContainer}>
                <Grid key={"card_"} className={classes.MemberCardGrid}>
                    <Grid className={classes.MemberCardObject}>
                        <MemberCard name="James You" status="available" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>
                    <Grid className={classes.MemberCardObject}>
                        <MemberCard name="Jinkai Zhang" status="not busy" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>
                    <Grid className={classes.MemberCardObject}>
                    <MemberCard name="Josh Xi" status="not busy" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}
