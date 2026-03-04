"use strict";

// ===== DOM elements =====
const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];
const mainTag = document.getElementsByTagName("main")[0];
const header = document.getElementsByTagName("header")[0];
const title = document.getElementsByTagName("h1")[0];
const imgLightning = document.getElementById("img-lightning");
const audLightning = document.getElementById("aud-lightning");
const audLaser = document.getElementById("aud-laser");
const audPortal = document.getElementById("aud-portal");
const image = document.getElementById("image");
const imgPortal = document.getElementById("img-portal");
const gridCCntr = document.getElementById("grid-container");
const valId = document.getElementById("val-id");
const valName = document.getElementById("val-name");
const valStatus = document.getElementById("val-status");
const valSpecies = document.getElementById("val-species");
const valGender = document.getElementById("val-gender");
const crsPortalGun = document.getElementById("cursor-portal-gun");
const btnGenerate = document.getElementById("btn-generate");
const footer = document.getElementsByTagName("footer")[0];
const laserBeam = document.getElementById("laser-beam");

// Initialization of API
const apiCharacter = "https://rickandmortyapi.com/api/character/";
const init = {
  method: "GET",
  Titles: {
    Accept: "application/json",
    "Content-type": "aplication/json",
  },
};

// ===== Promises =====
// const myPromise = new Promise((resolve, reject) => {});
// Promise.resolve("input").then(onfulfilled, onrejected);
// Promise.reject("input").then(onfulfilled).catch(onrejected);
// ...
// async function () => {
//     let x;
//     try {x = await new Promise.resolve("input");}
//     catch (err) {x = await new Promise.reject("input"); console.log(err);}}
// ====================

let count = 2; // Async safeguard (Rick and Morty).

// Asynchronously get max number of characters
fetch(apiCharacter, init)
  .then((response) => response.json())
  .then((data) => (count = data.info.count));

// Synchronously get max number of characters
// async function getCount(number) {
//   const response = await fetch(apiCharacter, init);
//   const data = await response.json();
//   number = await data.info.count;
// }

function drawNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

// Binary semaphore
let readyData = false;
let cursorLocked = false;

// Params
let character = {};
let imageBlob = new Blob();
let lastPtrX, lastPtrY;

async function main(params) {
  let response = null;

  // btnGenerate enabled in event finish portalFading()
  btnGenerate.disabled = true;
  readyData = false;

  // Animation objects instances
  const anmFading = portalFading();
  const anmSpinning = portalSpinning(anmFading);
  const anmAppearing = portalAppearing(anmFading, anmSpinning); // Fast and Slow

  audPortal.currentTime = 0;
  audPortal.play();
  anmAppearing.play();

  // Draw character number
  const characterNumber = drawNumber(count);

  // Get json from API
  response = await fetch(`${apiCharacter}${characterNumber}`, init);
  character = await response.json();

  // Get image URL in response (character.image)
  // Get image from API
  response = await fetch(character.image, init);
  imageBlob = await response.blob();

  readyData = true;
}

function setImage(blob) {
  // Create object from image
  const imageObjectURL = URL.createObjectURL(blob);

  // Insert image in html
  image.src = imageObjectURL;
  // ??? URL.revokeObjectURL(imageObjectURL); ???
}

function fillGrid(data) {
  valId.innerText = data.id;
  valName.innerText = data.name;
  valStatus.innerText = data.status;
  valSpecies.innerText = data.species;
  valGender.innerText = data.gender;
}

// ===== Resize functions =====
function resizeTitle() {
  const titleHeight = header.offsetHeight;

  const titleNewFontSize = titleHeight * 0.5;
  title.style.fontSize = titleNewFontSize + "px";

  const titleNewPadding = titleHeight * 0.25;
  title.style.padding = titleNewPadding + "px";
}

