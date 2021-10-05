import workerpool from 'workerpool';
import codemod from './codemod';

workerpool.worker({
  codemod,
});
