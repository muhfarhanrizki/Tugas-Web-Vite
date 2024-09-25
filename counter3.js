// counter3.js
export function setupCounter3(element, callback) {
  let counter3 = 0;
  const setCounter3 = (count) => {
    if (count > 33) {
      count = 33;
    }
    counter3 = count;
    element.innerHTML = `Allahu Akbar ${counter3}`; // Update teks tombol
    callback(counter3); // Panggil callback untuk memperbarui totalClicks
  };
  element.addEventListener('click', () => setCounter3(counter3 + 1));
  setCounter3(0); // Inisialisasi
}
