import fixerUpperBathroom from "../images/fixer-upper-bathroom.avif"
import fixerUpperKitchen from "../images/fixer-upper-kitchen.avif"
import fixerUpperLivingRoom from "../images/fixer-upper-living-room.avif"
import fixerUpperExterior from "../images/fixer-upper-exterior.avif"
import datedBathroom from "../images/dated-bathroom.avif"
import datedKitchen from "../images/dated-kitchen.avif"
import datedLivingRoom from "../images/dated-living-room.avif"
import datedExterior from "../images/dated-exterior.avif"
import standardBathroom from "../images/standard-bathroom.avif"
import standardKitchen from "../images/standard-kitchen.avif"
import standardLivingRoom from "../images/standard-living-room.avif"
import standardExterior from "../images/standard-exterior.avif"
import highEndBathroom from "../images/high-end-bathroom.avif"
import highEndKitchen from "../images/high-end-kitchen.avif"
import highEndLivingRoom from "../images/high-end-living-room.avif"
import highEndExterior from "../images/high-end-exterior.avif"
import luxuryBathroom from "../images/luxury-bathroom.avif"
import luxuryKitchen from "../images/luxury-kitchen.avif"
import luxuryLivingRoom from "../images/luxury-living-room.avif"
import luxuryExterior from "../images/luxury-exterior.avif"

export const poolOptions = ["In-ground", "Above-ground", "Community pool", "No pool"]

export const homeDescriptionOptions = [
	"Single-family home",
	"Townhouse or attached single-family home",
	"Apartment or Condo",
	"Mobile or manufactured home"
]

export const homeOwnerShipOptions = [
	"Yes, I own this home",
	"No, I'm an agent",
	"I'm an agent, and I own this home",
	"Other"
]

export const kitchenCounterTopOptions = [
	"Laminate / Formica",
	"Corian",
	"Stone slab",
	{ title: "Granite, quartz, marble", subtitle: "Granite, quartz, marble" },
	"Granite tile",
	"Other tile"
]

export const kitchenApplicanceDescriptions = ["Stainless steel", "Black", "White", "Mixed finishes"]

type Area = "bathroom" | "kitchen" | "living room" | "exterior"

interface Images {
	fixerUpper: any
	dated: any
	standard: any
	highEnd: any
	luxury: any
}

const images: Record<Area, Images> = {
	bathroom: {
		fixerUpper: fixerUpperBathroom,
		dated: datedBathroom,
		standard: standardBathroom,
		highEnd: highEndBathroom,
		luxury: luxuryBathroom
	},
	"living room": {
		fixerUpper: fixerUpperLivingRoom,
		dated: datedLivingRoom,
		standard: standardLivingRoom,
		highEnd: highEndLivingRoom,
		luxury: luxuryLivingRoom
	},
	exterior: {
		fixerUpper: fixerUpperExterior,
		dated: datedExterior,
		standard: standardExterior,
		highEnd: highEndExterior,
		luxury: luxuryExterior
	},
	kitchen: {
		fixerUpper: fixerUpperKitchen,
		dated: datedKitchen,
		standard: standardKitchen,
		highEnd: highEndKitchen,
		luxury: luxuryKitchen
	}
}

const getDescriptionOptions = (area: Area) => {
	const areaTitled = area.charAt(0).toUpperCase() + area.slice(1).toLowerCase()
	return [
		{
			title: "Fixer Upper",
			subtitle: `${areaTitled} needs significant repairs`,
			image: images[area].fixerUpper
		},
		{
			title: "Dated",
			subtitle: `${areaTitled} hasn't been updated recently`,
			image: images[area].dated
		},
		{
			title: "Standard",
			subtitle: `${areaTitled} is updated with common finishes`,
			image: images[area].standard
		},
		{
			title: "High End",
			subtitle: `${areaTitled} has high-quality upgrades`,
			image: images[area].highEnd
		},
		{
			title: "Luxury",
			subtitle: `${areaTitled} has elegant, top-tier finishes`,
			image: images[area].luxury
		}
	]
}

export const kitchenDescriptionOptions = getDescriptionOptions("kitchen")

export const bathroomDescriptionOptions = getDescriptionOptions("bathroom")

export const livingRoomDescriptionOptions = getDescriptionOptions("living room")

export const homeExteriorDescriptionOptions = getDescriptionOptions("exterior")

export const yesNoOptions = ["Yes", "No"]

export const NA = "NA"

export const homeCommunityTypeOptions = ["Age restricted community", "Gated community", NA]

