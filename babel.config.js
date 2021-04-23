module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript', //yarn add @babel/preset-typescript -D
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ]
}