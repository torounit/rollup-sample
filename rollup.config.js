// rollup.config.js
import replace from 'rollup-plugin-replace';
import npm      from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel    from 'rollup-plugin-babel'


export default {
	entry: 'src/main.js',
	dest: 'dist/bundle.js',
	plugins: [
		replace({
			'process.env.NODE_ENV': '"production"'
		}),
		npm({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
		commonjs(), // CommonJSモジュールをES6に変換
		babel() // ES5に変換
	]
}
