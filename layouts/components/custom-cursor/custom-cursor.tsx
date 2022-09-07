import { isTouchDevice } from "@common/utils/general/is-touch-device";
import { Box, useTheme } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { customCursorStyles } from "./custom-cursor.theme";

interface CursorPosition {
    x: number,
    y: number,
}

type CursorState = | 'active' | 'common';

let updateMouse = true;
const updateMouseDelay = 1;

export const CustomCursor: FunctionComponent = () => {
    const theme = useTheme();
    const styles = customCursorStyles(theme);
    const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 })
    const [cursorState, setCursorState] = useState<CursorState>('common');



    const handleMousemove = (e: MouseEvent) => {
        const { pageX, pageY } = e;
        const target = e.target as HTMLElement | null;
        const isActive = !!target.closest('button, .cursor-active, a');


        if (updateMouse) {
            updateMouse = false;
            setTimeout(() => {
                updateMouse = true
            }, updateMouseDelay);

            if (isActive) {
                setCursorState('active')
            } else {
                setCursorState('common')
            }
            setCursorPosition((prev) => ({ ...prev, x: pageX, y: pageY }))
        }

    }

    useEffect(() => {
        const isTouch = isTouchDevice();
            
        if (isTouch) {
            return;
        }

        document.body.classList.add('hide-cursor');
        document.addEventListener('mousemove', handleMousemove);
        return () => {
            document.body.classList.remove('hide-cursor');
            document.removeEventListener('mousemove', handleMousemove);
        }
    }, []);

    return (
        <Box
            style={{
                top: cursorPosition.y,
                left: cursorPosition.x
            }}
            sx={styles.root}
            className={cursorState}
        />
    )
}