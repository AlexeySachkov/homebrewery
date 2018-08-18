const _ = require('lodash');

const MarkdownIt = require('markdown-it')();
const MarkdownItAttrs = require('markdown-it-attrs');

MarkdownIt.use(MarkdownItAttrs);


MarkdownIt.renderer.rules.fence = function(tokens, idx, options, env, self) {
    var token = tokens[idx];

    return '<div' + self.renderAttrs(token) + '>'
        + MarkdownIt.render(token.content) + '</div>';
}

MarkdownIt.renderer.rules.code_block = MarkdownIt.renderer.rules.fence;

module.exports = {
	render : (rawBrewText) => {

        rawBrewText = rawBrewText.replace(/\\column/g, "\n { .columnSplit }\n");
        let html = MarkdownIt.render(rawBrewText);

		return html;
	},

	validate : (rawBrewText) => {
		return [];
	},
};
