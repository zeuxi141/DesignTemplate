function getLocalStorageData(key) {
	return JSON.parse(localStorage.getItem(key));
}
// lưu thông tin
function setLocalStorageData(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorageData(key) {
	localStorage.removeItem(key);
}

function clearLocalStorageData() {
	localStorage.clear();
}
