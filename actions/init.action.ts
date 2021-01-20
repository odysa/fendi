import { Input } from '../types/types';
import { AbstractAction } from './abstract.action';

export class InitAction extends AbstractAction {
  public async handle(inputs: Input[]) {
    console.log(inputs[0].name);
    console.log(inputs[0].value);
  }
}
