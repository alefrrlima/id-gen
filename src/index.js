// ----- constants, variables and objects ----- //
const userData = {
   fullName: undefined,
   birthday: undefined,
   gender: undefined,
   layout: undefined,
   firstColor: undefined,
   secondColor: undefined,
   thirdColor: undefined,
   theme: undefined,
   slide: undefined,
   validation: undefined,
   picture: {
      raw: undefined,
      edited: undefined,
   },
}
const formName = document.querySelector("#full-name")
const formGender = document.querySelector("#gender")
const formBirthday = document.querySelector("#birthday")
const pictureInput = document.getElementById('pictureinput');
const pictureOutput = document.getElementById('pictureoutput');
var hcardPictureOutput = document.querySelector("#hcard-picture-output")
var vcardPictureOutput = document.querySelector("#vcard-picture-output")
const fileReader = new FileReader()
const pictureAlert = document.getElementById('picture-alert')
const pictureAlertTxt = document.getElementById('picture-alert-txt')
const submit = document.querySelector("#submit");
const submitErrorMensage = document.querySelector("#submit-error-mensage")
const root = document.querySelector(":root")
const rootProperties = getComputedStyle(root)
const hCard = document.querySelector("#hcard")
const vCard = document.querySelector("#vcard")
const Red = document.querySelector("#red")
const Blue = document.querySelector("#blue")
const Green = document.querySelector("#green")
const Black = document.querySelector("#black")
const White = document.querySelector("#white")
const Yellow = document.querySelector("#yellow")
const Orange = document.querySelector("#orange")
const Purple = document.querySelector("#purple")
const hCardBackground = document.querySelector("#hcard-background")
const vCardBackground = document.querySelector("#vcard-background")
const hCardPicture = document.querySelector("#hcard-picture")
const vCardPicture = document.querySelector("#vcard-picture")
const hCardTheme = document.querySelector("#hcard-theme")
const vCardTheme = document.querySelector("#vcard-theme")
const hCardName = document.querySelector("#hcard-name")
const vCardName = document.querySelector("#vcard-name")
const hCardBirthday = document.querySelector("#hcard-birthday")
const vCardBirthday = document.querySelector("#vcard-birthday")
const hCardQRcode = document.querySelector("#hcard-qrcode")
const vCardQRcode = document.querySelector("#vcard-qrcode")
const cardIconFill = document.querySelectorAll(".card-icon-fill")
const themeSelector = document.querySelector("#theme-selector")
const hCardIconCube = document.querySelector("#hcard-icon-cube")
const vCardIconCube = document.querySelector("#vcard-icon-cube")
const hCardIconArtista = document.querySelector("#hcard-icon-artista")
const vCardIconArtista = document.querySelector("#vcard-icon-artista")
const hCardIconFilmes = document.querySelector("#hcard-icon-filmes")
const vCardIconFilmes = document.querySelector("#vcard-icon-filmes")
const hCardIconAtleta = document.querySelector("#hcard-icon-atleta")
const vCardIconAtleta = document.querySelector("#vcard-icon-atleta")
const hCardIconCozinheiro = document.querySelector("#hcard-icon-cozinheiro")
const vCardIconCozinheiro = document.querySelector("#vcard-icon-cozinheiro")
const hCardIconDetalhista = document.querySelector("#hcard-icon-detalhista")
const vCardIconDetalhista = document.querySelector("#vcard-icon-detalhista")
const hCardIconDorminhoco = document.querySelector("#hcard-icon-dorminhoco")
const vCardIconDorminhoco = document.querySelector("#vcard-icon-dorminhoco")
const hCardIconExplorador = document.querySelector("#hcard-icon-explorador")
const vCardIconExplorador = document.querySelector("#vcard-icon-explorador")
const hCardIconMusica = document.querySelector("#hcard-icon-musica")
const vCardIconMusica = document.querySelector("#vcard-icon-musica")
const hCardIconFitness = document.querySelector("#hcard-icon-fitness")
const vCardIconFitness = document.querySelector("#vcard-icon-fitness")
const hCardIconGamer = document.querySelector("#hcard-icon-gamer")
const vCardIconGamer = document.querySelector("#vcard-icon-gamer")
const hCardIconGoodvibes = document.querySelector("#hcard-icon-goodvibes")
const vCardIconGoodvibes = document.querySelector("#vcard-icon-goodvibes")
const hCardIconLeitor = document.querySelector("#hcard-icon-leitor")
const vCardIconLeitor = document.querySelector("#vcard-icon-leitor")
const hCardIconMinimalista = document.querySelector("#hcard-icon-minimalista")
const vCardIconMinimalista = document.querySelector("#vcard-icon-minimalista")
const hCardIconMusico = document.querySelector("#hcard-icon-musico")
const vCardIconMusico = document.querySelector("#vcard-icon-musico")
const hCardIconCafe = document.querySelector("#hcard-icon-cafe")
const vCardIconCafe = document.querySelector("#vcard-icon-cafe")
const hCardIconPreguicoso = document.querySelector("#hcard-icon-preguicoso")
const vCardIconPreguicoso = document.querySelector("#vcard-icon-preguicoso")
const hCardIconSaudavel = document.querySelector("#hcard-icon-saudavel")
const vCardIconSaudavel = document.querySelector("#vcard-icon-saudavel")
const hCardIconSeries = document.querySelector("#hcard-icon-series")
const vCardIconSeries = document.querySelector("#vcard-icon-series")
const firstSlideButton = document.querySelector("#fsbutton")
const leftControlButton = document.querySelector("#left-control-button")
const rightControlButton = document.querySelector("#right-control-button")
const sliderMessage = document.querySelector("#slider-message")
const firstSlide = document.querySelector("#first-slide")
const secondSlide = document.querySelector("#second-slide")
const thirdSlide = document.querySelector("#third-slide")
const fourthSlide = document.querySelector("#fourth-slide")
const firstPageDot = document.querySelector("#first-page-dot")
const secondPageDot = document.querySelector("#second-page-dot")
const thirdPageDot = document.querySelector("#third-page-dot")
const fourthPageDot = document.querySelector("#fourth-page-dot")
const fifthPageDot = document.querySelector("#fifth-page-dot")
const fourthSlideLS1 = document.querySelector("#fs-1leftside")
const fourthSlideLS2 = document.querySelector("#fs-2leftside")
const fourthSlideH1 = document.querySelector("#fourth-slide-h1")
const cropperContainer = document.querySelector("#cropper-container")
const cropperExit = document.querySelector("#cropper-exit")
const rawImage = document.querySelector("#raw-image")
const cropButton = document.querySelector("#crop-button")
const oficialText = document.querySelector("#oficial-text")
const downloadButton = document.querySelector("#download-pdf")
var finalCard = null
var cropper = null

