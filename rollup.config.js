import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import list from './modules.json';
import postcss from 'rollup-plugin-postcss'

const defineEntryPoint = (component) => {
    const src = `src/${component}.js`;
    const output = `lib/${component}.js`;
    return {
        input: src,
        output: {file: output, format: 'esm', name: component},
        plugins: [
            external(),
            babel({
                exclude: 'node_modules/**'
            }),
            del({targets: [output]}),
            postcss({
                extract: false,
                modules: true,
                use: ['sass'],
                plugins: []
            })
        ],
        external: Object.keys(pkg.peerDependencies || {})
    }
};

export default list.map(entry => defineEntryPoint(entry));