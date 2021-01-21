import * as Command from 'commander';
import { CommandLoader } from '../commands';
function bootstrap() {
  const program = Command;
  program
    .version(
      require('../package.json').version,
      '-v, --version',
      'Output current version'
    )
    .usage('<command> [options]')
    .helpOption('-h, --help', 'Output usage guide');

  CommandLoader.load(program);

  program.parse(process.argv);

  if (!program.args.length) {
    program.outputHelp();
  }
}
bootstrap();
