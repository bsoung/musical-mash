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