// ----- picture manegement ----- //

function sendToCropArea () {
   fileReader.onload = function () {
      rawImage.src = fileReader.result
   }
   fileReader.readAsDataURL(userData.picture.raw)
}

function hideCropperContainer () {
   cropperContainer.style.display = "none"
}

function showCropperContainer () {
   cropperContainer.style.display = "flex"
}

function initCrop() {
   cropper = new Cropper(rawImage, {
      aspectRatio: 1,
   })
}

cropperExit.addEventListener("click", function(e) {
   hideCropperContainer ()
})

cropButton.addEventListener("click", function(e) {
   vcardPictureOutput.src = ''
   hcardPictureOutput.src = ''
   vcardPictureOutput.src = cropper.getCroppedCanvas().toDataURL('image/jpeg')
   hcardPictureOutput.src = cropper.getCroppedCanvas().toDataURL('image/jpeg')
   setTimeout(hideCropperContainer, 300)
})

pictureInput.addEventListener("change", (e) => {
   const files = e.target.files;
   pictureOutput.textContent = ''
   pictureOutput.textContent = files[0].name
   userData.picture.raw = files[0]
   rawImage.src = ""
   sendToCropArea ()
   setTimeout(showCropperContainer, 300)
   setTimeout(initCrop, 300)
})

// ----- picture info alert function ----- //

pictureAlert.onmouseover = function () {
   pictureAlertTxt.style.display = 'flex';
}

pictureAlert.onmouseout = function () {
   pictureAlertTxt.style.display = 'none';
}

// ----- save form entries and card text update ----- //

