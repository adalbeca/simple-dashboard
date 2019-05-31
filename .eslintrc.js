module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    'extends': 'react-app',
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        'ecmaFeatures': { 'jsx' : true },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'no-invalid-this': 'off',
        'exclude': /node_modules/,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        "no-console": "off",
        'no-constant-condition': 2,
        'no-irregular-whitespace': 2,
        'no-multi-spaces': 2,
        'no-lonely-if': 0,
        'no-plusplus': 0,
        "block-spacing": ["error", "always"],
        'no-mixed-spaces-and-tabs': 2,
        'jsx-quotes': [2, "prefer-single"],
        "comma-spacing" : ["error", { "before": false, "after": true }],
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing" : ["error", "always"],
        "indent": ["error", 4 ],
    }
};