export const extraInformationOptions = [
	"Leased or financed solar panels",
	{
		title: "Known foundation issues",
		subtitle: "Excessive cracking, uneven floors"
	},
	"Fire damage",
	{ title: "Well water", subtitle: "You maintain a well to supply water" },
	{ title: "Septic system", subtitle: "Separate from municipal sewage" },
	"Asbestos siding",
	{ title: "Horse property", subtitle: "Livestock live on property" },
	"Mobile or manufactured home",
	NA
]

export const timeToSellHomeOptions = ["ASAP", "2-4 weeks", "4-6 weeks", "6+ weeks", "Just browsing"]

export const homeBuilderOptions = [
	"M/I Homes",
	"Homes by Towne",
	"JDRE",
	"Maronda",
	"Meritage",
	"Pardee",
	"Pulte",
	"Ryan",
	"Smith Douglas",
	"Taylor Morrison",
	"Toll Brothers",
	"Touchstone",
	"Woodside",
	"Knight Homes",
	"Summit Homes",
	"Keystone",
	"Lennar",
	"Beazer Homes",
	"KB Home",
	"Mattamy",
	"Century Complete",
	"Homes By WestBay",
	"Medallion Home",
	"Providence Group",
	"Adams Homes",
	"Trilogy",
	"Graham Hart Homes",
	"Landsea",
	"Courtland",
	"Stanley Martin Homes",
	"ROC Homes",
	"Sunrise Homes",
	"Boise Hunter Homes",
	"Legend Homes",
	"Landmark Homes",
	"Highland Homes (TX)",
	"Celebration Homes",
	"Kolter Homes",
	"TRI Pointe",
	"Starlight Homes",
	"Creative Homes",
	"Kerley Family Homes",
	"Harmony",
	"Scott Communities",
	"Gallery Homes",
	"Ladera",
	"Tim Lewis Homes",
	"Artisan Built Communities",
	"Coventry Homes",
	"NSH Jones",
	"Chesmar Homes",
	"Pahlisch Homes",
	"Robbie Hale Homes",
	"Fairfield Homes",
	"Cavender Homes",
	"Legacy South",
	"Challenger Homes",
	"Ashley Homes",
	"Windsong Properties",
	"John Wieland Homes",
	"Evergreen Homes",
	"Dream Finders Homes",
	"SeaGate Homes",
	"Desert View Homes",
	"Dorn Homes",
	"Paran Homes",
	"Empire Communities",
	"McKinley Homes",
	"Hughston Homes",
	"Richfield Homes",
	"McKee Homes",
	"Mungo Homes",
	"Flint Rock Builders",
	"Drees Homes",
	"LGI",
	"Homes By Dickerson",
	"Other Builder",
	"Bill Clark Homes",
	"Level Homes",
	"The Villages of Lake Sumter",
	"Arthur Rutenberg Homes",
	"Ivory Homes",
	"Silverstone Communities",
	"Charter Homes & Neighborhoods",
	"Neal Communities",
	"Wade Jurney Homes",
	"John Mourier Construction",
	"Pacific Communities Builder",
	"Terramor",
	"Liberty Communities",
	"Davidson Homes",
	"JW Collection",
	"Ole South",
	"Trumark",
	"The Related Group",
	"Test Partner HB",
	"Eagle Construction of Virginia",
	"Southern Homes of Polk County",
	"Richmond American",
	"Anglia Homes",
	"Saussy Burbank",
	"Providence Homes",
	"Truland Homes",
	"Fischer Homes",
	"Arbor Homes",
	"Allen Edwin Homes",
	"Lombardo Homes",
	"The Olson Co.",
	"Armadillo Construction",
	"FrontDoor",
	"Meyer Ranch",
	"CBH Homes",
	"HHHunt Corp.",
	"Simmons Homes",
	"The Bozzuto Group",
	"Colina Homes",
	"StyleCraft Homes",
	"Sumeer Homes",
	"Palo Verde Homes",
	"NVHomes",
	"Granite Ridge Builders",
	"Hills Properties/Inverness Homes",
	"Mandalay Homes",
	"MJC Cos.",
	"Milestone Community Builders",
	"Rocklyn Homes",
	"Frontier Communities",
	"Main Street Homes",
	"Our Country Homes",
	"K Hovnanian",
	"Signature Homes",
	"Watt Communities",
	"American West",
	"Perry Homes",
	"Dunhill Homes",
	"Warmington Group",
	"Riverwood Homes",
	"Rausch Coleman Homes",
	"Great Southern Homes",
	"Landon Homes",
	"Devon Street Homes",
	"Impression Homes",
	"Legacy Homes of Alabama",
	"Jeff Benton Homes",
	"GL Homes",
	"Westin Homes",
	"Van Metre Cos.",
	"ICI Homes",
	"A. Sydes Construction",
	"Centerra Homes",
	"Almont Homes",
	"Fieldstone Homes",
	"Viera Builders",
	"Long Lake Limited",
	"Classic Builders",
	"Traditions of America",
	"Boulder Creek Neighborhoods",
	"Clayton Properties Group",
	"Essex Homes Southeast",
	"Regent Homes",
	"McBride & Son",
	"Elliott Homes",
	"Home Creations",
	"Shea Homes",
	"Ball Homes",
	"Stock Development",
	"Brohn Homes",
	"Berks Homes",
	"Westport Homes",
	"Robson Communities",
	"Elite Properties of America",
	"Regency Homebuilders",
	"Altura",
	"Williams Homes",
	"HistoryMaker Homes",
	"Saint Aubyn Homes",
	"Carefree Homes",
	"Flagship Homes",
	"GHO Homes",
	"Edge Homes",
	"Grand Homes",
	"SK Builders",
	"Sharp Residential",
	"Stone Martin Builders",
	"Shaddock Homes",
	"Heartland Homes",
	"Minto Communities",
	"Ideal Homes",
	"William Ryan Homes",
	"Hakes Brothers",
	"Stylecraft Builders",
	"Eastbrook Homes",
	"Royal Oaks Building Group",
	"Greenstone Homes",
	"Camden Homes",
	"Miller and Smith",
	"AV Homes",
	"H & H Homes",
	"Schell Brothers",
	"Tilson Home Corp.",
	"Rymarc Homes",
	"Crescent Homes",
	"Stoneridge Homes",
	"Robert Thomas Homes",
	"Tropicana Homes",
	"Betenbough Homes",
	"Edward Andrews Homes",
	"McArthur Homes",
	"Green Brick Partners",
	"Chesapeake Homes",
	"First Texas Homes",
	"Garrett Walker Homes",
	"Lokal Homes",
	"Payne Family Homes",
	"Castlerock Communities",
	"United Built Homes",
	"Park Square Homes",
	"Comstock Homes",
	"William Lyon Homes",
	"Wynn Construction",
	"Grayhawk Homes",
	"Windsor Homes",
	"Deerbrooke",
	"Maracay",
	"D. R. Horton",
	"Del Webb",
	"Chafin",
	"Direct Residential ",
	"David Weekley",
	"Melia Homes",
	"Bloomfield Homes",
	"CalAtlantic",
	"Ashton Woods Homes",
	"Epcon Communities",
	"Gehan Homes",
	"Brightland Homes",
	"Century Communities",
	"Goodall",
	"Dan Ryan Builders",
	"The New Home Company",
	"American Legend Homes",
	"Pacesetter Homes",
	"Trendmaker Homes",
	"Newmark Homes Houston",
	"City Ventures",
	"Centex",
	"Piedmont Residential",
	"Sitterle Homes",
	"Fulton Homes",
	"The Jones Company of Tennessee",
	"Wathen Castanos Homes",
	"Hubbell Homes",
	"MHI-McGuyer Homebuilders",
	"Oakwood Homes",
	"Braselton Homes",
	"Woodbridge Pacific Group",
	"Casa Fresca Homes",
	"Caviness & Cates Communities",
	"Riverside",
	"Rockhaven Homes",
	"Fox Ridge Homes",
	"Clarity",
	"Tim O'Brien Homes",
	"DiVosta",
	"Blandford Homes",
	"Focus Homes",
	"Niblock Homes",
	"Lillian Homes",
	"Brookfield Residential Properties",
	"Reece Homes",
	"Reliant Homes",
	"Griffin Residential",
	"CB Jeni Homes",
	"Remington Homes",
	"G.J. Gardner",
	"Trophy Signature",
	"Hartford Homes",
	"True Homes USA",
	"Abrazo Homes",
	"Stone Bridge",
	"Gray Point",
	"JMC Homes",
	"Visionary Homes",
	"Hillstone",
	"Homes By Taber",
	"Harcrest Homes",
	"New Village Homes",
	"Normandy Homes",
	"New Tradition Homes",
	"View Homes",
	"Garman Homes",
	"Beacon Homes",
	"Bella Vista",
	"KM Homes",
	"John Houston Custom Homes",
	"Brown Homes",
	"Highland Homes (FL)",
	"Eastwood Homes",
	"Pratt & Associates",
	"Bonadelle Neighborhoods",
	"Geonerco Group",
	"Hubble Homes",
	"Craftmark Group",
	"Mayberry Homes",
	"Van Daele Homes",
	"Keystone Homes",
	"Saratoga Homes",
	"New Home"
]

export const americanStates = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming"
]
