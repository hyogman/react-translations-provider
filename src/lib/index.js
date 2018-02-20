import * as React from "react";
import createReactContext from "create-react-context";

const TranslationContext = createReactContext("");

export default class TranslationProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: props.default || null,
    };
    if (!this.state.language)
      console.error(
        "Must set default prop in TranslationProvider with a translation string",
      );
  }

  setLanguage = language => {
    this.setState({ language });
  };

  render() {
    if (!this.props.translations) {
      console.error(
        "Must set translations prop in TranslationProvider with a translations object",
      );
      return null;
    }

    if (!this.props.translations[this.state.language]) {
      console.error(
        `${
          this.state.language
        } language does not exist in your translations object`,
      );
      return null;
    }

    return (
      <TranslationContext.Provider
        value={this.props.translations[this.state.language]}
      >
        {this.props.children({
          setLanguage: this.setLanguage,
          language: this.state.language,
        })}
      </TranslationContext.Provider>
    );
  }
}

export function Translate({ children }) {
  return (
    <TranslationContext.Consumer>
      {translations => children({ translations })}
    </TranslationContext.Consumer>
  );
}
