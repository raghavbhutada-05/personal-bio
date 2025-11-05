import { useReveal } from '../utils/useReveal.js'

export default function Contact() {
  const ref = useReveal()
  return (
    <div className="reveal" ref={ref}>
      <h2 className="section-title text-center">Contact</h2>
      <div className="row justify-content-center mt-3">
        <div className="col-lg-8">
          <div className="soft-card blossom-border p-3">
            <div className="row g-3">
              <div className="col-md-4"><div className="contact-line"><span>Phone:</span> +91-98765-43210</div></div>
              <div className="col-md-4"><div className="contact-line"><span>Email:</span> raghav@example.com</div></div>
              <div className="col-md-4"><div className="contact-line"><span>Address:</span> Pune, Maharashtra</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


