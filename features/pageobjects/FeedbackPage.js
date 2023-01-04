//Author: Nadim Mahmud
import Utils from "./utils";
const utils = new Utils()

export default class FeedbackPage {

    get feedbackNav() {
        return '#feedback strong'
    }
    get nameSelector() {
        return '#name'
    }
    get name() {
        return 'William'
    }
    get emailSelector() {
        return '#email'
    }
    get email() {
        return 'william@email.com'
    }
    get subjectSelector() {
        return '#subject'
    }
    get subject() {
        return 'test email'
    }
    get descSelector() {
        return '#comment'
    }
    get description() {
        return 'This is dummy description'
    }
    get submitBtn() {
        return '[name="submit"]'
    }
    get feedbackTitle() {
        return '#feedback-title'
    }

    async visitAndWindowSize() {
        await utils.windowMaximum()
        await utils.visit('/')
    }

    async verifyFeedbackNav() {
        await utils.waitAndClick(this.feedbackNav)
        await utils.urlContains('/feedback.html')
    }

    async verifyInputFieldVisibility() {
        await utils.waitForExist(this.nameSelector)
        await utils.waitForExist(this.emailSelector)
        await utils.waitForExist(this.subjectSelector)
        await utils.waitForExist(this.descSelector)
        await utils.waitForExist(this.submitBtn)
    }

    async verifySetAllInputField() {
        await utils.setValue(this.nameSelector, this.name)
        await utils.setValue(this.emailSelector, this.email)
        await utils.setValue(this.subjectSelector, this.subject)
        await utils.setValue(this.descSelector, this.description)
        await utils.scrollIntoView(this.submitBtn)
        await utils.click(this.submitBtn)
    }

    async verifyFeedbackTitle() {
        await utils.waitForExist(this.feedbackTitle)
        await utils.urlContains('/sendFeedback.html')
        await utils.textContains('Feedback')
    }

}