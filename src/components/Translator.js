import React from 'react';

class Translator extends React.Component {
  constructor () {
    super();
    this.state = {
      textTranslation: ''
    }
  }
  handleChange = (e) => {
    const { translations } = this.props;
    const inputText = e.target.value;
    if (translations.has(inputText)) {
      this.setState({ textTranslation: translations.get(inputText)});
    } else {
      this.setState({ textTranslation: '' });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text"
              className="text-input"
              data-testid="text-input"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input type="text"
              className="text-output"
              data-testid="text-output"
              value={this.state.textTranslation}
              readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
