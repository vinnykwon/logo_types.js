class LogoTypes {
	constructor() {
		this.api = "https://logotypes.dev"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getRandomData() {
		const response = await fetch(
			`${this.api}/random/data`, {
				method: "GET",
				headers: this.headers
			})
		return response.text()
	}

	async getAllData() {
		const response = await fetch(
			`${this.api}/all`, {
				method: "GET",
				headers: this.headers
			})
		return response.text()
	}

	async getSoecificData(dataType) {
		const response = await fetch(
			`${this.api}/${dataType}/data`, {
				method: "GET",
				headers: this.headers
			})
		return response.text()
	}

}

module.exports = {LogoTypes}
