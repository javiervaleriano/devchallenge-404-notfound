'use strict';

const link = document.querySelector('.footer-anchor'),
    profiles = ['https://codepen.io/javiervaleriano', 'https://github.com/javiervaleriano', 'https://www.linkedin.com/in/javier-valeriano1508/'];

link.href = profiles[Math.floor(Math.random() * profiles.length)];