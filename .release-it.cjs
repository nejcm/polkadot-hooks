const version = '${version}';
const packageName = process.env.npm_package_name;
const scope = packageName.split('/')[1];

module.exports = {
  git: {
      push: true,
      tagName: `v${version}`,
      commitMessage: `release(${scope}): ${packageName} v${version} [skip ci]`,
      requireCommits: true,
      requireCommitsFail: false,
      requireCleanWorkingDir: false,
    },
    npm: {
      publish: true,
    },
    github: {
      release: false,
    }, 
}