# Preact XUL demo

![Screenshot](https://cloud.githubusercontent.com/assets/1298948/21626529/15632900-d22b-11e6-953f-faeefb50c39a.png)

A quick demo of [Preact][] with XUL (i. e. that thing that Firefox uses under
the hood). Grab a copy of [XULRunner SDK][] (it is deprecated, but let's forget
about that for a minute), then:

```
path/to/xulrunner application.ini --jsconsole
```

[Preact]: https://preactjs.com/
[XULRunner SDK]: http://ftp.mozilla.org/pub/xulrunner/releases/latest/sdk/


## Why?

Mostly because XUL allows you to get native look and feel everywhere (as
opposed to HTML, which would look pretty much the same on all platforms).

Also, it might be more performant (i. e. a bare Electron instance (no app
loaded, run `electron` without arguments) takes up 200 MB of RAM on my laptop
while the example app in this repo uses half as much).


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
