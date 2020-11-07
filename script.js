const main = document.querySelector("main");
const sections = document.querySelectorAll("section");
const section_buttons = document.getElementsByClassName("section-button")

section_buttons[0].classList.add("selected");
display_section(sections[0]);

for (let i = 0; i < section_buttons.length; i++) {
  section_buttons[i].addEventListener('click', function () {
    let section_size = document.querySelector("section").clientHeight;
    main.scrollTop = (i * section_size);

    sections[i].classList.remove("play-anim");
    void sections[i].offsetWidth;
    sections[i].classList.add("play-anim");

    button_click(section_buttons[i]);
    display_section(sections[i]);
  })
}


function display_section(section) {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  section.style.display = 'flex';
}

function button_click(btn) {
  for (let i = 0; i < section_buttons.length; i++) {
    section_buttons[i].classList.remove("selected");
  }

  btn.classList.add("selected");
}

