import React, {ChangeEvent, useEffect, useState} from 'react';
import {Counter} from "./components/counter/Counter"
import {SetCounter} from "./components/set_counter/SetCounter";
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: '0 auto',
        height: "500px"
    },
})


function App() {
    const classes = useStyles();
    //SetCounter
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [value, setValue] = useState<number>(0)
    const [value2, setValue2] = useState<number>(0)

// Get from LocalStorage

    useEffect(() => {
        //Get Max Value
        let maxVal = localStorage.getItem("maxValue") || []
        if (typeof maxVal === "string") {
            setMaxValue(JSON.parse(maxVal))
        }

        //Get Start Value
        let startVal = localStorage.getItem("startValue")
        if (startVal) {
            let newStart = JSON.parse(startVal)
            setStartValue(newStart)
        }
    }, [])


// Set from LocalStorage


    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [maxValue])
    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
    }, [startValue])


    const onChangeSetMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Math.round(e.currentTarget.valueAsNumber))
        console.log(e.currentTarget.value)

    }
    const onChangeSetStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Math.round(e.currentTarget.valueAsNumber))
        console.log(e.currentTarget.value)
    }
    const onClickSetHandler = () => {
        setValue(maxValue)
        setCount(startValue)
        setValue2(startValue)
    }


    //Counter

    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        console.log("max" + value)
        console.log("start(count)" + count)
        console.log("start" + startValue)
        console.log("start(2)" + value2)

        setCount(count + 1)
    };
    const resetCounterHandler = () => {
        setCount(startValue)
    }



    return (
            <Grid className={classes.root}

                container
                  spacing={2}
                  justifyContent={"center"}
                  alignItems={"center"}>
                <Grid item xl={3}>
                    <SetCounter
                        value2={value2}
                        count={count}
                        value={value}
                        maxValue={maxValue}
                        startValue={startValue}
                        onChangeSetMax={onChangeSetMax}
                        onChangeSetStart={onChangeSetStart}
                        onClickSetHandler={onClickSetHandler}
                    />
                </Grid>
                <Grid item xl={3}>
                    <Counter
                        value2={value2}
                        startValue={startValue}
                        maxValue={maxValue}
                        value={value}
                        count={count}
                        incrementCounter={incrementCounter}
                        resetCounterHandler={resetCounterHandler}
                    />
                </Grid>
            </Grid>
    );
}

export default App;
