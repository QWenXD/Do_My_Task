import { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import BuildIcon from '@material-ui/icons/Build';
import './CreateProject.css'
import TextField from '@material-ui/core/TextField'
import './CreateProjectSingleLineInput.css'
import CommonButton from '../CommonButton'
import AppContextProvider from '../../AppContextProvider.js';

const CreateProject = () => {
    const header = () => {
        return (
            <Paper className="container header">
                <Typography className="header-element-text" variant="h6" component="h6">
                    Create Project
                </Typography>
            </Paper>

        )
    }

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [emailList, setEmailList] = useState();

    const send = event => {

        const data = {
            "user_id": 1,
            "title": title,
            "description": description,
        }
        // console.log(data)
        // AppContextProvider.createTask(data);
    }

    const details = () => {
        return (
            <Paper className="container">
                <TextField className="container" label="Project Title" variant="outlined"
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
                        label="Project description"
                        multiline
                        rows={4}

                        variant="outlined"
                        onChange={event => {
                            const { value } = event.target;
                            setDescription(value);
                        }}
                    />

                    <TextField
                        style={{ width: "100%" }}
                        id="outlined-multiline-static"
                        label="Participants email (please enter one email per line)"
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
                    <CommonButton name="Create" color="primary" cb={send} />
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
export default CreateProject