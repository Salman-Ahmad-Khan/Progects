const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dd09ed60e5msh45d40e6045633b6p18af8ajsn56e39a67fee5",
    "X-RapidAPI-Host": "al-quran1.p.rapidapi.com",
  },
};

const getQuranInfo = (chapterId, verseId) => {
  quranInfo.innerHTML = chapterId + ":" + verseId;
  fetch(`https://al-quran1.p.rapidapi.com/${chapterId}/${verseId}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      chapterId.innerHTML = chapterId;
      verseId.innerHTML = verseId;

      //   content.innerHTML =
      //     "Chapter: " +
      //     chapterId +
      //     " Verse: " +
      //     verseId +
      //     "<br>" +
      //     "<br>" +
      //     response.content;

      content.innerHTML = response.content;
      document.getElementById("chapterId").innerHTML = "Chapter: " + chapterId;
      document.getElementById("verseId").innerHTML = "Verse: " + verseId;

      translation_eng.innerHTML = response.translation_eng;
      transliteration.innerHTML = response.transliteration;
    })
    .catch((err) => console.error(err));
};

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  var chapterId = document.getElementById("chapterId").value;
  var verseId = document.getElementById("verseId").value;
  if (chapterId != "" && verseId != "") {
    getQuranInfo(chapterId, verseId);
  }
});

getQuranInfo(29, 57);
