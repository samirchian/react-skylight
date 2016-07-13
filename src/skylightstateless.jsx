import React from 'react';

export default class SkyLightStateless extends React.Component {

  onOverlayClicked() {
    if (this.props.onOverlayClicked) {
      this.props.onOverlayClicked();
    }
  }

  onCloseClicked() {
    if (this.props.onCloseClicked) {
      this.props.onCloseClicked();
    }
  }

  render() {
    const { isVisible } = this.props;

    let overlay;
    if (this.props.showOverlay) {
      overlay = (
        <div className="skylight-overlay"
          onClick={() => this.onOverlayClicked()}
        />
      );
    }

    return isVisible ? (
        <section className="skylight-wrapper">
            {overlay}
            <div className="skylight-dialog">
              <a role="button" className="skylight-close-button"
                onClick={() => this.onCloseClicked()}
              >
                &times;
               </a>
              <h2>{this.props.title}</h2>
              {this.props.children}
            </div>
        </section>
    ) : <div />;
  }
}

SkyLightStateless.displayName = 'SkyLightStateless';

SkyLightStateless.sharedPropTypes = {
  onCloseClicked: React.PropTypes.func,
  onOverlayClicked: React.PropTypes.func,
  showOverlay: React.PropTypes.bool,
  title: React.PropTypes.string,
};

SkyLightStateless.propTypes = {
  ...SkyLightStateless.sharedPropTypes,
  isVisible: React.PropTypes.bool,
};

SkyLightStateless.defaultProps = {
  title: '',
  showOverlay: true,
};
