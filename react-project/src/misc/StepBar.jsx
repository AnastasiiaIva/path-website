import '../css/main2.css'

function StepBar() {

    return (
      <>

{/* <!--Step bar--> */}
  <div className="step-container">
    {/* <!-- Step bar visual --> */}
    <div className="step-bar">
      <div className="step" id="step1"><i className="fa-solid fa-check"></i></div>
      <div className="step" id="step2">D2</div>
      <div className="step" id="step3">D3</div>
      <div className="step" id="step4">D4</div>
      <div className="step" id="step5">D5</div>
      <div className="step" id="step6">D6</div>
      <div className="step" id="step7">D7</div>
    </div>
  </div>

  </>
  )
}

export default StepBar