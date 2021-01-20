import * as Commander from 'commander';
import { CommandLoader } from '../commands';
function bootstrap() {
  const program = Commander;
  program
    .version(
      require('../package.json').version,
      '-v, --version',
      'Output current version'
    )
    .usage('<command> [options]')
    .helpOption('-h, --help', 'Output usage guide');

  CommandLoader.load(program);
  Commander.parse(process.argv);
  if (!program.args.length) {
    program.outputHelp();
  }
}
bootstrap();
