import { ImagesCollectionNormalized } from "@common/types/general"
import { FunctionComponent } from "react"
import { Canvas } from '@react-three/fiber'

interface Props {
    images: ImagesCollectionNormalized
}

export const CanvasGallery: FunctionComponent<Props> = (images) => {

    return (
        <Canvas
            camera={{ position: [0, 0, 120], fov: 70 }}
        >

        </Canvas>
    )
}
