let m = document.querySelector("#maths");
let p = document.querySelector("#physics");
let c = document.querySelector("#chem");
let e = document.querySelector("#eng");
let h = document.querySelector("#hindi");
let per = document.querySelector("#percent");
let cgp = document.querySelector("#cgpa");
let bt = document.querySelector("#bt");

bt.addEventListener('click', result)
function result() {
  let maths = Number(m.value);
  let physics = Number(p.value);
  let chemistry = Number(c.value);
  let english = Number(e.value);
  let hindi = Number(h.value);
  let tot = maths + physics + chemistry + english + hindi;
  let percentage = (tot / 500) * 100;
  let cgpa=(percentage/9.5);
  per.innerHTML = percentage.toFixed(2);
  cgp.innerHTML=cgpa.toFixed(1);
}
