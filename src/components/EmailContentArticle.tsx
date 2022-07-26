import EmailActions from "./EmailActions";
import EmailBody from "./EmailBody";
import EmailContentHeader from "./EmailContentHeader";
import Title from "./Title";

function EmailContentArticle() {
    return (

        <article className="email-content">

            <Title />

            <EmailContentHeader />

            <EmailBody />

            <EmailActions />

        </article>

    )
}

export default EmailContentArticle