import fs from 'node:fs/promises'

function tabsToSpaces(text: string, tabs = 2) {
	return text.replaceAll('\t', ' '.repeat(tabs))
}

const DOCS_PATH = 'src/routes/docs'
const OUTPUT_PATH = 'static/llms.txt'

const pages = [
	'slides',
	'transitions',
	'actions',
	'code',
	'motion',
	'styles',
	'api',
	'file-based',
	'recorder',
	'notes',
	'math',
]
const scriptRegex = /^<script.*?>.*?<\/script>/s

try {
	let docs = ''
	for (const page of pages) {
		const data = await fs.readFile(`${DOCS_PATH}/${page}/+page.md`, 'utf-8')
		docs += `${data.replace(scriptRegex, '').trim()}\n\n`
	}
	fs.writeFile(OUTPUT_PATH, tabsToSpaces(docs.trim()))
} catch (e) {
	console.error(e)
}
