import React, { useState, useEffect, useMemo } from "react"
import clsx from "classnames"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger-black.svg"
import { ReactComponent as Logo } from "../../assets/icons/logo1.svg"
import { ReactComponent as LargeLogo } from "../../assets/icons/logo1.svg"
import { ReactComponent as Exit } from "../../assets/icons/exit-black.svg"
import Button from "../general/Button"
// import { changeBodyScrollStatusTo, removeFromLS, scrollToFaq } from 'modules/common/utils/functions'
import { useWindowSize } from "../../hooks"
import CONSTANTS from "../../utils/Constant"
// import { removeToken } from 'api'

const { routes } = CONSTANTS

export const getTopNavLinks = (navigate) => [
	{ text: "How We Buy", route: routes.howWeBuy },
	{ text: "About", route: routes.about },
	{ text: "Contact", route: routes.contact },
	// { text: "Browse Homes", route: routes.homes }
]

export const TopNavMenu = ({ isVisible, onClose, goToLogin }) => {
	const navigate = useNavigate()

	const topNavMenuLinks = useMemo(() => getTopNavLinks(navigate), [navigate])

	// useEffect(() => {
	//     changeBodyScrollStatusTo(!isVisible)
	// }, [isVisible])

	return (
		<div
			className={clsx(
				"fixed top-0 left-0 h-screen z-[40]  flex flex-col space-y-[68px] pb-[100px] overflow-y-auto w-screen bg-blue text-black transition-all",
				{ " !opacity-0": !isVisible }
			)}>
			<Exit className="top-[34px] right-[30px]  absolute" onClick={() => onClose()} />
			<div className="mt-[17vh] flex items-center justify-center">
				<Link to={routes.home}>
					<LargeLogo />
				</Link>
			</div>
			<ul className="flex flex-col space-y-[50px] items-center">
				{topNavMenuLinks.map((link, index) => (
					<li key={index} onClick={onClose}>
						{link.handler ? (
							<button
								onClick={link.handler}
								className="text-base leading-[18px] text-black font-semibold text-center">
								{link.text}
							</button>
						) : link.route ? (
							<NavLink
								to={link.route}
								className={({ isActive }) =>
									clsx(
										"text-base leading-[18px] text-black font-semibold text-center",
										{
											"!text-yellow": isActive
										}
									)
								}>
								{link.text}
							</NavLink>
						) : (
							<span className="text-base leading-[18px] text-black font-semibold text-center">
								{link.text}
							</span>
						)}
					</li>
				))}
			</ul>
			{/* {goToLogin && (
				<div className="flex items-center justify-center">
					<Button text={"Sign In"} onClick={goToLogin} />
				</div>
			)} */}
		</div>
	)
}

const TopNav = () => {
	const { width } = useWindowSize()
	const [isScrolled, setIsScrolled] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	const navigate = useNavigate()
	// const { userInfo, authInfo, setAuthInfo, setUserInfo } = useAuth()

	const topNavMenuLinks = useMemo(() => getTopNavLinks(navigate), [navigate])

	const goToLogin = () => {
		navigate(routes.login)
	}

	const handleScroll = React.useCallback(() => {
		const scrollPosition = window.scrollY

		const scrollThreshold = width >= 1090 ? 117 : 20

		setIsScrolled(scrollPosition > scrollThreshold)
	}, [width])

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [handleScroll])

	return (
		<div>
			<div
				className={clsx(
					"fixed top-[0] lg:top-[0px] flex items-center justify-between bg-white h-[110.3px] lg:h-[120px] w-full px-5 lg:pl-[60px] lg:pr-[40px] z-[40] transition-all duration-300  ml-[50%] translate-x-[-50%]  max-w-[1420px] xl:max-w-[100%] ",
					{
						" bg-white text-black ": isScrolled
					}
				)}>
				<Link to={routes.home}>
					<Logo />
				</Link>
				{width <= 1090 ? (
					<Hamburger onClick={() => setShowMenu(true)} className="cursor-pointer" />
				) : (
					<>
						<ul className="flex items-center space-x-[50px] justify-center h-full">
							{topNavMenuLinks.map((link, index) => (
								<li key={index} className="flex items-center justify-center h-full">
									{link.handler ? (
										<button
											onClick={link.handler}
											className="text-base leading-[18px] text-black font-semibold flex items-center justify-center h-full">
											{link.text}
										</button>
									) : link.route ? (
										<NavLink
											to={link.route}
											className={({ isActive }) =>
												clsx(
													"text-base leading-[18px] text-black font-semibold flex items-center justify-center h-full",
													{
														"!text-blue": isActive
													}
												)
											}>
											{link.text}
										</NavLink>
									) : (
										<span className="text-base leading-[18px] text-black font-semibold flex items-center justify-center h-full">
											{link.text}
										</span>
									)}
								</li>
							))}
						</ul>
						<div className="flex space-x-1">

						<a href="#cash-offer">
						   <Button
								text={"Get cash offer"}	
							/>
						</a>
							

							{/* <Button classNames={clsx({ "bg-[red]": authInfo || userInfo })} textClassNames={clsx({ "text-black": authInfo || userInfo })} text={(userInfo || authInfo) ? "Logout" : "Sign In"} onClick={onButtonClick}
                            /> */}
						</div>
					</>
				)}
			</div>
			{width <= 1090 && (
				<TopNavMenu
					isVisible={showMenu}
					goToLogin={goToLogin}
					onClose={() => setShowMenu(false)}
				/>
			)}
		</div>
	)
}

export default TopNav
