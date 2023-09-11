const App = {
    $: {
        email: document.querySelector('[data-id="email"]'),
        form: document.querySelector('[data-id="form"]'),
    },

    init() {
        this.$.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.validation();
        });
    },

    validEmail(email) {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    },

    setError(element, msg) {
        const inputParent = element.parentElement;
        const errorDisplay = document.querySelector('[data-id="error-msg"]');
        const icon = document.querySelector('[data-id="hidden"]');

        errorDisplay.innerHTML = msg;
        inputParent.classList.add("error");
        inputParent.classList.remove("success");
        icon.style.display = "inline-block";
    },

    setSuccess(element) {
        const inputParent = element.parentElement;
        const errorDisplay = document.querySelector("[data-id='error-msg']");
        const icon = document.querySelector('[data-id="hidden"]');

        errorDisplay.innerHTML = '';
        inputParent.classList.add("success");
        inputParent.classList.remove("error");
        icon.style.display = "none";
        
    },

    validation() {
        const emailVal = this.$.email.value.trim();

        if (emailVal === '') 
            this.setError(this.$.email, "Please provide a valid email");
         else if (!this.validEmail(emailVal)) 
            this.setError(this.$.email, "Please enter a valid email address");
         else 
            this.setSuccess(this.$.email)
        
    }
};

window.addEventListener("load", App.init.bind(App));
