const aLaCardData = cardData[0];
console.log(aLaCardData);

const basicCardData = cardData[1];
console.log(basicCardData);

const plusCardData = cardData[2];
console.log(plusCardData);

const premierCardData = cardData[3];
console.log(premierCardData);

const membershipCardHeadingList = document.querySelectorAll( ".membership-card__heading" ),
  membershipCardPriceList = document.querySelectorAll( ".membership-card__price span" ),
  membershipCardImgList = document.querySelectorAll( ".membership-card__card-image" ),
  membershipCardCtaList = document.querySelectorAll( ".compare-cards__cta-container a" );

const roadsideData = [
  aLaCardData.roadside,
  basicCardData.roadside,
  plusCardData.roadside,
  premierCardData.roadside,
];
const savingsData = [
  aLaCardData.savings,
  basicCardData.savings,
  plusCardData.savings,
  premierCardData.savings,
];
const benefitsData = [
  aLaCardData.benefits,
  basicCardData.benefits,
  plusCardData.benefits,
  premierCardData.benefits,
];

console.log(roadsideData);
console.log(savingsData);
console.log(benefitsData);

// ----- Set the card data via .innerHTML -----
const setCardDataHtml = (collectDataList, cardDataType) => {
  for (let index = 0; index < collectDataList.length; index++) {
    const element = collectDataList[index];
    if (cardDataType === "cardName") {
      element.innerHTML += cardData[index].cardName;
    }
    if (cardDataType === "cardValue") {
      element.innerHTML += cardData[index].cardValue;
    }
  }
};
setCardDataHtml(membershipCardHeadingList, "cardName");
setCardDataHtml(membershipCardPriceList, "cardValue");

// ----- Set the card data via attribute change -----
const setCardDataAttr = (collectDataList, cardAttrType) => {
  console.log(collectDataList);
  console.log(cardAttrType);

  for (let index = 0; index < collectDataList.length; index++) {
    const element = collectDataList[index];
    if (cardAttrType === "src") {
      element.src = cardData[index].cardImg;
    }
    if (cardAttrType === "href") {
      element.href = cardData[index].cardLink;
    }
  }
};
setCardDataAttr(membershipCardImgList, "src");
setCardDataAttr(membershipCardCtaList, "href");

// ----- Media query -----
document.addEventListener("DOMContentLoaded", function (e) {
  let mqls = [
    window.matchMedia("(max-width: 767px)"),
    window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
    window.matchMedia("(min-width: 992px)"),
  ];

  const mqh = () => {
    if (mqls[0].matches) {
      console.log("this is mobile");
      console.log("CALLBACK (max-width: 767px)");
    } else if (mqls[1].matches) {
      console.log("this is tablet");
      console.log("CALLBACK (min-width: 768px)");
    } else if (mqls[2].matches) {
      console.log("this is desk");
      console.log("CALLBACK (min-width: 992px)");
    }
    console.log("window.innerWidth: " + window.innerWidth);
  };

  const mappedMq = mqls.map((x) => x.addListener(mqh));
  mqh();
});
