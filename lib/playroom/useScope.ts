import '../reset';
import { useToast } from '../components';
import { usePlayroomState } from './usePlayroomState';

export default function useScope() {
  return {
    showToast: useToast(),
    ...usePlayroomState(),
  };
}
