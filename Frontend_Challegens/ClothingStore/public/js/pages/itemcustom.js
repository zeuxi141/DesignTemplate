function changeImage(id) {
    const imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('mainImage').setAttribute('src', imagePath);
}