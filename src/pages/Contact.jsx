import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";






function Contact() {
    return (
        <div id="contact" className="d-flex flex-column align-items-center pt-5 pb-5 border-top occupier">
            <h2 className="text-primary mt-5 fw-bold">Contact Me</h2>
            <div className="indicator"></div>
            <div className="d-flex justify-content-center align-items-center mt-5 w-100">
                
                <form className="d-flex flex-column w-75 w-md-50 w-lg-25" name="contact" action="" method="post">
                    <input type="hidden" name="form-name" value="contact" />

                    <input className="form-control mt-3 border-4 border-md-5 border-secondary p-2 rounded " required type="text" name="name" placeholder="Full Name" />
                    <input className="form-control mt-3 border-4 border-md-5 border-secondary p-2 rounded " required type="email" name="email" placeholder="Email" />
                    <textarea className="form-control mt-3 border-4 border-md-5 border-secondary p-2 rounded " required name="message" placeholder="Message"></textarea>
                    <button className="btn btn-primary w-50 align-self-end mt-4" type="submit">Send</button>
                </form>

            </div>
        </div>
    );
}

export default Contact;