# React Translations Provider

A React render prop component for setting translations

`yarn add react-translations-provider`

## Example

```js
import React from "react";
import Translations from "react-translations-provider";
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
      {({ setLanguage, language }) => (
        <div>
          <select value={language} onChange={e => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
          </select>
          <h1>{translations[language].hello}</h1>
          <h2>{translations[language].working}</h2>
          <h3>
            {moment()
              .locale(language)
              .format("L")}
          </h3>
        </div>
      )}
    </Translations>
  );
}

export default App;
```
![demo4](https://user-images.githubusercontent.com/6344422/36412690-91b29e3e-161b-11e8-8d68-9326d2cd6c91.gif)

