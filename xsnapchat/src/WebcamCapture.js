import React, { useRef } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
}


function WebcamCapture() {
    const webcamRef = useRef(null)

    const capture = useCallback(
        () => {
           const imageSrc = webcamRef.current.getScreenshot();
           console.log(imageSrc);
        },
        [webcamRef],
    )
    
    return (
        <div className="webcamCapture">
            <Webcam
            audio={false}
            height={videoConstraints.height}
            ref = {webcamRef}
            screenshotFormat="image/jpeg"
            width = {videoConstraints.widht}
            videoConstraints={videoConstraints}
            />
            
            <RadioButtonUncheckedIcon
            className="webCapture__button"
            onClick={capture}

            />
        </div>
    )
}

export default WebcamCapture