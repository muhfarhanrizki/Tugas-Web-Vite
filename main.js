import './style.css';
import { setupCounter1 } from './counter1.js';
import { setupCounter2 } from './counter2.js';
import { setupCounter3 } from './counter3.js';
import $ from 'jquery';

let totalKlik1 = 0;
let totalKlik2 = 0;
let totalKlik3 = 0;

$('#app').html(`
  <div class="konten">
    <h1>Dzikir Counter</h1>
    <h2 class="deskripsi">Semoga bermanfaat</h2>
    <button id="counter1" type="button">Subhanallah ${totalKlik1}</button>
    <button id="counter2" type="button" style="display: none;">Alhamdulillah ${totalKlik2}</button>
    <button id="counter3" type="button" style="display: none;">Allahu Akbar ${totalKlik3}</button>
    <button id="testombol" disabled>Next</button>
  </div>
`);

const nextButton = $('#testombol');

// Memeriksa apakah tombol "Next" bisa diaktifkan
const checkNextButton = () => {
  if (totalKlik1 >= 33 && $('#counter1').is(':visible')) {
    nextButton.prop('disabled', false);
  } else if (totalKlik2 >= 33 && $('#counter2').is(':visible')) {
    nextButton.prop('disabled', false);
  } else if (totalKlik3 >= 33 && $('#counter3').is(':visible')) {
    nextButton.prop('disabled', false);
  } else {
    nextButton.prop('disabled', true);
  }
};

// Setup counter untuk tombol Subhanallah
setupCounter1($('#counter1')[0], (hitung) => {
  totalKlik1 = hitung;
  checkNextButton();
});

// Setup counter untuk tombol Alhamdulillah
setupCounter2($('#counter2')[0], (hitung) => {
  totalKlik2 = hitung;
  checkNextButton();
});

// Setup counter untuk tombol Allahu Akbar
setupCounter3($('#counter3')[0], (hitung) => {
  totalKlik3 = hitung;
  checkNextButton();
});

// Event listener untuk tombol "Next"
nextButton.on('click', () => {
  const counterButton1 = $('#counter1');
  const counterButton2 = $('#counter2');
  const counterButton3 = $('#counter3');

  if (counterButton1.is(':visible') && totalKlik1 >= 33) {
    counterButton1.hide();
    counterButton2.show();
    nextButton.prop('disabled', true);
  } else if (counterButton2.is(':visible') && totalKlik2 >= 33) {
    counterButton2.hide();
    counterButton3.show();
    nextButton.prop('disabled', true);
  } else if (counterButton3.is(':visible') && totalKlik3 >= 33) {
    alert('Alhamdulillah, kamu telah dzikir hari ini. Barangsiapa yang bertakwa kepada Allah, niscaya Allah menjadikan baginya kemudahan dalam urusannya. QS. At-Talaq: 4');
  }
});
