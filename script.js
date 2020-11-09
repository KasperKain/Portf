const main = document.querySelector("main");
const sections = document.querySelectorAll("section");
const section_buttons = document.getElementsByClassName("section-button")

display_section(0);

for (let i = 0; i < section_buttons.length; i++) {
  section_buttons[i].addEventListener('click', function () {

    sections[i].classList.remove("play-anim");
    void sections[i].offsetWidth;
    sections[i].classList.add("play-anim");

    display_section(i);
  })
}


function display_section(index) {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
    section_buttons[i].classList.remove("selected");
  }

  sections[index].style.display = 'flex';
  section_buttons[index].classList.add("selected");
}
