import { initFederation } from '@angular-architects/native-federation';
//load duoc cac remote de vao routes ket noi bang name
initFederation('federation.manifest.json')
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
