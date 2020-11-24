let hamburgerMenuIcon = document.querySelector(".octicon-three-bars");
let mobileMenuItems = document.querySelector(".mobile-menu-items");
let pullRequests = document.querySelector("#pull-requests");

let sectionOne = document.querySelector(".section-content.one");
let sectionTwo = document.querySelector(".section-content.two");

let rootContainer = document.querySelector(".root-container");
let stickyWeb = document.querySelector(".sticky-header.web");
let dropDownNewButton = document.querySelector(".material-icons.new");
let dropDownSignButton = document.querySelector(".material-icons.sign");

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

//first dropdown events
dropDownNewButton.addEventListener("click", ()=>{
    let dropDownNButton = document.querySelector(".dropdown-new.new");
    let dropDownSButton = document.querySelector(".dropdown-new.sign");

    //if second dropdown is displayed, close it
    if(dropDownSButton.classList.contains("show-sign")){dropDownSButton.classList.remove("show-sign")}

    //display first dropdown
      dropDownNButton.classList.toggle("show-new");

    //if first dropdown is displayed and user clicks on anywhwere on the screen close the dropdown
    window.onclick= (event) =>{
      if(!(event.target.matches(".material-icons.new")) || (event.target.matches(".material-icons.sign"))){

        //close first dropdown
          if(dropDownNButton.classList.contains('show-new')){
              dropDownNButton.classList.remove('show-new');
          }
      }
    }
});

//second dropdown events
dropDownSignButton.addEventListener("click",()=>{
    let dropDownSButton = document.querySelector(".dropdown-new.sign");
    let dropDownNButton = document.querySelector(".dropdown-new");

     //if first dropdown is displayed, close it
    if(dropDownNButton.classList.contains("show-new")){dropDownNButton.classList.remove("show-new")}

    //display second dropdown
      dropDownSButton.classList.toggle("show-sign");

      //if second dropdown is displayed and user clicks on anywhwere on the screen close the dropdown
      window.onclick= (event) =>{
        if(!(event.target.matches(".material-icons.sign")) || (event.target.matches(".material-icons.new"))){
          console.log(dropDownSButton);

          //close second dropdown
          if(dropDownSButton.classList.contains('show-sign')){
              dropDownSButton.classList.remove('show-sign')
          }
        }
      }
});

