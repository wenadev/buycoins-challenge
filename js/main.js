let hamburgerMenuIcon = document.querySelector(".octicon-three-bars");
let mobileMenuItems = document.querySelector(".mobile-menu-items");
let pullRequests = document.querySelector("#pull-requests");

let sectionOne = document.querySelector(".section-content.one");
let sectionTwo = document.querySelector(".section-content.two");

//listen for click on the hamburger menu icon to display/hide mobile nav items
hamburgerMenuIcon.addEventListener("click", ()=>{
    let menuState = mobileMenuItems.style.display;
    
    //if mobile menu items are visible, hide them
     if(menuState == "block")
    {
        mobileMenuItems.style.display="none"
    }

    //if mobile menu items are hidden, display them
    else if(menuState = "none"){
        mobileMenuItems.style.display="block";
    }
});

//insert sticky header
let insertStickyHeader= () =>{
    let markup= 
    `   
        <header class ="sticky-header mobile">2</header>
    `;

    //get sticy header for web
    let stickyHeaderWeb = document.querySelector(".sticky-header.web");

    //remove sticky header from its default position
    stickyHeaderWeb.style.display="none";

    let stickyHeaderMobile = document.querySelector(".sticky-header.mobile");

    //get if mobile sticky web header exists or not
    if(typeof(stickyHeaderMobile) == 'undefined' || stickyHeaderMobile == null){
         //insert sticky header in second section when resized to a mobile screen
         sectionTwo.insertAdjacentHTML('afterbegin', markup)
    }else{
        //sticky header element for mobile already exists so display
        stickyHeaderMobile.style.display="block";
    }
}

//remove sticky header
let removeStickyHeader = ()=>{
    let stickyHeaderWeb = document.querySelector(".sticky-header.web");

    //restore sticky header to its default position
   stickyHeaderWeb.style.display="block";

    //get mobile sticky header
    let stickyHeaderMobile = document.querySelector(".sticky-header.mobile");
   
     //get if sticky header for mobile exists or not
     if(typeof(stickyHeaderMobile) != 'undefined' && stickyHeaderMobile != null){
         //hide
         stickyHeaderMobile.style.display="none";
     }
}

async function statusAndBioMarkup(){
    let markup=`
    <div class="mobile-profile-seperator">
        <div class="input-group mobile-status"> 
            <input type="text" class="status-field " name="status" placeholder="Set status">
            
            <svg class="octicon octicon-smiley icon" viewBox="0 0 16 16" version="1.1" width="27" height="27" aria-hidden="true"><path fill-rule="evenodd" 
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 
            9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 
            0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 
            0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path>
            </svg> 
        </div>

        <span class="bio mobile">security analyst by day, developer by night.</span>

    </div>
    `;

    //get mobile profile
    let mobileStatusAndBio = document.querySelector(".mobile-profile-seperator");

    //get if mobile profile exists or not
    if(typeof(mobileStatusAndBio) != 'undefined' && mobileStatusAndBio != null){
        //if it exists display element
        mobileStatusAndBio.style.display="block";
    } else{
        //if it doesn't exists insert new element
        sectionOne.insertAdjacentHTML('beforeend', markup);
    }
}

let removeStatusAndBio =()=>{
    //get mobile profile
    let mobileStatusAndBio = document.querySelector(".mobile-profile-seperator");
   
    //get if mobile profile exists or not
    if(typeof(mobileStatusAndBio) != 'undefined' && mobileStatusAndBio != null){
        //hide
        mobileStatusAndBio.style.display="none";
    }
}

//fire continuously
let continuousWindowResizeEvents = ()=>{
    //listen contionously if screen size is less than 1010 pixels
    if(window.innerWidth <= 1010){
        //smaller screen
        pullRequests.style.minWidth="auto";
        pullRequests.innerHTML ="Pulls" 
    }
    
    //listen contionously if screen size is more than 1010 pixels
    else if(window.innerWidth > 1010){
        //wide screen
        pullRequests.style.minWidth="85px";
        pullRequests.innerHTML ="Pull requests" ;
    }
}

//insert status and bio invoked automatically
 (insert =()=>{
    if(window.innerWidth <= 770){
        statusAndBioMarkup();
        insertStickyHeader();
    }
 })();

//fire once
( singleWindowResizeEvents = ()=>{
    window.onresize = () => {
        //listen and insert sticky header once if mobile screen is less than 770 pixels
    
        if(window.innerWidth <= 770){
            insertStickyHeader();
            insert();
        }
        
        //listen and remove sticky header once if mobile screen is more than 770 pixels
        else if(window.innerWidth > 770){
            
                removeStickyHeader();
                removeStatusAndBio();
        }
    };
})();


//listen to window resizing event
window.addEventListener('resize', continuousWindowResizeEvents);

//when page reloads
window.onbeforeunload = continuousWindowResizeEvents();
window.onbeforeunload = singleWindowResizeEvents();
