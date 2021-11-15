import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from '../components/ProjectCard'
import Grid from '@material-ui/core/Grid';
import CreateProject from '../components/create-project/CreateProject';
import ModalWindowContainer from '../components/ModalWindowContainer';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: "40px 7%",
    },
}));

export default function Home(props) {
    const classes = useStyles();
    

    return (
        <>
            
            <Grid container spacing={2} className={classes.root}>
                {/* {props.projects.map((name, description) => {
                <ProjectCard description={description} name={name}/>
            })} */}
                <ProjectCard />
                <ProjectCard isAdd={true}/>
            </Grid>
        </>
    )
}
