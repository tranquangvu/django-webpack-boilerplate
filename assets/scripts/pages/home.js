import '~/styles/pages/home.scss';

$(function() {
  $('#getstarted-btn').click((e) => {
    e.preventDefault();

    alert('Find handler from `assets/scripts/pages/home.js`');
  });
});
