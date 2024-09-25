// counter2.js
export function setupCounter2(element, callback) {
  let counter2 = 0;
  const setCounter2 = (count) => {
    if (count > 33) {
      count = 33;
    }
    counter2 = count;
    element.innerHTML = `Alhamdulillah ${counter2}`; // Update teks tombol
    callback(counter2); // Panggil callback untuk memperbarui totalClicks
  };
  element.addEventListener('click', () => setCounter2(counter2 + 1));
  setCounter2(0); // Inisialisasi
}
