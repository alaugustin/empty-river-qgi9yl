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
      rvOptionsHolderList: document.querySelectorAll(".rvOption"),
      bestValueHolderList: document.querySelectorAll(".valueContainer"),
      membershipCardHeadingList: document.querySelectorAll(".membership-card__heading"),
      membershipCardPriceList: document.querySelectorAll(".membership-card__price span"),
      membershipCardImgList: document.querySelectorAll(".membership-card__card-image"),
      membershipCardCtaList: document.querySelectorAll(".compare-cards__cta-container a"),
      roadsideAccordionHolder: document.querySelector(".roadside.accordion__content-container .accordion__complex-row"),
      savingsAccordionHolder: document.querySelector(".savings.accordion__content-container .accordion__complex-row"),
      benefitsAccordionHolder: document.querySelector(".benefits.accordion__content-container .accordion__complex-row"),
      bestValueHtml: `<div class="rounded text-center p-1 bg-primary text-white">Best Value</div>`,
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
    const compMemConfig = compareMembership.config;

    compareMembership.twoOrThreeColumnsVisible();
    compareMembership.setCardDataHtml(compMemConfig.membershipCardHeadingList, "cardName");
    compareMembership.setCardDataHtml(compMemConfig.membershipCardPriceList, "cardValue");
    compareMembership.setCardDataAttr(compMemConfig.membershipCardImgList, "src");
    compareMembership.setCardDataAttr(compMemConfig.membershipCardCtaList, "href");
    compareMembership.initCardBestValue();
    compareMembership.initCardRvOption();
    compMemConfig.roadsideAccordionHolder.innerHTML = compareMembership.transposeCardData(roadsideData);
    compMemConfig.savingsAccordionHolder.innerHTML = compareMembership.transposeCardData(savingsData);
    compMemConfig.benefitsAccordionHolder.innerHTML = compareMembership.transposeCardData(benefitsData);

    // console.log(compMemConfig);
  },

  // setOptionAttrHide: (targetColumnAndOption) => {
  //   targetColumnAndOption.setAttribute("disabled", true);
  //   targetColumnAndOption.setAttribute("aria-hidden", true);
  // },

  // twoColInit: (columnsDisplayBlock) => {
  //   console.log("it's twoColInit");
  //   console.log(columnsDisplayBlock);
  // },

  // threeColInit: (columnsDisplayBlock) => {
  //   console.log("it's threeColInit");
  //   console.log(columnsDisplayBlock);
  // },

  // handleDropdownChange: (selectBoxValue, selectedOptionIndex, event) => {
  //   const selectBoxCollection = compareMembership.config.compareSelectBoxList,
  //   columnCollectionArray = [].slice.call(selectBoxCollection)

  //   console.log(`
  //   the select box value is ${selectBoxValue}
  //   the select box value index is ${selectedOptionIndex}
  //   `);
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(cardData[selectedOptionIndex]); // selected card data

  //   columnCollectionArray.map(
  //     selectBox => {
  //       if (selectBox.id == event.target.id) {
  //         selectBox.style.backgroundColor = "red";
  //         console.log(selectBox.options[selectedOptionIndex]);
  //       } else {
  //         selectBox.style.backgroundColor = "blue";
  //         console.log(selectBox.options[selectedOptionIndex]);
  //       }
  //     }
  //   )
  // },

  twoCols: () => {
    console.log("it's 2 columns");
  },
  threeCols: () => {
    console.log("it's 3 columns");
  },

  // ----- Is the page two or three columns -----
  twoOrThreeColumnsVisible: () => {
    const columnCollection = compareMembership.config.topRowColumnsList,
      columnCollectionArray = [].slice.call(columnCollection),
      columnsDisplayNone = columnCollectionArray.filter((el) => { return getComputedStyle(el).display === "none" }),
      columnsDisplayBlock = columnCollectionArray.filter((el) => { return getComputedStyle(el).display === "block" });
    // ----- Three columns -----
    if (columnsDisplayNone.length == 1) {
      console.log("it's 3 columns");
      // const colAselect = columnsDisplayBlock[0].getElementsByTagName("select");
      // const colAselectOptions = colAselect[0].options;
      // const colBselect = columnsDisplayBlock[1].getElementsByTagName("select");
      // const colBselectOptions = colBselect[0].options;
      // const colCselect = columnsDisplayBlock[2].getElementsByTagName("select");
      // const colCselectOptions = colCselect[0].options;
    }
    // ----- Two columns -----
    if (columnsDisplayNone.length == 2) {
      console.log("it's 2 columns");
    }
  },

  // ----- Set the card data via .innerHTML -----
  setCardDataHtml: (collectDataList, cardDataType) => {
    collectDataList.forEach((collectDataListItem, index) => {
      const dataItem = collectDataList[index];
      if (cardDataType === "cardName") { dataItem.innerHTML += cardData[index].cardName; }
      if (cardDataType === "cardValue") { dataItem.innerHTML += cardData[index].cardValue; }
    });
  },

  // ----- Set the card data via attribute change -----
  setCardDataAttr: (collectDataList, cardAttrType) => {
    collectDataList.forEach((collectDataListItem, index) => {
      const dataItem = collectDataList[index];
      if (cardAttrType === "src") { dataItem.src = cardData[index].cardImg; }
      if (cardAttrType === "href") {
        dataItem.href = cardData[index].cardLink.url;
        dataItem.innerHTML = cardData[index].cardLink.label;
      }
    });
  },

  initCardBestValue: () => {
    const compMemConfig = compareMembership.config,
      bestValHolderList = compMemConfig.bestValueHolderList,
      bestValPresent = [aLaCardData.bestValue, basicCardData.bestValue, plusCardData.bestValue, premierCardData.bestValue];

    bestValPresent.map(
      (x, index) => {
        if (x) { bestValHolderList[index].innerHTML = compMemConfig.bestValueHtml }
      }
    )
  },

  initCardRvOption: () => {
    const rvOptionHolderList = compareMembership.config.rvOptionsHolderList,
      rvOptionPresent = [aLaCardData.rvOption, basicCardData.rvOption, plusCardData.rvOption, premierCardData.rvOption];

    rvOptionPresent.map(
      (x, index) => {
        if (x) {
          rvOptionHolderList[index].innerHTML = `
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1">${rvOptionPresent[index]}</label>
          `
        }
      }
    )
  },

  // ----- Set accordion row parity -----
  rowParity: (rowParity, transposedArrayItem) => {
    return (`
      <div class="row ${rowParity}">
        <div class="colA d-none d-lg-block col-6 col-md-4 col-lg-3 rich-text"><div class="px-5 py-3">${transposedArrayItem[0]}</div></div>
        <div class="colB col-6 col-md-4 col-lg-3 rich-text"><div class="px-5 py-3">${transposedArrayItem[1]}</div></div>
        <div class="colC col-6 col-md-4 col-lg-3 rich-text"><div class="px-5 py-3">${transposedArrayItem[2]}</div></div>
        <div class="colD d-none d-md-block col-6 col-md-4 col-lg-3 rich-text"><div class="px-5 py-3">${transposedArrayItem[3]}</div></div>
      </div>
    `);
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

  // ----- Populate selected column with data
  populateSelectedColumnData: (selectedColumn, selectedIndex, selectedCardData) => {
    const compMemConfig = compareMembership.config,
      topColumnContainer = document.querySelectorAll(".compare-membership__top .row > div"),
      selectedControlRowCol = topColumnContainer[selectedIndex],
      roadsideAccordionHolder = compMemConfig.roadsideAccordionHolder,
      savingsAccordionHolder = compMemConfig.savingsAccordionHolder,
      benefitsAccordionHolder = compMemConfig.benefitsAccordionHolder,
      selectedControlRowColPrice = selectedControlRowCol.querySelectorAll(".membership-card__price span"),
      selectedControlRowColImage = selectedControlRowCol.querySelectorAll(".membership-card__card-image"),
      selectedControlRowColCta = selectedControlRowCol.querySelectorAll(".compare-cards__cta-container a"),
      selectedControlRowColValue = selectedControlRowCol.getElementsByClassName("valueContainer"),
      selectedControlRowColRv = selectedControlRowCol.getElementsByClassName("rvOption"),
      columnB = ".row > div.colB",
      columnC = ".row > div.colC",
      columnD = ".row > div.colD";;

    // update selected top section column items
    selectedControlRowColPrice[0].innerHTML = `$${selectedCardData.cardValue}`;
    selectedControlRowColImage[0].src = selectedCardData.cardImg; // change the alt
    selectedControlRowColCta[0].href = selectedCardData.cardLink.url
    selectedControlRowColCta[0].innerHTML = selectedCardData.cardLink.label

    selectedCardData.bestValue
      ? selectedControlRowColValue[0].innerHTML = compMemConfig.bestValueHtml
      : selectedControlRowColValue[0].innerHTML = "";

    selectedCardData.rvOption
      ? selectedControlRowColRv[0].innerHTML = `
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        <label for="vehicle1">${selectedCardData.rvOption}</label>`
      : selectedControlRowColRv[0].innerHTML = "";

    updateColumnData = (accordionCellArray, selectedAccordionData) => {
      console.log(accordionCellArray);
      console.log(selectedAccordionData);

      accordionCellArray.map(
        (accordionCellArrayItem, index) => {
          accordionCellArrayItem.innerHTML = `
            <div class="px-5 py-3">${selectedAccordionData[index]}</div>
          `;
        }
      )
    }

    switch (selectedColumn) {
      case columnB:
        const roadsideAccordionCellB = roadsideAccordionHolder.querySelectorAll(columnB),
          roadsideAccordionCellArrayB = [].slice.call(roadsideAccordionCellB),
          savingsAccordionCellB = savingsAccordionHolder.querySelectorAll(columnB),
          savingsAccordionCellArrayB = [].slice.call(savingsAccordionCellB),
          benefitAccordionCellB = benefitsAccordionHolder.querySelectorAll(columnB),
          benefitAccordionCellArrayB = [].slice.call(benefitAccordionCellB);

        updateColumnData(roadsideAccordionCellArrayB, selectedCardData.roadside);
        updateColumnData(savingsAccordionCellArrayB, selectedCardData.savings);
        updateColumnData(benefitAccordionCellArrayB, selectedCardData.benefits);

        break;
      case columnC:
        const roadsideAccordionCellC = roadsideAccordionHolder.querySelectorAll(columnC),
          roadsideAccordionCellArrayC = [].slice.call(roadsideAccordionCellC),
          savingsAccordionCellC = savingsAccordionHolder.querySelectorAll(columnC),
          savingsAccordionCellArrayC = [].slice.call(savingsAccordionCellC),
          benefitAccordionCellC = benefitsAccordionHolder.querySelectorAll(columnC),
          benefitAccordionCellArrayC = [].slice.call(benefitAccordionCellC);

        updateColumnData(roadsideAccordionCellArrayC, selectedCardData.roadside);
        updateColumnData(savingsAccordionCellArrayC, selectedCardData.savings);
        updateColumnData(benefitAccordionCellArrayC, selectedCardData.benefits);

        break;
      case columnD:
        const roadsideAccordionCellD = roadsideAccordionHolder.querySelectorAll(columnD),
          roadsideAccordionCellArrayD = [].slice.call(roadsideAccordionCellD),
          savingsAccordionCellD = savingsAccordionHolder.querySelectorAll(columnD),
          savingsAccordionCellArrayD = [].slice.call(savingsAccordionCellD),
          benefitAccordionCellD = benefitsAccordionHolder.querySelectorAll(columnD),
          benefitAccordionCellArrayD = [].slice.call(benefitAccordionCellD);

        updateColumnData(roadsideAccordionCellArrayD, selectedCardData.roadside);
        updateColumnData(savingsAccordionCellArrayD, selectedCardData.savings);
        updateColumnData(benefitAccordionCellArrayD, selectedCardData.benefits);

        break;

      default:
        break;
    }
  },

  getSelectedColumn: (selectedBox, selectedCardData) => {

    const columnB = ".row > div.colB",
      columnC = ".row > div.colC",
      columnD = ".row > div.colD";

    switch (selectedBox.id) {
      case "selectBoxB":
        selectedIndex = 1;
        compareMembership.populateSelectedColumnData(columnB, selectedIndex, selectedCardData);

        break;
      case "selectBoxC":
        selectedIndex = 2;
        compareMembership.populateSelectedColumnData(columnC, selectedIndex, selectedCardData);

        break;
      case "selectBoxD":
        selectedIndex = 3;
        compareMembership.populateSelectedColumnData(columnD, selectedIndex, selectedCardData);

        break;

      default:
        break;
    }
  },

  // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
  eventHandlers: () => {
    const compareSelectBoxList = compareMembership.config.compareSelectBoxList,
      compareSelectBoxListArray = [].slice.call(compareSelectBoxList);

      // window.addEventListener('resize', (event) => {
      //   compareMembership.twoOrThreeColumnsVisible(event);
      // }, true);

      // ----- Handle dropdown changes -----
      compareSelectBoxListArray.map(
      selectBox => {
          selectBox.addEventListener('change', (event) => {
            const selectedBox = selectBox,
              selectBoxValue = selectBox.value,
              selectOptionIndex = selectBox.selectedIndex,
              selectedCardData = cardData[selectOptionIndex];

          switch (selectBoxValue) {
            case "aLaCarte":
              compareMembership.getSelectedColumn(selectedBox, selectedCardData, selectBoxValue, selectOptionIndex);

              break;
            case "basic":
              compareMembership.getSelectedColumn(selectedBox, selectedCardData, selectBoxValue, selectOptionIndex);

              break;
            case "plus":
              compareMembership.getSelectedColumn(selectedBox, selectedCardData, selectBoxValue, selectOptionIndex);

              break;
            case "premier":
              compareMembership.getSelectedColumn(selectedBox, selectedCardData, selectBoxValue, selectOptionIndex);

              break;
            default:
              break;
          }
        }, true);
      }
    );
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener("load", () => {
  compareMembership.init();
});

// document.addEventListener("DOMContentLoaded", function (e) {
//   let mqls = [
//     window.matchMedia("(max-width: 767px)"),
//     window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
//     window.matchMedia("(min-width: 992px)"),
//   ];

//   const mqh = () => {
//     if (mqls[0].matches) {
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