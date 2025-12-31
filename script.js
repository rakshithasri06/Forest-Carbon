const placeDropdown = document.getElementById("place");
const mapFrame = document.getElementById("mapFrame");

const maps = {
  south: {
    "Kodagu": "https://inner-precept-481405-t5.projects.earthengine.app/view/kodagu",
    "Nilgiris": "https://inner-precept-481405-t5.projects.earthengine.app/view/nilgiris",
    "Agasthyamalai": "https://earthengine-481406.projects.earthengine.app/view/agasthyamalai-carbon-stock",
    "Palakkad": "https://earthengine-481406.projects.earthengine.app/view/pallakad-carbon-stock",
    "Wayanad": "https://inner-precept-481405-t5.projects.earthengine.app/view/wayanad"
  },
  northeast: {
    "Aizawl": "https://inner-precept-481405-t5.projects.earthengine.app/view/aizawl",
    "Darjeeling": "https://inner-precept-481405-t5.projects.earthengine.app/view/darjeeling",
    "Champai": "https://inner-precept-481405-t5.projects.earthengine.app/view/champai",
    "Churachandpur": "https://inner-precept-481405-t5.projects.earthengine.app/view/churachandpur",
    "Ukhrul": "https://inner-precept-481405-t5.projects.earthengine.app/view/ukhrul",
    "Kohima": "https://inner-precept-481405-t5.projects.earthengine.app/view/kohima",
    "Phek":"https://inner-precept-481405-t5.projects.earthengine.app/view/phek",
    "East Khasi Hills": "https://inner-precept-481405-t5.projects.earthengine.app/view/east-khasi-hills",
    "West Khasi Hills": "https://inner-precept-481405-t5.projects.earthengine.app/view/west-khasi-hills",
    "Sikkim": "https://inner-precept-481405-t5.projects.earthengine.app/view/sikkim"
  },
  central: {
    "Kanha": "https://earthengine-481406.projects.earthengine.app/view/kanha-national-park-carbon-stock",
    "Satpura": "https://earthengine-481406.projects.earthengine.app/view/satpura-carbon-stock",
    "Bandhavgarh": "https://earthengine-481406.projects.earthengine.app/view/bandhavgarh-carbon-stock"
  }
};

document.getElementById("region").addEventListener("change", function () {
  const region = this.value;
  placeDropdown.innerHTML = '<option value="">-- Select Location --</option>';

  if (maps[region]) {
    Object.keys(maps[region]).forEach(place => {
      const option = document.createElement("option");
      option.value = place;
      option.textContent = place;
      placeDropdown.appendChild(option);
    });
  }
});

function loadMap() {
  const region = document.getElementById("region").value;
  const place = document.getElementById("place").value;

  if (!region || !place) {
    alert("Please select a region and location.");
    return;
  }

  mapFrame.src = maps[region][place];
}
