import { darkMode } from '../lib/css/atoms/sprinkles.css';
const flag = '_bdsdm=1';
// TODO: COLORMODE RELEASE
// Finalise import contract
export const __experimentalDarkMode__ = `
<script>
((l,p)=>{try{r=new RegExp(\`[\?&]\${p}\`);if(r.test(l.search)){history.replaceState(null,null,l.pathname+l.search.replace(r,'').replace(/^&/,'?')+l.hash);if(matchMedia('(prefers-color-scheme:dark)').matches)document.documentElement.classList.add('${darkMode}')}}catch(e){}})(location,'${flag}')
</script>
`;
