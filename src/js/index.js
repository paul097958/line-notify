let message = document.getElementById('messageIn');
let stickerPackageId = document.getElementById('stickerPackageIdIn');
let stickerId = document.getElementById('stickerIdIn');

const subBt = document.getElementById('subBt');
const resBt = document.getElementById('resBt');

subBt.addEventListener('click', () => {
    console.log('your data:',message.value, stickerPackageId.value, stickerId.value);
});

resBt.addEventListener('click', () => {
    message.value = "";
    stickerPackageId.value = "";
    stickerId.value = "";

});