function resizeRows() {
  // === Heigth of Grid ====
  // 4% of padding (2% * (top and botton))
  // 8% of gap (2% * (4 * spaces between rows))
  // 100% - 12% = 88% = 0.88
  // === Heigth of Rows ====
  // 88% / 5 = 17.6% = 0.176
  // 17.6 each row
  // 05.50% border
  // 24.50% padding
  // 70.00% content
  // 100% Total
  // ------
  // 02.75% border-top
  // 12.25% padding-top
  // 70.00% content
  // 12.25% padding-bottom
  // 02.75% border-bottom
  // ------

  // Largest constant word for line break
  const gridHeight = valSpecies.parentElement.offsetHeight;
  const rowNewHeight = gridHeight * 0.176;
  const rowNewBorder = rowNewHeight * 0.0275;
  const rowNewPadding = rowNewHeight * 0.1225;
  const rowNewFontSize = rowNewHeight * 0.7;

  const numChildren = gridCCntr.childElementCount;
  for (let i = 0; i < numChildren; i++) {
    gridCCntr.children[i].style.borderWidth = rowNewBorder + "px";
    gridCCntr.children[i].style.padding = rowNewPadding + "px";
    gridCCntr.children[i].style.fontSize = rowNewFontSize + "px";
  }
}

function resizeButton() {
  const buttonHeight = btnGenerate.offsetHeight;

  const buttonNewFontSize = buttonHeight * 0.5;
  btnGenerate.style.fontSize = buttonNewFontSize + "px";

  const buttonNewPadding = buttonHeight * 0.25;
  btnGenerate.style.padding = buttonNewPadding + "px";
}

function resizeFooter() {
  const footerHeight = footer.offsetHeight;

  const footerNewFontSize = footerHeight * 0.8;
  footer.style.fontSize = footerNewFontSize + "px";

  const footerNewPadding = footerHeight * 0.1;
  footer.style.padding = footerNewPadding + "px";
}

function resizePortal() {
  // +5% margin due to irregular circumference
  const hypotenuse = image.width * Math.sqrt(2) * 1.05;
  const moveUp = (hypotenuse - image.height) / 2;

  imgPortal.style.width = hypotenuse + "px";
  imgPortal.style.height = hypotenuse + "px";

  imgPortal.style.top = -moveUp + "px";
}

// ===== Animation functions =====
function portalAppearing(hookAnmFast, hookAnmSlow) {
  // const myAnimation = new Animation(
  //   new KeyframeEffect(
  //     /*target*/,
  //     [/*Keyframes*/ {/*from*/}, {/*to*/},],
  //     {/*KeyframeEffectOptions*/, /*duration: , easing: */}
  //   )
  // );
  // myAnimation.play();

  const anmAppear = new Animation(
    new KeyframeEffect(
      imgPortal, // Target
      [
        // Keyframes
        {
          // From
          opacity: 1,
          display: "none",
          transform: "rotate(0deg) scale(0)",
        },
        {
          // To
          opacity: 1,
          display: "inline",
          transform: "rotate(720deg) scale(1)",
        },
      ],
      {
        // KeyframeEffectOptions
        duration: 750,
        easing: "ease-out",
        // fill: "forwards",
      }
    ),
    document.timeline
  );

  anmAppear.addEventListener("finish", () => {
    if (readyData) {
      // Fast
      setImage(imageBlob);
      fillGrid(character);
      hookAnmFast.play(); // portalFading()
    } else {
      // Slow
      hookAnmSlow.play(); // portalSpinning()
    }
  });

  return anmAppear;
}

function portalSpinning(hookAnimation) {
  const anmSpin = new Animation(
    new KeyframeEffect(
      imgPortal,
      [
        {
          opacity: 1,
          display: "inline",
          transform: "rotate(0deg)",
        },
        {
          opacity: 1,
          display: "inline",
          transform: "rotate(360deg)",
        },
      ],
      {
        duration: 750,
        easing: "linear",
        // fill: "forwards",
        // iterations: 3,
      }
    ),
    document.timeline
  );

  anmSpin.addEventListener("finish", () => {
    if (readyData) {
      // Fast
      setImage(imageBlob);
      fillGrid(character);
      hookAnimation.play(); // portalFading()
    } else {
      // Slow
      anmSpin.play(); // Loop
    }
  });

  return anmSpin;
}

function portalFading() {
  const anmFade = new Animation(
    new KeyframeEffect(
      imgPortal,
      [
        {
          opacity: 1,
          display: "inline",
          transform: "rotate(0deg)",
        },
        {
          opacity: 0,
          display: "none",
          transform: "rotate(0deg)",
        },
      ],
      {
        duration: 750,
        easing: "ease-out",
        fill: "forwards",
      }
    ),
    document.timeline
  );

  anmFade.addEventListener("finish", () => {
    btnGenerate.disabled = false;
  });

  return anmFade;
}

