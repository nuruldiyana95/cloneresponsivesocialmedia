const menuItems = document.querySelectorAll('.menu-item');
const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');//nak select semua message untuk search
const messageSearch = document.querySelector('#message-search');
//theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
//color pallete part 
const colorPallete = document.querySelectorAll('.choose-color span');
//change color lightness
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
// add active class to clicked menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        // kalauada notify dia akan tukar pada none 
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').
                style.display = 'block';
            //bila click pada notif dia akan hilang
            document.querySelector('#notifications .notification-count').
                style.display = 'none';
        }
    })
})

//messages//////////////////////////////////////////////////////////////////////////
//untuk search chat 
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();// tiap kali masuk query dia akan auto tukar lower case
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex'; // sebab dekat message style dia flex 
        } else {
            chat.style.display = 'none';
        }

    })


}


//untuk search messsage 
messageSearch.addEventListener('keyup', searchMessage);




//nak highlight message dengan bila tekan notification hilang 
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifications.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 1000); // lepas satu scond box shadow akan hilang
})

//theme customization/////////
//open modal
const openThemeModal = () => {
    ///nak displaytheme customize
    themeModal.style.display = 'grid';
}

//close modal
//bila dah bukak theme pastu nak tekan close kat tempat lain just click luar kawasan then dia akana tutup 
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);



theme.addEventListener('click', openThemeModal);

// font/////////////////////////////////////////////////////////////////////////////////////////////

//remove active class kiranya bila click satu satu dia active
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

//change font size and change sticky top left bila tiap kali tukar 
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '0.7rem');
            root.style.setProperty('--sticky-right', '5rem');
            root.style.setProperty('--sticky-left', '93rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '0.6rem');
            root.style.setProperty('--sticky-right', '2rem');
            root.style.setProperty('--sticky-left', '70rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '0.8rem');
            root.style.setProperty('--sticky-right', '-5rem');
            root.style.setProperty('--sticky-left', '57rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '1rem');
            root.style.setProperty('--sticky-right', '-5rem');
            root.style.setProperty('--sticky-left', '48rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '0rem');
            root.style.setProperty('--sticky-right', '-6rem');
            root.style.setProperty('--sticky-left', '42rem');
        }

        document.querySelector('html').style.fontSize = fontSize;
    })
    //change font size of root html element dsebabkan kita guna rem , jadi senang nak ubh

})

//remove active class from all color pallete
const changeActiveColorClass = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//change primary color
colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass(); // kalau ada active dia akan hilang
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){ 
            primaryHue = 152;
        }else if(color.classList.contains('color-3')){ 
            primaryHue = 352;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//theme bg value 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change bg color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}


Bg1.addEventListener('click', () => {

    //active class
    Bg1.classList.add('active');
    //remove active class
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();//refresh
   
});

Bg2.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

    //active class
    Bg2.classList.add('active');
    //remove active class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
   
});


Bg3.addEventListener('click', () => {
    lightColorLightness = '95%';
    whiteColorLightness = '10%';
    darkColorLightness = '0%';

    //active class
    Bg3.classList.add('active');
    //remove active class
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
   
});