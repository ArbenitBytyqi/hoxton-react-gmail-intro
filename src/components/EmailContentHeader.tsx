import EmailInfo from "./EmailInfo";
import EmailActionIcons from "./EmailActionIcons";
import DateInfo from "./DateInfo";

function EmailContentHeader() {
    return (

        <header className="email-content--header">
            <div className="avatar"></div>

            <EmailInfo />

            <DateInfo />

            <EmailActionIcons />

        </header>

    )
}

export default EmailContentHeader