//insert sticky header
let insertStickyHeader= () =>{
    let markup= 
    `   
        <header class ="sticky-header mobile">
        <div class="sticky-row">
        <div class="sticky-row-content">
          <div class="sticky-items-icons">
            <svg class="octicon octicon-book UnderlineNav-octicon hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
              <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 
              2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 
              7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z">
              </path>
            </svg>
            <span>Overview</span> 
          </div>

          <div class="sticky-items-icons active">
            <svg class="octicon octicon-repo UnderlineNav-octicon hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" 
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 
              1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
            </path>
          </svg>
            <span id="repo">Repositories</span> 
            <span class="number-of-repos"></span>
          </div>

          <div class="sticky-items-icons">
            <svg class="octicon octicon-project UnderlineNav-octicon hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 
              16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 
              0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z">
            </path>
          </svg>
            <span>Projects</span> 
          </div>

          <div class="sticky-items-icons">
            <svg class="octicon octicon-package UnderlineNav-octicon hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 
              4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 
              .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path></svg>
            <span>Packages</span> 
          </div>
        </div>
      </div>
        </header>
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

    //get mobile sticky header
    let stickyHeaderMobile = document.querySelector(".sticky-header.mobile");
   
     //get if sticky header for mobile exists or not
     if(typeof(stickyHeaderMobile) != 'undefined' && stickyHeaderMobile != null){
         //hide
         stickyHeaderMobile.style.display="none";
     }

     //restore sticky header to its default position
    stickyHeaderWeb.style.display="inherit";
}

async function statusAndBioMarkup(){
    let markup=`
    <div class="mobile-profile-seperator">
        <div class="input-group mobile-status"> 
            <input type="text" class="status-field " name="status" placeholder="Set status" disabled>
            
            <svg class="octicon octicon-smiley icon mobile" viewBox="0 0 16 16" version="1.1" width="27" height="27" aria-hidden="true"><path fill-rule="evenodd" 
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

//event handler for sticky header for web
(webWindowScrollEvent = ()=>{
  window.addEventListener('scroll', ()=>{
    //get web height of content before sticky header
    let webNavHeight = document.querySelector(".web-header-nav").offsetHeight;
    let stickyWeb = document.querySelector(".sticky-header.web");
    let stickyRow = document.querySelector(".sticky-header.web .sticky-row");
    let webProfile = document.querySelector(".web-profile-seperator").offsetHeight;

     //if sticky header elementfor mobile exists
     if(typeof(stickyWeb) != 'undefined' && stickyWeb != null){
       
       if(Math.round(this.pageYOffset) > Number(`${webNavHeight + 29}`))
               {
                   stickyWeb.style.height="auto";
                   stickyWeb.classList.add("fixed");

                   //markup for profile for sticky header
                   if(Math.round(this.pageYOffset) > (webProfile + 91) ){
                       let markup=`
                       <div class="sticky-row-content first">
                           <div class="nav-profile joint">
                           <div class="profile-pic">
                               <img src="profile-pic.jpg" alt="profile-picture wenadev">
                           </div>
                           <span>wenadev</span>
                           </div>
                       </div>
                       `;

                       let stickyRowFirst = document.querySelector(".sticky-row-content.first");

                       //get if profile for sticky web header exists or not
                       if(typeof(stickyRowFirst) == 'undefined' || stickyRowFirst == null){
                           //insert profile for sticky header 
                           stickyRow.insertAdjacentHTML('afterbegin', markup);
                       }else{
                           //display profile for sticky web header 
                           stickyRowFirst.style.display="inherit";
                       }
                   }
               
                   else if(Math.round(this.pageYOffset) < (webProfile + 50)){
                       let stickyRowFirst = document.querySelector(".sticky-row-content.first");

                       //get if profile for sticky web header profile row exists or not   
                       if(typeof(stickyRowFirst) != 'undefined' && stickyRowFirst != null){
                           //hide profile for sticky web header 
                           stickyRowFirst.style.display="none";
                       }
                   }
               } 

           
           else if(Math.round(this.pageYOffset) < Number(`${webNavHeight + (stickyWeb.offsetHeight - stickyRow.offsetHeight)}`)){
               stickyWeb.style.height="";
               stickyWeb.classList.remove("fixed");  
           } 
       }                  
  })
})();



//event handler for sticky header for profile
( mobileWindowScrollEvent = ()=>{
  window.onscroll = () => {
      //get mobile height of content before sticky header
          let mobileNavHeight = document.querySelector(".mobile-header-nav").offsetHeight;
          let sectionMobileHeight = document.querySelector(".section-content.one ").offsetHeight;
          let stickyMobile = document.querySelector(".sticky-header.mobile");


          if(typeof(stickyMobile)!= undefined && stickyMobile != null){
                 /*listen to when window is scrolled past the sum of the height of the content */ 
                 if(Math.round(this.pageYOffset) > Number(`${(mobileNavHeight + sectionMobileHeight)+10 }`)){
                  stickyMobile.style.height="auto";
                  stickyMobile.classList.add("fixed");
                  }
  
                  else if(Math.round(this.pageYOffset) < Number(`${(mobileNavHeight + sectionMobileHeight)+ 10 }`)){
                    stickyMobile.style.height="inherit";
                    stickyMobile.classList.remove("fixed");
                  } 
          }
  };
})();

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
          mobileWindowScrollEvent();
      }
      
      //listen and remove sticky header once if mobile screen is more than 770 pixels
      else if(window.innerWidth > 770){
          
              removeStickyHeader();
              removeStatusAndBio();  
              webWindowScrollEvent();    
      }
  };
})();

//listen to window resizing event
window.addEventListener('resize', continuousWindowResizeEvents);

//when page reloads
window.onbeforeunload = continuousWindowResizeEvents();
window.onbeforeunload = singleWindowResizeEvents();
window.onbeforeunload = webWindowScrollEvent();
window.onbeforeunload = mobileWindowScrollEvent();

 insertRepoData={
     noOfRepo : document.querySelector(".number-of-repos"),
     mobileNoOfRepo : document.querySelector(".sticky-header.mobile .number-of-repos"),
     publicOrPrivateCount : document.querySelector("#public-private-count")
};

function decodeToken(token){
  return atob(token);
}


