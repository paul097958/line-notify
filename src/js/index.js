/* get HTML */

//  input
const message = document.getElementById('messageIn');
const stickerPackageId = document.getElementById('stickerPackageIdIn');
const stickerId = document.getElementById('stickerIdIn');
//  button
const subBt = document.getElementById('subBt');
const resBt = document.getElementById('resBt');
//  submit click event
subBt.addEventListener('click', () => {
    console.log('your data:',message.value, stickerPackageId.value, stickerId.value);
});
// reset click event
resBt.addEventListener('click', () => {
    message.value = "";
    stickerPackageId.value = "";
    stickerId.value = "";
});

