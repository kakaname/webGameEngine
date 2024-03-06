import React, {useRef, useEffect} from "react";

function GLDisplay(props){
    const canvasRef = useRef(null);

    useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (gl === null) {
        alert(
        "Unable to initialize WebGL. Your browser or machine may not support it.",
        );
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    }, []);

    return (
        <div id="GLCanvas">
            <canvas ref={canvasRef} width={props.width} height={props.height}/>

        </div>

    );
}

export default GLDisplay;

