# logo_types.js
Web-API for [logotypes.dev](https://logotypes.dev/) an open-source project that offers a wide range of logos for your projects through an API.

## Example
```JavaScript
async function main() {
	const { LogoTypes } = require("./logo_types.js");
	const logoTypes = new LogoTypes()
	const randomData = await logoTypes.getRandomData()
	console.log(randomData)
}

main()
```
