const inputEl = document.querySelectorAll(".content__input");
const labelEl = document.querySelectorAll(".content__label");
const controlMarkEl = document.querySelectorAll(".content__control-mark");
const itemEl = document.querySelectorAll(".content__item");
const decorationEl = document.querySelectorAll(".content__decoration");
const countEl = document.querySelectorAll(".content__count");
const wrapperEl = document.querySelectorAll(".content__wrapper");
const previewEl = document.querySelectorAll(".content__preview");

const DISABLED_PHRASES = {
  goose: "Печалька, с фуа-гра закончился.",
  fish: "Печалька, с рыбой закончился.",
  chicken: "Печалька, с курой закончился.",
};

const CHECKED_PHRASES = {
  goose: "Печень утки разварная с артишоками.",
  fish: "Головы щучьи с чесноком да свежайшая сёмгушка.",
  chicken: "Филе из цыплят с трюфелями в бульоне.",
};

const makeChecked = (control, label) => {
  control.style.display = "none";
  if (label.classList.contains("content__label--fish")) {
    label.textContent = CHECKED_PHRASES.fish;
  } else if (label.classList.contains("content__label--goose")) {
    label.textContent = CHECKED_PHRASES.goose;
  } else {
    label.textContent = CHECKED_PHRASES.chicken;
  }
};

const makeDisabled = (control, label) => {
  control.style.display = "none";
  label.style.color = "#ffff66";
  if (label.classList.contains("content__label--fish")) {
    label.textContent = DISABLED_PHRASES.fish;
  } else if (label.classList.contains("content__label--goose")) {
    label.textContent = DISABLED_PHRASES.goose;
  } else {
    label.textContent = DISABLED_PHRASES.chicken;
  }
};

for (let i = 0; i < itemEl.length; i++) {
  itemEl[i].addEventListener("mouseover", function () {
    if (inputEl[i].checked) {
      decorationEl[i].style.borderColor = "#E52E7A";
      wrapperEl[i].style.borderColor = "#E52E7A";
      countEl[i].style.backgroundColor = "#E52E7A";
      previewEl[i].textContent = "Котэ не одобряет?";
      previewEl[i].style.color = "#E62E7A";
    } else if (inputEl[i].disabled === false) {
      inputEl[i].checked = false;
      decorationEl[i].style.borderColor = "#2ea8e6";
      wrapperEl[i].style.borderColor = "#2ea8e6";
      countEl[i].style.backgroundColor = "#2ea8e6";
      previewEl[i].textContent = "Сказочное заморское яство";
      previewEl[i].style.color = "#666666";
    }
  });
}

for (let i = 0; i < itemEl.length; i++) {
  itemEl[i].addEventListener("mouseout", function () {
    previewEl[i].textContent = "Сказочное заморское яство";
    previewEl[i].style.color = "#666666";
    if (inputEl[i].checked) {
      decorationEl[i].style.borderColor = "#d91667";
      wrapperEl[i].style.borderColor = "#d91667";
      countEl[i].style.backgroundColor = "#d91667";
    } else if (inputEl[i].disabled === false) {
      inputEl[i].checked = false;
      decorationEl[i].style.borderColor = "#1698d9";
      wrapperEl[i].style.borderColor = "#1698d9";
      countEl[i].style.backgroundColor = "#1698d9";
    }
  });
}

for (let i = 0; i < inputEl.length; i++) {
  inputEl[i].addEventListener("click", function () {
    if (inputEl[i].checked) {
      makeChecked(controlMarkEl[i], labelEl[i]);
    } else {
      labelEl[i].textContent = "Чего сидишь? Порадуй котэ, ";
      controlMarkEl[i].style.display = "inline";
      previewEl[i].textContent = "Сказочное заморское яство";
    }
  });
}

for (let i = 0; i < controlMarkEl.length; i++) {
  controlMarkEl[i].addEventListener("click", function () {
    inputEl[i].checked = true;
    makeChecked(controlMarkEl[i], labelEl[i]);
  });
}

for (let i = 0; i < inputEl.length; i++) {
  if (inputEl[i].hasAttribute("disabled")) {
    makeDisabled(controlMarkEl[i], labelEl[i]);
  }
}