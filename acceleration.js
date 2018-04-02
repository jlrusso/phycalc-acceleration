$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});

var calculatorBtn = document.getElementById("calculator-btn");
calculatorBtn.setAttribute("data-toggle", "modal");
calculatorBtn.setAttribute("data-target", "#calculator-modal");

$(document).ready(function(){
  $("#contact-btn").add("#vert-contact-btn").remove();
  var $calcParentLi = $("#calculator-btn").parent("li");
  $calcParentLi.before("<li><a href='#' id='examples-btn'>Examples</a></li>");
  var $vertCalcParentLi = $("#vert-calculator-btn").parent("li");
  $vertCalcParentLi.before("<li><a href='#' id='vert-examples-btn'>Examples</a></li>");

  $("#conversion-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#conversion-container").offset().top
    }, "slow")
  });

  $("#vert-conversion-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#conversion-container").offset().top
    }, "slow")
  });

  $("#examples-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#practice-btns-container").offset().top
    }, "slow")
  });

  $("#vert-examples-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#practice-btns-container").offset().top
    }, "slow")
  });

  $("#go-up-btn").click(function(){
    $("html, body").animate({
      scrollTop: 0
    }, "slow")
  });

})

window.addEventListener("resize", function(){
  if(window.innerWidth < 992){
    $(window).scroll(function(){
      if($(window).scrollTop() > 600){
        $("#go-up-container").css({"opacity":"1", "z-index":"4"});
      } else {
        $("#go-up-container").css({"opacity":"0", "z-index":"-1"});
      }
    })
  }
})

window.addEventListener("load", function(){
  if(window.innerWidth < 992){
    $(window).scroll(function(){
      if($(window).scrollTop() > 600){
        $("#go-up-container").css({"opacity":"1", "z-index":"4"});
      } else {
        $("#go-up-container").css({"opacity":"0", "z-index":"-1"});
      }
    })
  }
})

var horizontalSearchBtn = document.getElementById("horizontal-search-btn"),
verticalSearchBtn = document.getElementById("vertical-search-btn"),
searchSection = document.getElementById("search-section"),
searchBar = document.getElementById("search-bar"),
closeSearchBtn = document.getElementById("close-search-btn"),
caseList = document.getElementById("search-case-list"),
mainContent = document.getElementById("main-content");

horizontalSearchBtn.addEventListener("click", openSearchSection);
verticalSearchBtn.addEventListener("click", openSearchSection);
searchBar.addEventListener("input", showList);
closeSearchBtn.addEventListener("click", closeSearchSection);


function openSearchSection(){
	if(!searchSection.classList.contains("active-search")){
		searchSection.classList.toggle("active-search");
		mainContent.style.marginTop = "30px";
		searchBar.focus();
	} else {
		searchSection.classList.remove("active-search");
		caseList.classList.remove("show");
		searchBar.value = "";
		mainContent.style.marginTop = "0";
	}
}

function closeSearchSection(){
	if(searchSection.classList.contains("active-search")){
		searchSection.classList.remove("active-search");
		caseList.classList.remove("show");
		searchBar.value  = "";
		document.getElementById("main-content").style.marginTop = "0";
	}
}
var searchClosers = [searchSection, mainContent];
for(let i = 0; i < searchClosers.length; i++){
  searchClosers[i].addEventListener("click", function(e){
    if(!e.target.matches("#search-bar")){
      closeSearchSection();
    }
  })
}

function showList() {
	if (searchBar.value.length > 0){
		caseList.classList.add('show');
		showAnchors();
	} else {
		caseList.classList.remove('show');
	}
}

function showAnchors(){
	let inputValue = searchBar.value.toUpperCase();
	let anchors = caseList.getElementsByTagName('a');
	let newAnchors = document.createElement("a");
	for (var i = 0; i < anchors.length; i++){
		let a = anchors[i];
		if (a.textContent.toUpperCase().indexOf(inputValue) > -1){
			anchors[i].style.display = "";
		} else {
			anchors[i].style.display = "none";
		}
	}
}
/*--- Toggle Hamburger Menu ---*/
var clickBox = document.getElementById("click-box"),
		burgerIcon = document.getElementById("icon"),
		verticalNav = document.getElementsByClassName("vertical-nav")[0];
clickBox.addEventListener("click", openVerticalNav);

