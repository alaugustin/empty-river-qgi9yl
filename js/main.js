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
      selectBox: document.getElementsByClassName("input__select-container"),
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

  selectBoxInnit: (numberOfColumns) => {
    const selectBox = compareMembership.config.selectBox;

    switch (numberOfColumns) {
      case 3:

        selectBox[1].innerHTML = `
          <select id="selectBoxB">
            <option value="aLaCarte" class="">A La Carte</option>
            <option value="basic" class="" selected="selected">Basic</option>
          </select>
        `;

        selectBox[2].innerHTML = `
          <select id="selectBoxC">
            <option value="aLaCarte" class="">A La Carte</option>
            <option value="plus" class="" selected="selected">Plus</option>
          </select>
        `;

        selectBox[3].innerHTML = `
          <select id="selectBoxD">
            <option value="aLaCarte" class="">A La Carte</option>
            <option value="premier" class="" selected="selected">Premier</option>
          </select>
        `;

        break;
      case 2:

        selectBox[1].innerHTML = `
          <select id="selectBoxB">
            <option value="aLaCarte" class="">A La Carte</option>
            <option value="basic" class="" selected="selected">Basic</option>
            <option value="premier" class="">Premier</option>
          </select>
        `;

        selectBox[2].innerHTML = `
          <select id="selectBoxC">
            <option value="aLaCarte" class="">A La Carte</option>
            <option value="plus" class="" selected="selected">Plus</option>
            <option value="premier" class="">Premier</option>
          </select>
        `;

        break;
      default:
        break;
    }
  },

  // ----- Is the page two or three columns -----
  twoOrThreeColumnsVisible: () => {
    const columnCollection = compareMembership.config.topRowColumnsList,
      columnCollectionArray = [].slice.call(columnCollection),
      columnsDisplayNone = columnCollectionArray.filter((el) => { return getComputedStyle(el).display === "none" }),
      columnsDisplayBlock = columnCollectionArray.filter((el) => { return getComputedStyle(el).display === "block" }),
      columnsDisplayed3 = (columnsDisplayNone.length == 1),
      columnsDisplayed2 = (columnsDisplayNone.length == 2);

    if (columnsDisplayed3) {
      compareMembership.selectBoxInnit(columnsDisplayBlock.length, columnsDisplayBlock);
    } else if (columnsDisplayed2) {
      compareMembership.selectBoxInnit(columnsDisplayBlock.length, columnsDisplayBlock);
    } else {
      console.log("four col");
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
      (bvHolder, index) => {
        if (bvHolder) { bestValHolderList[index].innerHTML = compMemConfig.bestValueHtml }
      }
    )
  },

  initCardRvOption: () => {
    const rvOptionHolderList = compareMembership.config.rvOptionsHolderList,
      rvOptionPresent = [aLaCardData.rvOption, basicCardData.rvOption, plusCardData.rvOption, premierCardData.rvOption];

    rvOptionPresent.map(
      (rvHolder, index) => {
        if (rvHolder) {
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

  handleDropDownChange: () => {
    const targetedSelectBox = event.target,
      optionsInSelectBoxCount = event.target.options.length;


    const columnCollection = compareMembership.config.topRowColumnsList,
      columnCollectionArray = [].slice.call(columnCollection),
      columnsDisplayNone = columnCollectionArray.filter((el) => { return getComputedStyle(el).display === "none" }),
      columnsDisplayBlock = columnCollectionArray.filter((el) => { return getComputedStyle(el).display === "block" }),
      columnsDisplayed3 = (columnsDisplayNone.length == 1),
      columnsDisplayed2 = (columnsDisplayNone.length == 2);

    columnsDisplayBlock.map(
      x => console.log(x.querySelector("select"))
    )

    if (columnsDisplayed3) {
      console.log(`it's three col`);
      console.log(targetedSelectBox);
      // console.log(columnsDisplayBlock);
    } else if (columnsDisplayed2) {
      console.log(`it's two col`);
      console.log(targetedSelectBox);
      // console.log(columnsDisplayBlock);
    } else {
      console.log("four col");
    }
  },

  // ----- Populate selected column with data
  handleWhoWasSelected: (selectedCardData) => {
    const compMemConfig = compareMembership.config,
      roadsideAccordionHolder = compMemConfig.roadsideAccordionHolder,
      savingsAccordionHolder = compMemConfig.savingsAccordionHolder,
      benefitsAccordionHolder = compMemConfig.benefitsAccordionHolder,
      topRowHolder = compareMembership.config.topRowColumnsList,
      selectedColumn = event.target.id,
      topColumnB = topRowHolder[1],
      topColumnC = topRowHolder[2],
      topColumnD = topRowHolder[3],
      columnB = ".row > div.colB",
      columnC = ".row > div.colC",
      columnD = ".row > div.colD";

    getTopRowItems = (selectedColumn) => {
      const selectedControlRowColPrice = selectedColumn.querySelectorAll(".membership-card__price span")[0],
        selectedControlRowColImage = selectedColumn.querySelectorAll(".membership-card__card-image")[0],
        selectedControlRowColCta = selectedColumn.querySelectorAll(".compare-cards__cta-container a")[0],
        selectedControlRowColValue = selectedColumn.getElementsByClassName("valueContainer")[0],
        selectedControlRowColRv = selectedColumn.getElementsByClassName("rvOption")[0];

      // update selected top section column items
      selectedControlRowColPrice.innerHTML = `$${selectedCardData.cardValue}`;
      selectedControlRowColImage.src = selectedCardData.cardImg; // change the alt
      selectedControlRowColCta.href = selectedCardData.cardLink.url
      selectedControlRowColCta.innerHTML = selectedCardData.cardLink.label

      selectedCardData.bestValue
        ? selectedControlRowColValue.innerHTML = compMemConfig.bestValueHtml
        : selectedControlRowColValue.innerHTML = "";

      selectedCardData.rvOption
        ? selectedControlRowColRv.innerHTML = `
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
      <label for="vehicle1">${selectedCardData.rvOption}</label>`
        : selectedControlRowColRv.innerHTML = "";
    }

    updateColumnData = (accordionCellArray, selectedAccordionData) => {
      accordionCellArray.map(
        (accordionCellArrayItem, index) => {
          accordionCellArrayItem.innerHTML = `
            <div class="px-5 py-3">${selectedAccordionData[index]}</div>
          `;
        }
      )
    }

    switch (selectedColumn) {
      case "selectBoxB":
        const roadsideAccordionCellB = roadsideAccordionHolder.querySelectorAll(columnB),
          roadsideAccordionCellArrayB = [].slice.call(roadsideAccordionCellB),
          savingsAccordionCellB = savingsAccordionHolder.querySelectorAll(columnB),
          savingsAccordionCellArrayB = [].slice.call(savingsAccordionCellB),
          benefitAccordionCellB = benefitsAccordionHolder.querySelectorAll(columnB),
          benefitAccordionCellArrayB = [].slice.call(benefitAccordionCellB);

          getTopRowItems(topColumnB);

        updateColumnData(roadsideAccordionCellArrayB, selectedCardData.roadside);
        updateColumnData(savingsAccordionCellArrayB, selectedCardData.savings);
        updateColumnData(benefitAccordionCellArrayB, selectedCardData.benefits);

        compareMembership.handleDropDownChange();

        break;
      case "selectBoxC":
        const roadsideAccordionCellC = roadsideAccordionHolder.querySelectorAll(columnC),
          roadsideAccordionCellArrayC = [].slice.call(roadsideAccordionCellC),
          savingsAccordionCellC = savingsAccordionHolder.querySelectorAll(columnC),
          savingsAccordionCellArrayC = [].slice.call(savingsAccordionCellC),
          benefitAccordionCellC = benefitsAccordionHolder.querySelectorAll(columnC),
          benefitAccordionCellArrayC = [].slice.call(benefitAccordionCellC);

          getTopRowItems(topColumnC);

        updateColumnData(roadsideAccordionCellArrayC, selectedCardData.roadside);
        updateColumnData(savingsAccordionCellArrayC, selectedCardData.savings);
        updateColumnData(benefitAccordionCellArrayC, selectedCardData.benefits);

        compareMembership.handleDropDownChange();

        break;
      case "selectBoxD":
        const roadsideAccordionCellD = roadsideAccordionHolder.querySelectorAll(columnD),
          roadsideAccordionCellArrayD = [].slice.call(roadsideAccordionCellD),
          savingsAccordionCellD = savingsAccordionHolder.querySelectorAll(columnD),
          savingsAccordionCellArrayD = [].slice.call(savingsAccordionCellD),
          benefitAccordionCellD = benefitsAccordionHolder.querySelectorAll(columnD),
          benefitAccordionCellArrayD = [].slice.call(benefitAccordionCellD);

          getTopRowItems(topColumnD);

        updateColumnData(roadsideAccordionCellArrayD, selectedCardData.roadside);
        updateColumnData(savingsAccordionCellArrayD, selectedCardData.savings);
        updateColumnData(benefitAccordionCellArrayD, selectedCardData.benefits);

        compareMembership.handleDropDownChange();

        break;

      default:
        break;
    }
  },

  whoWasSelected: (selectedOptionText, selectedTargetLength, selectOptionA, selectOptionB, selectOptionC) => {
    switch (selectedOptionText) {
      case "A La Carte":
        selectedCardData = compareMembership.config.aLaCardData;
        compareMembership.handleWhoWasSelected(selectedCardData);
        break;
      case "Basic":
        selectedCardData = compareMembership.config.basicCardData;
        compareMembership.handleWhoWasSelected(selectedCardData);
        break;
      case "Plus":
        selectedCardData = compareMembership.config.plusCardData;
        compareMembership.handleWhoWasSelected(selectedCardData);
        break;
      case "Premier":
        selectedCardData = compareMembership.config.premierCardData;
        compareMembership.handleWhoWasSelected(selectedCardData);
        break;

      default:
        break;
    }
  },

  // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
  eventHandlers: () => {
    const selectBoxHolderCollection = document.getElementsByClassName("input__select-container"),
      selectBoxHolderCollectionArray = [].slice.call(selectBoxHolderCollection);

      // ----- Handle dropdown changes -----

    selectBoxHolderCollectionArray.map(
      selectBoxHolder => {
          selectBoxHolder.addEventListener('change', (event) => {
            const selectedTargetLength = event.target.options.length,
              selectedIndex = event.target.options.selectedIndex,
              eventTargetId = event.target.id,
              selectOptionA = event.target.options[0].innerHTML,
              selectOptionB = event.target.options[1].innerHTML,
              selectedOptionText = event.target.options[selectedIndex].innerHTML;

            const twoOrThreeCol = () => {
              if (selectedTargetLength == 2) {
                compareMembership.whoWasSelected(selectedOptionText, selectedTargetLength, selectOptionA, selectOptionB);
              }
              if (selectedTargetLength == 3) {
                const selectOptionC = event.target.options[2].innerHTML;

                compareMembership.whoWasSelected(selectedOptionText, selectedTargetLength, selectOptionA, selectOptionB, selectOptionC);
              }
            }

            switch (eventTargetId) {
            case "selectBoxB":
              twoOrThreeCol();

              break;
            case "selectBoxC":
              twoOrThreeCol();

              break;
            case "selectBoxD":
              twoOrThreeCol();

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