const aLaCardData = cardData[0],
  basicCardData = cardData[1],
  plusCardData = cardData[2],
  premierCardData = cardData[3],
  membershipCardHeadingList = document.querySelectorAll( ".membership-card__heading" ),
  membershipCardPriceList = document.querySelectorAll( ".membership-card__price span" ),
  membershipCardImgList = document.querySelectorAll( ".membership-card__card-image" ),
  membershipCardCtaList = document.querySelectorAll(".compare-cards__cta-container a"),
  roadsideAccordionHolder = document.querySelector(".roadside.accordion__content-container .accordion__complex-row"),
  savingsAccordionHolder = document.querySelector(".savings.accordion__content-container .accordion__complex-row"),
  benefitsAccordionHolder = document.querySelector(".benefits.accordion__content-container .accordion__complex-row");

console.log(aLaCardData);
console.log(basicCardData);
console.log(plusCardData);
console.log(premierCardData);

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
  for (let index = 0; index < collectDataList.length; index++) {
    const element = collectDataList[index];
    if (cardAttrType === "src") {
      element.src = cardData[index].cardImg;
    }
    if (cardAttrType === "href") {
      element.href = cardData[index].cardLink.url;
      element.innerHTML = cardData[index].cardLink.label;
    }
  }
};
setCardDataAttr(membershipCardImgList, "src");
setCardDataAttr(membershipCardCtaList, "href");

// ----- Set the card accordion data -----
const roadsideData = [
    aLaCardData.roadside,
    basicCardData.roadside,
    plusCardData.roadside,
    premierCardData.roadside,
  ],
  savingsData = [
    aLaCardData.savings,
    basicCardData.savings,
    plusCardData.savings,
    premierCardData.savings,
  ],
  benefitsData = [
    aLaCardData.benefits,
    basicCardData.benefits,
    plusCardData.benefits,
    premierCardData.benefits,
  ];

const rowParity = (rowParity, transposedArrayItem) => {
  return `
    <div class="row ${rowParity}">
      <div class="aLaCarte d-none d-lg-block col-6 col-md-4 col-lg-3 rich-text">${transposedArrayItem[0]}</div>
      <div class="basic col-6 col-md-4 col-lg-3 rich-text">${transposedArrayItem[1]}</div>
      <div class="plus col-6 col-md-4 col-lg-3 rich-text">${transposedArrayItem[2]}</div>
      <div class="premier d-none d-md-block col-6 col-md-4 col-lg-3 rich-text">${transposedArrayItem[3]}</div>
    </div>
  `;
};

const transposeCardData = (accordionData) => {
  const transposedArray = accordionData[0].map((_, colIndex) =>
    accordionData.map((row) => row[colIndex])
  );

  const accordionRow = transposedArray
    .map((transposedArrayItem, index) => {
      if (index % 2 === 0) {
        return rowParity("even", transposedArrayItem);
      } else {
        return rowParity("odd", transposedArrayItem);
      }
    }).join("");

  return accordionRow;
};

roadsideAccordionHolder.innerHTML = transposeCardData(roadsideData);
savingsAccordionHolder.innerHTML = transposeCardData(savingsData);
benefitsAccordionHolder.innerHTML = transposeCardData(benefitsData);

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