(async function repoData(){

    //fetching data from Github's GraphQL API
  const query = `
  query listRepos {
    viewer {
      repositories(ownerAffiliations: OWNER, first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
        pageInfo {
          endCursor
        }
        nodes {
          name
          updatedAt
          url
          isFork
          isPrivate
          forkCount
          primaryLanguage {
            name
            color
          }
          description
          forks(first: 3, privacy: PRIVATE) {
            edges {
              node {
                id
              }
            }
          }
          parent {
            name
            url
            forkCount
          }
          nameWithOwner
        }
        totalCount
      }
      repository(name: "") {
        forks {
          edges {
            node {
              id
            }
          }
        }
        description
      }
    }
  }  
`;

    const urlEndpoint = "https://api.github.com/graphql";
    const header = {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${decodeToken("MTgyMGU0MDk1ZTc5ZDI2Njg4N2FlZjM2MjJlZTg5MjAxMWIzYTI4Nw==")}` , 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    };

    //fetch data
   let fetchedData= fetch(urlEndpoint, header)
    .then(res => res.json())
    //assigning the data gotten into variable outside the fetch call
    .then(res=> res.data.viewer.repositories)
    .then(res=>{

        //displaying number of repos found
        if(typeof(insertRepoData.noOfRepo) != undefined && insertRepoData.noOfRepo != null){
          insertRepoData.noOfRepo.innerHTML=res.totalCount;
        }

        if(typeof(insertRepoData.mobileNoOfRepo) != undefined && insertRepoData.mobileNoOfRepo != null){
          insertRepoData.mobileNoOfRepo.innerHTML=res.totalCount;
        }
  
        let dataContent= res.nodes;

        /**********************************************************************/
        //display number of public repositories
        let count = 0
        dataContent.forEach((publicRepo)=>{
            //looping through data to get only public repos
            publicRepo.isPrivate ? count+= 0 : count += 1;
        })
        insertRepoData.publicOrPrivateCount.innerHTML = count;

        //function to format updated date on repo
        function formatDate(timing) {
            let date = new Date(timing);

            let year = date.getFullYear();
            let day = date.getDate();
            let month = date.toLocaleString("en-US", {month: 'short'});

            //if  month of update is within the present month 
            if(new Date().getMonth() == date.getMonth()){
              //if  week of update is within the present week 
                if ((new Date().getDate() - day) <= 7){
                  //if  day of update is within the present month 
                  if((new Date().getDate() == date.getDate())){
                    //if  minutes of update is within the present 60 minutes
                      if(new Date(). getMinutes() == date.getMinutes()){
                        return " some minutes ago"
                      }

                      else if(new Date().getHours() <= new Date().getHours()){
                          //if  hour of update is within the present hour   
                          let hour = new Date().getHours()- date.getHours(); 
                          if(hour == 0){
                            return " some minutes ago"
                          }
                          else{
                            return hour + (hour > 1 ? " hours ago" : " hour ago");
                          }
                        }

                }
                else{
                  let computedDay = new Date().getDate() - day;
                  return computedDay +(computedDay > 1 ? " days ago" : " day ago");
                }
              }
        }
        return "on " +month +" " +day +(new Date().getFullYear() == year ? "" : ", "+year) ;
      }

        /**********************************************************************/
        dataContent.forEach((repo)=>{
            let markup=`
            <div class="content-items" style="display:${(repo.isPrivate ? "none" : "flex")}">
            <div class="item-detail first">
            <p class="repo-name"><a href="${repo.url}">${repo.name}</a></p>
            <p class="repo-fork-link" style="display: ${repo.isFork ? "block" : "none"}">Forked from <a href="${repo.isFork ? repo.parent.url : ""}">${repo.isFork ? repo.parent.url.slice(19) : ""}</a></p>
            <p class="repo-description" style="display:${(repo.description==null) ? "none" : "block"}">${repo.description===null ? "" : repo.description}</p>
            <div class="item-description">
                <p class="repo-language"><span class="repo-colour" style="background-color:${repo.primaryLanguage.color}"></span>${repo.primaryLanguage.name}</p>
                <p class="repo-forks" style="display:${(repo.forkCount > 0 || (repo.parent != null && repo.parent.forkCount > 0)) ? "flex" : "none"}">
                <svg fill="#6b6b6b" aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img">
                    <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 
                    2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 
                    0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z">
                    </path>
                </svg> ${(repo.forkCount > 0 || (repo.parent != null && repo.parent.forkCount > 0)) ? repo.parent.forkCount : ""}</p>
                <p class="time-stamp">Updated ${formatDate(repo.updatedAt)}</p>
            </div>
            </div>

            <div class="item-detail second">
            <div class="button">
                <svg fill="#6b6b6b" class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 
                0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 
                .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 
                0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
                </path>
                </svg>
                <span>Star</span>
            </div>
            </div>
        </div>  
        `;
        sectionTwo.insertAdjacentHTML('beforeend', markup)  
        })
    })
    .catch(console.error)
})();
