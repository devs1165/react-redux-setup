import Layout from './../Layout';
import Home from './../Home';

// import AuthIndex from './../auth/Index/Index';
// import Login from './../auth/Login/index';
// import SignUp from './../auth/SignUp/SignUp';
// import Dashboard from './../dashboard/Index/index';
// import ProfileSetting from './../dashboard/ProfileSettings/index';
// import Forgotpass from './../auth/forgotpass/ForgotEmail/ForgotEmail'
// import PassResetSuccess from '../auth/forgotpass/passResetSuccess/PassResetSuccess';
// import SignUpSuccess from '../auth/SignUp/signUpSuccess/signUpSuccess';
// import Bulletin from './../dashboard/Bulletin/Bulletin';
// import GivingUser from './../dashboard/giving/GivingsUser/Givingsuser'
// import GivingChatUser from './../dashboard/giving/GivingUserChat/Givinguserchat'
// // import GivingChatUser from './../dashboard/giving/givingOfferingDetails/GivingOfferingDetails'
// import GivingPaymentUser from './../dashboard/giving/Payment/Payment'
// import JoinChurch from './../joinchurchPage/joinChurch/JoinChurch'
// import ChoosePlan from './../joinchurchPage/chooseplan/ChoosePlan';
// import EnrollChurch from './../joinchurchPage/chuchpricingCopy/ChurchPricingCopy'
// import ChurchPayment from './../joinchurchPage/choosepayment/ChoosePayment'
// import ChurchSetting from './../../components/dashboard/ChurchProfile/index'
// import SearchUser from './../../components/dashboard/search/searchUser/SearchUser'
// import SearchUserProfile from './../dashboard/search/searchuserProfile/SearchUserProfile';
// import ChurchProfile from "./../dashboard/search/searchChurchProfile/index";
// import PaymentSuccess from '../master/PaymentSuccess';
// import GivingMember from './../dashboard/giving/givingMembers/GivingMembers'
// import Prayer from './../dashboard/Journal/prayer/Prayer'
// import Bible from './../dashboard/Journal/bible/Bible'
// import Member from './../dashboard/member/Member'
// import Notify from './../dashboard/notification/Notify'
// import NewPrayerRequest from './../dashboard/Journal/journalAdmin/newPrayerRequest/NewPrayerRequest'
// import ApprovedPrayer from './../dashboard/Journal/journalAdmin/approvedPrayer/ApprovedPrayer'
// import GivingUserForm from './../../components/dashboard/giving/givingOffering/GivingOffering'
// import ChurchRegistration from './../../components/joinchurchPage/churchregistration/ChurchRegistration'
// import AdminInvite from './../dashboard/AdminInvite/Admin';
// {process.env.PUBLIC_URL}
const Routes = [
  	{
		path : "/",
		exact : false,
		component : Layout,
		routes : [
			// {
			// 	path : `/`,
			// 	exact : true,
			// 	redirectFrom : `/`,
			// 	redirectTo : `/Auth`
			// },
			{
                path: "/test",
                exact: true,
                component: Home
            },
		// 	{
		// 		path : `/auth`,
		// 		exact : false,
		// 		component : AuthIndex,
		// 		routes : [
		// 			{
		// 				path : `/auth`,
		// 				exact : true,
		// 				component : Login
		// 			},
		// 			{
		// 				path : `/auth/register`,
		// 				exact : false,
		// 				component : SignUp
		// 			},
		// 			{
		// 				path : `/auth/forgotpass`,
		// 				exact : false,
		// 				component : Forgotpass
		// 			},
					
		// 		]
		// 	},
			// {
			// 	path : `/success`,
			// 	exact : false,
			// 	component : Home
			// },
		// 	{
		// 		path : `/signUpSuccess`,
		// 		exact : false,
		// 		component : SignUpSuccess
		// 	},
		// 	{
		// 		path : `/joinchurch`,
		// 		exact : true,
		// 		component : JoinChurch
		// 	},
		// 	{
		// 		path : `/enrollchurch`,
		// 		exact : true,
		// 		component : EnrollChurch
		// 	},
		// 	{
		// 		path : `/churchregistration`,
		// 		exact : true,
		// 		component : ChurchRegistration
		// 	},
		// 	// {
		// 	// 	path : `/chooseplan`,
		// 	// 	exact : true,
		// 	// 	component : ChoosePlan
		// 	// },
		// 	{
		// 		path : `/choosepayment`,
		// 		exact : true,
		// 		component : ChurchPayment
		// 	},
		// 	{
		// 		path : `/Notification`,
		// 		exact : false,
		// 		component : Notify
		// 	},
		// 	{
		// 		path : `/searchuser`,
		// 		exact : true,
		// 		component : SearchUser
		// 	},
		// 	{
		// 		path : `/paymentsuccess`,
		// 		exact : true,
		// 		component : PaymentSuccess
		// 	},
		// 	{
		// 		path : `/givingpaymentuser`,
		// 		exact : true,
		// 		component : GivingPaymentUser
		// 	},
		// 	{
		// 		path : `/dashboard`,
		// 		exact : false,
		// 		component : Dashboard,
		// 		routes : [
		// 			{
		// 				path : `/dashboard`,
		// 				exact : true,
		// 				component : Bulletin
		// 			},
		// 			{
		// 				path : `/dashboard/profilesetting`,
		// 				exact : false,
		// 				component : ProfileSetting
		// 			},
		// 			{
		// 				path : `/dashboard/admininvite`,
		// 				exact : false,
		// 				component : AdminInvite
		// 			},
		// 			{
		// 				path : `/dashboard/Notification`,
		// 				exact : false,
		// 				component : Notify
		// 			},
		// 			{
		// 				path : `/dashboard/givinguser`,
		// 				exact : true,
		// 				component : GivingUser
		// 			},
		// 			{
		// 				path : `/dashboard/givinguserform`,
		// 				exact : true,
		// 				component : GivingUserForm
		// 			},
		// 			{
		// 				path : `/dashboard/givingchatuser`,
		// 				exact : true,
		// 				component : GivingChatUser
		// 			},
		// 			{
		// 				path : `/dashboard/givingmember`,
		// 				exact : true,
		// 				component : GivingMember
		// 			},
		// 			{
		// 				path : `/dashboard/churchsetting`,
		// 				exact : true,
		// 				component : ChurchSetting
		// 			},
		// 			{
		// 				path : `/dashboard/searchuserprofile`,
		// 				exact : true,
		// 				component : SearchUserProfile
		// 			},
		// 			{
		// 				path : `/dashboard/searchchurchprofile`,
		// 				exact : true,
		// 				component: ChurchProfile
		// 			},
		// 			{
		// 				path : `/dashboard/searchuser`,
		// 				exact : true,
		// 				component : SearchUser
		// 			},
		// 			{
		// 				path: `/dashboard/users/:user_id`,
		// 				exact: false,
		// 				component: SearchUserProfile
		// 			},
		// 			{
		// 				path: `/dashboard/church/:church_id`,
		// 				exact: false,
		// 				component: ChurchProfile
		// 			},
		// 			{
		// 				path : `/dashboard/members`,
		// 				exact : true,
		// 				component : Member
		// 			},
		// 			{
		// 				path : `/dashboard/journal`,
		// 				exact : true,
		// 				component : Prayer
		// 			},
		// 			{
		// 				path : `/dashboard/journal/bible`,
		// 				exact : true,
		// 				component : Bible
		// 			},
		// 			{
		// 				path : `/dashboard/journaladmin`,
		// 				exact : true,
		// 				component : NewPrayerRequest
		// 			},
		// 			{
		// 				path : `/dashboard/journaladmin/approvedprayer`,
		// 				exact : true,
		// 				component : ApprovedPrayer
		// 			}
				]
		// 	}
		// ]
	}
]

export default Routes;