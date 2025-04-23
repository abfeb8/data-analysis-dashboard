'use client';

import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function ScrollIndicator() {
	const [showIndicator, setShowIndicator] = useState(true);
	const [isAtBottom, setIsAtBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const mainElement = document.querySelector('main');
			if (!mainElement) return;

			const scrollPosition = mainElement.scrollTop;
			const scrollHeight = mainElement.scrollHeight;
			const clientHeight = mainElement.clientHeight;

			const isScrollable = scrollHeight > clientHeight;
			const isNearBottom =
				scrollPosition + clientHeight >= scrollHeight - 20;

			// Show indicator if content is scrollable
			setShowIndicator(isScrollable);

			// Track if user is at the bottom
			setIsAtBottom(isNearBottom);
		};

		const mainElement = document.querySelector('main');
		if (mainElement) {
			mainElement.addEventListener('scroll', handleScroll);
			// Initial check
			handleScroll();
		}

		return () => {
			if (mainElement) {
				mainElement.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);

	if (!showIndicator) return null;

	const handleClick = () => {
		const mainElement = document.querySelector('main');
		if (mainElement) {
			if (isAtBottom) {
				// Scroll to top if at bottom
				mainElement.scrollTo({ top: 0, behavior: 'smooth' });
			} else {
				// Scroll down if not at bottom
				mainElement.scrollBy({ top: 200, behavior: 'smooth' });
			}
		}
	};

	return (
		<div
			className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
			onClick={handleClick}
			role="button"
			aria-label={
				isAtBottom ? 'Scroll to top' : 'Scroll down for more content'
			}
		>
			{isAtBottom ? (
				<FiChevronUp
					size={20}
					className="text-primary"
				/>
			) : (
				<FiChevronDown
					size={20}
					className="text-primary"
				/>
			)}
		</div>
	);
}

export default ScrollIndicator;
