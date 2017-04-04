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
        console.log(this.props);

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
        let trackDurationPercent = (songs.songDurationSeconds);
        console.log(trackDurationPercent);

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




