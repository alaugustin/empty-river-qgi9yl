const aLaCardData = cardData[0],
  basicCardData = cardData[1],
  plusCardData = cardData[2],
  premierCardData = cardData[3];


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

/* -------------------- new JS template below -------------------- */
let compareMembership = {
  version: "1.0",
  author: "CAASCO Digital Operations",
  project: "Compare Membership",
  Date: "2022",

  // -------------------- INITIALIZATION --------------------
  init: function () {
    let context = this;

    // GLOBAL VARIABLES --------------------
    context.config = {
      aLaCardData: cardData[0],
      basicCardData: cardData[1],
      plusCardData: cardData[2],
      premierCardData: cardData[3],
      topRowColumnsList: document.querySelectorAll(".compare-membership__top .row > div"),
      compareSelectBoxList: document.querySelectorAll(".compare-membership__top select"),
      membershipCardHeadingList: document.querySelectorAll(".membership-card__heading"),
      membershipCardPriceList: document.querySelectorAll(".membership-card__price span"),
      membershipCardImgList: document.querySelectorAll(".membership-card__card-image"),
      membershipCardCtaList: document.querySelectorAll(".compare-cards__cta-container a"),
      roadsideAccordionHolder: document.querySelector(".roadside.accordion__content-container .accordion__complex-row"),
      savingsAccordionHolder: document.querySelector(".savings.accordion__content-container .accordion__complex-row"),
      benefitsAccordionHolder: document.querySelector(".benefits.accordion__content-container .accordion__complex-row"),
      roadsideData: [
        aLaCardData.roadside,
        basicCardData.roadside,
        plusCardData.roadside,
        premierCardData.roadside
      ],
      savingsData: [
        aLaCardData.savings,
        basicCardData.savings,
        plusCardData.savings,
        premierCardData.savings,
      ],
      benefitsData: [
        aLaCardData.benefits,
        basicCardData.benefits,
        plusCardData.benefits,
        premierCardData.benefits,
      ],
    };

    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    compareMembership.onDomReady();
    compareMembership.eventHandlers();
  },

  onDomReady: () => {
    compareMembership.twoOrThreeColumnsVisible();
    compareMembership.setCardDataHtml(compareMembership.config.membershipCardHeadingList, "cardName");
    compareMembership.setCardDataHtml(compareMembership.config.membershipCardPriceList, "cardValue");
    compareMembership.setCardDataAttr(compareMembership.config.membershipCardImgList, "src");
    compareMembership.setCardDataAttr(compareMembership.config.membershipCardCtaList, "href");
    compareMembership.config.roadsideAccordionHolder.innerHTML = compareMembership.transposeCardData(roadsideData);
    compareMembership.config.savingsAccordionHolder.innerHTML = compareMembership.transposeCardData(savingsData);
    compareMembership.config.benefitsAccordionHolder.innerHTML = compareMembership.transposeCardData(benefitsData);
    // compareMembership.changDropdownselection();

    // console.log(compareMembership.config);
  },
  setOptionAttr: (targetColumnAndOption) => {
    targetColumnAndOption.setAttribute("disabled", true);
    targetColumnAndOption.setAttribute("hidden", true);
    targetColumnAndOption.setAttribute("aria-hidden", true);
    targetColumnAndOption.setAttribute("class", "d-none");
  },
  twoColInit: (columnsDisplayBlock) => {
    console.log("it's 2 columns init");
    const columnA = columnsDisplayBlock[0],
      columnAplus = columnA.querySelectorAll("option")[2],
      columnB = columnsDisplayBlock[1],
      columnBbasic = columnB.querySelectorAll("option")[1];

    compareMembership.setOptionAttr(columnAplus);
    compareMembership.setOptionAttr(columnBbasic);
  },
  threeColInit: (columnsDisplayBlock) => {
    console.log("it's 3 columns init");
    const columnA = columnsDisplayBlock[0],
      columnAplus = columnA.querySelectorAll("option")[2],
      columnApremier = columnA.querySelectorAll("option")[3],
      columnB = columnsDisplayBlock[1],
      columnBbasic = columnB.querySelectorAll("option")[1],
      columnBpremier = columnB.querySelectorAll("option")[3],
      columnC = columnsDisplayBlock[2],
      columnCBasic = columnC.querySelectorAll("option")[1],
      columnCplus = columnC.querySelectorAll("option")[2]

    compareMembership.setOptionAttr(columnAplus);
    compareMembership.setOptionAttr(columnApremier);
    compareMembership.setOptionAttr(columnBbasic);
    compareMembership.setOptionAttr(columnBpremier);
    compareMembership.setOptionAttr(columnCBasic);
    compareMembership.setOptionAttr(columnCplus);
  },
  twoCols: () => {
    console.log("it's 2 columns init");
  },
  threeCols: () => {
    console.log("it's 3 columns init");
  },

  // ----- Is the page two or three columns -----
  twoOrThreeColumnsVisible: () => {
    const columnCollection = compareMembership.config.topRowColumnsList,
      columnCollectionArray = [].slice.call(columnCollection),
      columnsDisplayNone = columnCollectionArray.filter((el) => { return getComputedStyle(el).display === "none" }),
      columnsDisplayBlock = columnCollectionArray.filter((el) => { return getComputedStyle(el).display === "block" });
    // ----- Three columns -----
    if (columnsDisplayNone.length == 1) {
      compareMembership.threeColInit(columnsDisplayBlock);
    }
    // ----- Two columns -----
    if (columnsDisplayNone.length == 2) {
      compareMembership.twoColInit(columnsDisplayBlock);
    }
  },

  // ----- Set the card data via .innerHTML -----
  setCardDataHtml: (collectDataList, cardDataType) => {
    collectDataList.forEach((collectDataListItem, index) => {
      const element = collectDataList[index];
      if (cardDataType === "cardName") {
        element.innerHTML += cardData[index].cardName;
      }
      if (cardDataType === "cardValue") {
        element.innerHTML += cardData[index].cardValue;
      }
    });
  },

  // ----- Set the card data via attribute change -----
  setCardDataAttr: (collectDataList, cardAttrType) => {
    collectDataList.forEach((collectDataListItem, index) => {
      const element = collectDataList[index];
      if (cardAttrType === "src") {
        element.src = cardData[index].cardImg;
      }
      if (cardAttrType === "href") {
        element.href = cardData[index].cardLink.url;
        element.innerHTML = cardData[index].cardLink.label;
      }
    });
  },

  // ----- Set accordion row parity -----
  rowParity: (rowParity, transposedArrayItem) => {
    return (
      `<div class="row ${rowParity}">
      <div class="aLaCarte d-none d-lg-block col-6 col-md-4 col-lg-3 rich-text">${transposedArrayItem[0]}</div>
      <div class="basic col-6 col-md-4 col-lg-3 rich-text">${transposedArrayItem[1]}</div>
      <div class="plus col-6 col-md-4 col-lg-3 rich-text">${transposedArrayItem[2]}</div>
      <div class="premier d-none d-md-block col-6 col-md-4 col-lg-3 rich-text">${transposedArrayItem[3]}</div>
    </div>`
    );
  },

  // ----- Transpose card data -----
  transposeCardData: (accordionData) => {
    const transposedArray = accordionData[0].map((_, colIndex) =>
      accordionData.map((row) => row[colIndex])
    );

    const accordionRow = transposedArray
      .map((transposedArrayItem, index) => {
        if (index % 2 === 0) {
          return compareMembership.rowParity("even", transposedArrayItem);
        } else {
          return compareMembership.rowParity("odd", transposedArrayItem);
        }
      }).join("");

    return accordionRow;
  },

  // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
  // changDropdownselection: () => {
  //   console.log('changDropdownselection() executed');
  // },
  eventHandlers: () => {
    window.addEventListener('resize', function (event) {
      compareMembership.twoOrThreeColumnsVisible();
    }, true);
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener("load", () => {
  compareMembership.init();
});







// ----- Media query -----
// document.addEventListener("DOMContentLoaded", function (e) {
//   let mqls = [
//     window.matchMedia("(max-width: 767px)"),
//     window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
//     window.matchMedia("(min-width: 992px)"),
//   ];

//   const mqh = () => {
//     if (mqls[0].matches) {
//
//       console.log("this is mobile");
//       console.log("CALLBACK (max-width: 767px)");
//     } else if (mqls[1].matches) {
//       getNumberOfColumns();
//       console.log("this is tablet");
//       console.log("CALLBACK (min-width: 768px)");
//     } else if (mqls[2].matches) {
//       getNumberOfColumns();
//       console.log("this is desk");
//       console.log("CALLBACK (min-width: 992px)");
//     }
//     console.log("window.innerWidth: " + window.innerWidth);
//   };

//   const mappedMq = mqls.map((x) => x.addListener(mqh));
//   mqh();
// });