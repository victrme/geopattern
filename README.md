![npm (scoped)](https://img.shields.io/npm/v/%40victr/geopattern?style=flat-square&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40victr%2Fgeopattern)

# GeoPattern

This branch is a modernization attempt of [btmills/geopattern](https://github.com/btmills/geopattern), a JavaScript port of [jasonlong/geo_pattern](https://github.com/jasonlong/geo_pattern) with a [live preview page](http://btmills.github.io/geopattern/) and is derived from the background generator originally used for [GitHub Guides](http://guides.github.com/).

## Usage

### Web

```html
<script src="dist/geopattern.min.js"></script>
```

Use the `GeoPattern` browser global

```js
const pattern = GeoPattern.generate('GitHub')
document.getElementById('geopattern').style.backgroundImage = pattern.toDataUrl()
```

### Node.js

```bash
npm install @victr/geopattern
```

After requiring `geopattern`, the API is identical to the browser version

```js
import { generate } from '@victr/geopattern'

const pattern = generate('GitHub')
pattern.toDataUrl() // url("data:image/svg+xml;...
```

or

```js
import * as GeoPattern from '@victr/geopattern'

const pattern = GeoPattern.generate('GitHub')
pattern.toDataUrl() // url("data:image/svg+xml;...
```

### API

#### GeoPattern.generate(string, options)

Returns a newly-generated, tiling SVG Pattern.

-   `string` Will be hashed using the SHA1 algorithm, and the resulting hash will be used as the seed for generation.

-   `options.color` Specify an exact background color. This is a CSS hexadecimal color value.

-   `options.baseColor` Controls the relative background color of the generated image. The color is not identical to that used in the pattern because the hue is rotated by the generator. This is a CSS hexadecimal color value, which defaults to `#933c3c`.

-   `options.generator` Determines the pattern. [All of the original patterns](https://github.com/jasonlong/geo_pattern#available-patterns) are available in this port, and their names are camelCased.

#### Pattern.color

Gets the pattern's background color as a hexadecimal string.

```js
GeoPattern.generate('GitHub').color // => "#455e8a"
```

#### Pattern.toString() and Pattern.toSvg()

Gets the SVG string representing the pattern.

#### Pattern.toBase64()

Gets the SVG as a Base64-encoded string.

#### Pattern.toDataUri()

Gets the pattern as a data URI, i.e. `data:image/svg+xml;base64,PHN2ZyB...`.

#### Pattern.toDataUrl()

Gets the pattern as a data URL suitable for use as a CSS `background-image`, i.e. `url("data:image/svg+xml;base64,PHN2ZyB...")`.

## License

Licensed under the terms of the MIT License, the full text of which can be read in [LICENSE](LICENSE).
