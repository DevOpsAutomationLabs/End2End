// Apply loading="lazy" to all images that don't already have it
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.md-typeset img:not([loading])').forEach(function (img) {
    img.setAttribute('loading', 'lazy');
  });
});
