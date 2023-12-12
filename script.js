const imgBackBtnEL = document.getElementById('img-back')
let arrayOfhiddenImages=[];
function imagesBack() {
    arrayOfhiddenImages.map((imageId) => {
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