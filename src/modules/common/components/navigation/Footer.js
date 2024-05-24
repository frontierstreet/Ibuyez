import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import CONSTANTS from "../../utils/Constant";
// import { useAuth } from "../../hooks";

const { routes } = CONSTANTS;

const Footer = () => {
	// const { userInfo } = useAuth();
	return (
		<div className="bg-blue pt-[93px] px-5 pb-[25px] xl:px-[50px] xl:pt-[56px] xl:pb-[19px]">
			<div className="max-w-[1200px] xl:mx-auto">
				<div className="flex flex-col md:flex-row justify-between">
					<div className="flex space-y-10 flex-col">
						<Link to={routes.home}>
							<Logo className="mt-3" />
						</Link>
					</div>
					<ul className="flex space-y-[18px] flex-col w-[177.714px] xl:w-auto">
						<li>
							<Link to={routes.sellYourHouse}>
								<span className="text-white text-base leading-6">Sell Us your Home</span>
							</Link>
						</li>
						<li>
							<Link to={routes.spyForUs}>
								<span className="text-white text-base leading-6">Spy for Us</span>
							</Link>
						</li>

						<li>
							<Link to={routes.propertiesList}>
								<span className="text-white text-base leading-6">PropertyList</span>
							</Link>
						</li>
						<li>
							<Link to={routes.blog}>
								<span className="text-white text-base leading-6">Blog</span>
							</Link>
						</li>
						<li>
							<Link to="https://forms.gle/KuBVH2GwpX3UMZ389" target="_blank">
								<span className="text-white text-base leading-6">Creative Finance</span>
							</Link>
						</li>
						<li>
							<Link to="https://forms.gle/Jbn48VbwToBHMm1k7" target="_blank">
								<span className="text-white text-base leading-6">Deal Analyzer</span>
							</Link>
						</li>
						<li>
							<Link
								to="https://docs.google.com/forms/d/e/1FAIpQLSdTCSdPhsOqazbQAzMdoUFcYmzkQosuK373Hck-6MJ2tuIHdw/viewform"
								target="_blank"
							>
								<span className="text-white text-base leading-6">Purchase Back</span>
							</Link>
						</li>
						<li>
							<Link to="/rtow-lease-form" target="_blank">
								<span className="text-white text-base leading-6">Rtow Lease form</span>
							</Link>
						</li>
						{/* <li><span className='text-white text-base leading-6'>Property Preference</span></li> */}
					</ul>
					<ul className="hidden xl:flex space-y-[18px] flex-col">
						<Link to={routes.privacy}>
							<li>
								<span className="text-white text-base leading-6"> Privacy Policy</span>
							</li>
						</Link>
						<Link to={routes.terms}>
							<li>
								<span className="text-white text-base leading-6"> Terms of Service</span>
							</li>
						</Link>
						<Link to={routes.contact}>
							<li>
								<span className="text-white text-base leading-6"> Contact Us</span>
							</li>
						</Link>
					</ul>
				</div>
				<div className="flex items-center justify-between mt-[135px] xl:hidden">
					<Logo className="mt-3 opacity-0 pointer-events-none" />
					<ul className="flex space-y-[18px] flex-col w-[177.714px]">
						<Link to={routes.privacy}>
							<li>
								<span className="text-white text-base leading-6"> Privacy Policy</span>
							</li>
						</Link>
						<Link to={routes.terms}>
							<li>
								<span className="text-white text-base leading-6"> Terms of Service</span>
							</li>
						</Link>
						<Link to={routes.contact}>
							<li>
								<span className="text-white text-base leading-6"> Contact Us</span>
							</li>
						</Link>
					</ul>
				</div>
				<div className="mt-[75px] flex items-center justify-center">
					<p className="text-white font-normal text-sm leading-4 text-center">
						2024 IbuyEZ.com. | All Rights Reserved.
					</p>
				</div>
			</div>
			
		</div>
	);
};

export default Footer;
