/** @type {import('next').NextConfig} */
import JavaScriptObfuscator from 'webpack-obfuscator';
import HtmlMinifierTerser from 'html-minifier-terser';

const nextConfig = {
    output:"export",
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.plugins.push(
            new JavaScriptObfuscator({
              rotateStringArray: true
            }, [])
          );
        }
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              publicPath: `/_next/static/images/`,
              outputPath: `${isServer ? "../" : ""}static/images/`,
            },
          });


              // Minify and obfuscate HTML
    if (!isServer) {
        config.optimization.minimizer.push({
          apply: (compiler) => {
            compiler.hooks.emit.tapAsync('MinifyHTML', (compilation, callback) => {
              Object.keys(compilation.assets).forEach((asset) => {
                if (asset.endsWith('.html')) {
                  const originalSource = compilation.assets[asset].source();
                  const minifiedSource = HtmlMinifierTerser.minify(originalSource, {
                    collapseWhitespace: true,
                    removeComments: true,
                    minifyJS: true,
                    minifyCSS: true,
                  });

                  compilation.assets[asset] = {
                    source: () => minifiedSource,
                    size: () => minifiedSource.length,
                  };
                }
              });
              callback();
            });
          }
        });
    }


        return config;
      }
};

export default nextConfig;
