import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import CreateProject from '../components/create-project/CreateProject';
import ModalWindowContainer from './ModalWindowContainer';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        height: "250px",
        maxWidth: "100%",
        overflow: "auto",
        "&:hover": {
            opacity: 0.6,
            cursor: "pointer",
        },
    },
    plusIcon: {
        margin: "auto",
    },
    addCard: {
        display: "flex",
    },

    projectheader: {
        backgroundColor: "#2b6777",
        color: "#ffffff",
        textAlign: "center",
    },
}));

export default function ProjectCard(props) {
    const classes = useStyles();
    const [createProject, openCreateProject] = React.useState(false);
    const history = useHistory();

    return (<>
        {!props.isAdd?
            <Grid item lg={3} md={3} sm={6} xs={12} className={classes.projectgrid}>
                <Card className={classes.card} onClick={() => history.push("/Project-A")}>
                    <CardHeader className={classes.projectheader} title="Project A" />
                    <CardContent><div>This project involves members of the team completing a website in the event of Hackathon within a time limit of 48 hours.</div></CardContent>
                </Card>
            </Grid>
            :
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <Card className={`${classes.card} ${classes.addCard}`} onClick={() => openCreateProject(true)}>
                    <AddIcon fontSize="large" className={classes.plusIcon} />
                </Card>
                <ModalWindowContainer modalContent={CreateProject} open={createProject} setOpen={openCreateProject} />
            </Grid>
        }
        </>
    )
}
