let validator = {
  total: 0,
  max: 150,
  add(score, msg) {
    this.total += score;
    console.log(`${msg}: ${score}`);
  },
  report() {
    console.log(`total score: ${this.total}/${this.max}`);
  }
};

(function reportSelfCheck() {
  validator.add(10, 'вёрстка валидная');
  validator.add(18, 'вёрстка семантическая: nav, header, main, footer, figure, section, address, time, h2');
  validator.add(10, 'для оформления СV используются css-стили');
  validator.add(10, 'контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы');
  validator.add(10, 'вёрстка адаптивная');
  validator.add(10, 'есть адаптивное бургер-меню');
  validator.add(10, 'на странице СV присутствует изображение - фото');
  validator.add(10, 'контакты для связи и перечень навыков оформлены в виде списка ul > li');
  validator.add(10, 'CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского');
  validator.add(10, 'CV содержит пример вашего кода');
  validator.add(0, 'CV содержит изображения-ссылки на выполненные вами проекты');
  validator.add(10, 'CV выполнено на английском языке');
  validator.add(10, 'выполнены требования к Pull Request');
  validator.add(0, 'есть видеорезюме автора CV на английском языке');
  validator.add(10, 'дизайн, оформление, качество выполнения CV не ниже чем в примерах');
  validator.report();
})();

function toggleBurger() {
  let burger = document.getElementById("burger");
  burger.style.display = burger.style.display === 'block' ? 'none' : 'block';
}
