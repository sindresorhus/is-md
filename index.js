import path from 'node:path';
import markdownExtensions from 'markdown-extensions';

export default function isMarkdownFilePath(filePath) {
	if (typeof filePath !== 'string') {
		throw new TypeError('Expected a string');
	}

	return markdownExtensions.includes(path.extname(filePath).slice(1).toLowerCase());
}
