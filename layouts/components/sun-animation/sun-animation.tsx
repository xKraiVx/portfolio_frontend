import { FunctionComponent } from "react"
import { Canvas, useThree } from '@react-three/fiber'
import { Sun } from "./sun"
import { Box } from "@mui/material"
import {
    CubeTextureLoader,
} from "three";
import { Environment, OrbitControls } from "@react-three/drei"
import theme from "@styles/theme/theme"


export const SunAnimation: FunctionComponent = () => {

    return (
        <Box>
            <Canvas
                shadows
                camera={{ position: [15, 0, 0], fov: 25 }}
            >
                <ambientLight intensity={1} />
                <directionalLight intensity={0.5} />
                <Sun size={1.5} />
                <OrbitControls/>
            </Canvas>
        </Box>
    )
}
