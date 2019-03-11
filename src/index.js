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

  componentWillUnmount () {
    const id = this.props.identifier;
    const elements = document.querySelectorAll(`#${id} [gtmtrack]`);
    elements.forEach(element => {
      element.removeEventListener('click', this.onElementClick);
    });
    const formElements = document.querySelectorAll(`#${id} [gtmtracksubmit]`);
    formElements.forEach(element => {
      element.removeEventListener('submit', this.onFormElementClick);
    });
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
    window.onload = function () {
      const elements = document.querySelectorAll(`#${id} [gtmtrack]`);
      elements.forEach(element => {
        element.addEventListener('click', this.onElementClick);
      });
      const formElements = document.querySelectorAll(`#${id} [gtmtracksubmit]`);
      formElements.forEach(element => {
        element.addEventListener('submit', this.onFormElementClick);
      });
    };
  }

  onElementClick (event) {
    const commonFields = this.props.gtmCommonFields || {};
    const customFields = JSON.parse(event.target.dataset.gtmdata);
    window.dataLayer.push(Object.assign({}, commonFields, customFields));
  }

  onFormElementClick (event) {
    const commonFields = this.props.gtmCommonFields || {};
    const customFields = JSON.parse(event.target.dataset.gtmdata);
    window.dataLayer.push(Object.assign({}, commonFields, customFields));
  }

  render () {
    return <div id={this.props.identifier}>{this.props.children}</div>;
  }
}
