$(document).ready(function() {
    $('.item__start').mouseover(function () {
    $(this).addClass('scaled');
    $('.item__business').addClass('business-scale');
    });
    $('.item__start').mouseout(function () {
        $(this).removeClass('scaled');
        $('.item__business').removeClass('business-scale');
    });
    $('.item__vip').mouseover(function () {
        $(this).addClass('scaled');
        $('.item__business').addClass('business-scale');
    });
    $('.item__vip').mouseout(function () {
        $(this).removeClass('scaled');
        $('.item__business').removeClass('business-scale');
    });
});

$(document).ready(function() { 
    $('.slider').on(`init reInit`, function(event, slick) {
    $('.slick-slide-num-current').text('0' + 1 + ' '); // ' / ' + '0' + slick.slideCount
    })
    $('.slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $('.slick-slide-num-current').text('0' + (currentSlide + 1) + ' '); // + ' / 0' + slick.slideCount
    })
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        cssEase: 'linear',
        appendArrows: '.slick__arrows',
        prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous"></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next"></button>',
    });
});

$(document).ready(function() { 
    $('.partners-slider-1').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    responsive:[
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: true,
        }
    }
    ],
    });
    $('.partners-slider-2').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        responsive:[
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                variableWidth: true,
            }
        }
        ],
    });
});


$(document).ready(function() {
    $('.faq__title').click(function(event) {
    if($('.faq-field').hasClass('one')){
        $('.faq__title').not($(this)).parent().removeClass('active');
        $('.text').not($(this).next()).slideUp(300);
    }
    $(this).next().slideToggle(300); //.toggleClass('active')
    $(this).parent().toggleClass('active');
    });
});

$(document).ready(function() {
$("a.to__tarrifs").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});
});
$(document).ready(function () {
    $('.header__burger').click(function (event) { 
        $('.menu__body').toggleClass('active');
    });
})
const Form = ({
  checkBlockId,
  checkBoxId
}) => {
  const [email, setEmail] = React.useState(() => {
    const saved = localStorage.getItem("email");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [name, setName] = React.useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [phone, setPhone] = React.useState(() => {
    const saved = localStorage.getItem("phone");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [checkboxActive, setCheckboxActive] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [nameDirty, setNameDirty] = React.useState(false);
  const [phoneDirty, setPhoneDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState('Email не может быть пустым');
  const [nameError, setNameError] = React.useState('Имя не может быть пустым');
  const [phoneError, setPhoneError] = React.useState('Телефон не может быть пустым');
  const [formValid, setFormValid] = React.useState(false);
  React.useEffect(() => {
    if (emailError || nameError || phoneError || !checkboxActive) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, nameError, phoneError, checkboxActive]);

  const checkboxHandler = () => {
    setCheckboxActive(!checkboxActive);
  };

  React.useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("phone", JSON.stringify(phone));
  }, [name, email, phone]);

  const blurHandler = e => {
    switch (e.target.name) {
      case 'name':
        nameHandler(e);
        setNameDirty(true);
        break;

      case 'email':
        emailHandler(e);
        setEmailDirty(true);
        break;

      case 'phone':
        phoneHandler(e);
        setPhoneDirty(true);
        break;
    }
  };

  const emailHandler = e => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };

  const phoneHandler = e => {
    setPhone(e.target.value);
    const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setPhoneError('Некорректный номер телефона');
    } else {
      setPhoneError('');
    }
  };

  const nameHandler = e => {
    setName(e.target.value);
    const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Некорректное имя');
    } else {
      setNameError('');
    }
  };

  return React.createElement("form", {
    className: "ajaxForm",
    action: "https://formcarry.com/s/kW0qF4VTJD_",
    acceptCharset: "UTF-8"
  }, nameDirty && nameError && React.createElement("div", {
    style: {
      color: 'red',
      fontSize: '14px',
      marginBottom: '5px'
    }
  }, nameError), React.createElement("input", {
    onChange: e => nameHandler(e),
    value: name,
    onBlur: e => blurHandler(e),
    className: "form__elem",
    id: "name",
    type: "text",
    name: "name",
    required: true,
    placeholder: "Ваше имя"
  }), phoneDirty && phoneError && React.createElement("div", {
    style: {
      color: 'red',
      fontSize: '14px',
      marginBottom: '5px'
    }
  }, phoneError), React.createElement("input", {
    onChange: e => phoneHandler(e),
    value: phone,
    onBlur: e => blurHandler(e),
    className: "form__elem",
    id: "phone",
    type: "tel",
    "data-tel-input": true,
    name: "phone",
    required: true,
    placeholder: "Телефон"
  }), emailDirty && emailError && React.createElement("div", {
    style: {
      color: 'red',
      fontSize: '14px',
      marginBottom: '5px'
    }
  }, emailError), React.createElement("input", {
    onChange: e => emailHandler(e),
    value: email,
    onBlur: e => blurHandler(e),
    className: "form__elem",
    id: "email",
    type: "email",
    name: "email",
    required: true,
    placeholder: "E-mail"
  }), React.createElement("textarea", {
    name: "",
    className: "comment form__elem",
    cols: "30",
    rows: "10",
    type: "text",
    placeholder: "Ваш комментарий"
  }), React.createElement("div", {
    id: checkBlockId
  }, React.createElement("input", {
    onChange: e => checkboxHandler(),
    className: "checkbox__input",
    type: "checkbox",
    id: checkBoxId,
    checked: checkboxActive
  }), React.createElement("label", {
    className: "checkbox__label",
    htmlFor: checkBoxId
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0443 \u044F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 ", React.createElement("a", {
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  }, "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"), ".", React.createElement("span", null, "*"))), React.createElement("input", {
    disabled: !formValid,
    className: "form__button",
    type: "submit",
    value: "ОСТАВИТЬ ЗАЯВКУ!"
  }));
};
const Modal = ({
  children
}) => {
  const hideModal = () => {
    let start = 1;
    let modal = document.querySelector(".modal");
    let timer = requestAnimationFrame(function animateModal(timestamp) {
      start -= 0.03125;
      modal.style.transform = "scale(" + start + ")";
      if (start > 0) requestAnimationFrame(animateModal);
    });
  };

  return React.createElement("div", {
    className: "modal",
    onClick: () => hideModal()
  }, React.createElement("div", {
    className: "body__form",
    onClick: e => e.stopPropagation()
  }, children));
};

