import { VideoNormalized } from "@common/types/general";
import { Box, SxProps, Theme } from "@mui/material";
import { FunctionComponent } from "react";

interface Props {
    video: VideoNormalized;
    sx?: SxProps<Theme>;
    autoPlay?: boolean;
    controls?: boolean;
    muted?: boolean;
    loop?: boolean;
    playsInline?: boolean;
}

export const NextVideo: FunctionComponent<Props> = ({
    video,
    sx,
    autoPlay = false,
    controls = true,
    muted = false,
    loop = false,
    playsInline = false
}) => {
    const { url } = video || {};

    const path = process.env.NEXT_PUBLIC_BACK_URL || '';

    return (
        <Box sx={sx}>
            <video
                src={`${path}${url}`}
                controls={controls}
                muted={autoPlay ? true : muted}
                autoPlay={autoPlay}
                loop={loop}
                playsInline={true}
            />
        </Box>
    );
}