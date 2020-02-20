import * as library from '../../../library/dist/main';
const copy = { ...library };

const pre = document.createElement('pre');
pre.textContent = JSON.stringify(copy);
document.body.appendChild(pre);
