import React from "react";
import Translations from "../lib";
import moment from "moment";

require("moment/locale/de");
require("moment/locale/es");

const en = {
  hello: "Hello World!",
  working: "Is this working?",
};

const de = {
  hello: "Hallo Welt!",
  working: "Funktioniert das?",
};

const es = {
  hello: "¡Hola Mundo!",
  working: "¿Esto funciona?",
};

const translations = {
  en,
  de,
  es,
};

function App() {
  return (
    <Translations>
      {({ setLanguage, language }) => {
        moment.locale(language);
        return (
          <div>
            <div>
              <select
                value={language}
                onChange={e => {
                  setLanguage(e.target.value);
                }}
              >
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="es">Spanish</option>
              </select>
              <h1>{translations[language].hello}</h1>
              <h2>{translations[language].working}</h2>
              <h3>{moment().format("L")}</h3>
            </div>
          </div>
        );
      }}
    </Translations>
  );
}

export default App;
