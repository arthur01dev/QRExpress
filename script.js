const inputValue = document.querySelector("#inputValue");
const btnValue = document.querySelector("#buttonValue");
const imgQrCode = document.querySelector("#imgQr-code");
const wrapper = document.querySelector(".wrapper");
let valueDefault;

//API --> (https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example)

btnValue.addEventListener("click", () => {
  let qrCodeValue = inputValue.value.trim();
  if (!qrCodeValue || qrCodeValue === valueDefault) return;
  valueDefault = qrCodeValue;
  btnValue.innerText = "Gerando QR Code...";
  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`;
  imgQrCode.addEventListener("load", () => {
    wrapper.classList.add("active");
    btnValue.innerText = "Gerar QRCode";
  });
});
