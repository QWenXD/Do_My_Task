import { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import BuildIcon from '@material-ui/icons/Build';
import './CreateGame.css'
import TextField from '@material-ui/core/TextField'
import './CreateGameSingleLineInput.css'
import CommonButton from '../CommonButton'
import AppContextProvider from '../../AppContextProvider.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    defaultColor: {
        backgroundColor: "#2b6777",
        color: "white",
    },

    defaultColorBtn: {
        backgroundColor: "#2b6777",
        color: "white",
        "&:hover": {
            backgroundColor: "#52ab98",
        }
    },
}));

const CreateGame = ({hostedTasksArray,setHostedTasksArray, setOpen}) => {
    const classes = useStyles();
    const header = () => {
        return (

            <Paper className="container header">
                <Typography className="header-element-text" variant="h6" component="h6">
                    Create Task to Invite Others
                </Typography>
            </Paper>

        )
    }

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const send = event => {

        const data = {
            "user_id": 1,
            "title": title,
            "description": description,
        }
        console.log(data)

        
        AppContextProvider.createTask(data).then(
            (res)=>{
                setHostedTasksArray(hostedTasksArray.concat(res.data))
                setOpen(false);
            }
        );

        // setHostedTasksArray(hostedTasksArray.concat(data))
        // AppContextProvider.createTask(data);
        
    }

    const details = () => {
        return (
            <Paper className="container">
                <TextField className="container" label="Task Title" variant="outlined"
                    onChange={event => {
                        const { value } = event.target;
                        console.log(value);
                        setTitle(value);
                    }
                    } />
                <div style={{ marginTop: "20px", width: "100%" }}>
                    <TextField
                        style={{ width: "100%" }}
                        id="outlined-multiline-static"
                        label="Task Description"
                        multiline
                        rows={4}

                        variant="outlined"
                        onChange={event => {
                            const { value } = event.target;
                            setDescription(value);
                        }}
                    />
                </div>
                <div style={{ textAlign: "right", paddingTop: "10px", paddingBottom: "10px" }}>
                    <Button className={classes.defaultColorBtn} onClick={send}>Create</Button>
                </div>
            </Paper>
        )
    }
    return (
        <>
            {header()}
            {details()}
        </>

    )
}
export default CreateGame