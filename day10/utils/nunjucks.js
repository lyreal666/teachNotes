const nunjucks = require('nunjucks');
const path = require('path');
const fs = require('mz/fs');

function createEnv(path, opts) {
    let
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (let f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

let env = createEnv(path.resolve(__dirname, '../views'), {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});


if (require.main === module) {
    const visualization = async (data) => {
        const renderedHtml = 'testNunjucks.html';
        const outputHtml = env.render(renderedHtml, { testResult: 'Test success !'});
        const outputHtmlPath = path.resolve(__dirname, `../output/${ renderedHtml }`);
    
        await fs.writeFile(outputHtmlPath, outputHtml, 'utf-8');
    }

    visualization();
} else {
    module.exports = env;
}