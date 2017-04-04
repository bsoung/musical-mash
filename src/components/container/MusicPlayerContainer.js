import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../actions';

class MusicPlayerContainer extends Component {

    componentWillReceiveProps(nextProps) {
        let currentPlaying = this.props.playing;
        let nextPlaying = nextProps.playing;

        // perhaps send play/pause state to redux? 
        // then have video container pick it up and react accordingly?

        // if we pressed pause
        if (currentPlaying && currentPlaying !== nextPlaying) {
            this.props.setSongState(false);
        }

        // if we pressed play
        if (!currentPlaying && currentPlaying !== nextPlaying) {
            this.props.setSongState(true);
        }

    }

    play() {
        let { soundCloudAudio, playing, songs } = this.props;
        let timeLeft = null;

        // still playing
        if (playing) {

            soundCloudAudio.pause();

        // paused
        } else {
            soundCloudAudio.play();
        }
    }

    render() {
        let { track, playing } = this.props;

        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div className="mt3 mb3 border p2 rounded b2">
                <h2 className="m0">{track.title}</h2>
                <h3 className="mt0">{track.user.username}</h3>
                <button className="btn bg-teal c-white" onClick={this.play.bind(this)}>
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>
        );
    }
}


// for pause/play bug, under componentWillMount, maybe check to see what nextProps search term is, if it's not the same, set to pause

// 1. for syncing play/pause on both, have a flag in redux - when song playing, set flag playingAcknolwedged to true
// then in video, set flag back to false, set video to play. same deal when not playing.
// 2. when playing, componentWillUpdate check for redux flag isSongPlaying, if not true, set to true
// in video, check redux state for isSongPlaying, if true, set isVideoPlaying to true
// same pattern for pausing

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSongState: (bool) => dispatch(actions.setSongState(bool))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(MusicPlayerContainer);



