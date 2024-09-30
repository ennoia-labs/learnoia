import { initializeButtonEvents } from './events.js';

document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const playerLists = document.querySelector('.player-list');
  const podiumContainer = document.querySelector('.podium');

  initializeButtonEvents(toggleButtons, playerLists, podiumContainer);
});
