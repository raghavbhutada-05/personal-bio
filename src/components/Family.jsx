import { useReveal } from '../utils/useReveal.js'

export default function Family() {
  useReveal()
  return (
    <div>
      <h2 className="section-title text-center mb-4">Family Details</h2>
      <div className="family-grid">
        <div className="soft-card blossom-border p-3 reveal">
          <h6 className="yatra mb-2">Ancestry</h6>
          <ul className="list-unstyled family-list mb-0">
            <li><span className="k">Sakha</span><span className="v">Bhutada & Jaju</span></li>
            <li><span className="k">Gotra</span><span className="v">IDK</span></li>
            <li><span className="k">Grand Father</span><span className="v">Bhutada Hanumandas Harigovinddas 7588237435</span></li>
            <li><span className="k">Grand Mother</span><span className="v">Late. Pushpabai Bhutada</span></li>
          </ul>
          <hr/>
          <h6 className="yatra mb-2">Parents</h6>
          <ul className="list-unstyled family-list mb-0">
            <li><span className="k">Father</span><span className="v">Bhutada Murlidhar Hanumandas 9763131349</span></li>
            <li><span className="k">Occupation</span><span className="v">Business</span></li>
            <li><span className="k">Mother</span><span className="v">Bhutada Sangita Murlidhar (Housewife) 9405377149</span></li>
          </ul>
          <hr/>
          <h6 className="yatra mb-2">Uncles</h6>
          <ul className="list-unstyled family-list mb-0">
            <li>Bhutada Nandkishor Hanumandas (Business, Ahmedpur) 9423350974</li>
            <li>Bhutada Ghanshyam Hanumandas (Business, Ahmedpur) 9850614918</li>
            <li>Bhutada Radheshyam Hanumandas (Business, Nanded) 9422170658</li>
          </ul>
          <hr/>
          <h6 className="yatra mb-2">Siblings</h6>
          <ul className="list-unstyled family-list mb-0">
            <li>Bhutada MayurDhwaj Murlidhar (Business)</li>
            <li>Bhutada Krishna Nandkishor (Software Engineer)</li>
            <li>Bhutada Kanhya Ghanshyam (Business)</li>
            <li>Bhutada Pavan Ghanshyam (B.Com)</li>
          </ul>
          <hr/>
          <h6 className="yatra mb-2">Maternal</h6>
          <ul className="list-unstyled family-list mb-0">
            <li><span className="k">Nanihal</span><span className="v">Shri. Ratanlalji Shrinivasji Jaju, Pune 9702057777</span></li>
            <li><span className="k">Maternal Uncle</span><span className="v">Shri. Shrinivas Ratanlalji Jaju</span></li>
          </ul>
          <h6 className="yatra mb-2">Maternal Aunts</h6>
          <ul className="list-unstyled family-list mb-0">
            <li>Sau. Sunanda Dhananjayji Lahoti, Shambhaji Nagar</li>
            <li>Sau. Anuradha JayPrakashji Sarda, Bangalore</li>
            <li>Sau. Archana Murlimohanji Rathi, Nanded</li>
          </ul>
          <hr/>
          <h6 className="yatra mb-2">Family Firms</h6>
          <ul className="list-unstyled family-list mb-0">
            <li>CONVOLT SYSTEMS, Shivajinagar, Nanded</li>
            <li>HP World, Parbhani</li>
            <li>Mayur General Stores, Ahmedpur</li>
            <li>Pushpak Agencies, Ahmedpur</li>
          </ul>
        </div>
      </div>
      <div className="garland-divider my-4"></div>
    </div>
  )
}


