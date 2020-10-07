import { greetingsByName } from './utils';
import './index.css';

const name = 'Pancho';

const root = document.createElement('div');
root.innerHTML = greetingsByName(name);

document.body.appendChild(root);
