export { default as IonTelInput } from './components/Input/IonTelInput.svelte';
export {
	getCurrentCountry,
	isSelected,
	inputParser,
	inspectAllowedChars,
	normalizeTelInput,
	getCountryForPartialE164Number
} from './utils/helpers';
export { parsePhoneNumberWithError, ParseError } from 'libphonenumber-js/max';
export { clickOutsideAction } from './utils/directives/clickOutsideAction';
export { normalizedCountries } from './assets';
