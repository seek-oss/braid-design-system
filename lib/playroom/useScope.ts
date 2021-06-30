import '../../reset';
import { useToast } from '../components';
import { vars, atoms, breakpoints } from '../../css';
import { usePlayroomStore } from './playroomState';

export default function useScope() {
  return {
    vars,
    atoms,
    breakpoints,
    showToast: useToast(),
    ...usePlayroomStore(),
  };
}
