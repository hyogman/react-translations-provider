import React from "react";
import TranslationProvider, { Translate } from "../lib";
import moment from "moment";

require("moment/locale/de");
require("moment/locale/es");

const en = {
  locale: "en",
  hello: "Hello World!",
  working: "Is this working?",
};

const de = {
  locale: "de",
  hello: "Hallo Welt!",
  working: "Funktioniert das?",
};

const es = {
  locale: "de",
  hello: "¡Hola Mundo!",
  working: "¿Esto funciona?",
};

const translations = {
  en,
  de,
  es,
};

function App() {
  // At root level of app set the language with the TranslationProvider
  return (
    <TranslationProvider translations={translations} default="en">
      {({ setLanguage, language }) => (
        <div>
          <select value={language} onChange={e => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
          </select>
          <DisplayStuff />
        </div>
      )}
    </TranslationProvider>
  );
}

function DisplayStuff() {
  // For the rest of app simply wrap with the Translate component to get translations
  return (
    <Translate>
      {({ translations }) => (
        <div>
          <h1>{translations.hello}</h1>
          <h2>{translations.working}</h2>
          <h3>
            {moment()
              .locale(translations.locale)
              .format("L")}
          </h3>
        </div>
      )}
    </Translate>
  );
}

export default App;
