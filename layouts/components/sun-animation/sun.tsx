import { FunctionComponent, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
    WebGLCubeRenderTarget,
    LinearMipmapLinearFilter,
    CubeCamera,
    RGBAFormat,
    sRGBEncoding,
    Vector2,
    Vector4,
    DoubleSide,
    BackSide,
    ShaderMaterial,
    SphereBufferGeometry,
    Euler,
    Mesh
} from 'three'
import fragmentSunShader from './sunShader/fragment.glsl';
import vertexSunShader from './sunShader/vertex.glsl';
import fragmentPerlineShader from './perlineShader/fragment.glsl';
import vertexPerlineShader from './perlineShader/vertex.glsl';
import fragmentAroundShader from './aroundShader/fragment.glsl';
import vertexAroundShader from './aroundShader/vertex.glsl';

interface BoxProps {
    position?: number[]
}

export const Sun: FunctionComponent<BoxProps> = ({ position = [] }) => {
    const { scene, gl } = useThree();
    const sun = useRef<JSX.IntrinsicElements["mesh"] | undefined>()
    const perline = useRef<JSX.IntrinsicElements["mesh"] | undefined>()
    const around = useRef<JSX.IntrinsicElements["mesh"] | undefined>()


    const cubeRenderTarget = new WebGLCubeRenderTarget(128, {
        format: RGBAFormat,
        generateMipmaps: true,
        minFilter: LinearMipmapLinearFilter,
        encoding: sRGBEncoding
    });

    const cubeCamera = new CubeCamera(0.1, 10, cubeRenderTarget);

    useFrame((state, delta) => {
        const timeValue = sun.current?.material?.uniforms.time.value

        if (!timeValue && timeValue !== 0) {
            return;
        }

        cubeCamera.update(gl, scene);
        sun.current.material.uniforms.uPerlin.value = cubeRenderTarget.texture;
        sun.current.material.uniforms.time.value = state.clock.elapsedTime;
        around.current.material.uniforms.time.value = state.clock.elapsedTime;
    });


    return (
        <>
            <mesh name="sun" ref={sun} position={[0, 0, 0]}>
                <sphereBufferGeometry args={[2, 64, 64]} />
                <shaderMaterial
                    side={DoubleSide}
                    fragmentShader={fragmentSunShader}
                    vertexShader={vertexSunShader}
                    uniforms={{
                        time: {
                            value: 0
                        },
                        resolution: {
                            value: new Vector2()
                        },
                        uPerlin: {
                            value: null
                        }
                    }}
                />
            </mesh>
            <mesh name="perline" ref={perline} position={[0, 0, 0]}>
                <sphereBufferGeometry args={[1.9, 64, 64]} />
                <shaderMaterial
                    side={DoubleSide}
                    fragmentShader={fragmentPerlineShader}
                    vertexShader={vertexPerlineShader}
                    uniforms={{
                        time: {
                            value: 0
                        },
                        resolution: {
                            value: new Vector4()
                        }
                    }}
                />
            </mesh>
            <mesh name="around" ref={around} position={[0, 0, 0]}>
                <sphereBufferGeometry args={[2.5, 64, 64]} />
                <shaderMaterial
                    side={BackSide}
                    fragmentShader={fragmentAroundShader}
                    vertexShader={vertexAroundShader}
                    uniforms={{
                        time: {
                            value: 0
                        },
                        resolution: {
                            value: new Vector4()
                        }
                    }}
                />
            </mesh>
        </>

    )
}
