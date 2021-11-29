let message = document.getElementById('messageIn');
let stickerPackageId = document.getElementById('stickerPackageIdIn');
let stickerId = document.getElementById('stickerIdIn');

const subBt = document.getElementById('subBt');
const resBt = document.getElementById('resBt');

subBt.addEventListener('click', () => {
    console.log(message.value, stickerPackageId.value, stickerId.value);




    axios({
        method: 'post',
        url: 'https://notify-api.line.me/api/notify',
        headers: {'Authorization': 'Bearer CciBEJrsGnIqydiovzi5G2fiuJfi2mtHb0xMZppnsLx'},
        data: {
            message: message.value,
            stickerPackageId: stickerPackageId.value,
            stickerId: stickerId.value
        }
    }).then((res) => {
        console.log(res.data);


    })


})

resBt.addEventListener('click', () => {
    message.value = "";
    stickerPackageId.value = "";
    stickerId.value = "";

})

