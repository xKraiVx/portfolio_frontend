import Image from "next/image";

const NextImage = ({ width, height, ...props }) => {
    console.log(props);
    return ( 
        <Image width={width} height={height}/>
     );
}
 
export default NextImage;