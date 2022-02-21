import React, {ChangeEvent} from "react";
import clsx from "clsx";
import {Button, Grid, makeStyles, Paper, TextField} from "@material-ui/core";


type SetCounterType = {
    value2: number
    count: number
    value: number
    maxValue: number
    startValue: number
    onChangeSetMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeSetStart: (e: ChangeEvent<HTMLInputElement>) => void
    onClickSetHandler: () => void
}



const setCounterStyle = makeStyles(theme => ({
    paper: {
        backgroundColor: "#f9f3f6",
        padding: theme.spacing(2),
        textAlign: "center",
        minWidth: "200px",
        height: "120px"
    },
    margin: {
        margin: "2px"
    },
    textField: {
        width: '18ch',
    }
}))


export const SetCounter: React.FC<SetCounterType> = (props) => {
    const classes = setCounterStyle()
    const disabledSetButton = () => {
        return props.startValue < 0
            || props.maxValue <= props.startValue
            // eslint-disable-next-line no-mixed-operators
            || props.maxValue === props.value
            // eslint-disable-next-line no-mixed-operators
            && props.startValue === props.value2
    }
    const errorInput = () => props.startValue < 0 || props.maxValue <= props.startValue
    return (
        <Paper  elevation={8}
               className={classes.paper}>
            <Grid container
                  direction={"column"}
                  alignItems={"center"}>
                <TextField
                    label={"Max value"}
                    size={"small"}
                    error={errorInput()}
                    type={"number"}
                    color={"secondary"}
                    value={props.maxValue}
                    onChange={props.onChangeSetMax}
                    className={clsx(classes.margin, classes.textField)}/>
                <TextField
                    label={"Start value"}
                    size={"small"}
                    color={"secondary"}
                    error={errorInput()}
                    type={"number"}
                    value={props.startValue}
                    onChange={props.onChangeSetStart}
                    className={clsx(classes.margin, classes.textField)}/>
                <Button size={"small"}
                        onClick={props.onClickSetHandler}
                        variant="contained" color="secondary"
                        disabled={disabledSetButton()} className={classes.margin}>SET</Button>
            </Grid>
        </Paper>


    )
}
