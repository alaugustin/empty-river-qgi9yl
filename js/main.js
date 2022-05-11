const aLaCardData = cardData[0];
console.log(aLaCardData);

const basicCardData = cardData[1];
console.log(basicCardData);

const plusCardData = cardData[2];
console.log(plusCardData);

const premierCardData = cardData[3];
console.log(premierCardData);


const membershipCardHeadingList = document.querySelectorAll(".membership-card__heading");
for (let index = 0; index < membershipCardHeadingList.length; index++) {
  const element = membershipCardHeadingList[index];
  element.innerHTML += cardData[index].cardName;
}

const membershipCardPriceList = document.querySelectorAll(".membership-card__price span");
for (let index = 0; index < membershipCardPriceList.length; index++) {
  const element = membershipCardPriceList[index];
  element.innerHTML += cardData[index].cardValue;
}

const membershipCardImgList = document.querySelectorAll(".membership-card__card-image");
for (let index = 0; index < membershipCardImgList.length; index++) {
  const element = membershipCardImgList[index];
  element.src = cardData[index].cardImg;
}

const membershipCardCtaList = document.querySelectorAll(".compare-cards__cta-container a");
console.log(membershipCardCtaList);
for (let index = 0; index < membershipCardCtaList.length; index++) {
  const element = membershipCardCtaList[index];
  element.href = cardData[index].cardLink;
}

document.addEventListener("DOMContentLoaded", function (e) {

  let mqls = [
    window.matchMedia("(max-width: 767px)"),
    window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
    window.matchMedia("(min-width: 992px)")
  ]

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
  }

  const mappedMq = mqls.map(
    x => x.addListener(mqh)
  );
  mqh();
});