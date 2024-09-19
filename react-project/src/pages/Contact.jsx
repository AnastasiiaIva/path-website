

function Contact() {

    return (
      <>
      <link rel="stylesheet" href="css/contact.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      {/* <!--form--> */}

<form id="form">
  <div className="container">
    <div className="row row my-5">
        <div className="col-md-6 ">
            <h1 className="h1">Get in Touch with Path</h1>
                <p className="text-me">We&apos;d love to hear from you! Whether you have a question, feedback, or just want to know more about our products, we&apos;re here to help. Feel free to reach out to us using the form below, and a member of our team will get back to you as soon as possible.</p>
        </div>
            <div className="col-md-6">
                <input className="form-control mb-4" type="text" placeholder="Name" aria-label="example"/>
                <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="name@example.com"/>
                <input className="form-control mb-4" type="tel" placeholder="+34" aria-label="example"/>
                <textarea className="form-control" name="Send Message" id="send-message" rows="6"></textarea>
                <button className="cta-primary my-3 rounded-pill btn btn-outline-dark" type="submit">Send Message</button> 
            </div> 
    </div>
  </div>
</form>
      </>
  )
}

export default Contact