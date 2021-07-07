import Input from "../components/Input"
import TextArea from "../components/TextArea";
import Navbar from "../containers/Navbar";
import Footer from '../containers/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="p-4 md:p-20">
                <div className="md:w-7/12 text-purple">
                    <section className="">
                        <h1 className="font-thin text-2xl md:text-6xl">Hi there! We've been expecting you.</h1>
                    </section>
                    <p className="mt-4">Ready to make a project with an awesome team?</p>
                </div>

                <div className="md:w-7/12 mt-4">                  
                    <form onSubmit={event => event.preventDefault()}>
                        <Input type="text" placeholder="Your name" />
                        <Input type="text" placeholder="Your email address" />
                        <TextArea placeholder="Tell us about your project" style={{'min-height': '500px'}}/>
                        <button type="submit" className="text-purple mt-4 p-4 shadow-sm hover:shadow-md focus:outline-none">
                            Send Email
                        </button>
                    </form>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Contact;