const Option = ({
  text
}) => {
  return React.createElement("div", {
    className: "item__option"
  }, React.createElement("p", null, text));
};

const itemStart = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Неиспользованные оплаченные часы переносятся на следующий месяц', 'Предоплата от 6 000 реблей в месяц'];
const itemBusiness = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Высокое время реакции - до 2 рабочих дней', 'Неиспользованные оплаченные часы не переносятся', 'Предоплата от 30 000 реблей в месяц'];
const itemVip = ['Консультации и работы по СЕО', 'Услуги дизайнера', 'Высокое время реакции - в день обращения', 'Неиспользованные оплаченные часы не переносятся', 'Предоплата от 270 000 реблей в месяц'];
const startTitle = ['Стартовый'];
const businessTitle = ['Бизнес'];
const vipTitle = ['VIP'];

const PlansItem = ({
  type,
  textFrom,
  titleFrom,
  n,
  children
}) => {
  return React.createElement("div", {
    className: `${type} plans-item`
  }, React.createElement("div", {
    className: "plan-wrapper"
  }, React.createElement("h3", null, titleFrom), React.createElement("div", {
    className: "line"
  }), React.createElement("div", null, [...Array(n)].map((item, index) => React.createElement(Option, {
    text: textFrom[index],
    key: index
  }))), children));
};

const App = () => {
  const showModal = () => {
    let start = 0;
    let modal = document.querySelector(".modal");
    let timer = requestAnimationFrame(function animateModal(timestamp) {
      start += 0.03125;
      modal.style.transform = "scale(" + start + ")";
      if (start < 1) requestAnimationFrame(animateModal);
    });
  };

  return React.createElement("div", null, React.createElement("div", {
    className: "plans__items"
  }, React.createElement(PlansItem, {
    type: "item__start",
    textFrom: itemStart,
    titleFrom: startTitle,
    n: 4
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => showModal()
  })), React.createElement(PlansItem, {
    type: "item__business",
    textFrom: itemBusiness,
    titleFrom: businessTitle,
    n: 5
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => showModal()
  })), React.createElement(PlansItem, {
    type: "item__vip",
    textFrom: itemVip,
    titleFrom: vipTitle,
    n: 5
  }, React.createElement("input", {
    className: "plans__btn",
    type: "button",
    value: "ОСТАВИТЬ ЗАЯВКУ!",
    onClick: () => showModal()
  }))), React.createElement(Modal, null, React.createElement(Form, {
    checkBlockId: "modal__form__checkbox",
    checkBoxId: "modal__userAgreement"
  })));
};

ReactDOM.render(React.createElement(Form, {
  checkBlockId: "form__checkbox",
  checkBoxId: "userAgreement"
}), document.querySelector("#main-form"));
ReactDOM.render(React.createElement(App, null), document.querySelector(".plans__place"));
document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');

    var getInputNumbersValue = function (input) {
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})
$(function(){
        
    $(".ajaxForm").submit(function(e){

        e.preventDefault();

        var href = $(this).attr("action");

        $.ajax({

            type: "POST",

            dataType: "json",

            url: href,

            data: $(this).serialize(),

            success: function(response){

                if(response.status == "success"){

                    alert("Мы приняли вашу заявку!");

                }else{

                    alert("Произошла ошибка: " + response.message);

                }

            }

        });

    });

});