const themeColor = document.getElementById("theme");
console.log(themeColor.value);

const main = document.querySelector("main");
const pantalla = document.querySelector(".pantalla");
const btnContainer = document.querySelector(".btn-container");
const resultContainer = document.querySelector(".result-container");
const reset = document.querySelector(".reset");
const igual = document.querySelector(".igual");
const del = document.querySelector(".del");
const footer = document.querySelector("footer");
const github = document.querySelector(".github");

const botonesNode = document.querySelectorAll(".botones");
const botones = Array.from(botonesNode);

let flag = false;

let result1 = [];
let valor1 = "";

miStorage = window.localStorage;
let tema = localStorage.getItem("tema");
themeColor.value = tema;
console.log(tema);

if (tema === "1") {
  main.classList.remove(
    "theme2",
    "theme3",
    "txt-yellow-gray",
    "txt-dark-blue",
    "txt-yellow"
  );
  main.classList.add("theme1", "text-white");
  footer.classList.remove(
    "theme2",
    "theme3",
    "text-white",
    "txt-yellow",
    "btn-dark-violet",
    "txt-yellow-gray"
  );
  footer.classList.add("theme1", "text-black");
  btnContainer.classList.add("bg-keys1");
  btnContainer.classList.remove("bg-keys2", "bg-keys3");
  pantalla.classList.add("display1");
  pantalla.classList.remove("display2", "display3");
  resultContainer.classList.add("bg-keys1");
  resultContainer.classList.remove("bg-keys2", "bg-keys3");
  botones.forEach((boton) => {
    if (boton.value !== "DEL") {
      boton.classList.remove(
        "btn-cyan2",
        "btn-violet",
        "txt-yellow",
        "btn-dark-violet"
      );
      boton.classList.add("btn-white", "text-gray");
    } else {
      boton.classList.remove("btn-cyan2", "btn-violet", "txt-yellow");
      boton.classList.add("btn-gray");
    }

    reset.classList.remove("btn-cyan2", "btn-violet", "txt-yellow");
    reset.classList.add("btn-gray");
    igual.classList.remove("btn-orange", "btn-cyan3", "txt-dark-blue");
    igual.classList.add("btn-red", "text-white");
  });
}

if (tema === "2") {
  main.classList.add("theme2", "txt-yellow-gray");
  main.classList.remove("theme1", "theme3", "text-white", "txt-yellow");
  footer.classList.add("theme2", "txt-yellow-gray");
  footer.classList.remove(
    "theme1",
    "theme3",
    "text-white",
    "txt-yellow",
    "btn-dark-violet"
  );
  btnContainer.classList.add("bg-keys2");
  btnContainer.classList.remove("bg-keys1", "bg-keys3");
  resultContainer.classList.add("bg-keys2");
  resultContainer.classList.remove("bg-keys1", "bg-keys3");
  pantalla.classList.add("display1", "text-white");
  pantalla.classList.remove("display2", "display3");
  botones.forEach((boton) => {
    if (boton.value !== "DEL") {
      boton.classList.remove(
        "btn-white",
        "btn-violet",
        "txt-yellow",
        "btn-dark-violet"
      );
      boton.classList.add("btn-white2");
    } else {
      boton.classList.remove("btn-gray", "btn-violet", "txt-yellow");
      boton.classList.add("btn-cyan2");
    }
    reset.classList.remove("btn-gray", "btn-violet", "txt-yellow");
    reset.classList.add("btn-cyan2");
    igual.classList.remove("btn-red", "btn-cyan3", "txt-dark-blue");
    igual.classList.add("btn-orange", "text-white");
  });
}

if (tema === "3") {
  main.classList.remove("theme1", "theme2", "text-white", "txt-yellow-gray");
  main.classList.add("theme3", "txt-yellow");
  footer.classList.add("txt-yellow", "btn-dark-violet");
  footer.classList.remove("theme1", "theme2", "text-white");
  btnContainer.classList.add("bg-keys3");
  btnContainer.classList.remove("bg-keys1", "bg-keys2");
  resultContainer.classList.add("bg-keys3");
  resultContainer.classList.remove("bg-keys1", "bg-keys2");
  pantalla.classList.add("display3");
  pantalla.classList.remove("display1", "display2", "text-white");
  botones.forEach((boton) => {
    if (boton.value !== "DEL") {
      boton.classList.remove("btn-white", "btn-cyan2");
      boton.classList.add("btn-dark-violet", "txt-yellow");
    } else {
      boton.classList.remove("btn-cyan2", "btn-violet", "txt-yellow");
      boton.classList.add("btn-violet");
    }
    reset.classList.remove("btn-cyan2", "btn-violet", "txt-yellow");
    reset.classList.add("btn-violet");
    igual.classList.remove("btn-red", "btn-violet", "txt-yellow");
    igual.classList.add("btn-cyan3", "txt-dark-blue");
    github.classList.add("bg-white");
  });
}

// themeColor.style.appearance = "red";

reset.addEventListener("click", () => {
  pantalla.value = "0";
  valor1 = "";
  result1 = [];
});

const erase = () => {
  if (result1.length > 0) {
    result1 = result1.slice(0, -1);
    // console.log(result1);
    valor1 = result1.join("");
    pantalla.value = valor1;
  }
  if (result1.length === 0) {
    pantalla.value = "0";
  }
};

