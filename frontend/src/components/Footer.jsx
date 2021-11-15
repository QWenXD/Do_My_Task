import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    footer: {
        display: "flex",
        flexDirection: "row",
        padding: "0px 10%",
        boxSizing: "content-box",
        justifyContent: "space-between",
        backgroundColor: "#2b6777",
        color: "white",
    },

    flexRow: {
        display: "flex",
        flexDirection: "row",
    },

    linkIcon: {
        height: "30px",
        alignSelf: "center",
        margin: "0px 5px",
    }
}));

export default function Footer() {
    const  classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.flexRow}>
                <p className="contrast-color paragraph-size">Follow us at: </p>
                <GitHubIcon className={classes.linkIcon} alt="Facebook icon" title="Facebook" />
                <LinkedInIcon className={classes.linkIcon} alt="Linkedin icon" title="Linkedin" />
                <FacebookIcon className={classes.linkIcon} alt="Facebook icon" title="Facebook" />
                <InstagramIcon className={classes.linkIcon} alt="Instagram icon" title="Instagram" />
                <TwitterIcon className={classes.linkIcon} alt="Twitter icon" title="Twitter" />
            </div>
            <p className="contrast-color small-paragraph-size auto-margin-center">© Do-My-Task 2021</p>
        </footer>
    )
}
