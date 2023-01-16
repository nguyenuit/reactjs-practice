import video1 from './videos/video-1.mp4'

function Video(props){
    return (
        <video
            ref={props.ref}
            src={video1}
            width={500}
        />
    )
}

export default Video
