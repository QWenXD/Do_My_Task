import Paper from '@material-ui/core/Paper'

import Typography from '@material-ui/core/Typography'
import BuildIcon from '@material-ui/icons/Build';
import './GameDetails.css'
import GameDetailsButtonContainer from './GameDetailsButtonContainer'
const GameDetails = ({opener}) => {
    
    const header = () => {
        return (
            <Paper className="container header">
                <Typography className="header-element-text" variant="h6" component="h6">
                    You are invited for the task:
                </Typography>
                <Typography className="header-element-text" variant="h6" component="h6">
                    <b>Set Up DB for hehehe</b> by <b>Someone</b>
                </Typography>
            </Paper>

        )
    }

    const details = (opener1) => {
        return (
            <>
                <Paper className="container">
                    <Typography variant="body1" component="body1">
                        <b>Description:</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Paper>
                <Paper className="container">
                    <Typography variant="body1" component="body1">
                        <b>Respond by:</b> 31th of June 
                    </Typography>
                    <GameDetailsButtonContainer setOpen={opener1}/>
                </Paper>
            </>

        )
    }
    return (
        <>
            {header()}
            {details(opener)}
        </>

    )
}
export default GameDetails