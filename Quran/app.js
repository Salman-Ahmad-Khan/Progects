/*

----------------------------------------------------------------------------------------------------------
---------------------------------------------Disclaimer---------------------------------------------------
----------------------------------------------------------------------------------------------------------

1. The code for this website, including API keys, is freely available on GitHub.
2. The user is responsible for any unauthorized or malicious usage of the API keys.
3. The user should not use the API keys for any illegal or prohibited activities.
4. The user should only use the API keys within the terms of service and policies of the API providers.
5. Anyone should not use the API keys without the consent of the owner.
6. The user should be aware of any usage limits or expiration dates of the API keys.
7. The user should generate his own API keys if he plan to use the code for his own projects.
8. The user is responsible for keeping the API keys secure and not sharing them with others.
9. The developer of this website is not liable for any charges or consequences that may occur from the user's usage of
    the API keys.
10. By using this website and the code, the user accepts the terms and conditions of this disclaimer.



----------------------------------------------------------------------------------------------------------
---------------------------------------------Disclaimer---------------------------------------------------
----------------------------------------------------------------------------------------------------------
*/

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
