import * as React from "react";
import createReactContext from "create-react-context";

const TranslationContext = createReactContext("en");

class TranslationProvider extends React.Component {
  state = {
    language: "en",
  };

  setLanguage = language => {
    this.setState({ language });
  };

  render() {
    return (
      <TranslationContext.Provider value={this.state.language}>
        {this.props.children({
          setLanguage: this.setLanguage,
        })}
      </TranslationContext.Provider>
    );
  }
}

export default function Translations({ children }) {
  return (
    <TranslationProvider>
      {({ setLanguage }) => (
        <TranslationContext.Consumer>
          {language => children({ setLanguage, language })}
        </TranslationContext.Consumer>
      )}
    </TranslationProvider>
  );
}