botones.map((boton) =>
  boton.addEventListener("click", () => {
    if (
      flag === true &&
      boton.value !== "+" &&
      boton.value !== "-" &&
      boton.value !== "*" &&
      boton.value !== "/" &&
      boton.value !== "."
    ) {
      pantalla.value = "0";
      valor1 = "";
      result1 = [];
      flag = false;
    } else if (boton.value !== "DEL") {
      flag = false;
      pantalla.value = "";
      valor1 += boton.value;
      result1 = Array.from(valor1);
      pantalla.value = valor1;
    } else {
      erase();
    }
  })
);

const equal = () => {
  try {
    pantalla.value = eval(pantalla.value);
    valor1 = pantalla.value;
    result1 = valor1;
    flag = true;
  } catch (error) {
    pantalla.value = "Error";
  }
};

igual.addEventListener("click", () => {
  equal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    // console.log(e);
    erase();
  }
  if (e.key === "Enter") {
    e.preventDefault();
    try {
      pantalla.value = eval(pantalla.value);
      valor1 = pantalla.value;
    } catch (error) {
      pantalla.value = "Error";
    }
  }
  if (e.key === " ") {
    e.preventDefault();
  }
});

themeColor.addEventListener("click", () => {
  if (themeColor.value === "1") {
    localStorage.removeItem("tema");
    localStorage.setItem("tema", themeColor.value);
    main.classList.remove(
      "theme2",
      "theme3",
      "txt-yellow-gray",
      "txt-dark-blue",
      "txt-yellow"
    );
    main.classList.add("theme1", "text-white");
    footer.classList.remove(
      "theme2",
      "theme3",
      "text-white",
      "txt-yellow",
      "btn-dark-violet",
      "txt-yellow-gray"
    );
    footer.classList.add("theme1", "text-black");
    btnContainer.classList.add("bg-keys1");
    btnContainer.classList.remove("bg-keys2", "bg-keys3");
    pantalla.classList.add("display1");
    pantalla.classList.remove("display2", "display3");
    resultContainer.classList.add("bg-keys1");
    resultContainer.classList.remove("bg-keys2", "bg-keys3");
    botones.forEach((boton) => {
      if (boton.value !== "DEL") {
        boton.classList.remove(
          "btn-cyan2",
          "btn-violet",
          "txt-yellow",
          "btn-dark-violet"
        );
        boton.classList.add("btn-white", "text-gray");
      } else {
        boton.classList.remove("btn-cyan2", "btn-violet", "txt-yellow");
        boton.classList.add("btn-gray");
      }

      reset.classList.remove("btn-cyan2", "btn-violet", "txt-yellow");
      reset.classList.add("btn-gray");
      igual.classList.remove("btn-orange", "btn-cyan3", "txt-dark-blue");
      igual.classList.add("btn-red", "text-white");
    });
  }

  if (themeColor.value === "2") {
    localStorage.removeItem("tema");
    localStorage.setItem("tema", themeColor.value);
    main.classList.add("theme2", "txt-yellow-gray");
    main.classList.remove("theme1", "theme3", "text-white", "txt-yellow");
    footer.classList.add("theme2", "txt-yellow-gray");
    footer.classList.remove(
      "theme1",
      "theme3",
      "text-white",
      "txt-yellow",
      "btn-dark-violet"
    );
    btnContainer.classList.add("bg-keys2");
    btnContainer.classList.remove("bg-keys1", "bg-keys3");
    resultContainer.classList.add("bg-keys2");
    resultContainer.classList.remove("bg-keys1", "bg-keys3");
    pantalla.classList.add("display1", "text-white");
    pantalla.classList.remove("display2", "display3");
    botones.forEach((boton) => {
      if (boton.value !== "DEL") {
        boton.classList.remove(
          "btn-white",
          "btn-violet",
          "txt-yellow",
          "btn-dark-violet"
        );
        boton.classList.add("btn-white2");
      } else {
        boton.classList.remove("btn-gray", "btn-violet", "txt-yellow");
        boton.classList.add("btn-cyan2");
      }
      reset.classList.remove("btn-gray", "btn-violet", "txt-yellow");
      reset.classList.add("btn-cyan2");
      igual.classList.remove("btn-red", "btn-cyan3", "txt-dark-blue");
      igual.classList.add("btn-orange", "text-white");
    });
  }

  if (themeColor.value === "3") {
    localStorage.removeItem("tema");
    localStorage.setItem("tema", themeColor.value);
    main.classList.remove("theme1", "theme2", "text-white", "txt-yellow-gray");
    main.classList.add("theme3", "txt-yellow");
    footer.classList.add("txt-yellow", "btn-dark-violet");
    footer.classList.remove("theme1", "theme2", "text-white");
    btnContainer.classList.add("bg-keys3");
    btnContainer.classList.remove("bg-keys1", "bg-keys2");
    resultContainer.classList.add("bg-keys3");
    resultContainer.classList.remove("bg-keys1", "bg-keys2");
    pantalla.classList.add("display3");
    pantalla.classList.remove("display1", "display2", "text-white");
    botones.forEach((boton) => {
      if (boton.value !== "DEL") {
        boton.classList.remove("btn-white", "btn-cyan2");
        boton.classList.add("btn-dark-violet", "txt-yellow");
      } else {
        boton.classList.remove("btn-cyan2", "btn-violet", "txt-yellow");
        boton.classList.add("btn-violet");
      }
      reset.classList.remove("btn-cyan2", "btn-violet", "txt-yellow");
      reset.classList.add("btn-violet");
      igual.classList.remove("btn-red", "btn-violet", "txt-yellow");
      igual.classList.add("btn-cyan3", "txt-dark-blue");
      github.classList.add("bg-white");
    });
  }
});
