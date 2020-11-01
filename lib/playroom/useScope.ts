import '../reset';
import { useToast } from '../components';
import { usePlayroomStore } from './playroomState';

export default function useScope() {
  return {
    showToast: useToast(),
    ...usePlayroomStore(),
  };
}
