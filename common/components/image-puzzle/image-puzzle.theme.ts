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
        width: '100%',
        height: '100%',
        transform: 'translate(-50%, -50%)'
    },
    image_wrapper: {
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        
    }
})