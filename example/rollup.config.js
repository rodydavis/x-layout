import { nodeResolve } from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';
// import commonjs from '@rollup/plugin-commonjs';

export default {
    browser: true,
    input: 'index.js',
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [
        nodeResolve(),
    ]
};