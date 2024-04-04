// get the data of the user 

let userData = [
    {
        profilePic:"https://images.unsplash.com/photo-1548361403-cb0c785eea54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        displayPic:"https://images.unsplash.com/photo-1548361403-cb0c785eea54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMassage:"7", 
        location:"Delhi, India", 
        name:"Illiza", 
        age:"20", 
        interest:[
            {
                icon:`<i class="ri-music-2-fill"></i>`,
                interestName: "Music"
            },
            {
                icon:`<i class="ri-cake-3-line"></i>`,
                interestName: "Food"
            }
        ],
        bio:"Spirited adventurer with a penchant for exploring the unknown and capturing moments through her lens.", 
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1581841064838-a470c740e8ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        displayPic:"https://images.unsplash.com/photo-1581841064838-a470c740e8ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMassage:"5",
        location:"Shimla, India", 
        name:"Ishika", 
        age:"25", 
        interest:[
            {
                icon:`<i class="ri-goblet-2-fill"></i>`,
                interestName: "Party"
            },
            {
                icon:`<i class="ri-cake-3-line"></i>`,
                interestName: "Food"
            }
        ],
        bio:"Poetry enthusiast with a heart woven with words, finding solace in the rhythm of verses and the melody of life.", 
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        displayPic:"https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMassage:"3", 
        location:"Lucknow, India", 
        name:"Ashu", 
        age:"24", 
        interest:[
            {
                icon:`<i class="ri-music-2-fill"></i>`,
                interestName: "Music"
            },
            {
                icon:`<i class="ri-quill-pen-fill"></i>`,
                interestName: "Writing"
            }
        ], 
        bio:"Nature lover with a green thumb and a passion for sustainable living, nurturing both plants and dreams alike.", 
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        displayPic:"https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMassage:"1", 
        location:"Uttarakhand, India", 
        name:"Isha", 
        age:"26", 
        interest:[
            {
                icon:`<i class="ri-music-2-fill"></i>`,
                interestName: "Music"
            },
            {
                icon:`<i class="ri-book-2-line"></i>`,
                interestName: "Reading"
            }
        ],
        bio:"Creative soul with a palette of colors, painting stories on canvases and hearts with strokes of imagination.", 
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        displayPic:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMassage:"7", 
        location:"Saket, Delhi", 
        name:"Riya", 
        age:"28", 
        interest:[
            {
                icon:`<i class="ri-music-2-fill"></i>`,
                interestName: "Music"
            },
            {
                icon:`<i class="ri-book-2-line"></i>`,
                interestName: "Reading"
            }
        ],
        bio:"Creative soul with a palette of colors, painting stories on canvases and hearts with strokes of imagination.", 
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        displayPic:"https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMassage:"7", 
        location:"Gk-II, Delhi", 
        name:"Sakshi", 
        age:"25", 
        interest:[
            {
                icon:`<i class="ri-music-2-fill"></i>`,
                interestName: "Music"
            },
            {
                icon:`<i class="ri-book-2-line"></i>`,
                interestName: "Reading"
            }
        ],
        bio:"Creative soul with a palette of colors, painting stories on canvases and hearts with strokes of imagination.", 
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        displayPic:"https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMassage:"15", 
        location:"South-Ex, Delhi", 
        name:"Rihana", 
        age:"22", 
        interest:[
            {
                icon:`<i class="ri-music-2-fill"></i>`,
                interestName: "Music"
            },
            {
                icon:`<i class="ri-book-2-line"></i>`,
                interestName: "Reading"
            }
        ],
        bio:"Creative soul with a palette of colors, painting stories on canvases and hearts with strokes of imagination.", 
        isFriend: null
    },
];

function select(elem){
    return document.querySelector(elem);
}

let current = 0;
let isAnimation = false;

function setData(index){
    //profileImage
    select(".profileimg img").src = userData[index].profilePic;

    // badgeNumber
    select(".badge h5").textContent = userData[index].pendingMassage;

    //location
    select(".location h3").textContent = userData[index].location;

    //name
    select(".name h1:nth-child(1)").textContent = userData[index].name;

    // age
    select(".name h1:nth-child(2)").textContent = userData[index].age;

    // interest
    function iconofInterst(){
        let clutter = "";
        let intElement = select(".tags")
        if (intElement && userData[current] && userData[current].interest) {
            userData[current].interest.forEach(function(interests){
                clutter +=` <div class="tag flex gap-3 items-center bg-white/40 px-3 py-1 rounded-md">
                            ${interests.icon}
                            <h3 class="text-1xl font-semibold">${interests.interestName}</h3>
                        </div> `
            });
        }
        select(".tags").innerHTML = clutter;
    };
    iconofInterst();

    //Bio
    let bioElement = select(".bio p");

    if (bioElement && userData[current] && userData[current].bio) {
        bioElement.textContent = userData[current].bio;
    } 
}

(function setInitial(){
    //mainCardImage
    select(".maincard img").src = userData[current].displayPic;

    //upComingImage
    select(".incomingcard img").src = userData[current+1]?.displayPic;
    
    setData(current);

    current = 2;

})();

function imageChange(){
    if(!isAnimation){
        isAnimation = true;
        let timeLine = gsap.timeline({
            onComplete: function(){
                isAnimation = false;
                let maincard = select(".maincard");
                let incomingcard = select(".incomingcard");
    
                incomingcard.classList.remove("z-[2]");
                incomingcard.classList.add("z-[3]");
                incomingcard.classList.remove("incomingcard");
    
                maincard.classList.remove("z-[3]");
                maincard.classList.add("z-[2]");
                gsap.set(maincard,{
                    scale: 1,
                    opacity: 1
                })
                if(current === userData.length){
                    current = 0;
                }
                select(".maincard img").src = userData[current].displayPic;
                current++;
                maincard.classList.remove("maincard");
                incomingcard.classList.add("maincard");
                maincard.classList.add("incomingcard");
            }
        });
    
        timeLine.to(".maincard",{
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")
        .from(".incomingcard",{
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        }, "a")
    }
};

function clickAble(){
    let denyi = select(".deny");
    let accept = select(".accept");

    denyi.addEventListener("click", function(){
        imageChange();
        setData(current-1);
        gsap.from(".details .element",{
            x: "-105%",
            stagger: .06,
            ease: Power4.easeInOut,
            duration: 1.5
        })
    })

    accept.addEventListener("click", function(){
        imageChange();
        setData(current-1);
        gsap.from(".details .element",{
            x: "-110%",
            stagger: .06,
            ease: Power4.easeInOut,
            duration: 1.5
        })
        gsap.to(".heart",{
            scale: 1,
            duration: 0.5
        })
        gsap.to(".heart", {
            scale: 0,
            duration: 0.5,
            delay: 1
        });
    })
    
}
clickAble();

(function containerCreator(){
    document.querySelectorAll(".elements")
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    })
})();



