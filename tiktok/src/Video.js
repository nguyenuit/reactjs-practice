import video1 from './videos/video-1.mp4'
import { forwardRef } from 'react'

function Video(props, ref){
    return (
        <video
            ref={ref}
            src={video1}
            width={300}
        />
    )
}

export default forwardRef(Video)
