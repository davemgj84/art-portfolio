const closeMenu = () => {
  const dropMenu = document.querySelector(".dropdown");
  dropMenu.style.display = "none";
  setTimeout(() => {
    dropMenu.style.removeProperty("display");
  }, 30);
};

export default closeMenu;
