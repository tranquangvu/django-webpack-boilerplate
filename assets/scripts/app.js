import 'bootstrap';

const images = require.context('../images', true);
const imagePath = (name) => images(name, true);

import '~/styles/app.scss';
