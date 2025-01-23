const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-40">
      <nav>
        <h6 className="footer-title font-bold text-black text-2xl">Services</h6>
        <a className="link link-hover text-base">Branding</a>
        <a className="link link-hover text-base">Design</a>
        <a className="link link-hover text-base">Marketing</a>
        <a className="link link-hover text-base">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-black text-2xl">Company</h6>
        <a className="link link-hover text-base">About us</a>
        <a className="link link-hover text-base">Contact</a>
        <a className="link link-hover text-base">Jobs</a>
        <a className="link link-hover text-base">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-black text-2xl">Legal</h6>
        <a className="link link-hover text-base">Terms of use</a>
        <a className="link link-hover text-base">Privacy policy</a>
        <a className="link link-hover text-base">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title font-bold text-black text-2xl">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
