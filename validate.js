document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    window.validateForm = () => {
        let valid = true;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name) {
            alert('İsim gerekli.');
            valid = false;
        } else if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
            alert('Yanlış e-mail formatı.');
            valid = false;
        } else if (!message) {
            alert('Mesaj gerekli.');
            valid = false;
        }

        if (valid) {
            const validationModal = new bootstrap.Modal(document.getElementById('validationModal'));
            validationModal.show();
        }
    };

    new Vue({
        el: '#contactApp',
        data: {
            form: {
                name: '',
                email: '',
                message: '',
                subject: 'general',
                gender: '',
            }
        },
        methods: {
            validateWithFramework() {
                let valid = true;

                if (!this.form.name) {
                    alert('İsim gerekli.');
                    valid = false;
                } else if (!this.form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
                    alert('Yanlış e-mail formatı.');
                    valid = false;
                } else if (!this.form.message) {
                    alert('Mesaj gerekli.');
                    valid = false;
                }

                if (valid) {
                    const validationModal = new bootstrap.Modal(document.getElementById('validationModal'));
                    validationModal.show();
                }
            },
            submitForm() {
                if (this.form.name && this.form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/) && this.form.message) {
                    form.submit();
                } else {
                    alert('Lütfen formu doğru doldurunuz.');
                }
            },
            resetForm() {
                this.form.name = '';
                this.form.email = '';
                this.form.message = '';
                this.form.subject = 'general';
                this.form.gender = '';
            }
        }
    });
});
