var default_options = {
	enable_custom_theme: true,
	custom_theme: "#f3f3f4",
	custom_theme_dark: "#2c2d32",
};
chrome.storage.local.get(default_options, function (settings) {
	if (settings.enable_custom_theme) {
		let theme_element = document.getElementById("theme-color-light");
		theme_element.setAttribute("content", settings.custom_theme);
		theme_element.setAttribute("locked", "");
		let theme_element_dark = document.getElementById("theme-color-dark");
		theme_element_dark.setAttribute("content", settings.custom_theme_dark);
		theme_element_dark.setAttribute("locked", "");
	}
});
