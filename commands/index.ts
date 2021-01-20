import { InitAction } from '../actions/init.action';
import { InitCommand } from './init.command';
import { CommanderStatic } from 'commander';
import * as chalk from 'chalk'
export class CommandLoader {
  public static load(program: CommanderStatic) {
    new InitCommand(new InitAction()).load(program);
    this.handleInvalidCommand(program);
  }
  private static handleInvalidCommand(program: CommanderStatic) {
    program.on('command:*', () => {
      console.error(
        `\nInvalid command: ${chalk.red('%s')}`,
        program.args.join(' ')
      );
      console.log(
        `See ${chalk.red('--help')} for a list of available commands.\n`
      );
      process.exit(1);
    });
  }
}