function userBirthdayPattern () {
   var birthday = formBirthday.value;
   var day = undefined
   var month = undefined
   var year = undefined
   birthday = new Date(birthday)
   if ([birthday.getDate() + 1] < 10) {
      day = "0" + [birthday.getDate() + 1]
   } else {
      day = birthday.getDate() + 1
   }
   if ([birthday.getMonth() + 1] < 10) {
      month = "0" + [birthday.getMonth() + 1]
   } else {
      month = birthday.getMonth() + 1
   }
   year = birthday.getFullYear()
   userData.birthday = day + "/" + month + "/" + year
}

function cardTextUpdate () {   
   vCardName.textContent = userData.fullName
   hCardName.textContent = userData.fullName
   vCardBirthday.textContent = userData.birthday
   hCardBirthday.textContent = userData.birthday
}

function formValidation () {
   const turnShadowRed = document.querySelectorAll(".turn-shadow-red")
   turnShadowRed.forEach(element => {
      element.classList.remove("turn-shadow-red")
   });
   submitErrorMensage.textContent = " "
   userData.validation = "undefined"
   if (formName.value === "") {
      formName.classList.add("turn-shadow-red")
      submitErrorMensage.textContent = "Por favor, preencha os campos corretamente."
      userData.validation= "invalid"
   }
   if (formName.value.length > 23) {
      formName.classList.add("turn-shadow-red")
      submitErrorMensage.textContent = "Seu nome deve conter até 23 caracteres. Você pode abreviar parte do seu sobrenome, por exemplo: Alexandre F. Lima."
      userData.validation= "invalid"
   }
   if (formBirthday.value === "") {
      formBirthday.classList.add("turn-shadow-red")
      submitErrorMensage.textContent = "Por favor, preencha os campos corretamente."
      userData.validation= "invalid"
   }
   if (formGender.value === "") {
      formGender.classList.add("turn-shadow-red")
      submitErrorMensage.textContent = "Por favor, preencha os campos corretamente."
      userData.validation= "invalid"
   }
   if (pictureOutput.textContent === "") {
      pictureOutput.classList.add("turn-shadow-red")
      submitErrorMensage.textContent = "Por favor, preencha os campos corretamente."
      userData.validation= "invalid"
   }
}

submit.addEventListener("click", function(e) {
   e.preventDefault();
   userData.fullName = formName.value;
   userData.gender = formGender.value;
   userBirthdayPattern ()
   formValidation ()
   cardTextUpdate ()
   if (userData.slide == "second" && userData.validation !== "invalid" && pictureOutput.textContent !== "" !== "" && formName.value !== "" && formBirthday.value !== "" && formGender.value !== "") {
      userData.slide = "third"
      console.log(userData.slide)
      setTimeout(displayThirdSlide, 300)
      setTimeout(displaySliderButtons, 300)
   }
})

// ----- preferred layout ----- //

hCard.addEventListener("click", function(e) {
   e.preventDefault()
   sliderMessage.textContent = " "
   userData.layout = "horizontal"
   hCardBackground.style.display = "flex"
   vCardBackground.style.display = "none"
})

vCard.addEventListener("click", function(e){
   e.preventDefault()
   sliderMessage.textContent = " "
   userData.layout = "vertical"
   hCardBackground.style.display = "none"
   vCardBackground.style.display = "flex"
})

// -----color update function ----- //

function cardColorUpdate () {
   vCardBackground.style.backgroundColor = userData.thirdColor   
   hCardBackground.style.backgroundColor = userData.thirdColor
   vCardPicture.style.backgroundColor = userData.firstColor   
   hCardPicture.style.backgroundColor = userData.firstColor
   vCardTheme.style.backgroundColor = userData.firstColor
   hCardTheme.style.backgroundColor = userData.firstColor
   vCardTheme.style.color = userData.thirdColor
   hCardTheme.style.color = userData.thirdColor
   vCardName.style.backgroundColor = userData.firstColor
   hCardName.style.backgroundColor = userData.firstColor
   vCardName.style.color = userData.thirdColor
   hCardName.style.color = userData.thirdColor
   vCardBirthday.style.backgroundColor = userData.firstColor
   hCardBirthday.style.backgroundColor = userData.firstColor
   vCardBirthday.style.color = userData.thirdColor
   hCardBirthday.style.color = userData.thirdColor
   vCardQRcode.style.backgroundColor = userData.firstColor   
   hCardQRcode.style.backgroundColor = userData.firstColor
   cardIconFill.forEach(element => {
      element.style.fill = userData.secondColor
   });
}

