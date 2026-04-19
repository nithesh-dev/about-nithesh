module.exports = async function beforeAdd(git) {
  await git.exec('config', 'core.hooksPath', '/dev/null');
};
