/* Macro pour SugarCube: Stocke le chemin pour la scene-image du passage courant. */
Macro.add('sceneimg', {
  handler() {
    const src = this.args[0];
    State.temporary._sceneImage = src;
  }
});

(function () {
  // Préconnect pour des chargements plus rapides
  var pre1 = document.createElement('link');
  pre1.rel = 'preconnect';
  pre1.href = 'https://fonts.googleapis.com';

  var pre2 = document.createElement('link');
  pre2.rel = 'preconnect';
  pre2.href = 'https://fonts.gstatic.com';
  pre2.crossOrigin = 'anonymous';
  
  // Feuille Google Fonts
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Lora:wght@400;600&display=swap';

  document.head.append(pre1, pre2, link);
})();

(function () {
  const p1 = document.createElement('link');
  p1.rel = 'preconnect'; p1.href = 'https://fonts.googleapis.com';
  const p2 = document.createElement('link');
  p2.rel = 'preconnect'; p2.href = 'https://fonts.gstatic.com'; p2.crossOrigin = 'anonymous';
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400&family=Lora:wght@400;600&display=swap';
  document.head.append(p1, p2, link);
})();
