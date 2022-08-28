import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { clickSound } from "./clickSound";

export const Sounds = () => {

    const handleClick = (e, audio) => {
        const target = e.target as HTMLElement | null;
        const isActive = !!target.closest('button, .cursor-active, a');
        if (isActive && audio) {
            audio.play();
        }
    }

    useEffect(() => {
        const click = new Audio(`data:audio/x-wav;base64,${clickSound}`);
        click.volume = .2;
        document.addEventListener('click', (e) => handleClick(e, click));
        return () => {
            document.removeEventListener('click', (e) => handleClick(e, click))
        }

    }, [])
    return (
        <></>
    )
}