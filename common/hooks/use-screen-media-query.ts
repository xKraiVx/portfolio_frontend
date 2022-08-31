import { useEffect, useState } from 'react';

export function useScreenMediaQuery(): {
	isLessThan480: boolean;
	isLessThan600: boolean;
	isLessThan768: boolean;
	isLessThan900: boolean;
	isLessThan1024: boolean;
	isLessThan1200: boolean;
	isLessThan1280: boolean;
	isMoreThan768: boolean;
	isMoreThan1024: boolean;
	isMoreThan1280: boolean;
	isLessThan1024MoreThan768: boolean;
} {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = (): void => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		window.addEventListener('orientationchange', handleWindowResize);

		return (): void => {
			window.removeEventListener('resize', handleWindowResize);
			window.removeEventListener('orientationchange', handleWindowResize);
		};
	}, [setWidth]);

	return {
		isLessThan480: width < 480,
		isLessThan600: width < 600,
		isLessThan768: width < 768,
		isLessThan900: width < 900,
		isLessThan1024: width < 1024,
		isLessThan1200: width < 1200,
		isLessThan1280: width < 1280,
		isMoreThan768: width > 768,
		isMoreThan1024: width > 1024,
		isMoreThan1280: width > 1280,
		isLessThan1024MoreThan768: width < 1024 && width > 768,
	};
}
