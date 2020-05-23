module.exports = {
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        babelConfig: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {node: 'current'},
              },
            ],
          ],
        },
        packageJson: 'package.json',
      },
    ],
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
