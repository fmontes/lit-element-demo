import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import embedCSS from 'rollup-plugin-embed-css';
import minify from 'rollup-plugin-babel-minify';

export default {
    input: ['src/index.js'],
    output: {
        dir: 'build',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        embedCSS(),
        resolve(),
        babel(),
        minify({
            comments: false
        })
    ]
};
