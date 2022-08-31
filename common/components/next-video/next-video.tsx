import { VideoNormalized } from "@common/types/general";
import { Box, SxProps, Theme } from "@mui/material";
import { FunctionComponent } from "react";

interface Props {
    video: VideoNormalized;
    sx?: SxProps<Theme>;
    autoPlay?: boolean;
    controls?: boolean;
    mute?: boolean;
    loop?: boolean;
}

export const NextVideo: FunctionComponent<Props> = ({
    video,
    sx,
    autoPlay = false,
    controls = true,
    mute = false,
    loop = false
}) => {
    const { url } = video || {};

    const path = process.env.NEXT_PUBLIC_BACK_URL || '';

    return (
        <Box sx={sx}>
            <video
                src={`${path}${url}`}
                controls={controls}
                muted={autoPlay ? true : mute}
                autoPlay={autoPlay}
                loop={loop}
                playsInline={autoPlay}
            />
        </Box>
    );
}