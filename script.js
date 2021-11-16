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
    speakerName: "Yohai Benkler",
    speakerTitle: "Professor at Harvard Law School",
    speakerDesc:
      "Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.",
  },
  {
    speakerImageSrc: "./images/speaker_02.png",
    speakerImageAlt: "speaker 2 image",
    speakerName: "Jeon Gil-nam",
    speakerTitle:
      "Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)",
    speakerDesc:
      "By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.",
  },
  {
    speakerImageSrc: "./images/speaker_03.png",
    speakerImageAlt: "speaker 3 image",
    speakerName: "Noh So-young",
    speakerTitle: "Art Center Nabi Director, CC Korea Director",
    speakerDesc:
      "As the author of <Digital Art Art of Our Time>, he opened 'Art Center Nabi', Korea's first digital art institution in 2000, and is currently serving.",
  },
  {
    speakerImageSrc: "./images/speaker_04.png",
    speakerImageAlt: "speaker 4 image",
    speakerName: "Julia Leda",
    speakerTitle: "Head of the Young Pirates of Europe",
    speakerDesc:
      "European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU's",
  },
  {
    speakerImageSrc: "./images/speaker_05.png",
    speakerImageAlt: "speaker 5 image",
    speakerName: "Layla Tretikov",
    speakerTitle: "Secretary General of the Wikimedia Foundation",
    speakerDesc:
      "Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world's population.",
  },
  {
    speakerImageSrc: "./images/speaker_06.png",
    speakerImageAlt: "speaker 6 image",
    speakerName: "Ryan Merkley",
    speakerTitle: "Creative Commons CEO, Former Mozilla Foundation COO",
    speakerDesc:
      "He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. It has been actively promoting open movements such as open government and open source.",
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
