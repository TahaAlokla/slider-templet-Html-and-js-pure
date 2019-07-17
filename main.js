    // get Slider items "images" || array.from[ES6 features]
    var sliderImages = Array.from(document.querySelectorAll('.contener-slider img'));
    //console.table(sliderImages);

    // Get Number of Slider
    var sliderCount = sliderImages.length;

    //  set current Slide 
    var currentSlide =5;

    // slideNumber String Element  #numberSlide
    var slideNumber = document.getElementById('slider-number');

    // Previous and Next button 
    var PreviousButton = document.getElementById('prevId');
    var NextButton = document.getElementById('nextId');

    // Next Slide Function
    function nextSlide() {
        // اختبار الوصول الى اخر المصفوفة قبل الانتقال للامام 
        if(NextButton.classList.contains('disabled')){
            // Do nothing 
            return false;
        }else{
            currentSlide++;
            theCheckeSlide();

        }

    }

    // previous Slide Function
    function prevSlide() {
        if(PreviousButton.classList.contains('disabled')){
            // Do nothing 
            return false;
        }else{
            currentSlide--;
            theCheckeSlide();

        }


    }

    // Handel click on previous & Next
    PreviousButton.onclick = prevSlide;
    NextButton.onclick = nextSlide;

    // Create The Main UL Element 
    var PaginationElement = document.createElement('ul');

    // Set ID For  PaginationElement
    PaginationElement.setAttribute('id', "Pagination-id-ul");

    // Create List Item based on slider Count 
    for (var i = 1; i <= sliderCount; i++) {
        // Create List Item LI
        var PaginationItem = document.createElement('li');
        // Set Coustomr Attribute
        PaginationItem.setAttribute('data-index-list', i);
        // setItem Content
        PaginationItem.appendChild(document.createTextNode(i));
        // Append item to The main ul list 
        PaginationElement.appendChild(PaginationItem);

    }

    // Append The ul to the Page 
    document.getElementById('indicators').appendChild(PaginationElement);

    // cheker ul
    var Pagination = document.getElementById('Pagination-id-ul');

    var PaginationArray = Array.from(document.querySelectorAll('#Pagination-id-ul li'));
    for(var i =0;i<PaginationArray.length;i++){
        PaginationArray[i].onclick = function(){
            currentSlide = parseInt(this.getAttribute('data-index-list'));
            theCheckeSlide();
        }
    }

    function theCheckeSlide() {
         // Remove All Active class
         removeAllActiveClass();

        // set The Slide Number 
        slideNumber.textContent = " slide # " + (currentSlide) + " of " + (sliderCount);

        // set Active class Cureent slide 
        sliderImages[currentSlide-1].classList.add('active');
        //set Active Class for aginationUl item
        Pagination.children[currentSlide-1].classList.add('active');

        //check if cureent slide == first slide add class disable for button prov

        if(currentSlide ===1 ){

             // Add class disabled for PreviousButton
            PreviousButton.classList.add('disabled');
        }
         else{
            // remove class disabled for other
            PreviousButton.classList.remove('disabled');
        }

        // check if cureent slide = list slide add class  disable for buttonNext

        if(currentSlide===sliderCount){
            // add class disabled for NextButton
            NextButton.classList.add('disabled');

        }
        else{
             // remove class disabled for other
             NextButton.classList.remove('disabled');
        }

    }

    // Trageer|run The function theCheckeSlide()
   

    // Remove All Active classes
    function removeAllActiveClass(){
        sliderImages.forEach(function(img){
            img.classList.remove('active');
        });
        PaginationArray.forEach(function(bulate){
            bulate.classList.remove('active');

        });
    }





