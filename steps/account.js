import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://account.mail.ru/login?page=https%3A%2F%2Faccount.mail.ru%2F%3F&');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.next();
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://e.mail.ru/inbox/?afterReload=1');
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
