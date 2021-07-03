module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run tsc --noEmit',

  // Lint and format TypeScript and JS files
  '**/*.(ts|tsx|js)': (filenames) => [
    `npm run eslint --fix ${filenames.join(' ')}`,
    `npm run prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npm run prettier --write ${filenames.join(' ')}`,
}
