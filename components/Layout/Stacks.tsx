/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
	FigCaptionWakatime,
	HrefWakatime,
	PresentationTechStack
} from '../Pages/MainPage/style';

export const Stacks = () => {
	return (
		<PresentationTechStack>
			<figure>
				<embed
					src="https://wakatime.com/share/@andrecrjr/29574158-3659-45c0-940a-31526e8cb307.svg"
					className="wakatime-svg"
				></embed>
				<FigCaptionWakatime className="wakatime-svg">
					My Coding Year by{' '}
					<a href="https://wakatime.com/@andrecrjr" target="_blank">
						Wakatime
					</a>
				</FigCaptionWakatime>
				<HrefWakatime href="https://wakatime.com/@b64f37e5-c596-4278-bf05-2865d885d1ab">
					<img
						src="https://wakatime.com/badge/user/b64f37e5-c596-4278-bf05-2865d885d1ab.svg"
						alt="Total time coded since Dec 14 2022"
					/>
				</HrefWakatime>
			</figure>
		</PresentationTechStack>
	);
};
