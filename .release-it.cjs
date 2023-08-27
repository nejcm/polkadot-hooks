const version = '${version}';
const packageName = process.env.npm_package_name;
const scope = packageName.split('/')[1];

module.exports = {
  /* plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      preset: 'conventionalcommits',
      gitRawCommitsOpts: {
        path: '.',
      },
      types: [
        { type: 'feat', section: 'Features' },
        { type: 'fix', section: 'Bug Fixes' },
        { type: 'chore', section: 'Misc' },
        { type: 'style', section: 'Styling' },
        { type: 'refactor', hidden: 'Misc' },
        { type: 'perf', hidden: 'Misc' },
        { type: 'docs', hidden: true },
        { type: 'test', hidden: true },
      ],
    },
  }, */ 
  git: {
    push: true,
    tagName: `v${version}`,
    commitMessage: `release(${scope}): ${packageName} v${version} [skip ci]`,
    requireCommits: true,
    requireCommitsFail: false, 
    requireCleanWorkingDir: false,
    changelog: "npx auto-changelog --stdout --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/main/templates/changelog-compact.hbs"
  },
  npm: {
    publish: true,
  },
  github: {
    release: false,
  },
  hooks: {
    "after:bump": "npx auto-changelog -p"
  }
}