$(document).ready(function () {
  $(".sliderBig").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider",
    waitForAnimate: false,
  });
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: ".sliderBig",
    waitForAnimate: false,
  });
});

function tabServieces() {
  const tabTitle = document.querySelectorAll(".services-title-item");
  const tabContent = document.querySelectorAll(".services-content-item");
  tabTitle.forEach((elem) => {
    elem.addEventListener("click", clickOnTab);
  });
  function clickOnTab() {
    tabTitle.forEach((item) => {
      item.classList.remove("services-title-item-active");
    });
    this.classList.add("services-title-item-active");
    const tabName = this.getAttribute("data-name");
    selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      if (item.classList.contains(tabName)) {
        item.classList.add("services-content-item-active");
      } else {
        item.classList.remove("services-content-item-active");
      }
    });
  }
}
tabServieces();

function tabProjects() {
  const listProjects = document.querySelector(".projects-title-list");
  const tabTitleProjects = document.querySelectorAll(".project-title-item");
  listProjects.addEventListener("click", clickOnlistProject);
  const ListProjectMore = document.querySelectorAll(
    ".projects-content-item-more"
  );
  const btnProject = document.querySelector(".project-btn");
  const preloader = document.querySelector(".preloader");
  btnProject.addEventListener("click", clickOnButton);
  function clickOnButton() {
    let timerCouter = 0;
    let timer = setTimeout(time);
    const liClick = document.querySelector(".project-title-item-click");
    const ProjectTabName = liClick.getAttribute("data-name");
    function time() {
      preloader.classList.add("preloader-active");
      timerCouter++;
      if (timerCouter > 200) {
        clearTimeout(timer);
        preloader.classList.remove("preloader-active");
        ListProjectMore.forEach((element) => {
          element.classList.add("project-content-item");
          if (element.classList.contains(ProjectTabName)) {
            element.style.display = "block";
          }
        });
      } else {
        setTimeout(time);
      }
    }
    listProjects.addEventListener("click", clickOnlistProject);
    btnProject.remove();
  }
  function clickOnlistProject(event) {
    let tabContentProjects = document.querySelectorAll(".project-content-item");
    if (!(event.target === event.currentTarget)) {
      tabTitleProjects.forEach((element) => {
        element.classList.remove("project-title-item-click");
      });
      event.target.classList.add("project-title-item-click");
      const ProjectTabName = event.target.getAttribute("data-name");
      selectTabContent(ProjectTabName);
    }
    function selectTabContent(tabName) {
      tabContentProjects.forEach((item) => {
        if (item.classList.contains(tabName)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  }
}
tabProjects();
