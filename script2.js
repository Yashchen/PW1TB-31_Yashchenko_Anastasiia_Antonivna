function calculateMazut() {
  const form = document.forms["fuelFormMazut"];
  const C = parseFloat(form.C.value);
  const H = parseFloat(form.H.value);
  const O = parseFloat(form.O.value);
  const S = parseFloat(form.S.value);
  const Qdaf = parseFloat(form.Q.value);
  const W = parseFloat(form.W.value);
  const Ad = parseFloat(form.Ad.value);
  const V = parseFloat(form.V.value);

  // Множник для перерахунку горючої маси на робочу
  const multiplier = (100 - W - Ad) / 100;
  const Cw = (C * multiplier).toFixed(2);
  const Hw = (H * multiplier).toFixed(2);
  const Ow = (O * multiplier).toFixed(2);
  const Sw = (S * multiplier).toFixed(2);
  const Aw = (Ad * (100 - W) / 100).toFixed(2);
  const Qr = (Qdaf * multiplier).toFixed(2);
  const Vw = (V * (100 - W) / 100).toFixed(2);

  document.getElementById("results").innerHTML = `
    <h3>Результати:</h3>
    <p><b>Склад робочої маси мазуту:</b></p>
    <ul>
      <li>Вуглець: ${Cw}%</li>
      <li>Водень: ${Hw}%</li>
      <li>Кисень: ${Ow}%</li>
      <li>Сірка: ${Sw}%</li>
      <li>Зола: ${Aw}%</li>
      <li>Ванадій: ${Vw} мг/кг</li>
    </ul>
    <p><b>Нижча теплота згоряння на робочу масу:</b> ${Qr} МДж/кг</p>
  `;
}