Black.addEventListener("click", function(e){
   e.preventDefault()
   userData.firstColor = rootProperties.getPropertyValue("--black1")
   userData.secondColor = rootProperties.getPropertyValue("--black2")
   userData.thirdColor = rootProperties.getPropertyValue("--black3")
   cardColorUpdate()
})

Red.addEventListener("click", function(e){
   e.preventDefault();
   userData.firstColor = rootProperties.getPropertyValue("--red1")
   userData.secondColor = rootProperties.getPropertyValue("--red2")
   userData.thirdColor = rootProperties.getPropertyValue("--red3")
   cardColorUpdate()
})

Blue.addEventListener("click", function(e){
   e.preventDefault()
   userData.firstColor = rootProperties.getPropertyValue("--blue1")
   userData.secondColor = rootProperties.getPropertyValue("--blue2")
   userData.thirdColor = rootProperties.getPropertyValue("--blue3")
   cardColorUpdate()
})

Green.addEventListener("click", function(e){
   e.preventDefault()
   userData.firstColor = rootProperties.getPropertyValue("--green1")
   userData.secondColor = rootProperties.getPropertyValue("--green2")
   userData.thirdColor = rootProperties.getPropertyValue("--green3")
   cardColorUpdate()
})

Yellow.addEventListener("click", function(e){
   e.preventDefault()
   userData.firstColor = rootProperties.getPropertyValue("--yellow1")
   userData.secondColor = rootProperties.getPropertyValue("--yellow2")
   userData.thirdColor = rootProperties.getPropertyValue("--yellow3")
   cardColorUpdate()
})

White.addEventListener("click", function(e){
   e.preventDefault()
   userData.firstColor = rootProperties.getPropertyValue("--white1")
   userData.secondColor = rootProperties.getPropertyValue("--white2")
   userData.thirdColor = rootProperties.getPropertyValue("--white3")
   cardColorUpdate()
})

Orange.addEventListener("click", function(e){
   e.preventDefault()
   userData.firstColor = rootProperties.getPropertyValue("--orange1")
   userData.secondColor = rootProperties.getPropertyValue("--orange2")
   userData.thirdColor = rootProperties.getPropertyValue("--orange3")
   cardColorUpdate()
})

Purple.addEventListener("click", function(e){
   e.preventDefault()
   userData.firstColor = rootProperties.getPropertyValue("--purple1")
   userData.secondColor = rootProperties.getPropertyValue("--purple2")
   userData.thirdColor = rootProperties.getPropertyValue("--purple3")
   cardColorUpdate()
})

//  ----- theme update function --- //

themeSelector.addEventListener("change", function (e) {
   e.preventDefault();
   userData.theme = themeSelector.value
   cardIconUpdate()
})

