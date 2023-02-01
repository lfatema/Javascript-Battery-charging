const chargeBattery = () => {
  let battery = document.getElementById("battery");
  battery.innerHTML = "&#xf244";
  battery.style.color = "#fc3003";

  setTimeout(() => {
    battery.innerHTML = "&#xf243";
    battery.style.color = "#fc3003";
  }, 1000);

  setTimeout(() => {
    battery.innerHTML = "&#xf242";
    battery.style.color = "#fce703";
  }, 2000);

  setTimeout(() => {
    battery.innerHTML = "&#xf241";
    battery.style.color = "#fce703";
  }, 3000);

  setTimeout(() => {
    battery.innerHTML = "&#xf240";
    battery.style.color = "#5afc23";
  }, 4000);
};

chargeBattery();
setInterval(chargeBattery, 5000);
