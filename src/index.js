import React from 'react';

export default class GtmTrackEvents extends React.Component {
  constructor (props) {
    super(props);
    this.sendPageview = this.sendPageview.bind(this);
    this.trackClicks = this.trackClicks.bind(this);
    this.onElementClick = this.onElementClick.bind(this);
    this.onFormElementClick = this.onFormElementClick.bind(this);
  }

  componentDidMount () {
    this.sendPageview();
    this.trackClicks();
  }

  componentDidUpdate () {
    this.trackClicks();
  }

  sendPageview () {
    window.dataLayer.push({
      event: 'pageview',
      location: window.location.pathname.substring(1),
      dimension6: (window.ga && window.ga.getAll) ? window.ga.getAll()[0].get('clientId') : 'NA'
    });
  }

  trackClicks () {
    const id = this.props.identifier;
    window.onload = () => {
      const elements = document.querySelectorAll(`#${id} [gtmtrack]`);
      elements.forEach(element => {
        element.addEventListener('click', () => this.onElementClick(element));
      });
      const formElements = document.querySelectorAll(`#${id} [gtmtracksubmit]`);
      formElements.forEach(element => {
        element.addEventListener('submit', () => this.onFormElementClick(element));
      });
    };
  }

  onElementClick (element) {
    const commonFields = this.props.gtmCommonFields || {};
    const customFields = JSON.parse(element.dataset.gtmdata);
    window.dataLayer.push(Object.assign({}, commonFields, customFields));
  }

  onFormElementClick (element) {
    const commonFields = this.props.gtmCommonFields || {};
    const customFields = JSON.parse(element.dataset.gtmdata);
    window.dataLayer.push(Object.assign({}, commonFields, customFields));
  }

  render () {
    return <div id={this.props.identifier}>{this.props.children}</div>;
  }
}
