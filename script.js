function calculate() {
  const H = parseFloat(document.querySelector('input[name="H"]').value);
  const C = parseFloat(document.querySelector('input[name="C"]').value);
  const S = parseFloat(document.querySelector('input[name="S"]').value);
  const N = parseFloat(document.querySelector('input[name="N"]').value);
  const O = parseFloat(document.querySelector('input[name="O"]').value);
  const W = parseFloat(document.querySelector('input[name="W"]').value);
  const A = parseFloat(document.querySelector('input[name="A"]').value);

  const Kc = 100 / (100 - W);
  const Kr = 100 / (100 - W - A);

  const Hc = (H * Kc).toFixed(2);
  const Cc = (C * Kc).toFixed(2);
  const Sc = (S * Kc).toFixed(2);
  const Nc = (N * Kc).toFixed(3);
  const Oc = (O * Kc).toFixed(2);
  const Ac = (A * Kc).toFixed(2);

  const Hr = (H * Kr).toFixed(2);
  const Cr = (C * Kr).toFixed(2);
  const Sr = (S * Kr).toFixed(2);
  const Nr = (N * Kr).toFixed(3);
  const Or = (O * Kr).toFixed(2);

  const Qr = (339 * C + 1030 * H - 108.8 * (O - S) - 25 * W).toFixed(2);
  const Qd = (Qr * Kc).toFixed(2);
  const Qg = (Qr * Kr).toFixed(2);

  document.getElementById("results").innerHTML = `
    <h3>Результати:</h3>
    <p><b>K<sub>суха</sub></b> = ${Kc.toFixed(2)}, <b>K<sub>горюча</sub></b> = ${Kr.toFixed(2)}</p>
    <p><b>Суха маса:</b> H = ${Hc}%, C = ${Cc}%, S = ${Sc}%, N = ${Nc}%, O = ${Oc}%, A = ${Ac}%</p>
    <p><b>Горюча маса:</b> H = ${Hr}%, C = ${Cr}%, S = ${Sr}%, N = ${Nr}%, O = ${Or}%</p>
    <p><b>Нижча теплота згоряння:</b><br>
       Робоча: ${Qr} МДж/кг<br>
       Суха: ${Qd} МДж/кг<br>
       Горюча: ${Qg} МДж/кг</p>
  `;
}
