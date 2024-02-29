describe('Тестирование авторизации', function () {

     it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');


        })

      it('Проверка восстановления пароля', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click(); 
      cy.get('#mailForgot').type('german@dolnikov.ru');
      cy.get('#restoreEmailButton').click(); 
      cy.get('#messageHeader').should('be.visible');
      cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');


        })


      it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastu12dio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');


        })

      it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('ge12rman@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');


        })


        it('Проверка валидации полей', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('germandolnikov.ru'); //ввели без @
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

        it('Проверка ввода логига со строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); 
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

      





})