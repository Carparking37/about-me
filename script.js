const imgBackBtnEL = document.getElementById('img-back-btn')
let arrayOfhiddenImages=[];
function imagesbvack() {
    arrayOfhiddenImages.map((imageId) => {
const hiddenImage = document.getElementById(imageId);
console.log(hiddenImage)
hiddenImage.style.display='block'
     })
    imgBackBtnEL.style.display = 'none';
    arrayOfhiddenImages = []
}
function hideObject(imageId) {
    arrayOfhiddenImages.push(imageId)
    const selectedImg = document.getElementById(imageId);
    selectedImg.style.display = 'none'
    if (imgBackBtnEL.style.display === 'none' || !imgBackBtnEL.style.display) {
        imgBackBtnEL.style.display='block'
    }
}
