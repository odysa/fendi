import { Input } from '../types/types';
export abstract class AbstractAction {
  public abstract handle(inputs?: Input[], options?: Input[]): Promise<void>;
}
