import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import Snack from './Snack';
import {connect} from 'react-redux';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    rowHead: {
        borderRight: "1px solid #0002",
        fontWeight: '600',
    },
    row: {
        borderRight: "1px solid #0002",
        fontWeight: '200',
    },
});

const SnackTable = ({order}) => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="snack table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center' className={classes.rowHead}></TableCell>
                        <TableCell align='center' className={classes.rowHead}>Snack</TableCell>
                        <TableCell align='center' className={classes.rowHead}>Brand</TableCell>
                        <TableCell align='center' className={classes.rowHead}>Unit of Measure</TableCell>
                        <TableCell align='center' className={classes.rowHead}>Quantity</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {order.map(snack => {
                        return (<Snack key={snack.id} {...snack} />);
                    })}
                </TableBody>

            </Table>
        </Paper>
    );
};

const mapStateToProps = state =>{
    return{
        order: state.dashboardReducer.order,
    };
};


export default connect(mapStateToProps, {})(SnackTable);