import { CommanderStatic } from 'commander';
import { AbstractCommand } from './abstract.command';
import { Input } from '../types/types';
export class InitCommand extends AbstractCommand {
  public load(program: CommanderStatic) {
    program
      .command('init [name] [path]')
      .alias('i')
      .description('Init files from Git')
      .action(async (name: string, path: string) => {
        const inputs: Input[] = [{ name, value: path }];
        await this.action.handle(inputs);
      });
  }
}
