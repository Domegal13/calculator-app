const themeColor = document.getElementById("theme");
const themes = {
  1: {
    main: ["theme1", "text-white"],
    footer: ["theme1", "text-black"],
    btnContainer: ["bg-keys1"],
    pantalla: ["display1"],
    resultContainer: ["bg-keys1"],
    botones: ["btn-white", "text-gray"],
    reset: ["btn-gray"],
    igual: ["btn-red", "text-white"],
  },
  2: {
    main: ["theme2", "txt-yellow-gray"],
    footer: ["theme2", "txt-yellow-gray"],
    btnContainer: ["bg-keys2"],
    pantalla: ["display1", "text-white"],
    resultContainer: ["bg-keys2"],
    botones: ["btn-white2"],
    reset: ["btn-cyan2"],
    igual: ["btn-orange", "text-white"],
  },
  3: {
    main: ["theme3", "txt-yellow"],
    footer: ["txt-yellow", "btn-dark-violet"],
    btnContainer: ["bg-keys3"],
    pantalla: ["display3"],
    resultContainer: ["bg-keys3"],
    botones: ["btn-dark-violet", "txt-yellow"],
    reset: ["btn-violet"],
    igual: ["btn-cyan3", "txt-dark-blue"],
  },
};

let result1 = [];
let valor1 = "";

const applyTheme = (theme) => {
  const {
    main,
    footer,
    btnContainer,
    pantalla,
    resultContainer,
    botones,
    reset,
    igual,
  } = themes[theme];

  main.forEach((className) => main.classList.add(className));
  main.forEach((className) =>
    main.classList.remove(
      ...Object.values(themes)
        .map((t) => t.main)
        .flat()
    )
  );

  footer.forEach((className) => footer.classList.add(className));
  footer.forEach((className) =>
    footer.classList.remove(
      ...Object.values(themes)
        .map((t) => t.footer)
        .flat()
    )
  );

  btnContainer.forEach((className) => btnContainer.classList.add(className));
  btnContainer.forEach((className) =>
    btnContainer.classList.remove(
      ...Object.values(themes)
        .map((t) => t.btnContainer)
        .flat()
    )
  );

  pantalla.forEach((className) => pantalla.classList.add(className));
  pantalla.forEach((className) =>
    pantalla.classList.remove(
      ...Object.values(themes)
        .map((t) => t.pantalla)
        .flat()
    )
  );

  resultContainer.forEach((className) =>
    resultContainer.classList.add(className)
  );
  resultContainer.forEach((className) =>
    resultContainer.classList.remove(
      ...Object.values(themes)
        .map((t) => t.resultContainer)
        .flat()
    )
  );

  botones.forEach((boton) => {
    if (boton.value !== "DEL") {
      boton.classList.remove(
        ...Object.values(themes)
          .map((t) => t.botones)
          .flat()
      );
      boton.classList.add("btn-white", "text-gray");
    } else {
      boton.classList.remove("btn-cyan2", "btn-violet", "txt-yellow");
      boton.classList.add("btn-gray");
    }
  });

  reset.classList.remove(
    ...Object.values(themes)
      .map((t) => t.reset)
      .flat()
  );
  reset.classList.add("btn-gray");

  igual.classList.remove(
    ...Object.values(themes)
      .map((t) => t.igual)
      .flat()
  );
  igual.classList.add("btn-red", "text-white");
};

// Resto del código...

themeColor.addEventListener("click", () => {
  const selectedTheme = themeColor.value;
  localStorage.removeItem("tema");
  localStorage.setItem("tema", selectedTheme);
  applyTheme(selectedTheme);
});
