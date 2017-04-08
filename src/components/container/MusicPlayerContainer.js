import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as songActions from '../../actions/song_actions';

export class MusicPlayerContainer extends Component {
    componentWillReceiveProps(nextProps) {
        const { soundCloudAudio, setSongState, playing, videos } = this.props;
        const player = videos.player;

        const currentPlaying = playing;
        const nextPlaying = nextProps.playing;

        // user paused song
        if (currentPlaying && currentPlaying !== nextPlaying) {
            setSongState(false);
        }

        // user plays song
        if (!currentPlaying && currentPlaying !== nextPlaying) {
            setSongState(true);
        }

        if (player !== null) {
            // stop video loop if song is finished playing
            if (player.getPlayerState() === 1 && !currentPlaying) {
                player.pauseVideo();
            }

            // loop video if video finishes before the song
            if (player.getPlayerState() === 0 && currentPlaying) {
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




