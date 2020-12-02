import Tooltip from './Alex-UI/tooltip';
import Dropdown from './Alex-UI/dropdown';
import Tabs from './Alex-UI/tabs';
import Snackbar from './Alex-UI/snackbar';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('You clicked me!')
})