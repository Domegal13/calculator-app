const themes = (value, ElementsForThemes) => {
  const [main, btnContainer, pantalla, botones, reset, igual, resultContainer] =
    ElementsForThemes;

  if (value === "1") {
    main.classList.remove(
      "theme2",
      "theme3",
      "txt-yellow-gray",
      "txt-dark-blue",
      "txt-yellow"
    );
    main.classList.add("theme1", "text-white");
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

  if (value === "2") {
    main.classList.remove("theme1", "theme3", "text-white", "txt-yellow");
    main.classList.add("theme2", "txt-yellow-gray");
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

  if (value === "3") {
    main.classList.remove("theme1", "theme2", "text-white", "txt-yellow-gray");
    main.classList.add("theme3", "txt-yellow");
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
    });
  }
};

export default themes;
