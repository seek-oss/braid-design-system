import '../reset';
import { useToast } from '../components';
import { usePlayroomState } from './playroomState';

export default function useScope() {
  return {
    showToast: useToast(),
    ...usePlayroomState(),
  };
}
