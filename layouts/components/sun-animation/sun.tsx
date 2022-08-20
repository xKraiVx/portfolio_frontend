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
    ShaderMaterial,
    SphereBufferGeometry,
    Mesh
} from 'three'
import fragmentSunShader from './sunShader/fragment.glsl';
import vertexSunShader from './sunShader/vertex.glsl';
import fragmentShader from './shader/fragment.glsl';
import vertexShader from './shader/vertex.glsl';

interface BoxProps {
    position?: number[]
}


export const Sun: FunctionComponent<BoxProps> = ({ position = [] }) => {
    const { scene, gl } = useThree();
    const sun = useRef<JSX.IntrinsicElements["mesh"] | undefined>()
    const perline = useRef<JSX.IntrinsicElements["mesh"] | undefined>()


    const cubeRenderTarget = new WebGLCubeRenderTarget(128, {
        format: RGBAFormat,
        generateMipmaps: true,
        minFilter: LinearMipmapLinearFilter,
        encoding: sRGBEncoding
    });

    const cubeCamera = new CubeCamera(0.1, 10, cubeRenderTarget);

    /* const materialPerlin = new ShaderMaterial({
        side: DoubleSide,
        uniforms: {
            time: { value: 0 },
            resolution: { value: new Vector4() }
        },
        vertexShader,
        fragmentShader
    })

    const geometryPerlin = new SphereBufferGeometry(1, 32, 32);
    const perlin = new Mesh(geometryPerlin, materialPerlin)
    scene.add(perlin); */

    const materialSun = new ShaderMaterial({
        side: DoubleSide,
        uniforms: {
            time: { value: 0 },
            resolution: { value: new Vector4() },
            uPerlin: { value: null }
        },
        vertexShader: vertexSunShader,
        fragmentShader: fragmentSunShader
    })

    const geometrySun = new SphereBufferGeometry(2, 32, 32);


    const sunMesh = new Mesh(geometrySun, materialSun)
    scene.add(sunMesh);

    useFrame((state, delta) => {
        const timeValue = perline.current?.material?.uniforms.time.value

        if (!timeValue && timeValue !== 0) {
            return;
        }
        cubeCamera.update(gl, scene);
        /* materialPerlin.uniforms.time.value = state.clock.elapsedTime; */
        perline.current.material.uniforms.time.value = state.clock.elapsedTime;
        materialSun.uniforms.uPerlin.value = cubeRenderTarget.texture;
        materialSun.uniforms.time.value = state.clock.elapsedTime;



        /* const timeValue = sun.current?.material?.uniforms.time.value

        if (!timeValue && timeValue !== 0) {
            return;
        }

        cubeCamera.update(gl, scene);
        sun.current.material.uniforms.uPerlin.value = cubeRenderTarget.texture;
        sun.current.material.uniforms.time.value = state.clock.elapsedTime;
        perline.current.material.uniforms.time.value = state.clock.elapsedTime */
    })


    return (
        <>
            {/* <mesh name="sun" ref={sun} position={[0, 0, 0]}>
                <sphereBufferGeometry args={[1, 32, 32]} />
                <shaderMaterial
                    fragmentShader={fragmentSunShader}
                    vertexShader={vertexSunShader}
                    side={DoubleSide}
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
            </mesh> */}
            <mesh name="perline" ref={perline} position={[0, 0, 0]}>
                <sphereBufferGeometry args={[1, 32, 32]} />
                <shaderMaterial
                    side={DoubleSide}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
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
