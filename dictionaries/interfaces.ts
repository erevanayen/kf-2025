export interface Dictionary {
	welcome: string;
	description: string;
	date: string;
	location: {
		village: string;
		country: string;
	};
	heroPhoto: {
		rider: string;
		photoBy: string;
	};
	info: string;
	follow: string;
	sponsors: string;
	videos: string;
	organisation: {
		title: string;
		schedule: {
			title: string;
			rego: string;
			sunday: string;
			saturday: string;
			saturdayStart: string;
			saturdayEnd: string;
			sundayStart: string;
			sundayEnd: string;
			lunch: string;
			competition: string;
			seeMore: string;
		},
		location: {
			title: string;
			desc1: string;
			here: string;
		};
		camp: {
			title: string;
			desc1: string;
			showers: string;
		};
		parking: {
			title: string;
			desc1: string;
		};
		food: {
			title: string;
			desc1: string;
			desc2: string;
			desc3: string;
			desc4: string;
			desc5: string;
			here: string;
		};
	};
	whatYouNeed: {
		title: string;
		mandatory: {
			title: string;
			helmet: string;
			gloves: string;
			signed: string;
			documents: string;
		};
		optional: {
			title: string;
			skateboard: string;
			protection: string;
		};
	};
	documents: {
		title: string;
		desc1: string;
		desc2: string;
		desc3: string;
		desc4: string;
		desc5: string;
		safetyAdult: string;
		safetyMinor: string;
		gdprAdult: string;
		gdprMinor: string;
		gdprGuidelines: string;
		guidelines: string;
	};
	buyTickets: string;
}
