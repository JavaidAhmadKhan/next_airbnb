import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-1 pl-12 md:pl-36 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb plus</p>
        <p>Airbnb Luxury</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessiblity</p>
        <p>This is not a real site</p>
        <p>Its is pretty awesome clone</p>
        <p>Referals accepted</p>
        <a href="http://javaid-khan-9785e.web.app/" target="_blank">
          <p className="cursor-pointer my-4">Clever Coder</p>
        </a>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">HOST</h5>

        <a href="http://javaid-khan-9785e.web.app/" target="_blank">
          <p className="cursor-pointer my-4">Clever Coder</p>
        </a>
        <p>Gulmarg</p>
        <p>Sonmarg</p>
        <p>Pahalgam plus</p>
        <p>Ladakh</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