function openVerticalNav(e){
	if(e.target == clickBox){
		verticalNav.classList.toggle("show-vertical-nav");
		burgerIcon.classList.toggle("active");
	}
}
window.onclick = function(e){
	if(!e.target.matches("#click-box")){
		if(icon.classList.contains("active")){
			icon.classList.remove("active");
			verticalNav.classList.remove("show-vertical-nav");
		}
	}
}

/*--- Toggle Img Caption Show/Hide ---*/
var imgCaptions = document.getElementsByClassName("img-caption");
var thirdPageImgs = document.querySelectorAll(".third-page-pics > img");
thirdPageImgs.forEach(function(image){
	image.addEventListener("click", function(e){
		var imgCaption = this.nextElementSibling;
		if(!e.target.matches(".img-caption")){
			imgCaption.classList.toggle("hide-caption");
		}
	})
})


/*--- Open and Close Modal Panels ---*/
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  	acc[i].onclick = function() {
    	this.classList.toggle("active");
    	var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

/*--- Close all accordion panels on "X" btn click or Modal Window click ---*/
var modalCloseBtns = document.getElementsByClassName("glyphicon-remove");
var modalPanels = document.getElementsByClassName("modal-panel");
for(let i = 0; i < modalCloseBtns.length; i++){
  modalCloseBtns[i].addEventListener("click", function(){
    for(let i = 0; i < modalPanels.length; i++){
      if(modalPanels[i].style.maxHeight != null){
        modalPanels[i].style.maxHeight = null;
      }
    }
    var $modalContent = $(this).parents(".modal-content");
    var $accordions = $modalContent.find(".accordion");
    $accordions.removeClass("active");
  })
}
$(".example-modal").click(function(e){
  var $closeBtn = $(this).find(".glyphicon-remove");
  if(e.target.matches(".example-modal")){
    $closeBtn.click();
  }
})
/*--- End of Closing all Accordion and Panels ---*/

window.onload = function(){
	var openSearchBtn = document.getElementById("open-search-btn"),
		openSearchBtnTwo = document.getElementById("open-search-btn-two"),
		searchSection = document.getElementById("search-section"),
		searchBar = document.getElementById("search-bar"),
		closeSearchBtn = document.getElementById("close-search-btn");

	openSearchBtn.addEventListener("click", openSearchSection);
	openSearchBtnTwo.addEventListener("click", openSearchSection);

	function openSearchSection(){
		searchSection.style.top = "50px";
		searchSection.style.width = "100%";
	}

	closeSearchBtn.addEventListener("click", function(){
		searchSection.style.top = "-100px";
	})

	function showList() {
		if (navSearchBar.value.length > 0){
			caseList.classList.add('show');
			navSearchBar.style.borderRadius = "10px 10px 0 0";
			showAnchors();
		} else {
			caseList.classList.remove('show');
			navSearchBar.style.borderRadius = "10px";
		}
	}

	function showAnchors(){
		let inputValue = navSearchBar.value.toUpperCase();
		let anchors = caseList.getElementsByTagName('a');
		let newAnchors = document.createElement("a");
		for (var i = 0; i < anchors.length; i++){
			let a = anchors[i];
			if (a.textContent.toUpperCase().indexOf(inputValue) > -1){
				anchors[i].style.display = "";
			} else {
				anchors[i].style.display = "none";
			}
		}
	}

	window.onclick = function(event){
		if (!event.target.matches('#nav-search-bar')){
			if (caseList.classList.contains('show')){
				caseList.classList.remove('show');
				navSearchBar.style.borderRadius = "10px";
			}
		}
	}
	/*--- Toggle Hamburger Menu ---*/
	var icon = document.getElementById("icon");
	var clickBox = document.getElementById("click-box");
	var verticalNav = document.getElementsByClassName("vertical-nav")[0];
	clickBox.addEventListener("click", toggleVerticalNav, false);

	function toggleVerticalNav(e){
		icon.classList.toggle("active");
		verticalNav.classList.toggle("show-vertical-nav");
	}

	window.onclick = function(e){
		if(!e.target.matches("#click-box")){
			if(icon.classList.contains("active")){
				icon.classList.remove("active");
				verticalNav.classList.remove("show-vertical-nav");
			}
		}
	}
}

var closeModalBtns = document.querySelectorAll(".close-modal-btn");
closeModalBtns.forEach(function(btn){
  btn.addEventListener("click", function(){
    var $modalParent = $(this).parents(".modal");
    $modalParent.click();
  })
})


	/*--- Topic Calculators ---*/
	var solveBtns = document.getElementsByClassName("solve-btn"),
		solveAcceleration = document.getElementById("acceleration-radio-btn"),
		solveVelocityChange = document.getElementById("velocity-radio-btn"),
		solveTimeChange = document.getElementById("time-radio-btn");

	var unitBtns = document.getElementsByClassName("unit-btn"),
		feetBtn = document.getElementById("feet-radio-btn"),
		meterBtn = document.getElementById("meter-radio-btn"),
		mileBtn = document.getElementById("mile-radio-btn"),
		kiometerBtn = document.getElementById("kilometer-radio-btn"),
		chosenUnit;

	var timeBtns = document.getElementsByClassName("time-btn"),
		secondsBtn = document.getElementById("seconds-radio-btn"),
		minutesBtn = document.getElementById("minutes-radio-btn"),
		hoursBtn = document.getElementById("hours-radio-btn"),
		daysBtn = document.getElementById("days-radio-btn"),
		chosenTimeUnit,
		acclUnits = "/" + chosenTimeUnit + "2";


	var inputFields = document.getElementsByClassName("input-field"),
		accelerationField = document.getElementById("acceleration-field"),
		velocityChangeField = document.getElementById("velocity-change-field"),
		timeChangeField = document.getElementById("time-change-field"),
		sigFigsField = document.getElementById("sig-figs-field"),
		deltaSymbol = document.getElementById("delta-symbol");

	var calculateBtn = document.getElementById("calculate-btn"),
		clearBtn = document.getElementById("clear-btn");

	var innerImageContainer = document.getElementById("inner-image-container"),
		slides = document.getElementsByClassName("slide"),
		currentSlideIndex = 0,
		width = 100,
		prevBtn = document.getElementById("prev-slide-btn"),
		nextBtn = document.getElementById("next-slide-btn"),
		slideBars = document.getElementsByClassName("slide-bar");

	calculateBtn.addEventListener("click", calculateFunc);
	clearBtn.addEventListener("click", clearFunc);

	prevBtn.addEventListener("click", goToPrevSlide);
	nextBtn.addEventListener("click", goToNextSlide);


	for(let i = 0; i < solveBtns.length; i++){
		solveBtns[i].addEventListener("click", solveForBtnFunction);
	}

	function solveForBtnFunction(){

		function resetInputFields(){
			accelerationField.placeholder = "acceleration";
			velocityChangeField.placeholder = "velocity" + " (\u0394v)";
			timeChangeField.placeholder = "time" + " (\u0394t)";

			for(let i = 0; i < inputFields.length; i++){
				inputFields[i].value = "";
				if(inputFields[i].disabled){
					inputFields[i].disabled = false;
				}
				if(inputFields[i].classList.contains("yellow-outline")){
					inputFields[i].classList.remove("yellow-outline");
				}
				if(inputFields[i].type === "text"){
					inputFields[i].type = "number";
				}
			}
		}
		resetInputFields();

		switch(true){
			case (solveAcceleration.checked):
				accelerationField.type = "text";
				accelerationField.placeholder = "Calculating a..";
				accelerationField.disabled = true;
				accelerationField.classList.add("yellow-outline");
				currentSlideIndex = 0;
				switchToSlide();
			break;
			case (solveVelocityChange.checked):
				velocityChangeField.type = "text";
				velocityChangeField.placeholder = "Calculating " + " " + deltaSymbol.textContent + "v..";
				velocityChangeField.disabled = true;
				velocityChangeField.classList.add("yellow-outline");
				currentSlideIndex = 1;
				switchToSlide();
			break;
			case (solveTimeChange.checked):
				timeChangeField.type = "text";
				timeChangeField.placeholder = "Calculating " + " " + deltaSymbol.textContent + "t..";
				timeChangeField.disabled = true;
				timeChangeField.classList.add("yellow-outline");
				currentSlideIndex = 2;
				switchToSlide();
			break;
		}
	}


	function assignLengthUnit(){
		for(let i = 0; i < unitBtns.length; i++){
			unitBtns[i].addEventListener("click", function(){
				if(unitBtns[i].checked){
					chosenUnit = unitBtns[i].getAttribute("units");
				}
			})
		}
	}
	assignLengthUnit();



	function assignTimeUnit(){
		for(let i = 0; i < timeBtns.length; i++){
			timeBtns[i].addEventListener("click", function(){
				if(timeBtns[i].checked){
					chosenTimeUnit = timeBtns[i].getAttribute("units");
				}
			})
		}
	}
	assignTimeUnit();


	function calculateFunc(){
		switch(true){
			case (solveAcceleration.checked):
				function setTempAcclValue(){
					var tempAcclValue = velocityChangeField.value / timeChangeField.value;
					function setFinalAcclValue(){
						if(tempAcclValue.toString().length > 9){
							accelerationField.value = tempAcclValue.toPrecision(sigFigsField.value || 9) + " " + (chosenUnit || " ") + "/" + (chosenTimeUnit || " ") + "^2";
						} else {
							accelerationField.value = tempAcclValue.toPrecision(sigFigsField.value || tempAcclValue.toString().length) + " " + (chosenUnit || " ") + "/" + (chosenTimeUnit || " ") + "^2";
						}
					}
					setFinalAcclValue();
				}
				setTempAcclValue();
			break;
			case (solveVelocityChange.checked):
				function setTempVelocityChangeValue(){
					var tempVelocityChangeValue = accelerationField.value * timeChangeField.value;
					function setFinalVelocityChangeValue(){
						if(tempVelocityChangeValue.toString().length > 9){
							velocityChangeField.value = tempVelocityChangeValue.toPrecision(sigFigsField.value || 9) + " " + (chosenUnit || " " ) + "/" + (chosenTimeUnit || " ");
						} else {
							velocityChangeField.value = tempVelocityChangeValue.toPrecision(sigFigsField.value || tempVelocityChangeValue.toString().length) + " " + (chosenUnit || " " ) + "/" + (chosenTimeUnit || " ");
						}
					}
					setFinalVelocityChangeValue();
				}
				setTempVelocityChangeValue();
			break;
			case (solveTimeChange.checked):
				function setTempTimeChangeValue(){
					var tempTimeChangeValue = velocityChangeField.value / accelerationField.value;
					function setFinalTimeChangeValue(){
						if(tempTimeChangeValue.toString().length > 9){
							timeChangeField.value = tempTimeChangeValue.toPrecision(sigFigsField.value || 9) + " " + (chosenTimeUnit || " " );
						} else {
							timeChangeField.value = tempTimeChangeValue.toPrecision(sigFigsField.value || tempTimeChangeValue.toString().length) + " " + (chosenTimeUnit || " " );
						}
					}
					setFinalTimeChangeValue();
				}
				setTempTimeChangeValue();
			break;
		}
	}


	function clearFunc(){
    accelerationField.placeholder = "acceleration";
    velocityChangeField.placeholder = "velocity" + " (\u0394v)";
    timeChangeField.placeholder = "time" + " (\u0394t)";
		for(let i = 0; i < inputFields.length; i++){
			inputFields[i].value = "";
			if(inputFields[i].disabled){
				inputFields[i].disabled = false;
			}
			if(inputFields[i].classList.contains("yellow-outline")){
				inputFields[i].classList.remove("yellow-outline");
			}
		}

		for(let i = 0; i < solveBtns.length; i++){
			if(solveBtns[i].checked){
				solveBtns[i].checked = false;
			}
		}

		for(let i = 0; i < unitBtns.length; i++){
			if(unitBtns[i].checked){
				unitBtns[i].checked = false;
			}
		}

		for(let i = 0; i < timeBtns.length; i++){
			if(timeBtns[i].checked){
				timeBtns[i].checked = false;
			}
		}
		currentSlideIndex = 0;
		switchToSlide();
	}



	/*--- End of Topic Calculators ---*/


	/*--- Move Equation Images ---*/
	for(let i = 0; i < slideBars.length; i++){
		slideBars[i].addEventListener("click", function(){
			currentSlideIndex = i;
			switchToSlide();
		});
	}

	function switchToSlide(){
		for(let i = 0; i < slideBars.length; i++){
			if(slideBars[i].classList.contains("active-indicator")){
				slideBars[i].classList.remove("active-indicator");
			}
		}
		innerImageContainer.style.left = -width * currentSlideIndex + "%";
		slideBars[currentSlideIndex].classList.add("active-indicator");
	}
	switchToSlide();

	function goToPrevSlide(){
		currentSlideIndex--;
		if(currentSlideIndex < 0){
			currentSlideIndex = slides.length - 1;
		}
		switchToSlide();
	}

	function goToNextSlide(){
		currentSlideIndex++;
		if(currentSlideIndex >= slides.length){
			currentSlideIndex = 0;
		}
		switchToSlide();
	}

  /*--- Conversion Table JS ---*/
  var userInput = document.getElementById('unit-input-field');
  var unitOutput = document.getElementById('unit-output-field');
  var unitC = document.getElementById('unit-converter');

  if(userInput){
  	userInput.addEventListener('input', convertUnit);
  }
  if(unitC){
  	unitC.addEventListener('change', convertUnit);
  }

  function convertUnit()
  {
  	if (userInput.value < 0){
  		alert("Please enter a value greater or equal to zero");
  		userInput.value = "";
  	} else {
  		switch(true)
  		{
  			case document.getElementById('millimetersToCentimeters').selected:
  				unitOutput.value = (userInput.value / 10) + " cm";
  				break;
  			case document.getElementById('centimetersToMillimeters').selected:
  				unitOutput.value = (userInput.value * 10) + " mm";
  				break;
  			case document.getElementById('centimetersToMeters').selected:
  				unitOutput.value = (userInput.value / 100) + " m";
  				break;
  			case document.getElementById('metersToCentimeters').selected:
  				unitOutput.value = (userInput.value * 100) + " cm";
  				break;
  			case document.getElementById('metersTokilometers').selected:
  				unitOutput.value = (userInput.value / 1000) + " km";
  				break;
  			case document.getElementById('kilometersToMeters').selected:
  				unitOutput.value = (userInput.value * 1000) + " m";
  				break;
  			case document.getElementById('metersToMiles').selected:
  				unitOutput.value = (userInput.value / 1609.34) + " mi";
  				break;
  			case document.getElementById('milesToMeters').selected:
  				unitOutput.value = (userInput.value * 1609.34) + " m";
  				break;
  			case document.getElementById('milesToKilometers').selected:
  				unitOutput.value = (userInput.value * 1.60934) + " km";
  				break;
  			case document.getElementById('kilometersToMiles').selected:
  				unitOutput.value = (userInput.value * 0.621371) + " mi";
  				break;
  			case document.getElementById('feetToYards').selected:
  				unitOutput.value = (userInput.value / 3) + " yds";
  				break;
  			case document.getElementById('yardsToFeet').selected:
  				unitOutput.value = (userInput.value * 3) + " ft";
  				break;
  			case document.getElementById('feetToMeters').selected:
  				unitOutput.value = (userInput.value * 0.3048) + " m";
  				break;
  			case document.getElementById('metersToFeet').selected:
  				unitOutput.value = (userInput.value * 3.28084) + " ft";
  				break;
  			case document.getElementById('centimetersToInches').selected:
  				unitOutput.value = (userInput.value * 0.393701) + " in";
  				break;
  			case document.getElementById('inchesToCentimeters').selected:
  				unitOutput.value = (userInput.value * 2.54) + " cm";
  				break;
  			case document.getElementById('milligramsToGrams').selected:
  				unitOutput.value = (userInput.value / 1000) + " g";
  				break;
  			case document.getElementById('gramsToMilligrams').selected:
  				unitOutput.value = (userInput.value * 1000) + " mg";
  				break;
  			case document.getElementById('gramsToKilograms').selected:
  				unitOutput.value = (userInput.value / 1000) + " kg";
  				break;
  			case document.getElementById('kilogramsToGrams').selected:
  				unitOutput.value = (userInput.value * 1000) + " g";
  				break;
  			case document.getElementById('poundsToKilograms').selected:
  				unitOutput.value = (userInput.value / 2.20462) + " kg";
  				break;
  			case document.getElementById('kilogramsToPounds').selected:
  				unitOutput.value = (userInput.value * 2.20462) + " lbs";
  				break;
  			case document.getElementById('squareMetersToKilometersSquared').selected:
  				unitOutput.value = (userInput.value / 1000000).toExponential(2) + " km²";
  				break;
  			case document.getElementById('kilometerSquaredToSquareMeters').selected:
  				unitOutput.value = (userInput.value * 1000000).toExponential(2) + " m²";
  				break;
  		}
  	}
  }
  /*--- End of Conversion Table ---*/
