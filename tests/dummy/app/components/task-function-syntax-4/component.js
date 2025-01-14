import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default class TaskFunctionSyntaxComponent4 extends Component {
  tagName = '';
  status = null;

  // BEGIN-SNIPPET task-function-syntax-4
  @task *myTask() {
    this.set('status', `Thinking...`);
    try {
      yield timeout(1000).then(() => {
        throw 'Ahhhhh!!!!';
      });
      this.set('status', `This does not get used!`);
    } catch (e) {
      this.set('status', `Caught value: ${e}`);
    }
  }
  // END-SNIPPET
}
