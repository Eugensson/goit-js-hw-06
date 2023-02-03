const counter = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  counterValue.textContent = counter.value;
});
