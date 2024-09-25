// counter1.js
export function setupCounter1(element, callback) {
  let counter1 = 0;
  const setCounter1 = (count) => {
    if (count > 33) {
      count = 33;
    }
    counter1 = count;
    element.innerHTML = `Subhanallah ${counter1}`; // Update teks tombol
    callback(counter1); // Panggil callback untuk memperbarui totalClicks
  };
  element.addEventListener('click', () => setCounter1(counter1 + 1));
  setCounter1(0); // Inisialisasi
}
