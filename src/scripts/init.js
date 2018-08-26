import { shuffle } from './shuffle';

const imageFiles = require.context('../images/uploads', false, /\.png$/);

const keys = imageFiles.keys();
const images = keys.map(key => imageFiles(key));

export const init = (difficulty) => {
    let pics = [], seconds = 0;

    switch (difficulty) {
        case 0:
            pics = images.slice(0, 6);
            seconds = 20;
            break;
        case 1:
            pics = images.slice(0, 12);
            seconds = 30;
            break;
        case 2:
            pics = images.slice(0, 18);
            seconds = 40;
            break;
        case 3:
            pics = images.slice(0, 25);
            seconds = 45;
            break;
    }

    const items = shuffle([...pics, ...pics]);

    return {
        items,
        seconds
    };
};