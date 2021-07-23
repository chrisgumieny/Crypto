// Default values for test
let SubButton = "Subscribe"
let SubscriptionStatus = "Unsubscribed"
let EmailSubmission = ""

test('handleEmailSignup user subscribe test', () => {
    expect(handleEmailSignup("Subscribe", "Chris@gmail.com")).toBe("Chris@gmail.com")
})

test('handleEmailSignup user unsubscribe test', () => {
    expect(handleEmailSignup("Unsubscribe", "Chris@gmail.com")).toBe("")
})

test('useEffectTwoChanges where both change', () => {
    SubButton = "Subscribe", SubscriptionStatus = "Unsubscribed", EmailSubmission = ""

    expect(useEffectTwoChanges("Unsubscribe", "Subscribed", "Chris@gmail.com")).toBe("Unsubscribe Subscribed Chris@gmail.com")
})

test('useEffectTwoChanges where one changes', () => {
    SubButton = "Subscribe", SubscriptionStatus = "Unsubscribed", EmailSubmission = ""

    expect(useEffectTwoChanges("Subscribe", "Subscribed", "Chris@gmail.com")).toBe(-1)
})

test('useEffectTwoChanges where nothing changes', () => {
    SubButton = "Subscribe", SubscriptionStatus = "Unsubscribed", EmailSubmission = ""

    expect(useEffectTwoChanges("Subscribe", "Unsubscribed", "Chris@gmail.com")).toBe(-1)
})

test('useEffectReload where subButton isnt changed', () => {
    SubButton = "Subscribe", SubscriptionStatus = "Unsubscribed", EmailSubmission = ""

    expect(useEffectOnReload("Chris@gmail.com", "Subcribed")).toBe(-1)
})

test('useEffectReload where subButton is updated to say Subscribe', () => {
    SubButton = "Subscribe", SubscriptionStatus = "Unsubscribed", EmailSubmission = ""

    expect(useEffectOnReload(EmailSubmission, SubscriptionStatus)).toBe("Subscribe")
})

test('useEffectReload where subButton is updated to say Unsubscribe', () => {
    SubButton = "Subscribe", SubscriptionStatus = "Subscribed", EmailSubmission = ""

    expect(useEffectOnReload(EmailSubmission, "Subscribed")).toBe("Unsubscribe")
})

function handleEmailSignup(e, EmailTest) {
    //e.preventDefault()
    
    // Updating values to the submitted email, new subscription status, and changing the button text
    if (e === "Subscribe") {
        SubButton = "Unsubscribe"
        SubscriptionStatus = "Subscribed"
        EmailSubmission = EmailTest
        return EmailSubmission
    }
    else {
        SubButton = "Subscribe"
        SubscriptionStatus = "Unsubscribed"
        EmailSubmission = ""
        return EmailSubmission
    }

}

// Would activate everytime both emailSubmission and subscriptionStatus change
function useEffectTwoChanges(sButton, sStatus, EmailTest) {
    if (SubButton != sButton && SubscriptionStatus != sStatus) {
        SubButton = sButton
        SubscriptionStatus = sStatus
        EmailSubmission = EmailTest

        //Code that would normally be run
        //sessionStorage.setItem('subscriptionStatus', subscriptionStatus)
        //sessionStorage.setItem('email', emailSubmission)

        return (SubButton + " " + SubscriptionStatus + " " + EmailSubmission)
    }
    else if (SubButton == sButton || SubscriptionStatus == sStatus) {
        return -1
    } 
}

// First part of the function that would activate on a page reload
function useEffectOnReload(EmailTest, sStatusTest) {

    //Code that would normally be run
    //sessionStorage.getItem('email')
    //sessionStorage.getItem('subscriptionStatus')

    if (EmailSubmission == EmailTest && SubscriptionStatus == sStatusTest) {
        if (SubscriptionStatus == "Subscribed") {
            SubButton = "Unsubscribe"
        }
        else {
            SubButton = "Subscribe"
        }
        return SubButton
    }
    else {
        return -1
    }
}