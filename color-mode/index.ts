import { darkMode } from '../lib/css/atoms/sprinkles.css';

export default `
<script>
((d)=>{try{var p=localStorage.getItem('braid-theme-pref');if(p==d||(p!='light'&&matchMedia('(prefers-color-scheme:dark)').matches)) document.documentElement.classList.add('${darkMode}')}catch(e){}})('dark')
</script>
`;

export const withMediaPref = `
<script>
(()=>{if(matchMedia('(prefers-color-scheme:dark)').matches) document.documentElement.classList.add('${darkMode}')})()
</script>
`;

export const withLocalStoragePref = `
<script>
(()=>{try{if(localStorage.getItem('braid-theme-pref')=='dark')document.documentElement.classList.add('${darkMode}')}catch(e){}})()
</script>
`;
