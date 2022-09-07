export const isTouchDevice = (): boolean => {
    var ua = navigator.userAgent;
    function is_touch_device() { 
        try {  
            document.createEvent("TouchEvent");  
            return true;  
        } catch (e) {  
            return false;  
        }  
    }

    if ((is_touch_device()) || ua.match(/(iPhone|iPod|iPad)/) 
    || ua.match(/BlackBerry/) || ua.match(/Android/)) {
        return true;
    }
    return false;
}