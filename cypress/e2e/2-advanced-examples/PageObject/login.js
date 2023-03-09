class Login {
    btnLogin(){
        return cy.get('a[href="https://unsplash.com/login"]');
    }

    email(){
        return cy.get('input[id="user_email"]');
    }

    password(){
        return cy.get('input[id="user_password"]');
    }
    clickBtnLogin(){
        return cy.get('input[class="btn btn-default btn-block-level"]');
    }
}

export default Login;