function cardIconUpdate () {
   const activeCardIcons = document.querySelectorAll(".active-card-icon")
   activeCardIcons.forEach(element => {
      element.classList.remove("active-card-icon")
   });
   if (userData.theme == "cube") {
      hCardIconCube.classList.add("active-card-icon")
      vCardIconCube.classList.add("active-card-icon")
      cubeThemeUpdate ()
   }
   else if (userData.theme == "filmes") {
      hCardIconFilmes.classList.add("active-card-icon")
      vCardIconFilmes.classList.add("active-card-icon")
      filmesThemeUpdate ()
   }
   else if (userData.theme == "artista") {
      hCardIconArtista.classList.add("active-card-icon")
      vCardIconArtista.classList.add("active-card-icon")
      artistaThemeUpdate ()
   }
   else if (userData.theme == "atleta") {
      hCardIconAtleta.classList.add("active-card-icon")
      vCardIconAtleta.classList.add("active-card-icon")
      atletaThemeUpdate ()
   }
   else if (userData.theme == "cozinheiro") {
      hCardIconCozinheiro.classList.add("active-card-icon")
      vCardIconCozinheiro.classList.add("active-card-icon")
      cozinheirohemeUpdate ()
   }
   else if (userData.theme == "detalhista") {
      hCardIconDetalhista.classList.add("active-card-icon")
      vCardIconDetalhista.classList.add("active-card-icon")
      detalhistaThemeUpdate ()
   }
   else if (userData.theme == "dorminhoco") {
      hCardIconDorminhoco.classList.add("active-card-icon")
      vCardIconDorminhoco.classList.add("active-card-icon")
      dorminhocoThemeUpdate ()
   }
   else if (userData.theme == "explorador") {
      hCardIconExplorador.classList.add("active-card-icon")
      vCardIconExplorador.classList.add("active-card-icon")
      exploradorThemeUpdate ()
   }
   else if (userData.theme == "musica") {
      hCardIconMusica.classList.add("active-card-icon")
      vCardIconMusica.classList.add("active-card-icon")
      musicaThemeUpdate ()
   }
   else if (userData.theme == "fitness") {
      hCardIconFitness.classList.add("active-card-icon")
      vCardIconFitness.classList.add("active-card-icon")
      fitnessThemeUpdate ()
   }
   else if (userData.theme == "gamer") {
      hCardIconGamer.classList.add("active-card-icon")
      vCardIconGamer.classList.add("active-card-icon")
      gamerThemeUpdate ()
   }
   else if (userData.theme == "goodvibes") {
      hCardIconGoodvibes.classList.add("active-card-icon")
      vCardIconGoodvibes.classList.add("active-card-icon")
      goodvibesThemeUpdate ()
   }
   else if (userData.theme == "leitor") {
      hCardIconLeitor.classList.add("active-card-icon")
      vCardIconLeitor.classList.add("active-card-icon")
      leitorThemeUpdate ()
   }
   else if (userData.theme == "minimalista") {
      hCardIconMinimalista.classList.add("active-card-icon")
      vCardIconMinimalista.classList.add("active-card-icon")
      minimalistaThemeUpdate ()
   }
   else if (userData.theme == "musico") {
      hCardIconMusico.classList.add("active-card-icon")
      vCardIconMusico.classList.add("active-card-icon")
      musicoThemeUpdate ()
   }
   else if (userData.theme == "series") {
      hCardIconSeries.classList.add("active-card-icon")
      vCardIconSeries.classList.add("active-card-icon")
      seriesThemeUpdate ()
   }
   else if (userData.theme == "preguicoso") {
      hCardIconPreguicoso.classList.add("active-card-icon")
      vCardIconPreguicoso.classList.add("active-card-icon")
      preguicosoThemeUpdate ()
   }
   else if (userData.theme == "saudavel") {
      hCardIconSaudavel.classList.add("active-card-icon")
      vCardIconSaudavel.classList.add("active-card-icon")
      saudavelThemeUpdate ()
   }
   else if (userData.theme == "cafe") {
      hCardIconCafe.classList.add("active-card-icon")
      vCardIconCafe.classList.add("active-card-icon")
      cafeThemeUpdate ()
   }
}

function cubeThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "..."
      hCardTheme.textContent = "..."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "..."
      hCardTheme.textContent = "..."
   }
}

function filmesThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "ID do Aficionado em Filmes"
      hCardTheme.textContent = "ID do Aficionado em Filmes"
      oficialText.textContent = "Agora você é oficialmente um Aficionado em Filmes."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "ID da Aficionada em Filmes"
      hCardTheme.textContent = "ID da Aficionada em Filmes"
      oficialText.textContent = "Agora você é oficialmente uma Aficionada em Filmes."
   }
}

function artistaThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Artista"
      hCardTheme.textContent = "Carteirinha do Artista"
      oficialText.textContent = "Agora você é oficialmente um Artista."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Artista"
      hCardTheme.textContent = "Carteirinha da Artista"
      oficialText.textContent = "Agora você é oficialmente uma Artista."
   }
}

function atletaThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Atleta"
      hCardTheme.textContent = "Carteirinha do Atleta"
      oficialText.textContent = "Agora você é oficialmente um Atleta."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Atleta"
      hCardTheme.textContent = "Carteirinha da Atleta"
      oficialText.textContent = "Agora você é oficialmente uma Atleta."
   }
}

function cozinheirohemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Cozinheiro"
      hCardTheme.textContent = "Carteirinha do Cozinheiro"
      oficialText.textContent = "Agora você é oficialmente um Cozinheiro."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Cozinheira"
      hCardTheme.textContent = "Carteirinha da Cozinheira"
      oficialText.textContent = "Agora você é oficialmente uma Cozinheira."
   }
}

function detalhistaThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Detalhista"
      hCardTheme.textContent = "Carteirinha do Detalhista"
      oficialText.textContent = "Agora você é oficialmente Detalhista."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Detalhista"
      hCardTheme.textContent = "Carteirinha da Detalhista"
      oficialText.textContent = "Agora você é oficialmente Detalhista."
   }
}

function dorminhocoThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Dorminhoco"
      hCardTheme.textContent = "Carteirinha do Dorminhoco"
      oficialText.textContent = "Agora você é oficialmente um Dorminhoco."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Dorminhoca"
      hCardTheme.textContent = "Carteirinha da Dorminhoca"
      oficialText.textContent = "Agora você é oficialmente uma Dorminhoca."
   }
}

function exploradorThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Explorador"
      hCardTheme.textContent = "Carteirinha do Explorador"
      oficialText.textContent = "Agora você é oficialmente um Explorador."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Exploradora"
      hCardTheme.textContent = "Carteirinha da Exploradora"
      oficialText.textContent = "Agora você é oficialmente uma Exploradora."
   }
}

function musicaThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "ID do Fanático por Música"
      hCardTheme.textContent = "ID do Fanático por Música"
      oficialText.textContent = "Agora você é oficialmente um Fanático por Música."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "ID da Fanática por Música"
      hCardTheme.textContent = "ID da Fanática por Música"
      oficialText.textContent = "Agora você é oficialmente uma Fanática por Música."
   }
}

function fitnessThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Fitness"
      hCardTheme.textContent = "Carteirinha do Fitness"
      oficialText.textContent = "Agora você é oficialmente Fitness."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Fitness"
      hCardTheme.textContent = "Carteirinha da Fitness"
      oficialText.textContent = "Agora você é oficialmente Fitness."
   }
}

function gamerThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Gamer"
      hCardTheme.textContent = "Carteirinha do Gamer"
      oficialText.textContent = "Agora você é oficialmente um Gamer."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Gamer"
      hCardTheme.textContent = "Carteirinha da Gamer"
      oficialText.textContent = "Agora você é oficialmente uma Gamer."
   }
}

function goodvibesThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Good Vibes"
      hCardTheme.textContent = "Carteirinha do Good Vibes"
      oficialText.textContent = "Agora você é oficialmente Good Vibes."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Good Vibes"
      hCardTheme.textContent = "Carteirinha da Good Vibes"
      oficialText.textContent = "Agora você é oficialmente Good Vibes."
   }
}

function leitorThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Leitor"
      hCardTheme.textContent = "Carteirinha do Leitor"
      oficialText.textContent = "Agora você é oficialmente um Leitor."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Leitora"
      hCardTheme.textContent = "Carteirinha da Leitora"
      oficialText.textContent = "Agora você é oficialmente uma Leitora."
   }
}

function minimalistaThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Minimalista"
      hCardTheme.textContent = "Carteirinha do Minimalista"
      oficialText.textContent = "Agora você é oficialmente Minimalista."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Minimalista"
      hCardTheme.textContent = "Carteirinha da Minimalista"
      oficialText.textContent = "Agora você é oficialmente Minimalista."
   }
}

function musicoThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Músico"
      hCardTheme.textContent = "Carteirinha do Músico"
      oficialText.textContent = "Agora você é oficialmente um Músico."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Música"
      hCardTheme.textContent = "Carteirinha da Música"
      oficialText.textContent = "Agora você é oficialmente uma Música."
   }
}

function seriesThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "ID do Obcecado por Séries"
      hCardTheme.textContent = "ID do Obcecado por Séries"
      oficialText.textContent = "Agora você é oficialmente um Obcecado por Séries."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "ID da Obcecada por Séries"
      hCardTheme.textContent = "ID da Obcecada por Séries"
      oficialText.textContent = "Agora você é oficialmente uma Obcecada por Séries."
   }
}

function preguicosoThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Preguiçoso"
      hCardTheme.textContent = "Carteirinha do Preguiçoso"
      oficialText.textContent = "Agora você é oficialmente um Preguiçoso."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Preguiçosa"
      hCardTheme.textContent = "Carteirinha da Preguiçosa"
      oficialText.textContent = "Agora você é oficialmente uma Preguiçosa."
   }
}

function saudavelThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "Carteirinha do Saudável"
      hCardTheme.textContent = "Carteirinha do Saudável"
      oficialText.textContent = "Agora você é oficialmente Saudável."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "Carteirinha da Saudável"
      hCardTheme.textContent = "Carteirinha da Saudável"
      oficialText.textContent = "Agora você é oficialmente Saudável."
   }
}

function cafeThemeUpdate () {
   if (userData.gender == "man") {
      vCardTheme.textContent = "ID do Viciado em Café"
      hCardTheme.textContent = "ID do Viciado em Café"
      oficialText.textContent = "Agora você é oficialmente um Viciado em Café."
   }
   else if (userData.gender == "woman") {
      vCardTheme.textContent = "ID da Viciada em Café"
      hCardTheme.textContent = "ID da Viciada em Café"
      oficialText.textContent = "Agora você é oficialmente uma Viciada em Café."
   }
}

// ----- slider ----- //

firstSlideButton.addEventListener("click", function(e) {
   e.preventDefault()
   displaySecondSlide ()
   userData.slide = "second"   
   console.log(userData.slide)
})

rightControlButton.addEventListener("click", function(e){
   e.preventDefault()
   if (userData.slide == "fourth" && userData.firstColor == undefined && userData.theme == undefined) {
      sliderMessage.textContent = "Por favor, selecione um tema e uma cor para a sua ID."
   }

   else if (userData.slide == "fourth" && userData.firstColor != undefined && userData.theme == undefined) {
      sliderMessage.textContent = "Por favor, selecione um tema para a sua ID."
   }

   else if (userData.slide == "fourth" && userData.firstColor == undefined && userData.theme != undefined) {
      sliderMessage.textContent = "Por favor, selecione uma cor para a sua ID."
   }

   else if (userData.slide == "fourth" && userData.firstColor != undefined && userData.theme != undefined) {
      sliderMessage.textContent = " "
      displayfourthSlideLS2 ()
      userData.slide = "fifth"
      console.log(userData.slide)
      hideSliderButtons ()
   }
   else if (userData.slide == "third" && userData.layout == undefined) {
      sliderMessage.textContent = "Por favor, selecione um layout para a sua ID."
   }
   else if (userData.slide == "third" && userData.layout != undefined) {
      sliderMessage.textContent = " "
      displayFourthSlide ()
      userData.slide = "fourth"
      console.log(userData.slide)
   }
   else if (userData.slide == "second" && userData.validation !== "invalid" && pictureOutput.textContent !== "" && formName.value !== "" && formBirthday.value !== "" && formGender.value !== "") {
      displayThirdSlide ()
      userData.slide = "third"
      console.log(userData.slide)
   }
})

leftControlButton.addEventListener("click", function(e){
   e.preventDefault
   if (userData.slide == "second") {
      hideSliderButtons ()
      displayFirstSlide ()
      userData.slide = "first"
      console.log(userData.slide)
   }
   else if (userData.slide == "third") {
      displaySecondSlide ()
      userData.slide = "second"
      hideSliderButtons ()
      console.log(userData.slide)
   }
   else if (userData.slide == "fourth") {
      displayThirdSlide ()
      userData.slide = "third"
      console.log(userData.slide)
   }
   else if (userData.slide == "fifth") {
      displayFourthSlide()
      userData.slide = "fourth"
      console.log(userData.slide)
   }
})

function displayFirstSlide () {
   firstSlide.style.display = "flex"
   secondSlide.style.display = "none"
   thirdSlide.style.display = "none"
   fourthSlide.style.display = "none"
   fourthSlideLS1.style.display = "none"
   fourthSlideLS2.style.display = "none"
   firstPageDot.style.fill = "var(--color5)"
   secondPageDot.style.fill = "var(--color2)"
   thirdPageDot.style.fill = "var(--color2)"
   fourthPageDot.style.fill = "var(--color2)"
   fifthPageDot.style.fill = "var(--color2)"
   firstPageDot.style.border = "4px solid var(--color2)"
   secondPageDot.style.border = "0"
   thirdPageDot.style.border = "0"
   fourthPageDot.style.border = "0"
   fifthPageDot.style.border = "0"
}

