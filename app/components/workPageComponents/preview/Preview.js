import React from 'react'
import styles from './Preview.module.css'
import YouTube from 'react-youtube'

const Preview = ({prop}) => {
  const opts = {
    // borderRadius: "5rem",
    height: '500',
    width: '835',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      loop: 1,
      controls: 0,
      mute: 1,
      playlist: prop.vidId,
    },
  };
  return (
    <div className={styles.previewContainer} >
        <span className={styles.preview}>WEBSITE PREVIEW</span>
        <div className={styles.vidContainer} style={{backgroundColor: prop.bgColor}}>
        <YouTube videoId={prop.vidId} opts={opts} style={{borderRadius:"5rem"}} className={styles.vid}/>
        </div>
    </div>
  )
}

export default Preview