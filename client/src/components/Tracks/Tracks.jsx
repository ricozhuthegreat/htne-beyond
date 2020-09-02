import React from "react";

import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom Components
import TrackCard from "./TrackCard";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "5vh",
		marginBottom: "35vh",
	},

	trackBackgroundSvgs: {
		position: "absolute",
		zIndex: -1,
		left: 0,
		width: "100%",
	},

	tracksTitle: {
		paddingTop: "15vh",
	},

	cardGrid: {
		marginTop: "5%",
	},
}));

export default function Tracks() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img
				src={require("../../images/TracksSvgs/TrackCurves.svg")}
				alt="Track background curves"
				className={classes.trackBackgroundSvgs}
			/>

			<Typography variant="h3" className={classes.tracksTitle} align="center">
				<Box fontStyle="bold" m={1}>
					Tracks
				</Box>
			</Typography>

			<Grid container className={classes.cardGrid}>
				<Grid item sm={2} />
				<Grid item container xs={12} sm={8} spacing={4}>
					<Grid item xs={4}>
						<TrackCard
							trackName={"Track 1"}
							trackSummary={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae orci efficitur, pellentesque massa et, placerat eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nulla in neque dignissim convallis sit amet nec felis."
							}
						/>
					</Grid>
					<Grid item xs={4}>
						<TrackCard
							trackName={"Track 2"}
							trackSummary={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae orci efficitur, pellentesque massa et, placerat eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nulla in neque dignissim convallis sit amet nec felis."
							}
						/>
					</Grid>
					<Grid item xs={4}>
						<TrackCard
							trackName={"Track 3"}
							trackSummary={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae orci efficitur, pellentesque massa et, placerat eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nulla in neque dignissim convallis sit amet nec felis."
							}
						/>
					</Grid>
				</Grid>
				<Grid sm={2} />
			</Grid>
			{/* <Typography variant="h3">Tracks</Typography>
			<Grid container justify="space-around">
				<Grid item xs={2} />
				<Grid item container xs={8} spacing={4}>
					<Grid item xs={12} sm={4}>
						<TrackCard
							trackName={"placeholder"}
							trackDescription={
								"Lorem ipsum dolor sit amet, consecteteur adipiscing elit."
							}
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TrackCard
							trackName={"placeholder"}
							trackDescription={
								"Lorem ipsum dolor sit amet, consecteteur adipiscing elit."
							}
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TrackCard
							trackName={"placeholder"}
							trackDescription={
								"Lorem ipsum dolor sit amet, consecteteur adipiscing elit."
							}
						/>
					</Grid>
				</Grid>
				<Grid item xs={2} />
			</Grid> */}
		</div>
	);
}