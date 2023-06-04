const contactUsLanguageOptions = {
    en: {
        message: {
          message1: "Please fill out this form, and we will responsed to you within 1-3 business days.",
          message2: "If you have any other inquiries and question apart from partnership requests, please feel free to ask."
        },
        form: {
          companyName: "Company name",
          website : "Website",
          country : "country",
          firstname: "First name",
          lastname : "Last name",
          jobtitle: "Job title",
          email: "E-mail",
          phone: "Phone",
          title: "Title",
          message: "Message",
        },
        agree: "I agree to be contacted by Maximo Prime about this message and I consent to the collection and use of the information I have provided above."
    },
    ch: {
      message: {
        message1: "请填写此表格，我们将在1-3个工作日内回复您。",
        message2: "如果您有其他问题和咨询，除了合作伙伴请求，请随时提问。"
      },
      form: {
        companyName: "公司名称",
        website: "网站",
        country: "国家",
        firstname: "名字",
        lastname: "姓氏",
        jobtitle: "职位",
        email: "电子邮件",
        phone: "电话",
        title: "标题",
        message: "留言",
      },
      agree: "我同意Maximo Prime与我联系，我同意收集和使用我提供的信息。"
    },
    sp: {
      message: {
        message1: "Por favor, complete este formulario y le responderemos en un plazo de 1 a 3 días hábiles.",
        message2: "Si tiene alguna otra consulta o pregunta aparte de las solicitudes de asociación, no dude en preguntar."
      },
      form: {
        companyName: "Nombre de la empresa",
        website: "Sitio web",
        country: "País",
        firstname: "Nombre",
        lastname: "Apellido",
        jobtitle: "Cargo",
        email: "Correo electrónico",
        phone: "Teléfono",
        title: "Título",
        message: "Mensaje",
      },
      agree: "Acepto que Maximo Prime se comunique conmigo sobre este mensaje y consiento la recopilación y uso de la información que he proporcionado anteriormente."
    },
    fr: {
      message: {
        message1: "Veuillez remplir ce formulaire et nous vous répondrons dans un délai de 1 à 3 jours ouvrables.",
        message2: "Si vous avez d'autres questions ou demandes en dehors des demandes de partenariat, n'hésitez pas à les poser."
      },
      form: {
        companyName: "Nom de l'entreprise",
        website: "Site web",
        country: "Pays",
        firstname: "Prénom",
        lastname: "Nom de famille",
        jobtitle: "Fonction",
        email: "E-mail",
        phone: "Téléphone",
        title: "Titre",
        message: "Message",
      },
      agree: "J'accepte d'être contacté par Maximo Prime concernant ce message et j'accepte la collecte et l'utilisation des informations que j'ai fournies ci-dessus."
    },
    ge:{
      message: {
        message1: "Bitte füllen Sie dieses Formular aus, und wir werden Ihnen innerhalb von 1-3 Werktagen antworten.",
        message2: "Wenn Sie weitere Fragen oder Anfragen haben, die nicht mit Partnerschaftsanfragen zusammenhängen, können Sie diese gerne stellen."
      },
      form: {
        companyName: "Firmenname",
        website: "Website",
        country: "Land",
        firstname: "Vorname",
        lastname: "Nachname",
        jobtitle: "Berufsbezeichnung",
        email: "E-Mail",
        phone: "Telefon",
        title: "Titel",
        message: "Nachricht",
      },
      agree: "Ich stimme zu, dass Maximo Prime mich bezüglich dieser Nachricht kontaktiert und ich willige in die Sammlung und Verwendung der von mir oben angegebenen Informationen ein."
    }
    // Other language options...
  };
  
  // Set default language to English
  let currentLanguage = 'en';
  
  // Listen for click events on language links
  document.querySelectorAll('.topnav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      // Prevent default navigation
      event.preventDefault();
  
      // Update current language
      currentLanguage = link.id.slice(5);
  
      // Update text on website to new language
      updateText();
    });
  });
  
  // Function to update the text on the website to the current language
  function updateText() {
    const translations = languageOptions[currentLanguage];
  
    // document.querySelector('.welcome').textContent = translations.welcome;
    // document.querySelector('.about').textContent = translations.about;
    // document.querySelector('.contact').textContent = translations.contact;
  }
  
  // Initialize the text on the website to the default language
  updateText();
  