function displaySecondSlide () {
   firstSlide.style.display = "none"
   secondSlide.style.display = "flex"
   thirdSlide.style.display = "none"
   fourthSlide.style.display = "none"
   fourthSlideLS1.style.display = "none"
   fourthSlideLS2.style.display = "none"
   firstPageDot.style.fill = "var(--color2)"
   secondPageDot.style.fill = "var(--color5)"
   thirdPageDot.style.fill = "var(--color2)"
   fourthPageDot.style.fill = "var(--color2)"
   fifthPageDot.style.fill = "var(--color2)"
   firstPageDot.style.border = "0"
   secondPageDot.style.border = "4px solid var(--color2)"
   thirdPageDot.style.border = "0"
   fourthPageDot.style.border = "0"
   fifthPageDot.style.border = "0"
}

function displayThirdSlide () {
   firstSlide.style.display = "none"
   secondSlide.style.display = "none"
   thirdSlide.style.display = "flex"
   fourthSlide.style.display = "none"
   fourthSlideLS1.style.display = "none"
   fourthSlideLS2.style.display = "none"
   firstPageDot.style.fill = "var(--color2)"
   secondPageDot.style.fill = "var(--color2)"
   thirdPageDot.style.fill = "var(--color5)"
   fourthPageDot.style.fill = "var(--color2)"
   fifthPageDot.style.fill = "var(--color2)"
   firstPageDot.style.border = "0"
   secondPageDot.style.border = "0"
   thirdPageDot.style.border = "4px solid var(--color2)"
   fourthPageDot.style.border = "0"
   fifthPageDot.style.border = "0"
}

function displayFourthSlide () {
   firstSlide.style.display = "none"
   secondSlide.style.display = "none"
   thirdSlide.style.display = "none"
   fourthSlide.style.display = "flex"
   fourthSlideLS1.style.display = "flex"
   fourthSlideLS2.style.display = "none"
   firstPageDot.style.fill = "var(--color2)"
   secondPageDot.style.fill = "var(--color2)"
   thirdPageDot.style.fill = "var(--color2)"
   fourthPageDot.style.fill = "var(--color5)"
   fifthPageDot.style.fill = "var(--color2)"
   firstPageDot.style.border = "0"
   secondPageDot.style.border = "0"
   thirdPageDot.style.border = "0"
   fourthPageDot.style.border = "4px solid var(--color2)"
   fifthPageDot.style.border = "0"
   fourthSlideH1.style.display = "flex"
}

function displayfourthSlideLS2() {
   firstSlide.style.display = "none"
   secondSlide.style.display = "none"
   thirdSlide.style.display = "none"
   fourthSlide.style.display = "flex"
   fourthSlideLS1.style.display = "none"
   fourthSlideLS2.style.display = "flex"
   firstPageDot.style.fill = "var(--color2)"
   secondPageDot.style.fill = "var(--color2)"
   thirdPageDot.style.fill = "var(--color2)"
   fourthPageDot.style.fill = "var(--color2)"
   fifthPageDot.style.fill = "var(--color5)"
   firstPageDot.style.border = "0"
   secondPageDot.style.border = "0"
   thirdPageDot.style.border = "0"
   fourthPageDot.style.border = "0"
   fifthPageDot.style.border = "4px solid var(--color2)"
   fourthSlideH1.style.display = "none"
}

function displaySliderButtons () {
   rightControlButton.style.visibility = "visible"
   leftControlButton.style.visibility = "visible"
}

function hideSliderButtons () {
   rightControlButton.style.visibility = "hidden"
   leftControlButton.style.visibility = "hidden"
}

// ----- download pdf function ----- //

downloadButton.addEventListener("click", function(e){
   e.preventDefault()
   if (userData.layout == "horizontal" ) {
      finalCard = hCardBackground
   }
   else if (userData.layout = "vertical") {
      finalCard = vCardBackground
   }
   function reload () {
      location.reload()
   }
   setTimeout(function(){
      var opt = {
         margin:       1,
         filename:     'id-gen.pdf',
         image:        { type: 'jpeg', quality: 0.98 },
         html2canvas:  { scale: 2 },
         jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
       };
       html2pdf().set(opt).from(finalCard).save();
   }, 2000)
   setTimeout(reload, 20000)
})