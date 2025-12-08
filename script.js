// ============================================
// VARIABLE GLOBAL
// ============================================
let countriesData = [];
let choicesInstance; // Untuk menyimpan instance Choices.js
let lastDigitLength = 0;

// ============================================
// INISIALISASI SAAT HALAMAN SIAP
// ============================================
document.addEventListener("DOMContentLoaded", function () {
	// Inisialisasi Choices.js
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

	// Load JSON lalu masukkan ke Choices.js
	fetch("countries.json")
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			countriesData = data;

			// Konversi data ke format Choices.js
			const choices = data.map(function (item) {
				return {
					value: item.code,
					label: item.name,
					selected: item.code === "+62", // Set Indonesia sebagai default
				};
			});

			// Set choices ke Choices.js
			choicesInstance.setChoices(choices, "value", "label", true);
		});

	// Event listener untuk perubahan country code
	selectElement.addEventListener("change", function () {
		hideGenerateButtons();
	});
});

// ============================================
// FUNGSI: FORMAT NOMOR TELEPON
// ============================================
// Format nomor telepon dengan tanda "-"
// Contoh: 081234567890 menjadi 081-2345-6789-0
function formatPhoneNumber(phoneNumber) {
	// Hapus semua karakter yang bukan angka
	const digits = phoneNumber.replace(/\D/g, "");

	// Kalau cuma 3 angka atau kurang, langsung return
	if (digits.length <= 3) return digits;

	// Ambil 3 angka pertama
	const first = digits.slice(0, 3);

	// Ambil sisanya
	const rest = digits.slice(3);

	// Pecah sisanya jadi kelompok maksimal 4 angka
	const groups = rest.match(/.{1,4}/g) || [];

	// Gabungkan dengan tanda "-"
	return first + "-" + groups.join("-");
}

// ============================================
// FUNGSI: SEMBUNYIKAN TOMBOL GENERATE
// ============================================
function hideGenerateButtons() {
	document.getElementById("generate-button").classList.add("hidden");
}

// ============================================
// EVENT: INPUT NOMOR TELEPON
// ============================================
// Format otomatis saat user mengetik nomor telepon
document
	.getElementById("phone-number")
	.addEventListener("input", function (event) {
		// Ambil hanya angka saja
		let angkaOnly = this.value.replace(/\D/g, "");

		// Format dengan tanda "-"
		this.value = formatPhoneNumber(angkaOnly);

		//apakah JUMLAH ANGKA berubah?
		if (angkaOnly.length !== lastDigitLength) {
			hideGenerateButtons();
			lastDigitLength = angkaOnly.length;
		}
	});

// ============================================
// EVENT: SUBMIT FORM
// ============================================
// Generate link WhatsApp dan Telegram
document
	.getElementById("phone-form")
	.addEventListener("submit", function (event) {
		// Prevent default form submit
		event.preventDefault();

		// ========== AMBIL DATA DARI FORM ==========
		const selectedCode = document.getElementById("country-code").value;

		// Nomor telepon tanpa tanda "-" dan spasi
		const rawPhoneNumber = document
			.getElementById("phone-number")
			.value.replace(/[-\s]/g, "");

		// Nomor telepon dengan tanda "-"
		const phoneNumberWithHyphen =
			document.getElementById("phone-number").value;

		// Cari data negara yang dipilih
		const selectedData = countriesData.find(function (item) {
			return item.code === selectedCode;
		});
		console.log(selectedData);

		// ========== GENERATE LINK ==========
		const whatsappLink = `https://wa.me/${selectedCode}${rawPhoneNumber}`;
		const telegramLink = `https://t.me/${selectedCode}${rawPhoneNumber}`;

		// ========== UPDATE WHATSAPP BUTTON ==========
		// Update href
		const whatsappLinkAnchorHref = document.getElementById("wa-button");
		whatsappLinkAnchorHref.href = whatsappLink;

		// Update text content
		const whatsappLinkAnchor = document.querySelector(".wa-button span");
		whatsappLinkAnchor.textContent = `WhatsApp (${selectedCode} ${phoneNumberWithHyphen})`;

		// ========== UPDATE TELEGRAM BUTTON ==========
		// Update href
		const telegramLinkAnchorHref = document.getElementById("tele-button");
		telegramLinkAnchorHref.href = telegramLink;

		// Update text content
		const telegramLinkAnchor = document.querySelector(".tele-button span");
		telegramLinkAnchor.textContent = `Telegram (${selectedCode} ${phoneNumberWithHyphen})`;

		// Tampilkan tombol generate
		document.getElementById("generate-button").classList.remove("hidden");
	});
