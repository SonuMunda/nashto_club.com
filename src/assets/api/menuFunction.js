const menuFunction = () => {
  let navbar = document.getElementById("navbar");

  if (navbar.style.height === "336px") {
    navbar.style.height = "0px";
    navbar.style.boxShadow = "0 0 0 0";
  } else {
    navbar.style.height = "336px";
    navbar.style.boxShadow = "0 5px 5px 0 rgba(0, 0, 0,0.4)";
  }
};

export default menuFunction;
