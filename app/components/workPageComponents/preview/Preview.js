import React, {useRef} from 'react'
import styles from './Preview.module.css'
import YouTube from 'react-youtube'
import { useInView } from 'framer-motion'

const Preview = ({prop}) => {
  const vidRef = useRef(null)
  const isInView = useInView(vidRef, {once: true})
  const opts = {
    // borderRadius: "5rem",
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: isInView ? 1 : 0,
      loop: 1,
      controls: 1,
      mute: 1,
      playlist: prop.vidId,
    },
  };
  return (
    <div className={styles.previewContainer} >
        <span className={styles.preview}>WEBSITE PREVIEW</span>
        <div ref={vidRef} className={styles.vidContainer} style={{backgroundColor: prop.bgColor}}>
        <YouTube videoId={prop.vidId} opts={opts} style={{borderRadius:"2rem"}} className={styles.vid}/>
        </div>
    </div>
  )
}

export default Preview