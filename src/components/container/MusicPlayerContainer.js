import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../actions';

export class MusicPlayerContainer extends Component {

    componentWillReceiveProps(nextProps) {
        const { soundCloudAudio, setSongState, playing } = this.props;

        const currentPlaying = playing;
        const nextPlaying = nextProps.playing;

        // user pressed pause
        if (currentPlaying && currentPlaying !== nextPlaying) {
            // pause the song if new search is initiated while current song is still playing
            soundCloudAudio.pause();

            setSongState(false);
        }

        // user pressed play
        if (!currentPlaying && currentPlaying !== nextPlaying) {
            setSongState(true);
        }
    }

    play() {
        const { soundCloudAudio, playing } = this.props;
        
        if (!playing) {
            soundCloudAudio.play();

        } else {
            soundCloudAudio.pause();
        }
    }

    render() {
        const { track, playing, songs, currentTime } = this.props;

        if (!track) {
            return (
                <div className="mt3 mb3 border p2 rounded b2">
                  <h2 className="m0">Loading song name...</h2>
                  <h3 className="mt0">Loading author name...</h3>
                </div>
            )
        }

        let trackDurationPercent = ((currentTime / songs.songDurationSeconds) * 100).toFixed(2);

        return (
            <div className="musicplayer-container mt3 mb3 border p2 rounded b2">
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

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerContainer);




