import React from 'react'
import { useDataLayerValue } from './DataLayer'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <img 
                className="footer-logo"
                src="https://images.squarespace-cdn.com/content/v1/580a9280579fb3cd86e8873f/1495220952714-XYGVCDWT69OXJH4LRQAV/IRATION_FLY-WITH-ME_GENERIC-BG.jpg?format=2500w" 
                alt="" />
                <div className="footer-songInfo">
                    <h4>Iration</h4>
                    <p>Fly With Me</p>
                </div>

            </div>

            <div className="footer-center"> 
                <ShuffleIcon className="footer-green" />
                <SkipPreviousIcon className="footer-icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
                <SkipNextIcon className="footer-icon" />
                <RepeatIcon className="footer-green" />
            </div>

            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Footer
