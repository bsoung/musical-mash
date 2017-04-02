import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../actions';

class MusicPlayerContainer extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.hasOwnProperty('track') === false) {
    //         console.log("we initially have no track, so need to update");
    //         return true;
            
    //      } else if (this.props.track.id !== nextProps.track.id) {
    //         console.log("we don't have the same next props, so need to update")
    //         return true;

    //      } else {
    //         console.log("we have the same props still!!")
    //         return false;
    //      }



    //     return true;

    // }
    
    // componentDidUpdate(nextProps) {
    //     console.log("UPDATED?")
    //     // when press enter, updates once
    //     if (nextProps.hasOwnProperty('track')) {
    //         if (this.props.songs.songDurationSeconds === null) {
    //             console.log("OUR TRACK IS NULL, setting track");
    //             this.props.setSongDuration(nextProps.track);
    

    //         } else if (this.props.songs.songDurationSeconds.id !== nextProps.track.id) {
    //             console.log("NOT EQUAL");
    //             this.props.setSongDuration(nextProps.track);


    //         } else {
    //             console.log("we are on the same song, no need to update")

    //         }
    //     }
    //     // keeps updating every ms the song is being played
        

    //     console.log(nextProps, 'NEXT UPDATE');
    // }

    play() {
        let { soundCloudAudio, playing } = this.props;
        let timeLeft = null;

        // if (this.props.duration > 0) {
        //     timeLeft = this.props.duration - this.props.currentTime;
        //     this.props.setSongDuration(timeLeft);
        // }     
            
        // // set entire track
        // this.props.setSongDuration(this.props.track);

        // console.log(this.props)
        


        if (playing) {
            soundCloudAudio.pause();
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