function gifOverlayPassing() {
  const rightBorder = header.offsetWidth - header.offsetHeight * 0.75;
  imgLightning.animate(
    [{ display: "inline" }, { left: rightBorder + "px" }],
    1250
  );
}

function laserBeamAnimation(ptrX, ptrY) {
  return new Promise((resolve) => {
    if (!laserBeam) { resolve(); return; }

    // Cancel any running animation first.
    laserBeam.getAnimations().forEach((a) => a.cancel());

    // position:fixed — clientX/Y map directly to viewport.
    const startX = ptrX;
    const startY = ptrY;

    const imgRect = image.getBoundingClientRect();
    const poleX = imgRect.left + imgRect.width / 2;
    const poleY = imgRect.top + imgRect.height / 2;

    const dx = poleX - startX;
    const dy = poleY - startY;
    let dist = Math.hypot(dx, dy);
    if (!isFinite(dist) || dist < 10) dist = 10;
    const halfDist = dist / 2;

    // Screen-space angle (Y-axis points downward).
    const angle = Math.atan2(dy, dx);
    const midX = startX + halfDist * Math.cos(angle);
    const midY = startY + halfDist * Math.sin(angle);

    const H = 10;      // beam height in px
    const halfH = H / 2;
    const R = halfH;   // border-radius in px (always half-height = pill/capsule shape)

    // The right center of the beam in screen coords when pivot is at (left, top+halfH):
    //   rightX = left + width * cos(angle)
    //   rightY = top + halfH + width * sin(angle)
    // To keep the right end fixed at (poleX, poleY) while width changes:
    //   left = poleX - width * cos(angle)
    //   top  = poleY - halfH - width * sin(angle)
    const shrinkEndLeft = poleX - H * Math.cos(angle);
    const shrinkEndTop  = poleY - halfH - H * Math.sin(angle);

    // Set initial state: small pill anchored at cursor (left edge = pivot).
    laserBeam.style.display = 'block';
    laserBeam.style.opacity = '1';
    audLaser.currentTime = 0;
    audLaser.play();
    laserBeam.style.width = H + 'px';
    laserBeam.style.height = H + 'px';
    laserBeam.style.borderRadius = R + 'px';
    laserBeam.style.left = startX + 'px';
    laserBeam.style.top = (startY - halfH) + 'px';
    laserBeam.style.transform = `rotate(${angle}rad)`;

    // Phase 1 – stretch from cursor toward pole: width 10px → halfDist.
    // Left edge stays fixed at cursor; right end moves to midpoint.
    const anm1 = laserBeam.animate(
      [
        { width: H + 'px',        borderRadius: R + 'px' },
        { width: halfDist + 'px', borderRadius: R + 'px' },
      ],
      { duration: 83, easing: 'linear', fill: 'forwards' }
    );

    anm1.onfinish = () => {
      laserBeam.style.width = halfDist + 'px';
      laserBeam.style.borderRadius = R + 'px';
      anm1.cancel();

      // Phase 2 – slide the whole beam from cursor half to pole half.
      // Move left/top so left edge goes from startX to midX (beam window slides).
      const anm2 = laserBeam.animate(
        [
          { left: startX + 'px', top: (startY - halfH) + 'px' },
          { left: midX + 'px',   top: (midY - halfH) + 'px' },
        ],
        { duration: 84, easing: 'linear', fill: 'forwards' }
      );

      anm2.onfinish = () => {
        laserBeam.style.left = midX + 'px';
        laserBeam.style.top = (midY - halfH) + 'px';
        anm2.cancel();

        // Phase 3 – shrink toward pole: right end stays fixed at (poleX, poleY),
        // left end moves toward pole as width decreases.
        // We animate left, top and width together to satisfy the constraint.
        const anm3 = laserBeam.animate(
          [
            {
              width: halfDist + 'px', borderRadius: R + 'px',
              left: midX + 'px',        top: (midY - halfH) + 'px',
            },
            {
              width: H + 'px',          borderRadius: R + 'px',
              left: shrinkEndLeft + 'px', top: shrinkEndTop + 'px',
            },
          ],
          { duration: 83, easing: 'linear', fill: 'forwards' }
        );

        anm3.onfinish = () => {
          // Commit phase 3 end state before cancelling fill effect.
          laserBeam.style.width = H + 'px';
          laserBeam.style.left = shrinkEndLeft + 'px';
          laserBeam.style.top = shrinkEndTop + 'px';
          laserBeam.style.borderRadius = R + 'px';
          anm3.cancel();

          // Hide instantly and resolve.
          laserBeam.style.display = 'none';
          resolve();
        };
      };
    };
  });
}

