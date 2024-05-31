import React from "react"
import { ReactComponent as Logo } from "../../assets/icons/logo.svg"
import { Link } from "react-router-dom"
import CONSTANTS from "../../utils/Constant"
// import { useAuth } from "../../hooks";

const { routes } = CONSTANTS

const Footer = () => {
	// const { userInfo } = useAuth();
	return (
		<div className="bg-blue pt-[93px] px-5 pb-[25px] xl:px-[50px] xl:pt-[56px] xl:pb-[19px]">
			<div className="max-w-[1200px] 630:mx-auto">
				<div className="flex justify-between">
					<div className="flex space-y-10 flex-col">
						<Link to={routes.home}>
							<Logo className="mt-3" />
						</Link>
					</div>
					<ul className="flex space-y-[18px] flex-col w-[177.714px] 630:w-auto">
						<li>
							<Link to={routes.sellYourHouse}>
								<span className="text-white text-base leading-6">
									Sell Us your Home
								</span>
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
								<span className="text-white text-base leading-6">
									Creative Finance
								</span>
							</Link>
						</li>
						<li>
							<Link to="https://forms.gle/Jbn48VbwToBHMm1k7" target="_blank">
								<span className="text-white text-base leading-6">
									Deal Analyzer
								</span>
							</Link>
						</li>

						<li>
							<Link to="/rtow-lease-form" target="_blank">
								<span className="text-white text-base leading-6">
									Rtow W/Lease form
								</span>
							</Link>
						</li>
						<li>
							<Link to={routes.rtoFormSubmissions}>
								<div>
									<span className="text-white text-base leading-6">
										RTO W/Lease Submission
									</span>
								</div>
							</Link>
						</li>
						{/* <li><span className='text-white text-base leading-6'>Property Preference</span></li> */}
					</ul>
					<ul className="hidden 630:flex space-y-[18px] flex-col">
						<Link to={routes.privacy}>
							<li>
								<span className="text-white text-base leading-6">
									{" "}
									Privacy Policy
								</span>
							</li>
						</Link>
						<Link to={routes.terms}>
							<li>
								<span className="text-white text-base leading-6">
									{" "}
									Terms of Service
								</span>
							</li>
						</Link>
						<Link to={routes.contact}>
							<li>
								<span className="text-white text-base leading-6"> Contact Us</span>
							</li>
						</Link>
					</ul>
				</div>
				<div className="flex items-center justify-between mt-[135px] 630:hidden">
					<Logo className="mt-3 opacity-0 pointer-events-none" />
					<ul className="flex space-y-[18px] flex-col w-[177.714px]">
						<Link to={routes.privacy}>
							<li>
								<span className="text-white text-base leading-6">
									{" "}
									Privacy Policy
								</span>
							</li>
						</Link>
						<Link to={routes.terms}>
							<li>
								<span className="text-white text-base leading-6">
									{" "}
									Terms of Service
								</span>
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
					<p className="text-white text-sm leading-4 text-center">
						2024 IbuyEz.com. | All Rights Reserved.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
