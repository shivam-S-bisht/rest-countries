type DebounceFunction = (...args: any[]) => void;

export const debounce = (
	func: DebounceFunction,
	delay: number,
): DebounceFunction => {
	let clearTimer: NodeJS.Timeout | undefined;

	return function (this: any, ...args: any[]) {
		if (clearTimer) {
			clearTimeout(clearTimer);
		}
		clearTimer = setTimeout(() => func.apply(this, args), delay);
	};
};
