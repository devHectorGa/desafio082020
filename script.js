let navigationButton = window.navigationButton,
  navigation = window.navigation;

navigationButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
  navigationButton.classList.toggle('show');
});
