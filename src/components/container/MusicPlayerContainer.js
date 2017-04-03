import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../actions';

class MusicPlayerContainer extends Component {
    play() {
        let { soundCloudAudio, playing } = this.props;
        let timeLeft = null;

        if (playing) {
            console.log("still playing?")
            soundCloudAudio.pause();
        } else {
            console.log("paused")
            soundCloudAudio.play();
        }
    }

    render() {
        let { track, playing } = this.props;

        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{track.title}</h2>
                <h3>{track.user.username}</h3>
                <button onClick={this.play.bind(this)}>
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setSongDuration: (duration) => dispatch(actions.setSongDuration(duration))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(MusicPlayerContainer);



