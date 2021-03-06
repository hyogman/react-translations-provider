# React Translations Provider

![download](https://user-images.githubusercontent.com/6344422/37416628-95937100-27ae-11e8-9e55-7d6a39150319.jpg)


A React render prop component for setting translations

`yarn add react-translations-provider`

## Example

```js
import React from "react";
import TranslationProvider, {
  Translate,
  Text,
} from "react-translations-provider";
import moment from "moment";

require("moment/locale/de");
require("moment/locale/es");

const en = {
  locale: "en",
  hello: "Hello World!",
  working: "Is this working?",
  weather: {
    weather: "Weather",
    sunny: "sunny",
    cloudy: "cloudy",
  },
};

const de = {
  locale: "de",
  hello: "Hallo Welt!",
  working: "Funktioniert das?",
  weather: {
    weather: "Wetter",
    sunny: "sonnig",
    cloudy: "bewölkt",
  },
};

const es = {
  locale: "es",
  hello: "¡Hola Mundo!",
  working: "¿Esto funciona?",
  weather: {
    weather: "Clima",
    sunny: "soleado",
    cloudy: "nublado",
  },
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
          <SimpleWeather />
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

function SimpleWeather() {
  // Or use the Text component api and pass the key path in translateKey prop to return
  // translation from translations object
  return (
    <div>
      <h1>
        <Text translateKey="weather.weather" />
      </h1>
      <h3>
        <Text translateKey="weather.sunny" />
      </h3>
    </div>
  );
}

export default App;
```

![demo3](https://user-images.githubusercontent.com/6344422/36433396-adf62034-165c-11e8-9a15-cbb61ea330d2.gif)
