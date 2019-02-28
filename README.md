# GTM track

Enclose any part of your app within this component to send pageview automatically and track clicks and form submits.

## Using GTM Component

* Enclose the component to keep track of inside `GtmTrackEvents` component
* Pass a unique identifier, gtmCommonFields (initial object with common values for all events on the page)
* For a comp to track within this, put an attribute `gtmtrack` and `data-gtmdata`(== stringified customFields Object)
* For tracking form submit, put an attribute `gtmtracksubmit`
