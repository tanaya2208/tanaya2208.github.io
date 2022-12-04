let projectData = [{
    image: 'img/project1.png',
    name: 'project one',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
  github: '#',
  live: '#',
  tags: '#art'
},

{
  image: 'img/komodo d.jpg',
  name: 'project two',
  detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
  github: '#',
  live: '#',
  tags: '#javascript, #css'
},
{
  image: 'img/katakali.jpg',
  name: 'project three',
  detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
  github: '#',
  live: '#',
  tags: '#javascript'
},
{
  image: 'img/p1.jpeg',
  name: 'project four',
  detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
  github: '#',
  live: '#',
  tags: '#fullstack, #css'
},
{
  image: 'img/hug.png',
  name: 'project five',
  detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
  github: '#',
  live: '#',
  tags: '#fullstack'
},
{
  image: 'img/p3.jpeg',
  name: 'project six',
  detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
  github: '#',
  live: '#',
  tags: '#css'
},
{
  image: 'img/imo.jpeg',
  name: 'project seven',
  detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
  github: '#',
  live: '#',
  tags: '#javascript'
},
{
  image: 'img/kingfisher2.jpg',
  name: 'project eight',
  detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
  github: '#',
  live: '#',
  tags: '#css'
},
]

// creating project cards in frontend
const createProjectCards = (data) => {
let projectContainer = document.querySelector('.project-container');
projectContainer.innerHTML += `
<div class="project-card" data-tags="${data.tags}">
        <div class="project-wrapper">
          <div class="project-thumbnail">
            <img src="./img/close.png" class="close-btn" alt="close">
            <img src="${data.image}" class="project-img" alt="gentle">
            <span class="tags">${data.tags}</span>
          </div>

          <div class="project-body">
              <h1 class="project-name">${data.name}</h1>
              <p class="project-detail">${data.detail}</p>
          </div>
        </div>
      </div>
 </div>
</div> 
`  ;
}

projectData.forEach(data => createProjectCards(data));



/* contact form */
var validate = function(e) {
  var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
  var regEx;
  var removeSpan;
  var par;
  var check = false;
  var val;
  var errArr = [];

  for (var i = 0; i < fields.length; i++) {
      if (fields[i].value === "") {
        
          if (fields[i].nextElementSibling.classList.contains('error')) {
            removeSpan = fields[i].nextElementSibling;
            par = fields[i].parentNode;
            par.removeChild(removeSpan);
            fields[i].nextElementSibling.innerHTML = "Hmmm! " + fields[i].placeholder + " is required?";
            fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
            check = false;
            errArr.push(fields[i]);
          }
          fields[i].nextElementSibling.innerHTML = "Hmmm! " + fields[i].placeholder + " is required?";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
      } else {

          // check if message and name values contain valid characters.
          if (fields[i].id !== 'email' && fields[i].id !== 'phone') {
              val = isValidChar(fields[i]);
              if(val === false) {
                fields[i].nextElementSibling.innerHTML = "Are you trying to HACK ME!";
                fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
                check = false;
                errArr.push(fields[i]);
              } else {
                fields[i].nextElementSibling.innerHTML = "";
                fields[i].style.boxShadow = "none";
                check = true;
              }
          }
        
          if(fields[i].id === 'phone') {
            val = isValidPhone(fields[i]);
            if(val === false) {
              fields[i].nextElementSibling.innerHTML = "Hmmm! Your phone number is not valid?";
              fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
              check = false;
              errArr.push(fields[i]);
            } else {
              fields[i].nextElementSibling.innerHTML = "";
              fields[i].style.boxShadow = "none";
              check = true;  
            }
          }

          if (fields[i].id === 'email') {
              val = isValidEmail(fields[i]);
              if(val === false) {
                  fields[i].nextElementSibling.innerHTML = "Hmmm! Your email address is not valid?";
                  fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
                  check = false;
                  errArr.push(fields[i]);
              } else {
                  fields[i].nextElementSibling.innerHTML = "";
                  fields[i].style.boxShadow = "none";
                  check = true;
              }
          }
      }
  }

  if(check === false) {
    var count = 0;
    var toErr = setInterval(function() {
      var e = errArr[0].offsetTop + -25;
      var pos = Math.abs(e);
      if(count < pos) {
        count ++;
        window.scrollTo(0, count);
      } else {
        clearInterval(toErr);
      }
    }, 1);
  }
  
  return check

  // Helper functions.
  function isValidEmail(e) {
      regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var email = e.value;
      if (!regEx.test(email)) {
          return false;
      }
  }

  function isValidChar(e) {
      regEx = /^[a-zA-Z@#$%!?^&*()_+\-=\[\]{};':"\\|,.\/? ]*$/;
      var value = e.value;
      if (!regEx.test(value)) {
          return false;
      }
  }

  function isValidPhone(e) {
    regEx = /^[+]?[(]?[+]?\d{2,4}[)]?[-\s]?\d{2,8}[-\s]?\d{2,8}$/;
    var value = e.value;
    if(!regEx.test(value)) {
      return false;
    }
  }
};

// nav toggle

// let links = document.querySelectorAll('.links');

// links.forEach(link =>{
//   link.forEach(item => item.classList.remove('active'))
//   link.classList.add('active')
// })

// //  toggle navbar in mobile v

// const toggleBtn = document.querySelector(toggleBtn);
// const ul = document.querySelector('.nav-links-container');

// toggleBtn.addEventListener('click', ()=>{
//   toggleBtn.classList.toggle('active');
//   ul.classList.toggle('active');
// })




