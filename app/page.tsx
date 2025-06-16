"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import type { Dictionary } from "../dictionaries/interfaces";

const dictionaries = {
	en: () => import("../dictionaries/en.json").then((module) => module.default),
	cs: () => import("../dictionaries/cs.json").then((module) => module.default),
};

const buyTicketsUrl = {
	en: "https://goout.net/en/kysuce-freeride-2025/szwdgux/",
	cs: "https://goout.net/sk/kysuce-freeride-2025/szwdgux/",
};

const languageNames = {
	en: "English",
	cs: "Čeština",
};

export default function Home() {
	const [locale, setLocale] = useState<keyof typeof dictionaries>("en");
	const [dictionary, setDictionary] = useState<Dictionary | null>(null);

	useEffect(() => {
		const loadDictionary = async () => {
			const loadedDictionary = await dictionaries[locale]();
			setDictionary(loadedDictionary);
		};
		loadDictionary();
	}, [locale]);

	const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedLocale = event.target.value as keyof typeof dictionaries;
		setLocale(selectedLocale);
	};

	if (!dictionary) return null;

	return (
		<>
			<div className={styles.languageSelector}>
				<select
					value={locale}
					onChange={handleLocaleChange}
					className={styles.select}
				>
					{Object.entries(languageNames).map(([code, name]) => (
						<option key={code} value={code}>
							{name}
						</option>
					))}
				</select>
			</div>
			<div className={styles.container}>
				<div className={styles.heroContainer}>
					<div className={styles.heroSection}>
						<Image
							src="/hero-left.svg"
							alt="Downhill Skateboarding 1"
							width={1720}
							height={650}
							className={styles.heroSideImage}
						/>
						<Image
							src="/hero-center.svg"
							alt="kysuce downhill logo"
							width={900}
							height={650}
							className={styles.heroCenterImage}
						/>
						<Image
							src="/hero-right.svg"
							alt="Downhill Skateboarding 3"
							width={1720}
							height={650}
							className={styles.heroSideImage}
						/>
					</div>
					<div
						className={`${styles.heroText} ${styles.uniformWidth} ${styles.text1}`}
					>
						<div>{dictionary.date}</div>
						<div>{dictionary.location.village}</div>
						<div>{dictionary.location.country}</div>
					</div>
				</div>

				<div className={`${styles.heroContainer}`}>
					<div className={`${styles.uniformWidth}`}>
						<div className={`${styles.buyTickets} ${styles.text1}`}>
							{dictionary.thanks.title}
						</div>
						<div className={`${styles.text2} ${styles.mT}`}>
							{dictionary.thanks.desc1}
						</div>
						<div className={styles.text3}>{dictionary.thanks.desc2}</div>
						<div className={`${styles.text2} ${styles.mT}`}>
							{"_"}
							{dictionary.follow}
							{": "}
							<Link
								href="https://www.instagram.com/kysucedownhill/"
								target="_blank"
								className={styles.riderLink}
							>
								instagram
							</Link>
						</div>
					</div>
				</div>

				<div className={`${styles.sponsorsContainer}`}>
					<div
						className={`${styles.sponsorsText} ${styles.uniformWidth} ${styles.text2} ${styles.mT} ${styles.textRed}`}
					>
						{"_"}
						{dictionary.sponsors}
						{":"}
					</div>
					<div
						className={`${styles.sponsorsImageContainer} ${styles.uniformWidth}`}
					>
						<Link
							href="https://www.instagram.com/happy_board_co/"
							target="_blank"
						>
							<Image
								src="/sponsor-happy.png"
								alt="Sponsor Happy Board co."
								width={510}
								height={168}
								className={styles.sponsorsImage}
							/>
						</Link>
						<Link href="https://rocketlongboards.ch/" target="_blank">
							<Image
								src="/sponsor-rocket.png"
								alt="Sponsor Rocket Longboards"
								width={510}
								height={168}
								className={styles.sponsorsImage}
							/>
						</Link>
						<Link href="https://www.sickboards.nl/" target="_blank">
							<Image
								src="/sponsor-sick.png"
								alt="Sponsor Sick Boards"
								width={510}
								height={168}
								className={styles.sponsorsImage}
							/>
						</Link>
						<Link href="https://www.instagram.com/_skatetech_/" target="_blank">
							<Image
								src="/sponsor-skatetech.png"
								alt="Sponsor Skatetech"
								width={510}
								height={168}
								className={styles.sponsorsImage}
							/>
						</Link>
						<Link href="https://www.urethaneburners.com/" target="_blank">
							<Image
								src="/sponsor-ub.png"
								alt="Sponsor Urethane Burners"
								width={510}
								height={168}
								className={styles.sponsorsImage}
							/>
						</Link>
						<Link href="https://www.svrcinovec.sk/" target="_blank">
							<Image
								src="/sponsor-svrcinovec.png"
								alt="Sponsor Svrčinovec"
								width={510}
								height={168}
								className={styles.sponsorsImage}
							/>
						</Link>
						<Link href="https://www.mestocadca.sk/" target="_blank">
							<Image
								src="/sponsor-cadca.png"
								alt="Sponsor Mesto Čadca"
								width={510}
								height={168}
								className={styles.sponsorsImage}
							/>
						</Link>
						<Link href="https://ndsas.sk/" target="_blank">
							<Image
								src="/sponsor-nds.png"
								alt="Sponsor NDSAS"
								width={510}
								height={168}
								className={styles.sponsorsImage}
							/>
						</Link>
						<Link href="https://www.ssc.sk/" target="_blank">
							<Image
								src="/sponsor-ssc.png"
								alt="Sponsor SSC"
								width={510}
								height={168}
								className={styles.sponsorsImage}
							/>
						</Link>
					</div>
				</div>
				<div className={styles.videosContainer}>
					<div
						className={`${styles.videosText} ${styles.uniformWidth} ${styles.text2}`}
					>
						{"_"}
						{dictionary.videos}
						{":"}
					</div>
					<div
						className={`${styles.videosEmbedContainer} ${styles.uniformWidth}`}
					>
						<div>
							<div className={`${styles.videoYearTitle} ${styles.text2}`}>
								{"_2024"}
							</div>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/AYt0bBpkLHU"
								title="Kysuce Freeride 2024"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<div>
							<div className={`${styles.videoYearTitle} ${styles.text2}`}>
								{"_2023"}
							</div>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/757oHJKKOeA"
								title="Kysuce Freeride 2023"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
				<div className={styles.riderImageContainer}>
					<Image
						src="/rider-image.jpg"
						alt="Rider"
						width={1920}
						height={1360}
						className={styles.riderImage}
					/>
					<div className={styles.riderText}>
						<div className={styles.riderTextContent}>
							{dictionary.heroPhoto.rider}{" "}
							<Link
								href="https://www.instagram.com/janrys212/"
								target="_blank"
								className={styles.riderLink}
							>
								Jan Ryšavý
							</Link>
						</div>
						<div className={styles.riderTextContent}>
							{dictionary.heroPhoto.photoBy}{" "}
							<Link
								href="https://www.instagram.com/jsemvandrak/"
								target="_blank"
								className={styles.riderLink}
							>
								Honza Dobiášovský
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.content} />
			</div>
		</>
	);
}
