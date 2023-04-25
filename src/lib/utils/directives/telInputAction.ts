import { inspectAllowedChars, inputParser } from '$lib/index';
import { } from '@ionic/core'

export const telInputAction = (
	node: HTMLIonInputElement,
	{
		handler,
		spaces
	}: {
		handler: (val: string) => void;
		spaces: boolean;
	}
) => {
	const onInput = (event: Event) => {
		if (node && node.contains(event.target as HTMLIonInputElement)) {
			const value = (event.target as HTMLIonInputElement).value;
			const formattedInput = inputParser(value, {
				parseCharacter: inspectAllowedChars,
				allowSpaces: spaces
			});
			node.value = formattedInput;
			handler(formattedInput);
		}
	};
	node.addEventListener('input', onInput, true);
	return {
		destroy() {
			node.removeEventListener('input', onInput, true);
		}
	};
};
