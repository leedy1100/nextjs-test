const path = require('path');

const COMMON_EXTENSIONS = '**/*.{ts,tsx,html}';

module.exports = {
  locales: ['ko', 'en'],
  output: path.join(__dirname, 'src', 'locales', '$LOCALE', '$NAMESPACE.json'),

  input: [
    `src/components/${COMMON_EXTENSIONS}`,
    `src/app/${COMMON_EXTENSIONS}`,
    '!**/node_modules/**',
    '!.next/**',
  ],
};
