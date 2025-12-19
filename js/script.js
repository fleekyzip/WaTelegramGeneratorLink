let countriesData = [];
let choicesInstance;
let lastDigitLength = 0;

document.addEventListener("DOMContentLoaded", function () {
	const selectElement = document.getElementById("country-code");
	choicesInstance = new Choices(selectElement, {
		searchEnabled: true,
		searchPlaceholderValue: "Search country...",
		itemSelectText: "",
		shouldSort: false,
		fuseOptions: {
			threshold: 0.2,
		},
		searchResultLimit: 999,
	});

	fetch("data/countries.json")
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			countriesData = data;

			const choices = data.map(function (item) {
				return {
					value: item.code,
					label: item.name,
					selected: item.code === "+62",
				};
			});

			choicesInstance.setChoices(choices, "value", "label", true);
		});

	selectElement.addEventListener("change", function () {
		hideElement("generate-output");
	});
});

function formatPhoneNumber(phoneNumber) {
	const digits = phoneNumber.replace(/\D/g, "");

	if (digits.length <= 3) return digits;
	const first = digits.slice(0, 3);
	const rest = digits.slice(3);

	const groups = rest.match(/.{1,4}/g) || [];

	return first + "-" + groups.join("-");
}

function hideElement(id) {
	document.getElementById(id).classList.add("hidden");
}

document
	.getElementById("phone-number")
	.addEventListener("input", function (event) {
		let angkaOnly = this.value.replace(/\D/g, "");

		this.value = formatPhoneNumber(angkaOnly);

		if (angkaOnly.length !== lastDigitLength) {
			hideElement("generate-output");
			lastDigitLength = angkaOnly.length;
		}
	});

document
	.getElementById("phone-form")
	.addEventListener("submit", function (event) {
		// Prevent default form submit
		event.preventDefault();
		generateUpdateLink();
	});

function generateUpdateLink() {
	const selectedCode = document.getElementById("country-code").value;

	const cleanPhoneNumber = document
		.getElementById("phone-number")
		.value.replace(/[-\s]/g, "");

	const phoneNumberWithHyphen = document.getElementById("phone-number").value;

	const whatsappLink = `https://wa.me/${selectedCode}${cleanPhoneNumber}`;
	const telegramLink = `https://t.me/${selectedCode}${cleanPhoneNumber}`;

	const whatsappLinkAnchorHref = document.getElementById("wa-button");
	whatsappLinkAnchorHref.href = whatsappLink;

	const whatsappLinkAnchor = document.querySelector(".main-link-wa span");
	whatsappLinkAnchor.textContent = `WhatsApp (${selectedCode} ${phoneNumberWithHyphen})`;

	const telegramLinkAnchorHref = document.getElementById("tele-button");
	telegramLinkAnchorHref.href = telegramLink;

	const telegramLinkAnchor = document.querySelector(".main-link-tele span");
	telegramLinkAnchor.textContent = `Telegram (${selectedCode} ${phoneNumberWithHyphen})`;

	document.getElementById("generate-output").classList.remove("hidden");

	return { whatsappLink, telegramLink };
}

function showAndCloseAlert(message) {
	document.getElementById("alert-text").textContent = message;
	document.getElementById("custom-alert").classList.add("show-alert");
	setTimeout(function () {
		document.getElementById("custom-alert").classList.remove("show-alert");
	}, 2000);
}

function changeIcon(button_id, new_src) {
	const buttonElement = document.getElementById(button_id);
	const iconElement = buttonElement.querySelector("img");

	if (!buttonElement.dataset.defaultSrc) {
		buttonElement.dataset.defaultSrc = iconElement.getAttribute("src");
	}
	const saveDefaultImgSrc = buttonElement.dataset.defaultSrc;

	// 3. KUNCI SOLUSI: Pembatalan Timer yang Terikat pada Tombol INI SAJA
	// Properti 'timerId' unik untuk setiap tombol
	if (buttonElement.timerId) {
		clearTimeout(buttonElement.timerId);
	}

	iconElement.src = new_src;

	buttonElement.timerId = setTimeout(function () {
		iconElement.src = saveDefaultImgSrc;
		buttonElement.timerId = null;
	}, 2000);
}

async function copyToClipboard(textToCopy) {
	if (navigator.clipboard && navigator.clipboard.writeText) {
		try {
			await navigator.clipboard.writeText(textToCopy);
			return true;
		} catch (err) {
			console.error("Gagal menyalin teks: ", err);
			return false;
		}
	} else {
		return false;
	}
}

document
	.getElementById("copy-button-wa")
	.addEventListener("click", async function (event) {
		const success = await copyToClipboard(
			generateUpdateLink().whatsappLink
		);

		if (success) {
			changeIcon("copy-button-wa", "assets/icon-mark.png");
			showAndCloseAlert("Link WhatsApp disalin ke clipboard");
		} else {
			showAndCloseAlert("Gagal menyalin link");
		}
	});

document
	.getElementById("copy-button-telegram")
	.addEventListener("click", async function (event) {
		const success = await copyToClipboard(
			generateUpdateLink().telegramLink
		);

		if (success) {
			changeIcon("copy-button-telegram", "assets/icon-mark.png");
			showAndCloseAlert("Link Telegram disalin ke clipboard");
		} else {
			showAndCloseAlert("Gagal menyalin link");
		}
	});
