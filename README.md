# Preact XUL demo

A quick demo of [Preact][] with XUL (i. e. that thing that Firefox uses under
the hood). Grab a copy of [XULRunner SDK][] (it is deprecated, but let's forget
about that for a minute), then:

```
path/to/xulrunner application.ini --jsconsole
```

[Preact]: https://preactjs.com/
[XULRunner SDK]: http://ftp.mozilla.org/pub/xulrunner/releases/latest/sdk/


## What's happening

When you start the app, it loads [main.xul][] (specified in [prefs.js][]).
It is mostly like how a browser would load an HTML page, but with XUL instead.
We then specify a [`box`][box] element which would become the app root,
load Preact and [main.js][], which in turn renders some content in the `box`.

[main.xul]: chrome/content/main.xul
[main.js]: chrome/content/main.xul
[prefs.js]: defaults/preferences/prefs.js

[box]: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/box


## Considerations

Due to the nature of React-esque libraries, our approach won't work well
with existing XUL concepts, like [overlays][].

[overlays]: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Overlays
