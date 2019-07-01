const { task, option, logger, argv, parallel, series } = require('just-task')

option('name', { default: 'world' })

task('sayhello', function() {
  logger.info(argv().name)
  console.log('running')
})



task('babel', function() {
  // run babel babel over some files
})

task('lint', function() {
  // run eslint over some files
  logger.info('linting')
})

task('clean', () => {})

task('build', series('clean', parallel('babel', 'lint')))


