module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "rules": {
        "vue/no-unused-components": "warn",
        "no-unused-vars": "warn",
        "no-unreachable": "off",
        "no-mixed-spaces-and-tabs":"off",
        "vue/require-v-for-key":"warn"
    }
}
