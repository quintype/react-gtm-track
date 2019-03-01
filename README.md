# GTM track

Enclose any part of your app within this component to send pageview automatically and track clicks and form submits.

## Initial Setup

* Add the following script in the head of your app's html to load it as soon as possible:
```
<script>if(!window.dataLayer)window.dataLayer = [];</script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',`${GTM-CONTAINER-ID}`);</script>
```

* Add the following script in the body:
```
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=`${GTM-CONTAINER-ID}`
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```


## Using GTM Component

* Enclose the component to keep track of inside `GtmTrackEvents` component
* Pass a unique identifier, gtmCommonFields (initial object with common values for all events on the page)
* For a comp to track within this, put an attribute `gtmtrack` and `data-gtmdata`(== stringified customFields Object)
* For tracking form submit, put an attribute `gtmtracksubmit`