// ===== Events =====
window.addEventListener("load", () => {
  resizeTitle();
  resizeRows();
  resizeButton();
  resizeFooter();
  gifOverlayPassing();
  resizePortal();
});

window.addEventListener("resize", () => {
  resizeTitle();
  resizeRows();
  resizeButton();
  resizeFooter();
  resizePortal();
});

// ==== Mouse and touch events ===

btnGenerate.addEventListener("pointerdown", (ptrDownEvt) => {
  btnGenerate.setPointerCapture(ptrDownEvt.pointerId);
  ptrDownEvt.preventDefault();

  // Prevents generating the cursor at the original position of the body tag.
  polarCursor(ptrDownEvt);

  btnGenerate.style.cursor = "none";
  crsPortalGun.style.visibility = "visible";

  btnGenerate.addEventListener("pointermove", polarCursor);

  btnGenerate.addEventListener(
    "pointerup",
    () => {
      btnGenerate.style.cursor = "auto";

      btnGenerate.removeEventListener("pointermove", polarCursor);

      // Laser animation runs with the custom cursor still visible and frozen
      // at lastPtrX/lastPtrY (no pointermove listener = position locked).
      // After the laser finishes: park the cursor at the image center to avoid
      // resize/repositioning bugs when mouseup was outside the body, then hide it.
      laserBeamAnimation(lastPtrX, lastPtrY).then(() => {
        const imgRect = image.getBoundingClientRect();
        const poleX = imgRect.left + imgRect.width / 2;
        const poleY = imgRect.top + imgRect.height / 2;
        moveCursor(poleX, poleY);
        rotateCursor(poleX, poleY, 0);
        crsPortalGun.style.visibility = "hidden";
        main();
      });
    },
    { once: true }
  );
});

function moveCursor(ptrX, ptrY) {
  const horizontalPadding =
    (html.getBoundingClientRect().width - body.getBoundingClientRect().width) /
    2;
  const verticalPadding =
    (html.getBoundingClientRect().height -
      body.getBoundingClientRect().height) /
    2;
  const crsWidth = crsPortalGun.width;
  const crsMiddleHeight = crsPortalGun.height / 2;

  crsPortalGun.style.left = `${ptrX - horizontalPadding - crsWidth}px`;
  crsPortalGun.style.top = `${ptrY - verticalPadding - crsMiddleHeight}px`;
}

function rotateCursor(ptrX, ptrY, fingerRadius) {
  const poleX =
    image.getBoundingClientRect().left +
    image.getBoundingClientRect().width / 2;
  const poleY =
    image.getBoundingClientRect().top +
    image.getBoundingClientRect().height / 2;

  // The angle in radians (between -π and π, inclusive).
  // Inverted Y axis, according to the Cartesian coordinate system.
  const angle = Math.atan2(-(ptrY - poleY), ptrX - poleX);

  // Mirrors the cursor across the rotated y-axis
  const inverted = ptrX < poleX ? -1 : 1;

  // Negative angle, counterclockwise rotation.
  crsPortalGun.style.transform = `rotate(${-angle}rad) scaleY(${inverted}) translateX(${-fingerRadius}px)`;

  // Pointer anchoring in the vertical middle of the right side.
  crsPortalGun.style.transformOrigin = "100% 50%";
}

function polarCursor(ptrMoveEvt) {
  const ptrX = ptrMoveEvt.clientX;
  const ptrY = ptrMoveEvt.clientY;
  const ptrW = ptrMoveEvt.width;
  const ptrH = ptrMoveEvt.height;

  lastPtrX = ptrX;
  lastPtrY = ptrY;

  // The default is 1, if the hardware cannot report.
  const fingerRadius =
    ptrW === 1 && ptrH === 1 ? 0 : Math.sqrt(ptrW ** 2 + ptrH ** 2) / 2;

  moveCursor(ptrX, ptrY);
  rotateCursor(ptrX, ptrY, fingerRadius);
}

// ========== ToDo List ==========
// [ ] Create div tag to represent laser beam shot

header.addEventListener("click", () => {
  gifOverlayPassing();
  audLightning.play();
});
