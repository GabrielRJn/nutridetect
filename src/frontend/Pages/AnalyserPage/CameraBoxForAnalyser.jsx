
import Webcam from "react-webcam";
import { Box, Button } from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";

const CameraBoxForAnalyser = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const retake = () => {
        setImgSrc(null);
      };

      const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
      }, [webcamRef]);

    return (
      <Box className="container" ml="25vw">
        {imgSrc ? (
          <img src={imgSrc} alt="webcam" />
        ) : (
          <Webcam height={900} width={900} ref={webcamRef} />
        )}
        <Box className="btn-container" mt="2vh" ml="22vw" >
          {imgSrc ? (
            <Button onClick={retake}>Retake photo</Button>
          ) : (
            <Button onClick={capture}>Capture photo</Button>
          )}
        </Box>
      </Box>
    );
  };

  export default CameraBoxForAnalyser;