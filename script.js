// ################# Mobile Menu #################

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", (event) => {
  mainNav.classList.add("show");
});

mainNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A" || event.target.tagName === "I") {
    mainNav.classList.remove("show");
  }
});

// ################# Featured Speaker Section #################

const data = [
  {
    speakerImageSrc: "./images/speaker_01.png",
    speakerImageAlt: "speaker 1 image",
    speakerName: "Lisa Su",
    speakerTitle: "Business executive and electrical engineer, and CEO of AMD",
    speakerDesc:
      "Early in her career, Su worked at Texas Instruments, IBM, and Freescale Semiconductor in engineering and management positions.",
  },
  {
    speakerImageSrc: "./images/speaker_02.png",
    speakerImageAlt: "speaker 2 image",
    speakerName: "Pat Gelsinger",
    speakerTitle:
      "American business executive and engineer, currently serving as CEO of Intel",
    speakerDesc:
      "Graduated from Stanford University with a master's degree in engineering. Previously, he was CEO of VMware and president and chief operating officer (COO) at EMC.",
  },
  {
    speakerImageSrc: "./images/speaker_03.png",
    speakerImageAlt: "speaker 3 image",
    speakerName: "Noh So-young",
    speakerTitle: "Electrical engineer, and CEO of Qualcomm",
    speakerDesc:
      "Amon began his Qualcomm career in 1995 as an engineer, and during his tenure, has helped shape the strategic direction for the Company in several leadership roles.",
  },
  {
    speakerImageSrc: "./images/speaker_04.png",
    speakerImageAlt: "speaker 4 image",
    speakerName: "Koo Kwang-mo",
    speakerTitle: "Korean Business man, and CEO of LG",
    speakerDesc:
      "Young leader Koo Kwang-mo bore the burden of continuing this “right path” management and, at the same time, seeking survival in an ever more competitive global market.",
  },
  {
    speakerImageSrc: "./images/speaker_05.png",
    speakerImageAlt: "speaker 5 image",
    speakerName: "Kenichiro Yoshida",
    speakerTitle: "Business executive, and CEO of Sony",
    speakerDesc:
      "Kenichiro Yoshida has been the Chief Financial Officer of Sony Corporation since April 1, 2014 and Executive Deputy President since April 2015. And served as an Executive Vice President of Sony since December 1, 2013.",
  },
  {
    speakerImageSrc: "./images/speaker_06.png",
    speakerImageAlt: "speaker 6 image",
    speakerName: "Koh Dong-jin",
    speakerTitle: "Business executive, and CEO of Samsung",
    speakerDesc:
      "In 2015, Koh became the CEO of Samsung. In January 2020, Koh stepped down as Samsung CEO to become a co-CEO leading the company's IT and mobile communications division.",
  },
];

function createSpeaker(speakersData) {
  const speakersCont = document.getElementById("speakersCont");
	const sectionTitle = document.createElement("div");
	sectionTitle.classList.add("sectionTitle");
	const sectionTitleH2 = document.createElement("h2");
	sectionTitleH2.innerHTML = "Featured Speakers"
	const sectionTitleHr = document.createElement("hr");
	const speakersList = document.createElement("div");
	speakersList.classList.add("speakersList");
  for (let i = 0; i < data.length; i++) {
    const speaker = document.createElement("div");
    speaker.classList.add("speaker");
    const speakerImg = document.createElement("img");
    speakerImg.classList.add("speakerImg");
    speakerImg.setAttribute("src", data[i].speakerImageSrc);
    speakerImg.setAttribute("alt", data[i].speakerImageAlt);
    const speakerInfo = document.createElement("div");
    speakerInfo.classList.add("speakerInfo");
    const speakerName = document.createElement("h3");
    speakerName.classList.add("speakerName");
    speakerName.innerHTML = data[i].speakerName;
    const speakerTitle = document.createElement("p");
    speakerTitle.classList.add("speakerTitle");
    speakerTitle.innerHTML = data[i].speakerTitle;
    const hr = document.createElement("hr");
    const speakerDesc = document.createElement("p");
    speakerDesc.classList.add("speakerDesc");
    speakerDesc.innerHTML = data[i].speakerDesc;

    speakerInfo.append(speakerName);
    speakerInfo.append(speakerTitle);
		speakerInfo.append(hr)
    speakerInfo.append(speakerDesc);
    speaker.append(speakerImg);
    speaker.append(speakerInfo);
		sectionTitle.append(sectionTitleH2)
		sectionTitle.append(sectionTitleHr)
    speakersList.append(speaker);
    speakersCont.append(sectionTitle);
    speakersCont.append(speakersList);
  }
}
createSpeaker(data);
