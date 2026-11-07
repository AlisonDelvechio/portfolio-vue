// Aplica o tema antes da primeira pintura: escolha salva ou, sem ela, a preferência do sistema.
(function () {
  var theme
  try {
    theme = localStorage.getItem('theme')
  } catch (e) {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }
  document.body.classList.add(theme)
})()
