export const imagePuzzleStyles = () => ({
    root: {
        width: '100%',
        height: '100%',

    },
    images: {
        position: 'absolute',
        display: 'grid',
        top: '50%',
        left: '50%',
        width: '100vw',
        height: '100vh',
        transform: 'translate(-50%, -50%)'
    },
    image_wrapper: {
        position: 'relative',
        overflow: 'hidden',
        '& > span': {
            display: 'block',
            position: 'absolute !important',
            top: 0,
            left: 0,
            width: '100vw !important',
            height: '100vh !important',
        }
    }
})