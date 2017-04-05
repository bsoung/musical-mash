import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../actions';

class MusicPlayerContainer extends Component {

    componentWillReceiveProps(nextProps) {
        let currentPlaying = this.props.playing;
        let nextPlaying = nextProps.playing;

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

        // still playing
        if (playing) {
            soundCloudAudio.pause();

        // paused
        } else {
            soundCloudAudio.play();
        }
    }

    render() {
        let { track, playing, songs } = this.props;

        if (!track) {
            return <div>Loading...</div>;
        }

        // ((portion/total) * 100).toFixed(2) for percentage
        let trackDurationPercent = ((this.props.currentTime / songs.songDurationSeconds) * 100).toFixed(2);
        console.log(trackDurationPercent);

        return (
            <div className="mt3 mb3 border p2 rounded b2">
                <button className="btn btn-play bg-teal c-white" onClick={this.play.bind(this)}>
                    {playing ? 'Pause' : 'Play'}
                </button>
                <div className="ui-bar">
                    <h2 className="m0 title-text">{track.title}</h2>
                    <h2 className="user-text">{track.user.username}</h2>
                    <div className="progress-bar" style={{width: `${trackDurationPercent}%`}}></div>
                </div>

            </div>
        );
    }
}


// for pause/play bug, under componentWillMount, maybe check to see what nextProps search term is, if it's not the same, set to pause


const mapStateToProps = (state) => {
    return {
        songs: state.songs,
        search: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSongState: (bool) => dispatch(actions.setSongState(bool))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(MusicPlayerContainer);




