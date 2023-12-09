/// <reference types = "cypress" />
import { ForgotPassword } from "../../cypress/pages/Forgot-password.page";
import { RegisterPage } from "../../cypress/pages/Register.page";
import { LoginPage } from "../../cypress/pages/Login.page";
describe("Forgot password page tests with PageObject", () => {
  const forgotPassword = new ForgotPassword();
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();

  beforeEach(() => forgotPassword.forgotPasswordPageOpen());

  it("Improper email validation (negative test)", () => {
    forgotPassword.emailInput.type("invalid email");
    forgotPassword.title.click();
    forgotPassword.emailError.should(
      "contain",
      "Email should be the real one!"
    );
  });
  it("Register button check", () => {
    forgotPassword.registerButton.click();
    registerPage.title.should("contain.text", "Register");
  });
  it("Back to Login button check", () => {
    forgotPassword.backToLoginButton.click();
    loginPage.title.should("contain.text", "Login");
  });
});
