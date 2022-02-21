import React from "react";
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";

type CounterType = {
    incrementCounter: () => void
    resetCounterHandler: () => void
    count: number
    value: number
    maxValue: number
    startValue: number
    value2: number
}
const setCounterStyle = makeStyles(theme => ({
    palette: {

    },
    paper: {
        backgroundColor: "#ecdcd3",
        padding: theme.spacing(2),
        textAlign:"center",
        minWidth: "200px",
        height: "120px"
    },
    screen: {
        color: "secondary",
        height: "80px",
        fontWeight: "bold"
    },
    screen2: {
        height: "80px",
        color: "secondary",

        fontWeight: "bold"
    },
    textError: {
        fontWeight: "bold",
        height: "72px",
        fontSize: "24px",
    },
    messageScreen: {
        fontWeight: "bold",
        height: "72px",
        fontSize: "24px",
    }
}))


export const Counter: React.FC<CounterType> = (props) => {
    const classes = setCounterStyle()
    const infoScreen = () => {
        if (props.maxValue === props.value && props.startValue === props.value2) {
            return props.count
        } else if (props.maxValue < 0 || props.startValue < 0 || props.maxValue <= props.startValue) {
            return <Typography color={"error"}  className={classes.textError}>Incorrect value</Typography>
        } else {
            return <Typography color={"primary"} className={classes.messageScreen}>Enter values<br/> and press 'set'</Typography>
        }
    }
    const error = props.count === props.value
    return (

            <Paper elevation={8} className={classes.paper}>
                <Typography
                    variant={"h2"}
                    color={error? "error": "primary"}
                align={"center"}>
                    {infoScreen()}
                </Typography>
                <Grid container justifyContent={"space-evenly"}>
                    <Button size={"small"}
                            onClick={props.incrementCounter}
                            variant="contained" color="secondary"
                            disabled={props.count === props.value}>INCR</Button>
                    <Button size={"small"}
                            onClick={props.resetCounterHandler}
                            variant="contained" color="secondary"
                            disabled={props.count === props.startValue}>RESET</Button>
                </Grid>
                </Paper>



    )
}
