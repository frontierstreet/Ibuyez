import { useEffect } from "react"
import { isEmpty, trim } from "lodash"
import { isValidPhoneNumber } from "react-phone-number-input"
// import CONSTANTS from "./constants";
import toast from "react-hot-toast"

// const { routes } = CONSTANTS;

export const changeBodyScrollStatusTo = (value) => {
	const body = document.querySelector("body")
	if (body) {
		if (value) {
			body.classList.remove("overflow-y-hidden")
		} else {
			body.classList.add("overflow-y-hidden")
		}
	}
}

export const storeToLS = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value))
}

export const retreiveFromLS = (key) => {
	return JSON.parse(localStorage.getItem(key))
}

export const removeFromLS = (key) => {
	localStorage.removeItem(key)
}

function isStrongPassword(password) {
	// Use a regular expression to check the password against the criteria
	const strongPasswordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

	return strongPasswordRegex.test(password)
}
export const validators = {
	validateRequiredOption: (option) => option !== undefined && option !== null && option !== "",
	validateNonRequiredNumber: (number) => {
		return number ? typeof number === "number" : true
	},
	validateRequiredNumber: (number) => {
		return number > 0
	},
	validateNonRequiredEmail: (email) =>
		email ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email) : true,
	validateNonRequiredString: (string) => (string ? trim(string).length > 0 : true),
	validateNonRequiredPhoneNumber: (string) => (string ? isValidPhoneNumber(string) : true),
	validateNonRequiredUrl: (string) =>
		string ? /^(https?:\/\/)([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(string) : true,
	validateStrongPassword: (string) => isStrongPassword(string),
	validateEmail: (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email),
	validateString: (string) => trim(string).length > 0,
	validatePhoneNumber: (string) => isValidPhoneNumber(string),
	validateUrl: (string) => /^(https?:\/\/)([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(string)
}

export const pluralize = (number, word, pluralWord = null) => {
	if (!number) {
		return word
	}
	if (number > 1) {
		return pluralWord ? pluralWord : word + "s"
	}
	return word
}

export const parseAddress = (address) => {
	if (isEmpty(address)) {
		return ""
	}
	let string = ""
	if (address.streetAddress) {
		string += address.streetAddress + ", "
	}
	if (address.neighborhood) {
		string += address.neighborhood + ", "
	}
	if (address.city) {
		string += address.city + ", "
	}
	if (address.state === "Indiana") {
		address.state = "IN"
		string += address.state + " "
	}

	if (address.zipCode) {
		string += address.zipCode + " "
	}
	return string
}

export const formatText = (text) => {
	if (!text) {
		return ""
	}
	const lines = text.split("\n")

	return lines.map((line, index) => (
		<span key={index}>
			{line}
			{index < lines.length - 1 && <br />}
		</span>
	))
}

export const isLastItem = (index, itemList) => {
	return index === itemList.length - 1
}

export const enableScroll = (shouldBeScrollable) => {
	const body = document.querySelector("html")
	if (body) {
		if (shouldBeScrollable) {
			body.classList.remove("overflow-y-hidden")
		} else {
			body.classList.add("overflow-y-hidden")
		}
	}
}

export const doNothing = () => {}

export const getObjectUrl = (file) => {
	try {
		return URL.createObjectURL(file)
	} catch (e) {
		toast.error("Failed to display image")
		return "-"
	}
}

export const MatterportIframe = ({ iframeCode }) => {
	useEffect(() => {
		// Get the container element
		const container = document.getElementById("iframeContainer")

		// Set the innerHTML of the container to the iframe code
		if (container) {
			container.innerHTML = iframeCode
		}
	}, [iframeCode])

	return (
		<div
			id="iframeContainer"
			className="w-full mx-auto p-6 rounded-[18px] shadow-md overflow-hidden">
			{/* The iframe will be inserted here */}
		</div>
	)
}

export const getRandomID = () => Math.random() * 100000000
