document.getElementById("searchBtn").onclick = function() {
    let text = document.getElementById("searchInput").value.trim();
    let count = document.getElementById("bestCount").value;

    if(text === "") return alert("اكتب اسم الفيديو!");

    let encoded = encodeURIComponent(text);

    // رابط يشغّل أفضل نتائج داخل الموقع بدون الانتقال ليوتيوب
    let embedLink = `https://www.youtube.com/embed?listType=search&list=${encoded}`;

    document.getElementById("videoArea").innerHTML =
        `<iframe src="${embedLink}" allowfullscreen></iframe>`;
};
