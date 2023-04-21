module.exports = {
	preset: 'react-native',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transform: {
		'\\.(ts|tsx)$': 'babel-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	setupFilesAfterEnv: [],
	transformIgnorePatterns: [
		'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|@rneui)/)',
	],
};
