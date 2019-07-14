import award from '../images/award.jpg'
import babyshower from '../images/babyshower.jpg'
import baptism from '../images/baptism.jpg'
import birthday from '../images/birthday.jpg'
import campaign from '../images/campaign.jpg'
import fundraiser from '../images/fundraiser.png'
import graduation from '../images/graduation.png'
import launch from '../images/launch.png'
import seminar from '../images/seminar.png'
import wedding from '../images/wedding.png'

const eventCategories = [
	{id:"award", label:"Award ceremonies", alternative:"Award ceremony", imageUrl:award},
	{id:"babyshower", label:"Baby showers", alternative:"Baby shower", imageUrl:babyshower},
	{id:"baptism", label:"Baptism", alternative:"Baptism", imageUrl:baptism},
	{id:"birthday", label:"Birthday parties", alternative:"Birthday party", imageUrl:birthday},
	{id:"campaign", label:"Campaigns", alternative:"Campaign", imageUrl:campaign},
	{id:"fundraiser", label:"Fundraisers", alternative:"Fundraiser", imageUrl:fundraiser},
	{id:"graduation", label:"Graduation ceremonies", alternative:"Graduation", imageUrl:graduation},
	{id:"launch", label:"Launch ceremonies", alternative:"Launch ceremony", imageUrl:launch},
	{id:"seminar", label:"Seminars", alternative:"Seminar", imageUrl:seminar},
	{id:"wedding", label:"Weddings", alternative:"Wedding", imageUrl:wedding}
]

export default eventCategories