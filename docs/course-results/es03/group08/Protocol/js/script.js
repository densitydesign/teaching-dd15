var popupList = [
  "g#Ivana_Anne",
  "g#Pipi_Natalie",
  "g#Arthur_Andrej_h128",
  "g#Arthur_Andrej_saed",
  "g#Pretty_Yueling_48_hs",
  "g#Pretty_Yueling_4_hs",
  "g#Arthur_Sherlock_200",
  "g#Arthur_Sherlock_2000",
  "g#Andrej-jones",
  "g#Pipi_Shia"
]

$(document).ready(function(){
  resizeSidebar();
  hideAll(popupList);
});

window.addEventListener("resize", resizeSidebar);

$("#Capa_1").click(function() {
  hideAll(popupList);
});

$("g#_x32_").click(function() {
  toggleElement("g#Pipi_Shia", popupList);
});

$("g#_x33_").click(function() {
  toggleElement("g#Ivana_Anne", popupList);
});

$("g#_x34_").click(function() {
  toggleElement("g#Arthur_Sherlock_200", popupList);
});

$("g#_x35_").click(function() {
  toggleElement("g#Arthur_Sherlock_2000", popupList);
});

$("g#_x35_-1").click(function() {
  toggleElement("g#Pipi_Natalie", popupList);
});

$("g#_x36_").click(function() {
  toggleElement("g#Andrej-jones", popupList);
});

$("g#_x38_").click(function() {
  toggleElement("g#Pretty_Yueling_4_hs", popupList);
});

$("g#_x38_-2").click(function() {
  toggleElement("g#Pretty_Yueling_48_hs", popupList);
});

$("g#_x39_").click(function() {
  toggleElement("g#Arthur_Andrej_saed", popupList);
});

$("g#_x39_-2").click(function() {
  toggleElement("g#Arthur_Andrej_h128", popupList);
});

function resizeSidebar() {
  $(".protocol-sidebadr").css("height", $(".container-svg").css("height"));
}

function hideAll(elementList) {
  for (var i = 0; i < elementList.length; i++) {
    $(elementList[i]).hide();
  }
}

function toggleElement(element, elementList) {
  for (var i = 0; i < elementList.length; i++) {
    if (elementList[i] === element) {
      $(elementList[i]).toggle();
    } else {
      $(elementList[i]).hide();
    }
  }
}