import { FunctionComponent, useEffect, useMemo, useRef } from "react";
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
    size?: number
}

let timer;

export const Sun: FunctionComponent<BoxProps> = ({ size = 1 }) => {
    const { scene, gl } = useThree();
    const cubeRenderTarget = new WebGLCubeRenderTarget(128, {
        format: RGBAFormat,
        generateMipmaps: true,
        minFilter: LinearMipmapLinearFilter,
        encoding: sRGBEncoding
    });

    const cubeCamera = new CubeCamera(0.1, 10, cubeRenderTarget);

    const sunUniforms = useMemo(
        () => ({
            time: {
                value: 0
            },
            resolution: {
                value: new Vector2()
            },
            uPerlin: {
                value: null
            }
        }),
        []
    )
    const perlinUniforms = useMemo(
        () => ({
            time: {
                value: 0
            },
            resolution: {
                value: new Vector2()
            },
        }),
        []
    )
    const aroundUniforms = useMemo(
        () => ({
            time: {
                value: 0
            },
            resolution: {
                value: new Vector2()
            },
        }),
        []
    )

    useFrame((state, delta) => {
        cubeCamera.update(gl, scene);
        
        sunUniforms.uPerlin.value = cubeRenderTarget.texture;
        sunUniforms.time.value = state.clock.elapsedTime;
        aroundUniforms.time.value = state.clock.elapsedTime;
    });


    return (
        <>
            <mesh name="sun" position={[0, 0, 0]}>
                <sphereBufferGeometry args={[size, 64, 64]} />
                <shaderMaterial
                    side={DoubleSide}
                    fragmentShader={fragmentSunShader}
                    vertexShader={vertexSunShader}
                    uniforms={sunUniforms}
                />
            </mesh>
            <mesh name="perline" position={[0, 0, 0]}>
                <sphereBufferGeometry args={[size * 0.9, 64, 64]} />
                <shaderMaterial
                    side={DoubleSide}
                    fragmentShader={fragmentPerlineShader}
                    vertexShader={vertexPerlineShader}
                    uniforms={perlinUniforms}
                />
            </mesh>
            <mesh name="around" position={[0, 0, 0]}>
                <sphereBufferGeometry args={[size * 1.1, 64, 64]} />
                <shaderMaterial
                    side={BackSide}
                    fragmentShader={fragmentAroundShader}
                    vertexShader={vertexAroundShader}
                    uniforms={aroundUniforms}
                />
            </mesh>
        </>

    )
}
