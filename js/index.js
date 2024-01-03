const ratingChoice = document.querySelector(".rating-choice");
const rating = ratingChoice.querySelectorAll('span')

rating.forEach((rate) => {
  rate.addEventListener('click', () => {
    const otherRate = rating;
    otherRate.forEach((other) => {
      if (rate !== other) {
        other.classList.remove('active');
      }
    });
    rate.classList.add('active');
  });
});

const submitBtn = document.querySelector('button')
submitBtn.addEventListener('click', () => {
  rating.forEach((rate) => {
    if (rate.classList.contains('active')) {
      const rateValue = document.querySelector('#rate');
      const value = rate.getAttribute('value');
      rateValue.textContent = value;

      const thankYouCard = document.querySelector('.thank-you-card');
      const ratingCard = document.querySelector('.rating-card');
      ratingCard.style.display = 'none';
      thankYouCard.style.display = 'flex';
    }
  });
});