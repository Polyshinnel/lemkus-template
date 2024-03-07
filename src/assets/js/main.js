if($('.phone-input').length > 0) {
    $.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
    $('.phone-input').mask("+7 (h99) 999-99-99");
}

Fancybox.bind("[data-fancybox]", {
// Your custom options
});

function checkName(name) {
    if(name.length > 3) {
        return true;
    }

    return false;
}

function checkLastName(lastname) {
    if(lastname.length > 3) {
        return true;
    }

    return false;
}

function checkPhone(phone) {
    phone = phone.replace(/[^0-9]/g, '');
    if(phone.length > 10) {
        return true;
    }

    return false
}

function checkEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)) {
        return true;
    }

    return false;
}

function checkPass(pass) {
    if(pass.length > 5) {
        return true;
    }

    return false;
}


function checkOnErr(selector, func, pass=null) {
    let data = selector.val()
    let check = func(data)
    if(pass != null) {
        check = func(data, pass)
    }
    
    if(!check) {
        selector.parent().find('p').css('display','block')
        return false
    }
    return true;
}

function resetErr() {
    let err = $('.common__input p');
    err.each(function(){
        $(this).css('display','none')
    })
}


$('.checkout-btn').click(function(){
    resetErr() 
    const customerNameSelector = $('#customer-name');
    const customerSecondNameSelector = $('#customer-second-name');
    const customerMailSelector = $('#customer-mail');
    const customerPhonelector = $('#customer-phone');
    let flag = 0;
    let selectorsObj = [
        {
            selector: customerNameSelector,
            check: checkName
        },
        {
            selector: customerSecondNameSelector,
            check: checkLastName
        },
        {
            selector: customerMailSelector,
            check: checkEmail
        },
        {
            selector: customerPhonelector,
            check: checkPhone
        },
    ];

    for(let i=0;i<selectorsObj.length;i++) {
        let dataObj = selectorsObj[i]
        let checkRes = checkOnErr(dataObj.selector,dataObj.check)
        if(!checkRes) {
            flag++;
        }
    }

    if(flag == 0) {
        Fancybox.show([{ src: "#order-processing", type: "inline" }]);
    }
})

$('.register-btn').click(function(e){
    e.preventDefault()
    resetErr() 
    const firstnameSelector = $('#input-firstname')
    const lastnameSelector = $('#input-lastname')
    const emailSelector = $('#input-email')
    const phoneSelector = $('#input-telephone')
    const passSelector = $('#input-password')
    const confirmSelector = $('#input-confirm')

    let flag = 0;
    let selectorsObj = [
        {
            selector: firstnameSelector,
            check: checkName
        },
        {
            selector: lastnameSelector,
            check: checkLastName
        },
        {
            selector: emailSelector,
            check: checkEmail
        },
        {
            selector: phoneSelector,
            check: checkPhone
        },
        {
            selector: passSelector,
            check: checkPass,
        },
    ];

    for(let i=0;i<selectorsObj.length;i++) {
        let dataObj = selectorsObj[i]
        let checkRes = checkOnErr(dataObj.selector,dataObj.check)
        if(!checkRes) {
            flag++;
        }
    }

    if(passSelector.val() !== confirmSelector.val()) {
        flag++;
        confirmSelector.parent().find('p').css('display', 'block');
    }

})