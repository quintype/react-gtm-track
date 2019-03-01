# React GTM track

This is a react component to help ease the process of sending events and variables to Google Tag Manager via datalayer.

**NOTE:** You need to add global datalayer variable and GTM container before using this. This component **does not** add any script on its own.
[Refer google's official documentation to know how to do that.](https://developers.google.com/tag-manager/devguide#datalayer)

## Installation

You can install using npm:

```
npm i @quintype/react-gtm-track
```


## Usage

* Enclose the page inside `GtmTrackEvents` component to keep track of events on it.
* Pass a unique identifier, gtmCommonFields (initial object with common values for all events on the page).
* It will send pageview event when the page loads by default.
* To track clicks within this, put an attribute `gtmtrack` and send custom data specific to that click by `data-gtmdata`(== stringified customFields Object).
The component will take care of combining this data with the common fields.
* To track form submit, put an attribute `gtmtracksubmit`
