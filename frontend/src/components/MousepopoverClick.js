import React from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(1),
        },
    }),
);

export default function MouseOverPopover(props) {
    const classes = useStyles();
    const { anchorEl, handlePopoverClose } = props;

    const open = Boolean(anchorEl);
    return (
        <Popover
            id="mouse-over-popover"
            classes={{
                paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
            {props.children}
        </Popover>
    )
}
