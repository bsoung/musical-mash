import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as songActions from '../../actions/song_actions';

export class MusicPlayerContainer extends Component {
    componentWillReceiveProps(nextProps) {
        const { soundCloudAudio, setSongState, playing, videos } = this.props;
        const player = videos.player;

        const nextPlayState = nextProps.playing;
        const playerStateHasChanged = playing !== nextPlayState;

        // user paused song
        if (playing && playerStateHasChanged) {
            setSongState(false);
        }

        // user plays song
        if (!playing && playerStateHasChanged) {
            setSongState(true);
        }

        if (player !== null) {
            // stop video loop if song is finished playing
            if (player.getPlayerState() === 1 && !playing) {
                player.pauseVideo();
            }

            // loop video if video finishes before the song
            if (player.getPlayerState() === 0 && playing) {
                player.playVideo();
                player.mute();
            }
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
                <div className="song-container animated zoomIn loading-bg">
                </div>
            )
        }

        let trackDurationPercent = ((currentTime / songs.songDurationSeconds) * 100).toFixed(2);

        return (
            <div className="song-container animated zoomIn loading-bg">
                    <button className="btn striped-shadow white" onClick={this.play.bind(this)}>
                        <span>{playing ? 'Paws' : 'Play'}</span>
                    </button>

                    <div className="ui-bar">
                        <div className="title-text ellipsis">{track.title}</div>
                        <div className="user-text ellipsis">{track.user.username}</div>
                        <div className="progress-bar" style={{width: `${trackDurationPercent}%`}}></div>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
        search: state.search,
        videos: state.videos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSongState: (bool) => dispatch(songActions.setSongState(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerContainer);




